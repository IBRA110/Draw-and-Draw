# Generated by Django 4.0 on 2022-07-18 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('saves', '0002_alter_saves_options_alter_saves_file_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='saves',
            name='time_update',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
