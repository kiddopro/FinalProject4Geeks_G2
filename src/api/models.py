from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()



class Producto(db.Model):
    __tablename__='producto'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    marca = db.Column(db.String(80), unique=False, nullable=False)
    precio = db.Column(db.Float, unique=False, nullable=False)
    imagen = db.Column(db.String(200),unique=False,nullable=False)
    descripcion = db.Column(db.String(100),unique=False, nullable=False)
    usuarios = db.relationship('Carrito', backref='producto', lazy=True)

    def __repr__(self):
        return '<Producto %r >' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "marca":self.marca,
            "precio":self.precio,
            "imagen":self.imagen,
            "descripcion":self.descripcion
        }

class Usuario(db.Model):
    __tablename__='usuario'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    nombre = db.Column(db.String(50),unique=False,nullable=False)
    direccion = db.Column(db.String(100),unique=False, nullable=True)
    telefono = db.Column(db.String(100),unique=False, nullable=True)
    documento = db.Column(db.String(30),unique=False, nullable=True)
    fecha_nac = db.Column(db.DateTime,unique=False,nullable=True)
    productos = db.relationship('Carrito', backref='usuario', lazy=True)

    def __repr__(self):
        return '<Usuario %r >' % self.nombre

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

class Carrito(db.Model):
    __tablename__='carrito'
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))
    prod_id = db.Column(db.Integer, db.ForeignKey('producto.id'))
    cantidad = db.Column(db.Integer, unique=False, nullable=False)
    

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "prod_id": self.prod_id,
            "cantidad": self.cantidad
        }        

class Venta(db.Model):
    __tablename__='venta'
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))
    fecha = db.Column(db.DateTime, unique=False, nullable=False)
    
    

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "fecha": self.fecha
        }                

class Detalle_Venta(db.Model):
    __tablename__='detalle_venta'
    id = db.Column(db.Integer, primary_key=True)
    venta_id = db.Column(db.Integer, db.ForeignKey('venta.id'))
    prod_id = db.Column(db.Integer, db.ForeignKey('producto.id'))
    cantidad = db.Column(db.Integer, unique=False, nullable=False)
    
    

    def serialize(self):
        return {
            "id": self.id,
            "venta_id": self.venta_id,
            "prod_id":self.prod_id,
            "cantidad": self.cantidad
        }                        