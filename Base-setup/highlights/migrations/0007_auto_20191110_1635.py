# Generated by Django 2.2.6 on 2019-11-10 16:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('highlights', '0006_auto_20191106_1429'),
    ]

    operations = [
        migrations.AlterField(
            model_name='highlights',
            name='videoID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='highlights.Video'),
        ),
    ]
