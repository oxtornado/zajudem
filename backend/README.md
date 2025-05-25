>[!TIP]
> Crear un entorno virtual dentro del proyecto y activarlo
```bash
python -m venv venv
.\venv\Scripts\Activate   
```
> Instalar las dependencias con pip freeze:
```bash
pip install -r requirements.txt
```
> Y encender el servidor para el puerto http://127.0.0.1:8000/:
```bash
python manage.py runserver
```



>[!IMPORTANT]
> 1. Crear una base de datos PostgreSQL con los mismos datos de settings.py (evidentemente obviando mi contraseña de usuario)
> 2. Entrar a la base de datos y actualizarla (refresh)


>[!NOTE]
> He aquí las lineas a ejecutar en cada una de las tablas para insertar datos