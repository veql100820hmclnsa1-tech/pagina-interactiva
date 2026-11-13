from flask import Flask, render_template, request, jsonify, session
import sqlite3, hashlib, secrets, os
from functools import wraps

app = Flask(__name__),template_folder='.')
app.secret_key = os.environ.get("SECRET_KEY", secrets.token_hex(32))

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "reto_educativo.db")

def conectar_db():
    c = sqlite3.connect(DB_PATH)
    c.row_factory = sqlite3.Row
    c.execute("PRAGMA foreign_keys = ON")
    return c

def crear_base_datos():
    with conectar_db() as db:
        db.execute("""CREATE TABLE IF NOT EXISTS estudiantes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL, edad INTEGER NOT NULL,
            ocupacion TEXT NOT NULL, salt TEXT NOT NULL,
            contrasena_hash TEXT NOT NULL,
            fecha_registro TEXT DEFAULT CURRENT_TIMESTAMP)""")
        db.execute("""CREATE TABLE IF NOT EXISTS resultados (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            estudiante_id INTEGER NOT NULL, materia TEXT NOT NULL,
            tema TEXT NOT NULL, nivel TEXT NOT NULL,
            puntaje INTEGER NOT NULL, total INTEGER NOT NULL,
            fecha TEXT DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(estudiante_id) REFERENCES estudiantes(id) ON DELETE CASCADE)""")

def generar_hash(p, s):
    return hashlib.pbkdf2_hmac("sha256", p.encode(), bytes.fromhex(s), 200000).hex()

def requiere_sesion(f):
    @wraps(f)
    def w(*a, **k):
        if "estudiante_id" not in session:
            return jsonify({"ok": False, "mensaje": "Inicia sesión"}), 401
        return f(*a, **k)
    return w

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/api/registro", methods=["POST"])
def registro():
    d = request.get_json(silent=True) or {}
    nombre = str(d.get("nombre","")).strip()
    edad = d.get("edad", 15)
    ocupacion = "Estudiante"
    contrasena = str(d.get("contrasena", d.get("password",""))).strip()
    try: edad = int(edad)
    except: edad = 15
    if not nombre: return jsonify({"ok":False,"mensaje":"Nombre inválido"}),400
    if len(contrasena) < 4: return jsonify({"ok":False,"mensaje":"Contraseña mínimo 4"}),400
    salt = secrets.token_bytes(16).hex()
    clave = generar_hash(contrasena, salt)
    with conectar_db() as db:
        cur = db.execute("INSERT INTO estudiantes (nombre,edad,ocupacion,salt,contrasena_hash) VALUES (?,?,?,?,?)",(nombre,edad,ocupacion,salt,clave))
        eid = cur.lastrowid
    session.clear()
    session["estudiante_id"]=eid
    session["nombre"]=nombre
    return jsonify({"ok":True,"nombre":nombre})

@app.route("/api/login", methods=["POST"])
def login():
    d = request.get_json(silent=True) or {}
    nombre = str(d.get("nombre","")).strip()
    contrasena = str(d.get("contrasena", d.get("password",""))).strip()
    with conectar_db() as db:
        est = db.execute("SELECT * FROM estudiantes WHERE nombre=? COLLATE NOCASE ORDER BY id DESC LIMIT 1",(nombre,)).fetchone()
    if not est: return jsonify({"ok":False,"mensaje":"Usuario o contraseña incorrectos"}),401
    if not secrets.compare_digest(generar_hash(contrasena, est["salt"]), est["contrasena_hash"]):
        return jsonify({"ok":False,"mensaje":"Usuario o contraseña incorrectos"}),401
    session.clear()
    session["estudiante_id"]=est["id"]
    session["nombre"]=est["nombre"]
    return jsonify({"ok":True,"nombre":est["nombre"]})

@app.route("/api/sesion")
@requiere_sesion
def sesion_actual():
    return jsonify({"ok":True,"nombre":session["nombre"]})

@app.route("/api/resultados", methods=["POST"])
@requiere_sesion
def guardar_resultado():
    d = request.get_json(silent=True) or {}
    with conectar_db() as db:
        db.execute("INSERT INTO resultados (estudiante_id,materia,tema,nivel,puntaje,total) VALUES (?,?,?,?,?,?)",(session["estudiante_id"], d.get("materia"), d.get("tema"), d.get("nivel"), int(d.get("puntaje")), int(d.get("total"))))
    return jsonify({"ok":True})

@app.route("/api/avance")
@requiere_sesion
def avance():
    with conectar_db() as db:
        filas = db.execute("SELECT * FROM resultados WHERE estudiante_id=? ORDER BY id DESC",(session["estudiante_id"],)).fetchall()
    return jsonify({"ok":True,"resultados":[dict(f) for f in filas]})

@app.route("/api/logout", methods=["POST"])
def logout():
    session.clear()
    return jsonify({"ok":True})

crear_base_datos()
if __name__ == "__main__":
    app.run(debug=True)
