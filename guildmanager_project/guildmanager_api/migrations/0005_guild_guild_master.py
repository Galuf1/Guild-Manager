# Generated by Django 4.1 on 2022-08-16 14:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('guildmanager_api', '0004_alter_guild_game'),
    ]

    operations = [
        migrations.AddField(
            model_name='guild',
            name='guild_master',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
