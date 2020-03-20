# Highlight Project


## Running the project

### Docker Compose
The project can be started up using `docker-compose` with the existing configuration, `docker-compose.yaml`, by using the following command:
```bash
$ docker-compose up --build
```
This will start 3 services: a postgresql database, the django backend and one of the frontend application - the progressive web application.

 
### Frontend

The frontend section consists of two main applications: the chrome extension and the PWA.

Initially the project dependencies are required, which can be installed via the following commands:

```bash
$ cd frontend/
$ npm install
```
The application can be run via the following command:

```bash
$ npm run start <application-name>
```
Substitute "application-name" with your targeted application e.g. the pwa-extension or the chrome-extension.

The application uses port 4200 and requires it to be free.
If there are any changes, it can be observed in the terminal console.

### Backend
The backend application is placed in a directory named 'Base-setup'.

For ease of development the backend application is configured to use sqlite3 as a database, for when is not running in the staging nor the production environment.

To run the the backend service, you should firstly have `pipenv` installed in your local machine; it is used as a python environment manager.

```bash
#bash
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


## Deployment

In this project, we have deployed these applications into Google Cloud infrastructure by using kubernetes. The Google Kubernetes Engine is the service that we used.  Most of the deployment can be done using `kubectl` CLI command and `helm`- the kubernetes package manager. 

In our kubernetes cluster, there are these main services:
- Ambassador Edge Stack
- Backend
- Frontend (PWA)
- Postgres Database

### Prerequisites
- A kubernetes cluster in any cloud provider (Ours is Google Cloud.)
- [`kubectl`](https://kubernetes.io/docs/tasks/tools/install-kubectl/) CLI pre-installed
- [`helm`](https://helm.sh/docs/intro/install/) CLI pre-install
- Set your `kubectl` context to your cluster. [See example for GCP](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl)
- Install [Ambassador Edge Stack]([https://www.getambassador.io/user-guide/manual-install/](https://www.getambassador.io/user-guide/manual-install/)). We will be using this stack do traffic routing and service mapping.


### Create configuration for backend and database
Environment variables are defined using a secret and a config-map. The database and backend will be using these variables in order to communicate to each other. 
```bash
$ kubectl apply -f k8s/global/config-maps.yaml
$ kubectl apply -f k8s/global/secrets.yaml
```

### Setting up a database
This could be done by using `helm` . The database instance created by this will be using the environment variables that are previously defined as its configuration.
```bash
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm install highlight-db -f k8s/postgreql/values.yaml bitnami/postgresql
```

### Setting up the backend application
We first need to create a deployment in the cluster and create a service which exposes instances created by the deployment, then create a mapping to route traffic to the service from the load balancer. These can be done by using these commands:
```bash
# Apply the backend deployment manifest
$ kubectl apply -f k8s/backend/deployment.yaml
# Apply the backend service manifest which create a backend service and a service mapping.
$ kubectl apply -f k8s/backend/service.yaml```
```
### Setting up the frontend application
This can be done in a similar manner as the backend
```bash
# Apply the frontend deployment manifest
$ kubectl apply -f k8s/backend/deployment.yaml
# Apply the frontend service manifest which create a frontend service and a service mapping.
$ kubectl apply -f k8s/backend/service.yaml```
```

## Notes
### Service Mapping Explained
```yaml
# Service mapping definition taken from k8s/frontend/service.yaml
apiVersion:  getambassador.io/v2
kind:  Mapping
metadata:
    name:  frontend-service-mapping
spec:
    host:  pwa.highlight-project.dev
    prefix:  /
    service:  highlight-frontend:80
```
This code fragment defines how the cluster load balancer should route the incoming traffic. When there is an incoming request from hostname "pwa.highlight-project.dev" with prefix "/",  it will be routed to the frontend service , which in this case, highlight-frontend at port 80. The hostname is the DNS that point to the load balancer of the cluster. 

### Known-backend Issues
Some functionally of the backend does not properly work due to some unknown issues that is beyond the capability of the team. For example, the issue which is cause by third-party libraries.
