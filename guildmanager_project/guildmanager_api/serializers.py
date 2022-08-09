from rest_framework import serializers
from guildmanager_api.models import *

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'
class GuildSerializer(serializers.ModelSerializer):
    gameid = GameSerializer(many=True)
    class Meta:
        model = Guild
        fields = ('name', 'gameid','faction', 'server', 'description_short', 'description_full' )
class CharSerializer(serializers.ModelSerializer):
    class Meta:
        model = Char
        fields = '__all__'