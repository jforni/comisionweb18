Comandos Git Bush, cmd, etc:

cd

(change directory) + carpeta a la que queremos movernos (si la carpeta tiene muchos argumentos, usar comillas) ejemplos:

ej: cd Documents

ej: cd Documents "Curso de Git y GitHub"

Tambien se lo usa para volver al directorio raíz y comenzar desde cero.

**cd ..**
Para volver atrás, si estoy en un archivo y quiero volver al anterior o anteriores.


Configuracion

git config --global user.name "<usuario>"

git config --global user.email "<correo>"



git status
se usa para ver el estado de los archivos en tu repositorio Git


1) git add <file> / gid add . (me agrega todos los cambios)


2) git commit -m "" 
se agrega un comentario lo mas completo posible de los cambios que se están commiteando. se crea el commit en la rama a la que le estoy cargando las modificaciones.



git log
(me muestra el historial de commits que he realizado en la rama en la que estoy parado).


git branch <nombre de la rama a crear>
(para crear una rama nueva)


git branch
(para ver las ramas que tengo en el repositorio y también me permite saber en cual estoy posicionada)


git checkout <nombre de la rama>
(para cambiar de rama)


git checkout -b <feat/nombre de la rama que quiero crear>
(para crear y cambiar a esa rama creada en un solo comando)

NOTA: tener cuidado cuando creamos las ramas sobre donde nos encontramos parados. Si creamos una rama desde la master o main, estaremos creando la rama a partir del tronco, si creamos una rama desde otra rama, estaríamos creando ramas mas pequeñas.


git branch -m <nombre nuevo de la rama>
(para cambiar el nombre de la rama. en este caso debemos estar dentro de la rama a la que le queremos cambiar el nombre)


git branch -m <nombre actual de la rama> <nombre nuevo de la rama>
(para cambiar el nombre de la rama pero no es necesario estar en esa misma rama)


git merge
(para fusionar dos ramas)


git clone <link de ubicacion del repositorio>

(para clonar un repositorio remoto para crear una copia local de ese repositorio.
Se debe estar en el gitbash/cmd/etc dentro de la carpeta en la que se va a clonar ese repositorio)


3) git push <origen> <rama>
(para mandar cambios del repositorio local al remoto).
