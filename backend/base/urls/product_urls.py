from django.urls import path
from base.views import product_views as views


urlpatterns = [
    path('', view=views.getProducts, name="products"),
    path('create/', view=views.createProduct, name="create-product"),
    
    path('upload/', view=views.uploadImage, name="image-upload"),
    
    path('<str:pk>/', view=views.getProduct, name="product"),
    
    path('delete/<str:pk>/', view=views.deleteProduct, name="delete-product"),
    path('update/<str:pk>/', view=views.updateProduct, name="update-product"),
]