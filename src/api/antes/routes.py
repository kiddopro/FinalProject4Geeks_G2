"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os

from flask import Flask, request, jsonify, url_for, Blueprint,current_app
from api.models import db, Usuario, Producto, Carrito, Venta, Detalle_Venta
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity
import json
from flask_mail import Message
import random #importamos ramdom y string para generar una clave aleatoria nueva
import string
import mercadopago


# importación para crear token
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required




api = Blueprint('api', __name__)

#agregando las credenciales MP

sdk = mercadopago.SDK(os.environ.get("MP_AT"))



# url_aux=os.environ.get("BACKEND_URL")+"/restore_password"
# url_restore=url_aux.replace("1","0")
# #print(url_restore[11])
# #print(url_restore)
# cmail=os.environ.get("MAIL_APP")

#RECUPERACION CONTRASEÑA OLVIDADA 
@api.route("/forgot_password", methods=["POST"])
def forgotpassword():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8)) #clave aleatoria nueva
   
    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401

	#busco si el correo existe en mi base de datos
    user = Usuario.query.filter_by(email=recover_email).first()
    if recover_email != user.email:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400

    #si existe guardo la nueva contraseña aleatoria
    user.password = recover_password
    db.session.commit()
	#luego se la envio al usuario por correo para que pueda ingresar
    msg = Message("Hi", recipients=[recover_email])
    msg.html = f"""<h1>Su nueva contraseña es: {recover_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


# Esto es solo para hacer una prueba
@api.route("/test", methods=['GET'])
def index():

    msg = Message("Prueba de correo desde el proyecto",
                  sender=cmail,
                  recipients=["martin.suarez.personal@gmail.com"])
    msg.html=f'<h3> Envio de Token para crear nueva contrase </h3>'
    current_app.mail.send(msg)
    return jsonify('Se ha enviado un correo'),200


@api.route("/pago",methods=['POST'])
def pago():
    print("Esto es solo una prueba de pago")
    # Crea un ítem en la preferencia
    body=request.get_json()
    print(body)
    preference_data = {
        "items": body
    }
    # del front llega arreglo de objetos
    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]
    return jsonify(preference),200

@api.route('/login',methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user1=Usuario.query.filter_by(email=email, password=password).first()
    
    print("usuario buscado",user1)
    if not user1:
    #if user1 == None :
        return jsonify({"msg": "Bad email or password"}), 401
    #if not email or not password :
    #    return jsonify({"msg": "Bad email or password"}), 401

    token = create_access_token(identity=email)
    return jsonify(token=token)  
# Perdida de contraseña - su tratamiento

# @api.route('/forgot_password',methods=['POST'])

# def perdida_contra():
#     email = request.json.get("email", None)
#     user1=Usuario.query.filter_by(email=email).first()
    
#     print("usuario buscado",user1)
#     if not user1:
#         return jsonify({"msg": "email no encontrado "}), 401
    

#     token = create_access_token(identity=email)
#     msg = Message("Generacion de nueva contraseña",
#                   sender="Tecnoferta.uy@gmail.com",
#                   recipients=[email])
#     msg.html=f'<h3> Envio de Token para crear nueva contraseña </h3><p>{token}</p><br><p> debe ingresar en la siguiente url:</p><p>'+os.environ.get("FRONTEND_URL")+ '/restore_password</p>'
    
#     current_app.mail.send(msg)
#     return jsonify('Se ha enviado un correo'),200

# Gestion de cambio de contraseña
@api.route('/restore_password',methods=['PUT'])
@jwt_required()
def modifica_contra():
    body=json.loads(request.data)
    identidad = get_jwt_identity()
    user1=Usuario.query.filter_by(email=identidad).first()
    if user1 is None:
        raise APIException('Usuario no encontrado',status_code=404)
     
    if "password" in body:
        user1.password=body['password']
                        
    db.session.commit()
    
    return jsonify('Se ha modificado la contraseña en forma correcta'),200
         
# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.    

# Endpoints --- Usuarios   
#--------------------------------------------    

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
    try:
        usuario=Usuario(nombre=body_us['nombre'],email=body_us['email'],password=body_us['password'],is_active=body_us['is_active'],direccion=body_us['direccion'],telefono=body_us['telefono'],documento=body_us['documento'],fecha_nac=body_us['fecha_nac'])
        db.session.add(usuario)               
        db.session.commit() 
    except: 
        return jsonify("No se pudo crear el usuario"),404
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
    if not productos:
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
    producto=Producto(nombre=body_us['nombre'],marca=body_us['marca'],precio=body_us['precio'],imagen=body_us['imagen'],descripcion=body_us['descripcion'],categoria=body_us['categoria'])
    db.session.add(producto)               
    db.session.commit()  
    productos=Producto.query.all()
    productos = list(map(lambda producto: producto.serialize(), productos ))
    if not productos:
        return jsonify("no se encontraron productos"),404
        
    return jsonify(productos), 200



@api.route('/productos/<int:id>', methods=['GET'])
def gett_producto():
    # primero leo lo que viene en el body
    body_us=json.loads(request.data)
    producto=Producto.query.get(body_us['id'])
    if producto != None:
        producto=producto.serialize()
    
    
    if not producto:
        return jsonify("no se encontro el producto"),404
    else:    
        return jsonify(producto), 200 



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

#-----------------------------------------------
# EndPoints de Carrito
# ----------------------------------------------   
@api.route('/carritos', methods=['POST'])
def add_carrito():
    # primero leo lo que viene en el body
    body=json.loads(request.data)
    #print (body_fav)
    esta1=False
    esta2=False
    if "prod_id" in body:
        producto=Producto.query.get(body['prod_id'])
        if producto is None:
            raise APIException('Producto no encontrado',status_code=404)
        else:
            esta1=True
    if "usuario_id" in body:    
        usuario=Usuario.query.get(body['usuario_id'])
        if usuario is None:
            raise APIException('Usuario no encontrado',status_code=404)
        else:
            esta2=True    
    esta=esta1 and esta2
    if esta:        
        carrito=Carrito(usuario_id=body['usuario_id'],prod_id=body['prod_id'],cantidad=body['cantidad'])
        db.session.add(carrito)               
        db.session.commit()
    
    carritos=Carrito.query.all()
    carritos = list(map(lambda carr: carr.serialize(), carritos ))
    if not carritos:
        return jsonify("El carrito de compras esta vacio"),404
        
    return jsonify(carritos), 200



@api.route('/carritos/<int:id>', methods=['PUT'])
def update_carrito(id):
    body=json.loads(request.data)
    carrito=Carrito.query.get(id)
    if carrito is None:
        raise APIException('Carrito no encontrado',status_code=404)
    if "usuario_id" in body:
        carrito.usuario_id=body['usuario_id']
    if "prod_id" in body:
        carrito.prod_id=body['prod_id']  
    if "cantidad" in body:
        carrito.cantidad=body['cantidad']
      
                        
    db.session.commit()
    carritos=Carrito.query.all()
    carritos = list(map(lambda carr: carr.serialize(), carritos ))
    if not carritos:
        return jsonify("no se encontraron carritos"),404
        
    return jsonify(carritos), 200 

@api.route('/carritos/<int:id>', methods=['DELETE'])
def delete_carrito(id):
    carrito=Carrito.query.get(id)
    if carrito is None:
       raise APIException('Datos Carrito no encontrado',status_code=404)
    db.session.delete(carrito)                
    db.session.commit()
        
    carritos=Carrito.query.all()
    carritos = list(map(lambda carr: carr.serialize(), carritos ))
    if not carritos:
        return jsonify("Carrito vacio"),404
        
    return jsonify(carritos), 200    

@api.route('/carritos', methods=['GET'])
def get_all_carritos():

    carritos=Carrito.query.all()
    carritos = list(map(lambda carr: carr.serialize(), carritos ))
    if not carritos:
        return jsonify("El carrito esta vacio"),404
        
    return jsonify(carritos), 200   

@api.route('/carritos/<int:id>', methods=['GET'])
def get_carrito(id):

    carrito=Carrito.query.get(id)
    if carrito != None:
        carrito=carrito.serialize()
    
    
    if not carrito:
        return jsonify("no se encontro al elemento del carrito"),404
    else:    
        return jsonify(carrito), 200     

@api.route('/carritos/usuario/<int:id>', methods=['GET'])
def get_carrito_usu(id):

    carritos=Carrito.query.filter_by(usuario_id=id)
    carritos = list(map(lambda carr: carr.serialize(), carritos ))
    if not carritos:
        return jsonify("El carrito para ese usuario esta vacio"),404
        
    return jsonify(carritos), 200
    
#-----------------------------------------------
# EndPoints de Venta (Cabezal de la Venta)
# ----------------------------------------------   
@api.route('/ventas', methods=['POST'])
def add_venta():
    # primero leo lo que viene en el body
    body=json.loads(request.data)
    #print (body_fav)
    esta=False
    
    
    if "usuario_id" in body:    
        usuario=Usuario.query.get(body['usuario_id'])
        if usuario is None:
            raise APIException('Usuario no encontrado',status_code=404)
        else:
            esta=True    
    
    if esta:        
        venta=Venta(usuario_id=body['usuario_id'],fecha=body['fecha'])
        db.session.add(venta)               
        db.session.commit()
    
    ventas=Venta.query.all()
    ventas = list(map(lambda vent: vent.serialize(), ventas ))
    if not ventas:
        return jsonify("Las ventas estan vacias"),404
        
    return jsonify(ventas), 200



@api.route('/ventas/<int:id>', methods=['PUT'])
def update_venta(id):
    body=json.loads(request.data)
    venta=Venta.query.get(id)
    if venta is None:
        raise APIException('Venta no encontrada',status_code=404)
    if "usuario_id" in body:
        venta.usuario_id=body['usuario_id']
    if "fecha" in body:
        venta.fecha=body['fecha']  
    
      
                        
    db.session.commit()
    ventas=Venta.query.all()
    ventas = list(map(lambda vent: vent.serialize(), ventas ))
    if not ventas:
        return jsonify("no se encontraron ventas"),404
        
    return jsonify(ventas), 200 

@api.route('/ventas/<int:id>', methods=['DELETE'])
def delete_venta(id):
    venta=Venta.query.get(id)
    if venta is None:
       raise APIException('Datos Venta no encontrado',status_code=404)
    db.session.delete(venta)                
    db.session.commit()
        
    ventas=Venta.query.all()
    ventas = list(map(lambda vent: vent.serialize(), ventas ))
    if not ventas:
        return jsonify("No se econtraron ventas"),404
        
    return jsonify(ventas), 200    

@api.route('/ventas', methods=['GET'])
def get_all_ventas():

    ventas=Venta.query.all()
    ventas = list(map(lambda vent: vent.serialize(), ventas ))
    if not ventas:
        return jsonify("No se encontraron ventas"),404
        
    return jsonify(ventas), 200   

@api.route('/ventas/<int:id>', methods=['GET'])
def get_venta(id):

    venta=Venta.query.get(id)
    if venta != None:
        venta=venta.serialize()
    
    
    if not venta:
        return jsonify("no se encontro la venta"),404
    else:    
        return jsonify(venta), 200    

#-----------------------------------------------
# EndPoints de Detalle_Venta
# ----------------------------------------------   
@api.route('/detalles', methods=['POST'])
def add_detalle():
    # primero leo lo que viene en el body
    body=json.loads(request.data)
    #print (body_fav)
    esta1=False
    esta2=False
    if "prod_id" in body:
        producto=Producto.query.get(body['prod_id'])
        if producto is None:
            raise APIException('Producto no encontrado',status_code=404)
        else:
            esta1=True
    if "venta_id" in body:    
        venta=Venta.query.get(body['venta_id'])
        if venta is None:
            raise APIException('Venta no encontrado',status_code=404)
        else:
            esta2=True    
    esta=esta1 and esta2
    if esta:        
        detalle=Detalle_Venta(venta_id=body['venta_id'],prod_id=body['prod_id'],cantidad=body['cantidad'])
        db.session.add(detalle)               
        db.session.commit()
    
    detalles=Detalle_Venta.query.all()
    detalles = list(map(lambda deta: deta.serialize(), detalles ))
    if not detalles:
        return jsonify("El detalle de ventas esta vacio"),404
        
    return jsonify(detalles), 200



@api.route('/detalles/<int:id>', methods=['PUT'])
def update_detalle(id):
    body=json.loads(request.data)
    detalle=Detalle_Venta.query.get(id)
    if detalle is None:
        raise APIException('Detalle de venta no encontrado',status_code=404)
    if "venta_id" in body:
        detalle.venta_id=body['venta_id']
    if "prod_id" in body:
        detalle.prod_id=body['prod_id']  
    if "cantidad" in body:
        detalle.cantidad=body['cantidad']
      
                        
    db.session.commit()
    detalles=Detalle_Venta.query.all()
    detalles = list(map(lambda deta: deta.serialize(), detalles ))
    if not detalles:
        return jsonify("no se encontraron detalles de ventas"),404
        
    return jsonify(detalles), 200 

@api.route('/detalles/<int:id>', methods=['DELETE'])
def delete_detalle(id):
    detalle=Detalle_Venta.query.get(id)
    if detalle is None:
       raise APIException('Datos Detalle de Ventas no encontrado',status_code=404)
    db.session.delete(detalle)                
    db.session.commit()
        
    detalles=Detalle_Venta.query.all()
    detalles = list(map(lambda deta: deta.serialize(), detalles ))
    if not detalles:
        return jsonify("Los detalles de ventas estan vacios"),404
        
    return jsonify(detalles), 200    

@api.route('/detalles', methods=['GET'])
def get_all_detalles():

    detalles=Detalle_Venta.query.all()
    detalles = list(map(lambda deta: deta.serialize(), detalles ))
    if not detalles:
        return jsonify("El detalle de ventas esta vacio"),404
        
    return jsonify(detalles), 200   

@api.route('/detalles/<int:id>', methods=['GET'])
def get_detalle(id):

    detalle=Detalle_Venta.query.get(id)
    if detalle != None:
        detalle=detalle.serialize()
    
    
    if not detalle:
        return jsonify("no se encontro al detalle de la venta"),404
    else:    
        return jsonify(detalle), 200         
