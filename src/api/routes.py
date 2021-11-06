"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Producto, Carrito, Venta, Detalle_Venta
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity


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