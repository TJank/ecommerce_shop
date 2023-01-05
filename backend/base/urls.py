from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.getRoutes, name="routes"),
    path('products/', view=views.getProducts, name="products"),
    path('products/<str:pk>', view=views.getProduct, name="product"),
]

