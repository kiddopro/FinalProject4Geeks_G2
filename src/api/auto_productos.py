import requests
import os
#import datetime

#print("variable entorno ->>>",os.environ.get("BACKEND_URL"))
#api_endpoint_productos=os.environ.get("BACKEND_URL")+"/api/productos"
#print(api_endpoint_productos)
api_endpoint_productos="https://3001-turquoise-dog-maze52a0.ws-us17.gitpod.io/api/productos"
nombres=["Amazfit Band 5",
         "Amazfit T-Rex",
         "Amazfit Gts 2"]
marcas=["Amazfit","Amazfit","Amazfit"]
precios=[420,521,625]
imagenes=["https://res.cloudinary.com/silvinaas/image/upload/v1637801687/tecno/band5_y2ivam.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586916/tecno/A1919CGN_02_pfnt86.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586912/tecno/XIA1969GY_01_yemcdn.jpg"]
descripciones=["Pulsera deportiva con 11 modos deportivos incluidos. Sumergible hasta 5 atm. Registro de actividad diaria", "segunda desc", "tercera desc"]
categorias=["smartwatch", "smartwatch", "smartwatch"]
for x in range(0,3):
    data={
        "nombre":nombres[x],
        "marca":marcas[x],
        "precio":precios[x],
        "imagen":imagenes[x],
        "descripcion":descripciones[x],
        "categoria":categorias[x]

    }
    print(data)
    r=requests.post(url=api_endpoint_productos, json=data) 
       
respuesta=r.text
print(respuesta)