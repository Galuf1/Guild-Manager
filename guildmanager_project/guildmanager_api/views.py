from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Guild, Game, Char
from .models import AppUser as User
from .serializers import GuildSerializer


def index(request): 
    print('home!')
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
