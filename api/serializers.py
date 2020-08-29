from rest_framework import serializers
from .models import VehicleData, Vehicles


class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleData
        fields = '__all__'


class NoOfVehiclesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicles
        fields = '__all__'