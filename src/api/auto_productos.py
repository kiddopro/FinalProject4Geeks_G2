import requests
#import random 
#import datetime

api_endpoint_productos="https://3001-plum-cow-uqmtzf6s.ws-us18.gitpod.io/api/productos"
nombres=["Reloj Inteligente Huawei Watch Fit 5atm Bluetooth Gps",
         "Reloj Inteligente Amazfit T-Rex 5atm Gps Bt",
         "Celular"]
marcas=["Huawei","Amazfit","Samsung"]
precios=[420,521,625]
imagenes=["https://res.cloudinary.com/silvinaas/image/upload/v1635987514/tecno/HWTIAB09BK_01_aw7i85.jpg",
          "https://res.cloudinary.com/silvinaas/image/upload/v1636586916/tecno/A1919CGN_02_pfnt86.jpg",
          "url 3"]
descripciones=["""11 MODOS DEPORTIVOS.
85 MODOS PERSONALIZADOS DE ENTRENAMIENTO.
RECORDATORIO DE SEDENTARISMO.
MONITOREO DEL SUEÑO.
MONITOREO DE LA FRECUENCIA CARDÍACA.
MONITOREO DEL OXÍGENO EN SANGRE.
MONITOREO DEL NIVEL DE ESTRÉS.
MONITOREO DE LA SALUD FEMENINA.
NOTIFICACIONES Y ALARMAS.
MÚLTIPLES ESFERAS DE RELOJ.
GRADO IMPERMEABLE: 5 ATM.
Pantalla: 1,64" AMOLED, 456 x 280 píxeles.
Compatibilidad Smartphones SO: ANDROID 6 o + / IOS 9 o +.
Conectividad: BLUETOOTH 5.0.
GPS.
Sensores: Capacitivo, IMU 6 Ejes (Acelerómetro, Giroscopio), Frecuencia Cardíaca, Luz Ambiental.
Memoria: 4 GB.
Material de la Carcasa: Fibra de Polímero.
Material de la Pulsera: Silicona.
Peso: 21 g APROX (sin correa).
Dimensiones: 46 x 30 x 10 mm APROX.
Tiempo de Uso: 10 días APROX (normal) / 7 días APROX (intensivo) / 12 horas APROX (modo GPS).
Carga Rápida: Dura todo el día con 5 minutos de carga.
Color: NEGRO (GRAPHITE BLACK).

Garantía: 1 año.
Contra Defecto de Fabricación.""",
"""
12 CERTIFICACIONES DE CATEGORÍA MILITAR. RESISTENTE A AMBIENTES ADVERSOS.
La fuerza y la fiabilidad son especialmente importantes para los relojes inteligentes de exterior. AMAZFIT T-REX ha superado 12 certificaciones militares, lo que garantiza su robustez y resistencia en ambientes adversos.

SUMERGIBLE HASTA 50 METROS Y 14 MODOS DE DEPORTE.
El AMAZFIT T-REX tiene 14 modos de deportes profesionales integrados, y es capaz de sumergirse hasta 5 ATM. Puede ser utilizado para nadar en piscina o a mar abierto, lo que le permite adaptarse a las necesidades de cualquier atleta. También controla los datos de frecuencia cardíaca y las estadísticas de duración al hacer ejercicio, lo que aumenta la seguridad y la eficiencia de los entrenamientos.

DURO DESDE EL INTERIOR. ASPECTO FUERTE Y ARTESANÍA SÓLIDA.
El cuerpo del AMAZFIT T-REX es duro y sólido, con ángulos inconfundibles y rebosante de fuerza. El diseño reforzado de la estructura interna y los detalles del cuerpo transmiten tanto fortaleza como practicidad, con una dureza interior que se refleja en el exterior y lo convierte en un complemento de confianza.

POSICIONAMIENTO POR SATÉLITE GPS DUAL DE ALTA PRECISIÓN. EFICIENCIA OPTIMIZADA, LOCALIZACIÓN MÁS RÁPIDA Y PRECISA.
El reloj utiliza un chip SONY de alta calidad y un sistema integrado de posicionamiento por satélite dual de gran precisión. También se han optimizado los materiales del cuerpo del reloj y el diseño interno, al tiempo que se han introducido grandes mejoras en la recepción de la señal para compensar las interferencias causadas por el brazo al llevarlo. La eficiencia de la señal se ha aumentado considerablemente, lo que permite acelerar la búsqueda de satélites y aumentar la precisión de la localización, tanto en junglas urbanas como en los rincones más agrestes.

CONTROL DE FRECUENCIA CARDÍACA DURANTE TODO EL DÍA. CENTRADO EN TU SALUD.
El AMAZFIT T-REX está equipado con el sensor óptico de bioseguimiento BioTracker PPG desarrollado por HUAMI, el cual controla con gran precisión la frecuencia cardíaca las 24 horas del día. El reloj también envía recordatorios para que te levantes, a fin de animarte a desarrollar hábitos saludables y convertirte en tu mejor versión.

NOTIFICACIONES DEL TIEMPO Y RECORDATORIO DE LLAMADAS. MÁS HERRAMIENTAS PRÁCTICAS EN TU MUÑECA.
El AMAZFIT T-REX cuenta con muchas funciones inteligentes, incluidas previsión del tiempo, recordatorios de eventos y llamadas, notificaciones de aplicación y muchas más; la gran variedad de herramientas prácticas te facilitan el trabajo y la vida diarios.

SUMERGIBLE: 5 ATM.
Pantalla: 1,3" AMOLED, 360 x 360 píxeles. Cristal Gorilla 3. Recubrimiento antihuellas.
Conectividad: BLUETOOTH 5.0.
GPS Dual.
Sensores: Óptico de Bioseguimiento BioTracker PPG, Aceleración de 3 Ejes, Geomagnético, Luz de Ambiente.
Material del Cuerpo: Materiales poliméricos.
Peso: 58 g (con correa).
Dimensiones: 47,7 x 47,7 x 13,5 mm.
Batería: LI-PO 390 mAh.
Tiempo de Uso Diario: 20 días. Recepción de 150 mensajes al día, activación de pantalla con giro de muñeca 30 veces, otras operaciones de 5 minutos al día, carrera de 30 minutos cada dos días.
Tiempo de Uso Modo Básico: Hasta 66 días. Conexión Bluetooth con el teléfono apagado, control de la frecuencia cardíaca y otras funciones apagadas, activación de pantalla con giro de muñeca 100 veces al día.
GPS Siempre Encendido: 20 horas GPS activado para realizar un seguimiento de los ejercicios y control de la frecuencia cardíaca activado.
Tiempo de Carga: 2 hs APROX.
Compatibilidad: ANDROID 5.0 o superior, IOS 10.10 o superior.
Color: VERDE CAMUFLAJE.

Link del Fabricante.

Garantía: 1 año.
Contra Defecto de Fabricación.
 """,
"Celular de primera generacion ...."]
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