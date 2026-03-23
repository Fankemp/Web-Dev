from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:id>/', views.productById),
    path('categories/', views.categorires_list),
    path('categories/<int:id>/', views.categoryById),
    path('categories/<int:id>/products/', views.category_products),
]