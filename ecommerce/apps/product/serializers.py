from dataclasses import field
from rest_framework import serializers
from .models import product

class ProductSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = '__all__'