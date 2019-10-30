from django.urls import path

from .views import HomePageView
from graphene_django.views import GraphQLView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    #url(r'^graphql$', GraphQLView.as_view(graphiql=True)),
]
