"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Producto, Carrito, Venta, Detalle_Venta
from api.utils import generate_sitemap, APIException

# importación para crear token
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200



# login
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # filtramos los usuarios segun su email y contraseña
    user = Usuario.query.filter_by(email=email, password=password).first()

    # si no encuentra match en la base de datos retorna el mensaje correspondiente
    if user is None:
        return jsonify({"msg": "Bad email or password"}), 401
    else:
        # de lo contrario se crea un token haciendo referencia a la id del usuario
        access_token = create_access_token(identity=user.id)
        # retornamos un json con los datos del token y la id de usuario a la que se le esta asignando el mismo
        return jsonify({"token": access_token, "user_id": user.id, "msg": "user login in correctly"}), 200