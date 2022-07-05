from dataclasses import field
from rest_framework import serializers
from .models import product

class ProductSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = [
            'id',
            'name',
            'photo',
            'description',
            'price',
            'compare_price',
            'category',
            'quantity',
            'sold',
            'date_created',
            'get_thumbail'
        ]