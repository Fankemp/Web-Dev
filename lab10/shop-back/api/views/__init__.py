LVL = 5

if LVL == 2:
    from .fbv import ProductListAPIView as ProductList, ProductDetailAPIView as ProductDetail
elif LVL == 3:
    from .cbv import ProductListAPIView as ProductList, ProductDetailAPIView as ProductDetail
elif LVL == 4:
    from .mixins import ProductListAPIView as ProductList, ProductDetailAPIView as ProductDetail
elif LVL == 5:
    from .generics import (
        ProductListAPIView as ProductList,
        ProductDetailAPIView as ProductDetail,
        CategoryListAPIView as CategoryList,
        CategoryDetailAPIView as CategoryDetail,
        CategoryProductsAPIView
    )

