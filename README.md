# Laboratorio 02 - Docker Compose

Proyecto que despliega 3 instancias de una API (build local) y una base de datos PostgreSQL usando Docker Compose.

## Requisitos

- Docker
- Docker Compose

## Comandos

docker compose up -d --build

Para detener:

docker compose down

## Configuración por entorno

Crear un archivo .env en la raíz con:

MESSAGE=< Jesus Joaquin Torres Avalos>
POSTGRES_PASSWORD=<123joaquin>

## Tipos de redes en Docker

- **bridge**: Es la opción predeterminada para contenedores independientes. Crea una red interna en el host y los contenedores puede comunicarse a traves de ellos con direcciones IP o nombres de contenedor . 
- **host**: Elimina el aislamiento de red utilizando la pila de red del host. Permite que los contenedores compartan la IP y puertos del host.
- **none**:Deshabilita completamente la conexion de red, es util para configuracion manual o seguridad.
- **overlay**: Permite la conexion en red entre multiples hosts mediante Docker Swarm. Crea uan red distribuida entre nodos.
- **macvlan**: Asigna una dirección MAC a los contenedores, haciendolo parecer como dispositivo físico  en la red.
( Informacion extraida de SPACELIFT)
## Tipos de volúmenes en Docker

- **Volúmenes gestionados**: gestionados por Docker, se guardan en una ubicación interna del sistema. Se usa para compartir datos entre contenedores
- **Bind mounts**: Se enlazan en cualquier ruta del host, es útil para desarollo local y sincronizacion en vivo.
- **tmpfs**: De almacenamiento temporal, uso para apps sensibles que no necesitan persistencia. Se guardan en la memoria RAM temporalmente.
Fuente: https://90daysdevops.295devops.com/semana-02/dia11/

## Créditos

- Jesus Joaquin Torres Avalos