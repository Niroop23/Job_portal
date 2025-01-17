from django.urls import path
import jobapp.views as views

urlpatterns = [
    path('index/',views.index,name='index'),
]