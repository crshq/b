var gamesList = [
"1 on 1 Basketball.swf",
"100_m_race.swf",
"10SecondChallenge.swf",
"1on1soccer.swf",
"3-slices-2.swf",
"3_slices_.swf",
"8 bit dash.swf",
"Abuba the Alien.swf",
"Ace Gangster Taxi.swf",
"Achievement Unlocked 1.swf",
"Achievement Unlocked 2.swf",
"Achievement Unlocked 3.swf",
"Adrenaline Challenge.swf",
"Adventure Story.swf",
"Amberial.swf",
"AmericanRacing.swf",
"An Escape Series 1.swf",
"An Escape Series 2.5.swf",
"An Escape Series 2.swf",
"Angry Birds HD Halloween.swf",
"Angry Birds HD.swf",
"Ant Buster.swf",
"Ant War.swf",
"ArkandianCrusade.swf",
"ArkandianExplorer.swf",
"ArkandianRevenant.swf",
"Asteroids.swf",
"Atari Breakout.swf",
"Bad Piggies.swf",
"BasketBalls.swf",
"Basketball Legends.swf",
"BattleScribes.swf",
"Bloons Tower Defense 5 (BTD5).swf",
"Bloons.swf",
"BloonsSuperMonkey.swf",
"BloonsTowerDefense1.swf",
"BloonsTowerDefense2.swf",
"BottleCapper.swf",
"Brutal.swf",
"ClobeThePortalAdventure.swf",
"CoastRunners.swf",
"CoasterRacer2.swf",
"CoasterRacer3.swf",
"ColorJoy.swf",
"CookieHamster.swf",
"Cubefield.swf",
"CycloManiacs2.swf",
"Dig to China - Unblocked Adventures.swf",
"DigToChinaHacked.swf",
"Divide.swf",
"DoodleGod2.swf",
"DriftRunners3D.swf",
"DuckLife3Evolution.swf",
"Duck_Life_2.swf",
"DudeAndZombies.swf",
"DungeonDeveloper.swf",
"DuskDrive.swf",
"EffingFruits.swf",
"EffingMachines.swf",
"ElementsOfArkandia.swf",
"EmmaADayAtTheZoo.swf",
"Enough Plumbers - Unblocked Games 24h.swf",
"EverRisingWater.swf",
"Factory Balls 1.swf",
"Factory Balls 2.swf",
"Factory Balls 3.swf",
"Factory Balls 4.swf",
"Fireboy and Watergirl 2.swf",
"Fireboy and Watergirl 3.swf",
"Fireboy and Watergirl.swf",
"Flappy Bird.swf",
"Flight.swf",
"FlyingCookieQuest.swf",
"FormulaRacer.swf",
"FormulaRacer2012.swf",
"FreeRider.swf",
"FreeRider2.swf",
"Frog Fractions.swf",
"GiantsAndDwarvesTD.swf",
"GlobalWarming.swf",
"GrandPrixGo.swf",
"HeatRushFuture.swf",
"HeatRushUSA.swf",
"HiredHeroes.swf",
"HobbitLaunch.swf",
"IcyGifts2.swf",
"LearnToFly2.swf",
"LegendsOfKong.swf",
"MonsterLegions.swf",
"MushroomMadness3.swf",
"N.swf",
"NanoKingdoms.swf",
"NeonRace.swf",
"OKParking.swf",
"OKParking2.swf",
"ParkingSpace.swf",
"ParkingSpace2.swf",
"ParkingSpace3.swf",
"Pickies.swf",
"PrincessSaver.swf",
"PrizmaPuzzleChallenges.swf",
"QuickQuests.swf",
"Raze.swf",
"RobotsVSZombi.swf",
"RodHotsHotRodRacing.swf",
"RollerRider.swf",
"Run.swf",
"RunDoggyRun.swf",
"SSF2 1.1.0.swf",
"SmashFlash2.swf",
"SoccerBalls2.swf",
"SpacePunkRacer.swf",
"StarClaws.swf",
"StickFigureBadminton2.swf",
"Super Mario CrossOver.swf",
"Super Mario World.swf",
"Super Smash Flash 2.swf",
"SuperFishing.swf",
"SuperSmashFlash2.swf",
"Tank Trouble 2.swf",
"TimeToPark.swf",
"TimeToPark2.swf",
"ToadTrouble.swf",
"TrapTheTiger.swf",
"TrickyRick.swf",
"TruckLoader4.swf",
"TurboGolf.swf",
"UltimateSantaBattle.swf",
"VampirePhysics.swf",
"Wonderputt.swf",
"WoodenPath2.swf",
"ace gangster.swf",
"adventurecapitalist.swf",
"aknightsquestformilk.swf",
"bad-ice-cream.swf",
"box-clever-2.swf",
"busman-parking-3d.swf",
"catmario.swf",
"gravity-boy.swf",
"hardest-free-game.swf",
"hardest-game.swf",
"liftoff-2012.swf",
"mario_flash2.swf",
"meteors-640x480.swf",
"penguin-bubble.swf",
"pest-destroyer.swf",
"pvz.swf",
"supermario63.swf",
"tangerine-tycoon.swf",
"tanks.swf",
"unfair-mario.swf",
"uniwords-750x600.swf"
]
document.getElementById('header').innerHTML = gamesList.length + "-Game Website"
let f = document.createElement('select');
f.setAttribute("name", "flash");
for (var i = 0; i < gamesList.length; i++) {
  var dried_flesh = encodeURIComponent(gamesList[i]);
  var elder_manich = gamesList[i];
  var e = document.createElement('option');
  e.value = dried_flesh;
  e.innerText = elder_manich;
  f.appendChild(e);
}
document.getElementById('form').appendChild(f);
