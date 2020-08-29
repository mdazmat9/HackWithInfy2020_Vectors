# Generated by Django 3.1 on 2020-08-29 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='VehicleData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bus_code', models.CharField(max_length=50)),
                ('trip_id', models.CharField(max_length=50)),
                ('date_time', models.CharField(max_length=50)),
                ('location', models.CharField(max_length=50)),
                ('dtd', models.CharField(max_length=50)),
                ('corridor', models.CharField(max_length=50)),
                ('longitude', models.CharField(max_length=50)),
                ('latitude', models.CharField(max_length=50)),
                ('speed', models.CharField(max_length=10)),
                ('course', models.CharField(max_length=50)),
                ('color', models.CharField(max_length=50)),
            ],
        ),
    ]