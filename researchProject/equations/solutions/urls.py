from django.urls import path
from . import views


urlpatterns = [
    path('', views.discriminant, name='discriminant'),
    path('discriminant', views.discriminant, name='discriminant'),
    path('discriminant2', views.discriminant2, name='discriminant2'),
    path('b', views.b, name='b'),
    path('c', views.c, name='c'),
    path('kof', views.kof, name='kof'),
    path('bc', views.bc, name='bc')
]