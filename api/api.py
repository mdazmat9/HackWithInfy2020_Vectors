from rest_framework.views import APIView
from rest_framework.response import Response
from .models import VehicleData, Vehicles
from .serializers import VehicleSerializer, NoOfVehiclesSerializer
from rest_framework import status


class VehicleAPI(APIView):
    def get(self, request):
        data = Vehicles.objects.all()
        result = []
        for d in data:
            result.append(d)
            break
        serializer = NoOfVehiclesSerializer(result, many=True)
        return Response(serializer.data)


class VehicleDataAPI(APIView):
    def get(self, request):
        id = self.request.query_params.get('id', None)
        if not id:
            return Response("Please provide a vehicle ID", status=status.HTTP_400_BAD_REQUEST)
        data = VehicleData.objects.all()
        result = []
        id = '"' + id + '"'
        for d in data:
            if d.bus_code == id:
                result.append(d)
        result = sorted(result, key=lambda x: x.date_time.split()[1])
        serializer = VehicleSerializer(result, many=True)
        return Response(serializer.data)


