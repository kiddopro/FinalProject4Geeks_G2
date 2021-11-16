import requests
#import random 
#import datetime

api_endpoint_usuarios="https://3001-black-parrotfish-5zx8ttkb.ws-us18.gitpod.io/api/usuarios"
nombres=["Juan","Silvina","Martin"]
emails=["jota@gmail.com","silvi@gmail.com","martin.suarez.personal@gmail.com"]
pass2=["5544","1234","4321"]
dire2=["19 de abril 1083","oribe 2211","Rios 2121"]
docus=["123123","456456","789789"]
for x in range(0,3):
    data={
        "email":emails[x],
        "password":pass2[x],
        "nombre":nombres[x],
        "is_active":True,
        "direccion":dire2[x],
        "telefono":"123123",
        "documento":docus[x],
        "fecha_nac":"1990/05/05"

    }
    print(data)
    r=requests.post(url=api_endpoint_usuarios, json=data) 
       
respuesta=r.text
print(respuesta)       