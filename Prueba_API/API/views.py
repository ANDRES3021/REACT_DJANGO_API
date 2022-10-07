import json
from multiprocessing.sharedctypes import Value
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from API.serializers import JokeSerializer, UserSerializer
from API.models import Joke, User
from rest_framework.permissions import IsAuthenticated
import os
import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



class JokeModelViewSet(ModelViewSet):
    serializer_class = JokeSerializer 
    permission_classes = [IsAuthenticated]
    queryset = Joke.objects.all()

class UserModelViewSet(ModelViewSet):
    serializer_class = UserSerializer 
    queryset = User.objects.all()

class GetJokeModelViewSet(ModelViewSet):

#     if request.Metod == 'GET':
#         url = 'https://api.chucknorris.io/jokes/random'
#         r = requests.get(url, headers={'Authorization':'Bearer %s' % 'access_token'})
#         # droplets = r.json()
#         print(r)
#     else:
    serializer_class = JokeSerializer 
    queryset = Joke.objects.all()

class Getjoke_APIView(APIView):
    def get(self, request):
        url = 'https://api.chucknorris.io/jokes/random'
        r = requests.get(url, headers={'Authorization':'Bearer %s' % 'access_token'})
        if r:
            d = r.json()
            new_dic = {k: v for (k, v) in d.items() if k  == 'value'}
            j = json.dumps(new_dic, indent=None, sort_keys=False)
            print(type(j))
            return Response(j)
        else: 
            return(Http404)
        
    
    