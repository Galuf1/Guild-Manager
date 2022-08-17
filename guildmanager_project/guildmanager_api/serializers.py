from rest_framework import serializers
from guildmanager_api.models import *

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'
class GuildSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guild
        fields = '__all__'
class CharSerializer(serializers.ModelSerializer):
    class Meta:
        model = Char
        fields = '__all__'