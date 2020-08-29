from django.db import models
from jsonfield import JSONField

# Create your models here.


class VehicleData(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    bus_code = models.CharField(max_length=50)
    trip_id = models.CharField(max_length=50)
    date_time = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    dtd = models.CharField(max_length=50)
    corridor = models.CharField(max_length=50)
    longitude = models.CharField(max_length=50)
    latitude = models.CharField(max_length=50)
    speed = models.CharField(max_length=10)
    course = models.CharField(max_length=50)
    color = models.CharField(max_length=50)


class Vehicles(models.Model):
    vehicles = JSONField()