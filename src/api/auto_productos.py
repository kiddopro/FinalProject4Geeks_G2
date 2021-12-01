# import requests
# import os
# #import datetime

# api_endpoint_productos= "https://3001-kumquat-tapir-y5grsmh4.ws-us17.gitpod.io/api/productos"
# nombres=["Reloj Inteligente Huawei Watch Fit 5atm Bluetooth Gps",
#          "Reloj Inteligente Amazfit T-Rex 5atm Gps Bt",
#          "Reloj Inteligente Amazfit Gts 2 5atm Wifi Bluetooth Gps"]
# marcas=["Huawei","Amazfit","Amazfit"]
# precios=[420,521,625]
# imagenes=["https://res.cloudinary.com/silvinaas/image/upload/v1635987514/tecno/HWTIAB09BK_01_aw7i85.jpg",
#           "https://res.cloudinary.com/silvinaas/image/upload/v1636586916/tecno/A1919CGN_02_pfnt86.jpg",
#           "https://res.cloudinary.com/silvinaas/image/upload/v1636586912/tecno/XIA1969GY_01_yemcdn.jpg"]
# descripciones=["Smartwatch con mas de 90 modos deportivos integrados. Sistema de evaluación de salud", "Smartwatch con mas de 90 modos deportivos integrados. Sistema de evaluación de salud", "Smartwatch con mas de 90 modos deportivos integrados. Sistema de evaluación de salud"]
# categorias=["smartwatch", "smartwatch", "smartwatch"]
# for x in range(0,3):
#     data={
#         "nombre":nombres[x],
#         "marca":marcas[x],
#         "precio":precios[x],
#         "imagen":imagenes[x],
#         "descripcion":descripciones[x],
#         "categoria":categorias[x]

#     }
#     print(data)
#     r=requests.post(url=api_endpoint_productos, json=data) 
       
# respuesta=r.text
# print(respuesta)

import requests
import os
#import datetime

#print("variable entorno ->>>",os.environ.get("BACKEND_URL"))
#api_endpoint_productos=os.environ.get("BACKEND_URL")+"/api/productos"
#print(api_endpoint_productos)
api_endpoint_productos="https://3001-yellow-wildfowl-u2wisbpo.ws-us20.gitpod.io/api/productos"
nombres=["Amazfit Band 5",
         "Amazfit T-Rex",
         "Amazfit Gts 2",
         "Apple Watch SE 40 mm",
         "Xiaomi Mi Watch Lite",
         "ZTE Y8 Sports",
         "CAT S52",
         "Xiaomi Redmi Note 10S",
         "Iphone 12 PRO",
         "Realme C11 (2021)",
         "Leagoo Z5",
         "Samsung Galaxy A12",
         "Camara Instax Mini 11",
         "Auriculares inalámbricos Motorola",
         "Camara Gopro Max",
         "Parlante Toshiba P70",
         "Camara Seabird 4K",
         "Rastreador Apple AirTag"]
marcas=["Amazfit","Amazfit","Amazfit","Apple","Xiaomi","ZTE","CAT","Xiaomi","Iphone","Realme","Leagoo","Samsung","Fujifilm", "Motorola","Gopro","Toshiba","Seabird","Apple"]
precios=[420,521,625,500,498,399,324,344,667,876,234,564,876,564,334,556,956,334]
imagenes=["https://res.cloudinary.com/silvinaas/image/upload/v1637801687/tecno/band5_y2ivam.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586916/tecno/A1919CGN_02_pfnt86.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586912/tecno/XIA1969GY_01_yemcdn.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586918/tecno/APPLEWATCHSEWT_01_smwoaq.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1638210924/tecno/miwatchlite_pcuwmn.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1638211086/tecno/ZTE_d2h6jz.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636587648/tecno/cats52_sikdve.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1638211715/tecno/note10_as9oip.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636587650/tecno/IP12PBK_01_ftfr2k.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1638212315/tecno/realmec11_clzoma.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1638212697/tecno/Z5_lpgcxo.png",
          "https://res.cloudinary.com/silvinaas/image/upload/v1638212919/tecno/a12_etmdw5.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1637865434/tecno/instaxmini_ygom93.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636590114/tecno/MOTOBUDS100BK_01_rsdry2.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586509/tecno/CHDHZ202MAX360_04_xirzjr.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636590472/tecno/TYWSP70L_01_cjpwqt.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586504/tecno/SEABIRD-AZUL-POSTER_k36rcx.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1638214484/tecno/airtag_e9gybg.jpg"]
descripciones=["Pulsera deportiva con 11 modos deportivos incluidos. Sumergible hasta 5 atm. Registro de actividad diaria", "Smartwatch con 12 certificaciones de categoría militar. Sumergible hasta 50 metros. 14 modos deportivos. GPS", "Smartwatch con mas de 90 modos deportivos integrados. Sistema de evaluación de salud","Smartwatch con GPS, Wifi y bluetooth. Monitoreo cardíaco y llamada SOS. Resistente al agua.", "Smartwatch con 11 modos deportivos. Monitoreo de frecuencia cardíaca y sueño. Impermeable hasta 5 ATM, bluetooth y GPS.","Smartwatch con monitoreo de sueño y ritmo cardíaco. Contador de calorías y podómetro. Bluetooth","Con certificado IP68: a prueba de polvo, agua, lluvia, radiación solar, choque térmico, etc. Memoria ROM de 64GB. Lector de tarjeta micro-sd","Dualsim. Memoria RAM 6GB, ROM 128GB. Lector de tarjeta micro-sdxc. Camara principal 64MP. Cámara selfie 13MP"," Memoria RAM 6GB, ROM 256GB. Pantalla de 6,1'. Video 4K. Sensores: Acelerómetro, Barómetro, Brújula, Giroscopio, Proximidad, Rostro ID.","Memoria RAM 2GB, ROM 32GB. Pantalla de 6,52'. Camara principal 8MP. Cámara selfie 5MP","Dualsim. Pantalla de 5'. Memoria RAM 8GB, ROM 1GB. Expansible hasta 32GB con tarjeta micro-sd. incluye 2 cases de regalo!","Pantalla de 6,5'. Memoria RAM 64GB, ROM 4GB. Lector de tarjeta micro-sdxc. Camara principal 48MP. Cámara selfie 8MP","Fotos instantáneas. Diseño compacto. Tamaño de Foto: 62 mm x 46 mm. Alimentación: AA alcalinas LR6 x 2. Película: Instantánea FUJIFILM instax mini.","Certificado IPX5, a prueba de agua y transpiración. Botón Multifuncional, responda llamadas, ajuste el volumen, salte canciones y más.","Camara robusta y sumergible hasta 5 metros. Pantalla táctil. Captura de 360° y captura tradicional. Cámara 18MP, Video 6K","Conectividad Bluetooth alcance 10mts. Potencia 6W. Tiempo de uso 10hs Aprox.","Camara extrema Seabird Action. Fotografia de 12, 8 y 5MP. Video 4K. Duracion de bateria 80-90min","Rastrea tus cosas y encuentra tus dispositivos y a tus amistades con la app Encontrar. Sumergible hasta 1 metro y 30 minutos."]
categorias=["smartwatch", "smartwatch", "smartwatch","smartwatch","smartwatch","smartwatch","smartphone","smartphone","smartphone","smartphone","smartphone","smartphone","accesorios","accesorios","accesorios","accesorios","accesorios","accesorios"]
largo = len(categorias)
for x in range(0, largo):
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