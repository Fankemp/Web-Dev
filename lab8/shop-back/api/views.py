from django.http import JsonResponse

from .models import Product, Category


def product_list(request):
    products = Product.objects.all()
    data = []

    for p in products:
        data.append({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category': p.category.name,
        })

    return JsonResponse(data, safe=False)


def productById(request, id):
    try:
        p = Product.objects.get(id=id)
        data = {
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category': p.category.name,
        }
        return JsonResponse(data)
    except  Product.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)


def categorires_list(request):
    categorires = Category.objects.all()
    data = []
    for c in categorires:
        data.append({
            'id': c.id,
            'name': c.name,
        })
    return JsonResponse(data, safe=False)


def categoryById(request, id):
    try:
        c = Category.objects.get(id=id)
        data = {
            'id': c.id,
            'name': c.name,
        }

        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)


def category_products(request, id):
    try:
        c = Category.objects.get(id=id)
        products = Product.objects.filter(category=c)
        data = []
        for p in products:
            data.append({
                'id': p.id,
                'name': p.name,
                'price': p.price,
                'description': p.description,
                'count': p.count,
                'is_active': p.is_active,
                'category': c.name,
            })

        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=False)
