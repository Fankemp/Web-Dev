from django.urls import path
from api import views

def wrap_view(view):
    return view.as_view() if hasattr(view, 'as_view') else view

urlpatterns = [
    path('products/', wrap_view(views.ProductList)),
    path('products/<int:product_id>/', wrap_view(views.ProductDetail)),

    path('categories/', wrap_view(getattr(views, 'CategoryList', lambda r: None))),
    path('categories/<int:pk>/', wrap_view(getattr(views, 'CategoryDetail', lambda r: None))),
    path('categories/<int:category_id>/products/', wrap_view(getattr(views, 'CategoryProductsAPIView', lambda r: None))),
]