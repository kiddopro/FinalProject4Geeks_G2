import requests
#import random 
#import datetime

api_endpoint_productos="https://3001-cyan-spider-omdloyom.ws-us18.gitpod.io/api/productos"
nombres=["Reloj Smart Watch","Camara Fotos","Celular"]
marcas=["Sony","Iphone","Samsung"]
precios=[420,521,625]
imagenes=["url 1","url 2","url 3"]
descripciones=["Reloj Smart Watch .....","Camara de Fotos .....","Celular de primera generacion ...."]
for x in range(0,3):
    data={
        "nombre":nombres[x],
        "marca":marcas[x],
        "precio":precios[x],
        "imagen":imagenes[x],
        "descripcion":descripciones[x]
        

    }
    print(data)
    r=requests.post(url=api_endpoint_productos, json=data) 
       
respuesta=r.text
print(respuesta)