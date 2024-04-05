# Como usar los contextos

1. Crear la carpeta contexts

2. Crear los archivos de tantos contextos que queramos

3. Importamos la funcion "createContext", la usamos y esta funcion recibe un objeto como argumento y devolvera todos los datos que queremos compartir en el contexto

4. Creamos un componente proveedor, que tendrá todo lo necesario para que nuestras vistas puedan acceder a estas variables. Lo minimo que tiene el proveedor es el estado global.

5. Este componente va a retornar el contexto y
