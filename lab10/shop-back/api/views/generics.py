from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer

class ProductListAPIView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

class CategoryListAPIView(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailAPIView(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        products = Product.objects.filter(category_id=category_id)
        serializers = ProductSerializer(products, many=True)
        return Response(serializers.data)
