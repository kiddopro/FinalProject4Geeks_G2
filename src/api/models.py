from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    nombre = db.Column(db.String(50),unique=False,nullable=False)
    direccion = db.Column(db.String(100),unique=False, nullable=True)
    telefono = db.Column(db.String(100),unique=False, nullable=True)
    documento = db.Column(db.String(30),unique=False, nullable=True)
    fecha_nac = db.Column(db.DateTime,unique=False,nullable=True)

    def __repr__(self):
        return '<Usuario %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "direccion":self.direccion,
            "telefono":self.telefono,
            "documento":self.docuemnto,
            "fecha_nac":self.fecha_nac,
            "is_active":self.is_active
            # do not serialize the password, its a security breach
        }