from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Guild, Game, Char
from .models import AppUser as User
from .serializers import CharSerializer, GuildSerializer
import os
import requests
import schedule
from dotenv import load_dotenv
load_dotenv()

def battle_key():
    payload_params = {"grant_type": "client_credentials", "scope": "public"}

    token_req = requests.post('https://eu.battle.net/oauth/token', params=payload_params, auth=(str(os.getenv('VITE_client_id')),str(os.getenv('VITE_client_secret'))))
    token = token_req.json()['access_token']
    print(token)

    return token
token = battle_key()

def index(request): 
    print('something')
    print(str(os.getenv('SECRET_KEY')))
    index = open('static/index.html').read()
    return HttpResponse(index)

@api_view(['POST','GET'])
def sign_up(request):
    print('signup is loading wtf')
    if request.method == 'POST':
        try:
            new_user = User.objects.create_user(username=request.data['email'], password=request.data['password'], email=request.data['email'])
            new_user.full_clean
            new_user.save()
            return JsonResponse({'success':True})
            # return HttpResponse({'success':'whatever'})
        except Exception as e:
            print('you got an error signing up!', str(e))
        return JsonResponse({'Success': False, 'reason': 'sign up failed'})
    elif request.method == 'GET':
        return JsonResponse({'success':True})


@api_view(['POST'])
def log_in(request):
    print('YOU ARE IN THE LOG IN VIEW ON DJANGO')
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username=email, password=password)
    print('login on django side!', user.email, user.password)

    if user is not None:
        if user.is_active:
            try:
                login(request._request, user)
                print(f"{email} is logged in")
                return JsonResponse({'success': True}) 
            except Exception as e:
                print('you got an error logging in!', str(e))
                return JsonResponse({'success': False, 'reason': 'failed to login'})
        else:
            return JsonResponse({'success': False, 'reason': 'account disabled'})
    else:
        return JsonResponse({'success': False, 'reason': 'account doesn\'t exist'}) 

@api_view(['POST'])
def log_out(request):
    logout(request)
    print('USER IS LOGGED OUT!')
    return HttpResponseRedirect('/') 

@api_view(['GET','POST','PUT','DELETE'])
def guild(request):
    if request.method == 'GET':
        guild = Guild.objects.all()
        serializer = GuildSerializer(guild, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        print(request.data)
        guild = Guild(name=request.data['name'],faction=request.data['faction'], server=request.data['server'], description_short=request.data['description_short'], description_full=request.data['description_full'])
        guild.save()
        guild.game.set([2])
        guild.save()
        # serializer = GuildSerializer(data=request.data)
        # print(serializer)
        # if serializer.is_valid():
        #     print('success', serializer.is_valid())
        #     serializer.save(game=[2])
        return Response('hello')

@api_view(['GET','POST','PUT','DELETE'])
def char(request):
    if request.method == 'GET':
        char = Char.objects.all()
        serializer = CharSerializer(char, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        print(request.data)
        char = Char(name=request.data['name'],faction=request.data['faction'],spec=request.data['spec'], server=request.data['server'], role=request.data['role'])
        char.save()
        char.game.set([2])
        char.guild.set([request.data['guild']])
        char.save()
        return Response('Post worked')

@api_view(['GET','POST'])
def leaderboard(request):
     
    season = 27
    bracket = 'rbg'
    response = requests.get(f'https://eu.api.blizzard.com/data/wow/pvp-season/{season}/pvp-leaderboard/{bracket}',params={'namespace':"dynamic-eu", 'locale':"en_US", 'access_token':{token}})
    
    resp = response.json()
    respl = resp['entries'][:10]
    
    
    return Response(respl)
