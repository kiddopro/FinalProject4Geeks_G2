import requests
import os
#import datetime

#print("variable entorno ->>>",os.environ.get("BACKEND_URL"))
#api_endpoint_productos=os.environ.get("BACKEND_URL")+"/api/productos"
#print(api_endpoint_productos)
api_endpoint_productos="https://3001-blue-halibut-iun4vlng.ws-us17.gitpod.io/api/productos"
nombres=["Reloj Inteligente Huawei Watch Fit 5atm Bluetooth Gps",
         "Reloj Inteligente Amazfit T-Rex 5atm Gps Bt",
         "Reloj Inteligente Amazfit Gts 2 5atm Wifi Bluetooth Gps",
         "Amazfit Band 5",
         "Amazfit T-Rex",
         "Amazfit Gts 2"]
marcas=["Huawei","Amazfit","Amazfit","Amazfit","Amazfit","Amazfit"]
precios=[420,521,625,428,325,715]
imagenes=["https://res.cloudinary.com/silvinaas/image/upload/v1635987514/tecno/HWTIAB09BK_01_aw7i85.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586916/tecno/A1919CGN_02_pfnt86.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586912/tecno/XIA1969GY_01_yemcdn.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1637801687/tecno/band5_y2ivam.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586916/tecno/A1919CGN_02_pfnt86.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586912/tecno/XIA1969GY_01_yemcdn.jpg"]



descripciones=["primer descripcion",
               "segunda desc",
                "tercera desc",
                "Pulsera deportiva con 11 modos deportivos incluidos. Sumergible hasta 5 atm. Registro de actividad diaria",
                 "Smartwatch con 12 certificaciones de categoría militar. Sumergible hasta 50 metros. 14 modos deportivos. GPS", 
                 "Smartwatch con mas de 90 modos deportivos integrados. Sistema de evaluación de salud"]
categorias=["smartwatch", "smartwatch", "smartwatch","smartwatch", "smartwatch", "smartwatch"]
largo=len(categorias)
print(largo)
for x in range(0,largo):
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