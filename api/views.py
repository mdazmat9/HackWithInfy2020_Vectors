from django.shortcuts import render
from django.http import HttpResponse
from .models import VehicleData, Vehicles

# Create your views here.


def read_data(request):
    with open('api/transjakarta_gps.csv') as f:
        line = f.readline()
        id_ = 1
        while True:
            line = f.readline()
            if not line:
                break
            print(line)
            try:
                bus_code, trip_id, date_time, location, dtd, corridor, longitude, latitude, speed, course, color = line.split(',')
            except Exception:
                bus_code, trip_id, date_time, location, dtd1, dtd2, corridor, longitude, latitude, speed, course, color = line.split(',')
                dtd = dtd1 + "," + dtd2
            data = VehicleData(id=id_, bus_code=bus_code, trip_id=trip_id, date_time=date_time, location=location,
                               dtd=dtd, corridor=corridor, longitude=longitude, latitude=latitude, speed=speed,
                               course=course, color=color)
            data.save()
            id_ += 1


def save_buses(request):
    vehicle_id = []
    data = VehicleData.objects.all()
    for d in data:
        bus_code = d.bus_code.lstrip('"').rstrip('"')
        if bus_code not in vehicle_id:
            print(bus_code)
            vehicle_id.append(bus_code)
    model = Vehicles(vehicles=vehicle_id)
    model.save()
    return HttpResponse('<html><body>Done</body></html>')

