# Highlight Project

## Running the project

### Frontend 
The frontend section consists of two main applications: the chrome extension and the PWA.
Initially the project dependencies are required, which can be installed using the below commands. 
```bash
$ cd frontend/
$ npm install
```

The application can be run via the following command:
```bash
$ npm run start <application-name>
```
Substitutes <application-name> with your targeted application e.g. the pwa-extension or the chrome-extension.
The application uses port 4200 and requires it to be free.
If there are any changes, it can be observed in the terminal console.

### Backend
The backend application is placed in a directory named 'Base-setup'.
For ease of development the backend application is configured to use sqlite3 as a database, for when is not running in the staging nor the production environment.

To run the the backend service, you should firstly have `pipenv` installed in your local machine; it is used as a python environment manager. 

```bash
$ cd Base-setup
$ pipenv shell
$ pipenv install
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py runserver 0.0.0.0:8000
```

The application itself will run on port 8000 of 127.0.0.1 (localhost). 

**Notes:**
- Frontend applications depend on the backend service. Thus, the backend server should be started **before** any frontends.
- It is well acknowledged that there are some other proper ways to enforce the service to start sequentially by using docker-compose. But we are facing some unknown issues to get it work, so, please consider using the provided guideline for now.
