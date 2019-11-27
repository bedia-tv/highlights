"""
WSGI config for mb_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mb_project.settings')
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mb_project.settings.development")
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mb_project.settings.production")

application = get_wsgi_application()
