# Highlight Project

## Running the project

### Frontend 
For the frontend section, it is consisted of mainly two applications: chrome extension and PWA.
Initially, the project dependencies are needed to be installed. 
```bash
$ cd frontend/
$ npm install
```

To run an application, it could be done by the following commands:
```bash
$ npm run start <application-name>
```
Substitutes <application-name> with your targeted application e.g. pwa-extension, chrome-extension.
The application should be available at port 4200. If there is any changes, it can be observed in the terminal console.

### Backend
The backend application is placed in a directory named 'Base-setup'. For ease of development, the backend application is configured to use sqlite3 as a database
when is not running in the staging nor production environment.

To run the the backend service, you should firstly have `pipenv` in your local machine; it is used as a python environment manager. 

```bash
$ cd Base-setup
$ pipenv shell
$ pipenv install
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py runserver 0.0.0.0:8000
```

The application will be available at port 8000 of localhost. 

**Notes:**
- Frontend applications depend on the backend service. Thus, the backend server should be started **before** any frontends.
- It is well acknowledged that there are some other proper ways to enforce the service to start sequentially by using docker-compose. But we are facing some unknown issues to get it work, so, please consider using the provided guideline for now.
