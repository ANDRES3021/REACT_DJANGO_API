from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from API import views
from API.views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


router = DefaultRouter()
router.register(r'joke', views.JokeModelViewSet, basename='joke')
router.register(r'user', views.UserModelViewSet, basename='user')
#router.register(r'getjoke', views.GetJokeModelViewSet, basename='getjoke')

urlpatterns = router.urls
urlpatterns += [
    path('admin/', admin.site.urls),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/jokeschuck/', views.Getjoke_APIView.as_view(), name="Getjoke" )
]
