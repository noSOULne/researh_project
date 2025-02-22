from django.shortcuts import render

def discriminant(request):
    return render(request, 'solutions/discriminant.html')

def discriminant2(request):
    return render(request, 'solutions/discriminant2.html')

def b(request):
    return render(request, 'solutions/b.html')

def c(request):
    return render(request, 'solutions/c.html')

def kof(request):
    return render(request, 'solutions/kof.html')