from random import choices
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

FACTIONS = (
    ("ALLIANCE", "Alliance"),
    ("HORDE", "Horde"),
)
SERVER = (
    ("AMNENNAR", "Amnennar(French)"),
    ("ASHBRINGER", "Ashbringer(English)")
)

SPEC = (
    ("DPS", "DPS"),
    ("TANK", "Tank"),
    ("HEALER", "Healer"),
    ("HYBRID", "Hybrid"),
)
ROLE = (
    ("DRUID","Druid"),
    ("HUNTER", "Hunter"),
    ("MAGE","Mage"),
    ("PALADIN", "Paladin"),
    ("PRIEST", "Priest"),
    ("ROGUE", "Rogue"),
    ("SHAMAN", "Shaman"),
    ("WARLOCK", "Warlock"),
    ("WARRIOR", "Warrior"),
)

# class _spec (models.TextChoices):
#     DPS = 'DPS', _('DPS')
#     TANK = 'Tank', _('Tank')
#     HEALER = 'Healer', _('Healer')
#     HYBRID = 'Hybrid', _('Hybrid')


class AppUser(AbstractUser):
    email =  models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Game(models.Model):
    name = models.CharField( max_length=100,unique=True, null=False)
    guild_size = models.IntegerField()

class Guild(models.Model):
    name = models.CharField(max_length=50 ,unique=True, null=False)
    game = models.ManyToManyField(Game, default=[2],blank=True)
    faction = models.TextField(choices=FACTIONS, default='Alliance')
    server = models.TextField(choices=SERVER, default='Ashbringer')
    description_short = models.TextField(default="New Guild")
    description_full = models.TextField(default="Guild description")



class Char(models.Model):
    name = models.CharField( max_length=50,unique=True, null=False)
    faction = models.TextField(choices=FACTIONS, default='Alliance')
    spec = models.TextField(choices=SPEC, default='DPS')
    server = models.TextField(choices=SERVER, default='Ashbringer')
    role = models.TextField(choices=ROLE, default='Druid')
    guild = models.ManyToManyField(Guild)
    game = models.ManyToManyField(Game)