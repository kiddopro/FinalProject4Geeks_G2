"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Producto, Carrito, Venta, Detalle_Venta
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity
import json


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/login',methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user1=Usuario.query.filter_by(email=email)
    
    if not email or not password :
        return jsonify({"msg": "Bad email or password"}), 401

    token = create_access_token(identity=email)
    return jsonify(token=token)  

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.    

# Endpoints --- Usuarios   
#--------------------------------------------
@api.route('/usuarios', methods=['GET'])
def get_all_users():

    usuarios=Usuario.query.all()
    usuarios = list(map(lambda usuario: usuario.serialize(), usuarios ))
    if not usuarios:
        return jsonify("no se encontraron usuarios"),404
        
    return jsonify(usuarios), 200

@api.route('/usuarios/<int:id>', methods=['GET'])
def get_usuario(id):

    usuario=Usuario.query.get(id)
    if usuario != None:
        usuario=usuario.serialize()
    
    
    if not usuario:
        return jsonify("no se encontro al usuario"),404
    else:    
        return jsonify(usuario), 200 


@api.route('/usuarios', methods=['POST'])
def add_user():
    # primero leo lo que viene en el body
    body_us=json.loads(request.data)
    #print (body_us)
    usuario=Usuario(nombre=body_us['nombre'],email=body_us['email'],password=body_us['password'],is_active=body_us['is_active'],direccion=body_us['direccion'],telefono=body_us['telefono'],documento=body_us['documento'],fecha_nac=body_us['fecha_nac'])
    db.session.add(usuario)               
    db.session.commit()  
    usuarios=Usuario.query.all()
    usuarios = list(map(lambda usuario: usuario.serialize(), usuarios ))
    if not usuarios:
        return jsonify("no se encontraron usuarios"),404
        
    return jsonify(usuarios), 200

@api.route('/usuarios/<int:id>', methods=['PUT'])
def update_usuario(id):
    body=json.loads(request.data)
    usuario=Usuario.query.get(id)
    if usuario is None:
        raise APIException('Usuario no encontrado',status_code=404)
    if "nombre" in body:
        usuario.nombre=body['nombre']
    if "email" in body:
        usuario.email=body['email']  
    if "password" in body:
        usuario.password=body['password']
    if "is_active" in body:
        usuario.is_active=body['is_active'] 
    if "direccion" in body:
        usuario.direccion=body['direccion']    
    if "telefono" in body:
        usuario.telefono=body['telefono']    
    if "documento" in body:
        usuario.documento=body['documento']
    if "fecha_nac" in body:
        usuario.fecha_nac=body['fecha_nac']                     
    db.session.commit()
    usuarios=Usuario.query.all()
    usuarios = list(map(lambda usu: usu.serialize(), usuarios ))
    if not usuarios:
        return jsonify("no se encontraron usuarios"),404
        
    return jsonify(usuarios), 200  

@api.route('/usuarios/<int:id>', methods=['DELETE'])
def delete_usuario(id):
    
    usuario=Usuario.query.get(id)
    if usuario is None:
       raise APIException('Usuario no encontrado',status_code=404)
    db.session.delete(usuario)                
    db.session.commit()
    usuarios=Usuario.query.all()
    usuarios = list(map(lambda usu: usu.serialize(), usuarios ))
    if not usuarios:
       return jsonify("no se encontraron usuarios"),404
        
    return jsonify(usuarios), 200  

# Endpoints --- Productos   
#--------------------------------------------
@api.route('/productos', methods=['GET'])
def get_all_productos():

    productos=Producto.query.all()
    productos = list(map(lambda producto: producto.serialize(), productos ))
    if not producto:
        return jsonify("no se encontraron productos"),404
        
    return jsonify(productos), 200

@api.route('/productos/<int:id>', methods=['GET'])
def get_producto(id):

    producto=Producto.query.get(id)
    if producto != None:
        producto=producto.serialize()
    
    
    if not producto:
        return jsonify("no se encontro al producto"),404
    else:    
        return jsonify(producto), 200 


@api.route('/productos', methods=['POST'])
def add_producto():
    # primero leo lo que viene en el body
    body_us=json.loads(request.data)
    #print (body_us)
    producto=Producto(nombre=body_us['nombre'],marca=body_us['marca'],precio=body_us['precio'],imagen=body_us['imagen'],descripcion=body_us['descripcion'])
    db.session.add(producto)               
    db.session.commit()  
    productos=Producto.query.all()
    productos = list(map(lambda producto: producto.serialize(), productos ))
    if not productos:
        return jsonify("no se encontraron productos"),404
        
    return jsonify(productos), 200

@api.route('/productos/<int:id>', methods=['PUT'])
def update_producto(id):
    body=json.loads(request.data)
    producto=Producto.query.get(id)
    if producto is None:
        raise APIException('Producto no encontrado',status_code=404)
    if "nombre" in body:
        producto.nombre=body['nombre']
    if "marca" in body:
        producto.marca=body['marca']  
    if "precio" in body:
        producto.precio=body['precio']
    if "imagen" in body:
        producto.imagen=body['imagen'] 
    if "descripcion" in body:
        producto.descripcion=body['descripcion']    
                        
    db.session.commit()
    productos=Producto.query.all()
    productos = list(map(lambda prod: prod.serialize(), productos ))
    if not productos:
        return jsonify("no se encontraron productos"),404
        
    return jsonify(productos), 200  

@api.route('/productos/<int:id>', methods=['DELETE'])
def delete_producto(id):
    
    producto=Producto.query.get(id)
    if producto is None:
       raise APIException('Producto no encontrado',status_code=404)
    db.session.delete(producto)                
    db.session.commit()
    productos=Producto.query.all()
    productos = list(map(lambda prod: prod.serialize(), productos ))
    if not productos:
       return jsonify("no se encontraron productos"),404
        
    return jsonify(productos), 200      
