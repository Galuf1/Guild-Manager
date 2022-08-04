from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('', views.index),
    path('signup', views.sign_up),
    path('login', views.log_in),
    path('logout', views.log_out),
    path('guild', views.guild),
]