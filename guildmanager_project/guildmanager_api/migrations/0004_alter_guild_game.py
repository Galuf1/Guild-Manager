# Generated by Django 4.1 on 2022-08-15 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guildmanager_api', '0003_alter_guild_game'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guild',
            name='game',
            field=models.ManyToManyField(blank=True, default=[2], to='guildmanager_api.game'),
        ),
    ]
