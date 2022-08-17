from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
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

    return token
token = battle_key()

def index(request): 
    index = open('static/index.html').read()
    return HttpResponse(index)

@api_view(['POST','GET'])
def sign_up(request):
    print('signup is loading')
    if request.method == 'POST':
        try:
            new_user = User.objects.create_user(username=request.data['email'], password=request.data['password'], email=request.data['email'])
            new_user.full_clean
            new_user.save()
            return JsonResponse({'success':True})
        except Exception as e:
            print('you got an error signing up!', str(e))
        return JsonResponse({'Success': False, 'reason': 'sign up failed'})
    elif request.method == 'GET':
        return JsonResponse({'success':True})


@api_view(['POST'])
def log_in(request):
    print(dir(request))
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username=email, password=password)
    print('login on django side!', user)

    if user is not None:
        if user.is_active:
            try:
                login(request._request, user)
                print(f"{email} is logged in")
                return JsonResponse({'success': True}) 
            except Exception as e:
                print('error logging in', str(e))
                return JsonResponse({'success': False, 'reason': 'failed to login'})
        else:
            return JsonResponse({'success': False, 'reason': 'account not active'})
    else:
        return JsonResponse({'success': False, 'reason': 'account credentials invalid'}) 

@api_view(['POST'])
def log_out(request):
    logout(request)
    print('USER IS LOGGED OUT!')
    return HttpResponseRedirect('/') 

@api_view(['GET'])
def whoami(request):
    if request.user.is_authenticated:
        print('user authenticated')
        try:
            user = User.objects.get(email= request.user.email)
            print(user)
            if user:
                return JsonResponse({'email': request.user.email, 'user': user.id})
        except:
            return JsonResponse({'email': request.user.email, 'user': False})

    else:
        return Response(False)
@api_view(['GET','POST','PUT','DELETE'])
def guild(request):
    if request.method == 'GET':
        try:
            id = request.user
            user_id = id.id
            guild = Guild.objects.get(guild_master=user_id)
            serializer = GuildSerializer(guild)
            return Response(serializer.data)
        except:
            return Response(False)

    elif request.method == 'POST':
        print(request.data)
        try:
            user_guild = User.objects.get(id=request.data['guild_master'])        
            guild = Guild(name=request.data['name'],faction=request.data['faction'], server=request.data['server'], description_short=request.data['description_short'], description_full=request.data['description_full'], guild_master=user_guild)
            guild.save()
            guild.game.set([int(request.data['game'])])
            guild.save()
            return Response('create guild successful')
        except:
            return Response('create didnt work')
    elif request.method == 'PUT':
        id = request.user
        user_id = id.id
        guild = Guild.objects.get(guild_master=user_id)
        guild.name = request.data['name']
        guild.faction = request.data['faction']
        guild.server = request.data['server']
        guild.description_short = request.data['description_short']
        guild.description_full = request.data['description_full']
        guild.save()

        return Response('edit successful')

@api_view(['GET','POST','PUT','DELETE'])
def char(request):
    if request.method == 'GET':
        try:
            id = request.user
            user_id = id.id
            char = Char.objects.get(user=user_id)
            print(char)
            serializer = CharSerializer(char)
            return Response(serializer.data)
        except:
            return Response(False)

    elif request.method == 'POST':
        print(request.data)
        try:
            user_char = User.objects.get(id=request.data['user'])

            char = Char(name=request.data['name'],faction=request.data['faction'],spec=request.data['spec'], server=request.data['server'], role=request.data['role'], user=user_char)
            char.save()
            char.game.set([int(request.data['game'])])
            char.guild.set([int(request.data['guild'])])
            char.save()
            return Response('Post worked')
        except: 
            return Response('char post didnt work')

@api_view(['GET','POST'])
def leaderboard(request):
     
    season = 33
    bracket = 'rbg'
    response = requests.get(f'https://eu.api.blizzard.com/data/wow/pvp-season/{season}/pvp-leaderboard/{bracket}',params={'namespace':"dynamic-eu", 'locale':"en_US", 'access_token':{token}})
    
    resp = response.json()
    respl = resp['entries'][:10]
    
    
    return Response(respl)

@api_view(['GET'])
def news(request):
    api_key = str(os.getenv('VITE_api_key'))
    url = f'https://www.gamespot.com/api/articles/?api_key={api_key}&filter=association:5000-3919&format=json&limit=2&sort=publish_date:desc'
    headers = {'User-Agent':'its me'}
    response = requests.get(url,headers=headers)
    ponse = response.json()
    print(response.status_code)
    return Response(ponse)
