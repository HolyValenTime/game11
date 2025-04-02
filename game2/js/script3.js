// Получение данных из сессии
const mobId = sessionStorage.getItem('mob_id');
const mobName = sessionStorage.getItem('mob_name');
const mobPicture = sessionStorage.getItem('mob_picture');
const mobRang = sessionStorage.getItem('mob_rang');
const mobBattleType = sessionStorage.getItem('mob_battle_type');
const mobLvl = sessionStorage.getItem('mob_lvl');
const mobExp = sessionStorage.getItem('mob_exp');
const mobExpBonus = sessionStorage.getItem('mob_exp_bonus');
const mobStrength = sessionStorage.getItem('mob_strength');
const mobIntelligence = sessionStorage.getItem('mob_intelligence');
const mobAgility = sessionStorage.getItem('mob_agility');
const mobMagic = sessionStorage.getItem('mob_magic');
const mobSpell1 = sessionStorage.getItem('mob_spell1');
const mobSpell2 = sessionStorage.getItem('mob_spell2');
const mobSpell3 = sessionStorage.getItem('mob_spell3');
const mobHpBonus = sessionStorage.getItem('mob_hp_bonus');
const mobMpBonus = sessionStorage.getItem('mob_mp_bonus');
const mobLoot1 = sessionStorage.getItem('mob_loot1');
const mobLoot2 = sessionStorage.getItem('mob_loot2');
const mobLoot3 = sessionStorage.getItem('mob_loot3');
const player_name = sessionStorage.getItem('name');
const userpic = sessionStorage.getItem('userpic');
const race = sessionStorage.getItem('race');
const raceBonus = sessionStorage.getItem('race_bonus');
const gender = sessionStorage.getItem('gender');
const strength = sessionStorage.getItem('strength');
const intelligence = sessionStorage.getItem('intelligence');
const agility = sessionStorage.getItem('agility');
const magic = sessionStorage.getItem('magic');
const lvl = sessionStorage.getItem('lvl');
const exp = sessionStorage.getItem('exp');
const art1 = sessionStorage.getItem('art1');
const art2 = sessionStorage.getItem('art2');
const art3 = sessionStorage.getItem('art3');
const pet = sessionStorage.getItem('pet');
const clanRelic = sessionStorage.getItem('clan_relic');
const petId = sessionStorage.getItem('pet_id');
const petName = sessionStorage.getItem('pet_name');
const petPicture = sessionStorage.getItem('pet_picture');
const petRang = sessionStorage.getItem('pet_rang');
const petRangBonus = sessionStorage.getItem('pet_rang_bonus');
const petLvl = sessionStorage.getItem('pet_lvl');
const petExp = sessionStorage.getItem('pet_exp');
const petHunger = sessionStorage.getItem('pet_hunger');
const petStrength = sessionStorage.getItem('pet_strength');
const petIntelligence = sessionStorage.getItem('pet_intelligence');
const petAgility = sessionStorage.getItem('pet_agility');
const petMagic = sessionStorage.getItem('pet_magic');
const petBonusType = sessionStorage.getItem('pet_bonus_type');
const petBonusEqual = sessionStorage.getItem('pet_bonus_equal');
const petSpell1 = sessionStorage.getItem('pet_spell1');
const petSpell2 = sessionStorage.getItem('pet_spell2');
const petAccessory = sessionStorage.getItem('pet_accessory');

// var characters = {
//     'blue_samurai': {'health': 100, 'attack': 15, 'defense': 10, 'magic': 40, 'skill': "Воин (+2 к атаке)", 'open': 0, 'level':0, 'name':'Синий самурай'},
//     'white_dragon': {'health': 120, 'attack': 20, 'defense': 11, 'magic': 80, 'skill': "Защитник (+1 к защите)", 'open': 0, 'level':0, 'name':'Белый дракон'},
//     'cowboy': {'health': 90, 'attack': 17, 'defense': 9, 'magic': 45, 'skill': 'Критический урон (шанс нанести доп. урон)', 'open': 0, 'level':0, 'name':'Ковбой'},
//     'demon': {'health': 140, 'attack': 23, 'defense': 23, 'magic': 80, 'skill': 13, 'open': 1, 'level':0, 'name':'Дьявол'},
//     'ogre_mage': {'health': 100, 'attack': 16, 'defense': 12, 'magic': 50, 'skill': 1, 'open': 0, 'level':0, 'name':'Огр-маг'},
//     'ogre': {'health': 110, 'attack': 19, 'defense': 10, 'magic': 30, 'skill': 6, 'open': 0, 'level':0, 'name':'Огр'},
//     'pink_dragon': {'health': 110, 'attack': 22, 'defense':11, 'magic': 80, 'skill': 'Мудрость (усиливает заклинания)', 'open': 1, 'level':0, 'name':'Розовый дракон'},
//     'pirate': {'health': 80, 'attack': 15, 'defense': 9, 'magic': 40, 'skill': 'Кража (крадёт ману у противника при атаке)', 'open': 0, 'level':0, 'name':'Пират'},
//     'zombie': {'health': 98, 'attack': 14, 'defense': 8, 'magic': 25, 'skill': 'none', 'open': 0, 'level':0, 'name':'Зомби'},
//     'haos': {'health': 150, 'attack': 20, 'defense': 10, 'magic': 60, 'skill': 'Бойня (ваша защита и защита противника опускается до 0)', 'open': 1, 'level':0, 'name':'Генерал Хаоса'},
//     'battle-angel': {'health': 150, 'attack': 20, 'defense': 10, 'magic': 60, 'skill': 'Призыв (Призывает Крестьянина)', 'open': 1, 'level':0, 'name':'Боевой Ангел'},
//     'village': {'health': 50, 'attack': 15, 'defense': 15, 'magic': 20, 'skill': 'none', 'open': 1, 'level':0, 'name':'Крестьянин'}
// };

// function PvEm(){
//     var mZone = document.querySelector('.PvEmode');
//     mZone.style.display = 'none';

    // var menuZone = document.querySelector('.vs-zone');
    // menuZone.style.display = 'inline-flex';
    // if (level2_open==false){
    //     let l2Zone = document.querySelector('.level2');
    //     l2Zone.style.display = 'none';
    // }
    
// }
var player_skill = 0;
var player_open =0;
var player_level= 0;
var noninvis=false;
var choose_pl=true;
var choose_en=true;
var player_health = 100 + strength*10+5*lvl-5;
var player_attack = 10 + strength*5 + intelligence*2 + agility*10+lvl-1;
var player_defense =10 + strength*5 + intelligence*6 + agility*10+lvl-1;
var player_magic = 50 + intelligence*12 + magic*20+lvl*3-3;
var enemy_health = 100 + mobStrength*10+5*mobLvl-5;
var enemy_attack = 10 + mobStrength*5 + mobIntelligence*2 + mobAgility*10+mobLvl-1;
var enemy_defense =10 + mobStrength*5 + mobIntelligence*6 + mobAgility*10+mobLvl-1;
var enemy_magic = 50 + mobIntelligence*12 + mobMagic*20+mobLvl*3-3;
console.log(mobAgility);
// var enemy_health = 3;
// var enemy_attack = 0;
// var enemy_defense = 0;
// var enemy_magic = 0;
var enemy_skill = 0;
var player_passive=false;
var enemy_open = 0;
var enemy_level= 0;
var enemy_name= mobName;
var yourStatElement = 0;
let plhl_previous =0
let plhl_now = 0
let plat_previous =0
let plat_now = 0
let pldf_previous =0
let pldf_now = 0
let angel_one = false
let angel_health = player_health
let angel_attack = player_attack
let angel_defense = player_defense
let angel_skill = player_skill
let angel_magic = player_magic
let angel_priz=false


// Функция для выбора персонажа
// function chooseCharacter_player(characterName) {
//     player_health = characters[characterName]['health'];
//     player_attack = characters[characterName]['attack'];
//     player_defense = characters[characterName]['defense'];
//     player_magic = characters[characterName]['magic'];
//     player_skill = characters[characterName]['skill'];
//     player_open = characters[characterName]['open'];
//     player_level= characters[characterName]['level'];
//     player_name= characters[characterName]['name'];
    let player_start=player_health
//     player_passive=false;
//     angel_priz==false;
//     angel_one = true
yourStatElement = document.querySelector('.your-stat');
    choose_pl=true;
yourStatElement.textContent = `${player_name}\n
//     Здоровье: ${player_health}\n
//     Мана: ${player_magic}\n
//     Атака: ${player_attack}\n
//     Защита: ${player_defense}`;
//     var blueSamuraiImage = document.querySelector('.blue-port');
//     blueSamuraiImage.src = ('img/'+characterName+'.jpeg');
//     if (player_skill==="Воин (+2 к атаке)" ||player_skill==="Защитник (+1 к защите)" 
//     ||player_skill==='Бойня (ваша защита и защита противника опускается до 0)' 
//     ||player_skill==='Возврат во времени (Ваше здоровье и здоровье противника возвращаются к стартовому)'
//     ||player_skill==='Призыв (Призывает Крестьянина)'){
//         player_passive=true;
//     }
//     if (player_skill==='Призыв (Призывает Крестьянина)'){
//         player_passive=true;
//         angel_priz=true
//     }
//     if (choose_en && choose_pl && true){
    var battleZone = document.querySelector('.battle-zone');
    battleZone.style.display = 'inline';
//     var menuZone = document.querySelector('.vs-zone');
//     menuZone.style.display = 'none';

//     }}

// var enemyStatElement = 0
// function chooseCharacter_enemy(characterName) {
//     enemy_health = characters[characterName]['health'];
//     enemy_attack = characters[characterName]['attack'];
//     enemy_defense = characters[characterName]['defense'];
//     enemy_magic = characters[characterName]['magic'];
//     enemy_skill = characters[characterName]['skill'];
//     enemy_open = characters[characterName]['open'];
//     enemy_level= characters[characterName]['level'];
//     enemy_name= characters[characterName]['name'];
    enemyStatElement = document.querySelector('.en-stat');
    let enemy_start=enemy_health
    enemyStatElement.textContent = `${enemy_name} \n   
//     Здоровье: ${enemy_health}\n
//     Мана: ${enemy_magic}\n
//     Атака: ${enemy_attack}\n
//     Защита: ${enemy_defense}`;
    var choose_en=true;
    var redSamuraiImage = document.querySelector('.red-port');
    redSamuraiImage.src = ('img/'+characterName+'.jpeg');
//     if (choose_en && choose_pl && true){
        var battleZone = document.querySelector('.battle-zone');
        battleZone.style.display = 'inline';
//         var menuZone = document.querySelector('.vs-zone');
//         menuZone.style.display = 'none';
//         }
// }
var pl_hit = 0
var en_hit = 0 
function scorehit(){
    pl_hit = enemy_attack - player_defense;
    if (pl_hit<1){
        pl_hit=1
    }
    en_hit = player_attack - enemy_defense;
    if(player_skill=='Критический урон (шанс нанести доп. урон)'){
        let chance= (Math.floor(Math.random() *(100-1+1)+1))
        if (chance>74){en_hit+=Math.floor(Math.random() * player_attack)}
    }
    if (en_hit<1){
        en_hit=1
    }    
}


function enemy_move() {
    scorehit();
    if (pl_hit < 5 && enemy_magic>19){
        var enemymoving = document.querySelector('.enemy_move');
        enemy_attack+=5
        enemy_magic-=20
        enemymoving.textContent = `${enemy_name} использует Жажду крови (+5 к атаке)`;
        return 0        
    }
    if (en_hit < 5 && enemy_magic>14){
        var enemymoving = document.querySelector('.enemy_move');
        enemy_defense+=5
        enemy_magic-=15
        enemymoving.textContent = `${enemy_name} использует Каменную кожу (+5 к защите)`;
        return 0        
    }
    if (enemy_health < 50 && enemy_magic>9 && en_hit<19){
        var enemymoving = document.querySelector('.enemy_move');
        enemy_health+=20
        enemy_magic-=10
        enemymoving.textContent = `${enemy_name} использует Лечение (+20 к здоровью)`;
        return 0        
    }
    var enemymoving = document.querySelector('.enemy_move');
    player_health=player_health-pl_hit
    enemymoving.textContent = `${enemy_name} атакует и наносит ${pl_hit} урона.`;
            
}
function showbattlestat(){
    yourStatElement.textContent = `${player_name}\n
    Здоровье: ${player_health}\n
    Мана: ${player_magic}\n
    Атака: ${player_attack}\n
    Защита: ${player_defense}`;
    enemyStatElement.textContent = `${enemy_name}\n
    Здоровье: ${enemy_health}\n
    Мана: ${enemy_magic}\n
    Атака: ${enemy_attack}\n
    Защита: ${enemy_defense}`;
}

function skill_function(player_skill){
    if(player_skill == 'Воин (+2 к атаке)'){
        player_attack+=2;
    }
    if(player_skill == 'Защитник (+1 к защите)'){
        player_defense+=1;
    }
    if(player_skill == 'Бойня (ваша защита и защита противника опускается до 0)'){
        enemy_defense=0
        player_defense=0
    }
    if(player_skill == 'Призыв (Призывает Крестьянина)' && angel_one==true){
        angel_health = player_health
        angel_attack = player_attack
        angel_defense = player_defense
        angel_skill = player_skill
        angel_magic = player_magic
        player_health = 50
        player_defense = 15
        player_attack= 15
        player_magic = 20
        player_skill = 'none'
        player_passive=false;
        yourStatElement = document.querySelector('.your-stat');
        yourStatElement.textContent = `${player_name}\n
        Здоровье: ${player_health}\n
        Мана: ${player_magic}\n
        Атака: ${player_attack}\n
        Защита: ${player_defense}`;
        var blueSamuraiImage = document.querySelector('.blue-port');
        blueSamuraiImage.src = ('img/village.jpeg');
        angel_priz=true
        angel_one = false
    }
    
}

function allattackclick(name){
    //Атака
    if (name == 'attack'){
    
    scorehit();
    var playermoving = document.querySelector('.player_move');
    enemy_health=enemy_health-en_hit
    playermoving.textContent = `${player_name} атакует и наносит ${en_hit} урона.`;
    magic_kr=Math.floor(enemy_magic/20)
    if (player_skill=='Кража (крадёт ману у противника при атаке)' && magic_kr>0){
        enemy_magic-=magic_kr
        player_magic+=magic_kr
        playermoving.textContent = `${player_name} атакует и наносит ${en_hit} урона, украв ${magic_kr} маны у противника.`;
    }
    enemy_move();
    showbattlestat(); Condition();
    return 0} 

    //Лечение
    if(name == 'heal' && player_magic>=10){
    plhl_previous=player_health;
    player_health+=20;
    player_magic-=10;
    if(player_skill=='Мудрость (усиливает заклинания)'){
        player_health+=5;
    }
    plhl_now=player_health
    var playermoving = document.querySelector('.player_move');
    playermoving.textContent = `${player_name} испольует Лечение (+ ${plhl_now-plhl_previous} к  здоровью)`;
    enemy_move();
    showbattlestat();Condition(); return 0} else{
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if(name == 'block' && player_magic>=15){
        pldf_previous=player_defense
        player_defense+=5;
        player_magic-=15;
        if(player_skill=='Мудрость (усиливает заклинания)'){
            player_defense+=2;
        }
        pldf_now=player_defense
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Каменную кожу (+ ${pldf_now-pldf_previous} к  защите)`;
        enemy_move();
        showbattlestat();Condition();
        return 0 } else{
            var playermoving = document.querySelector('.player_move');
            playermoving.textContent = `Не хватает маны`;
        }
    
    if(name == 'fire' && player_magic>=20){
        plat_previous=player_attack
        player_attack+=5;
        player_magic-=20;
        if(player_skill=='Мудрость (усиливает заклинания)'){
            player_attack+=2;
        }
        plat_now=player_attack
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Жажду крови (+ ${plat_now-plat_previous} к  атаке)`;
        enemy_move();
        showbattlestat();Condition(); return 0} else{
            var playermoving = document.querySelector('.player_move');
            playermoving.textContent = `Не хватает маны`;
        }
        if(name == 'light' && player_magic>=9){
            player_magic-=10
            scorehit();
            en_hit=10
            if(player_skill=='Мудрость (усиливает заклинания)'){
                en_hit+=5;
            }
            var playermoving = document.querySelector('.player_move');
            enemy_health=enemy_health-en_hit
            playermoving.textContent = `${player_name} использует Молнию и наносит ${en_hit} урона.`;
            enemy_move();
            showbattlestat();Condition(); return 0} else{
                var playermoving = document.querySelector('.player_move');
                playermoving.textContent = `Не хватает маны`;
            }

        if (name === 'skill' && player_skill !== "none" && player_passive === true) {
            var playermoving = document.querySelector('.player_move');
            playermoving.textContent = `${player_name} использует навык ${player_skill}`;
            skill_function(player_skill);
            enemy_move();
            showbattlestat();
            Condition();
            return 0;
        } else if (player_passive === false) {
            var enemymoving = document.querySelector('.enemy_move');
            enemymoving.textContent = "";
            var playermoving = document.querySelector('.player_move');
            playermoving.textContent = `${player_name} обладает пассивным навыком ${player_skill}`;
        } else {
            var enemymoving = document.querySelector('.enemy_move');
            enemymoving.textContent = "";
            var playermoving = document.querySelector('.player_move');
            playermoving.textContent = `${player_name} не обладает навыками`;
        }
    }        

document.addEventListener('keyup', 
function(event){
    if (event.keyCode === 82){
        allattackclick('attack')
    }
    if (event.keyCode === 69){
        allattackclick('heal')
    }
    if (event.keyCode === 87){
        allattackclick('fire')
    }
    if (event.keyCode === 81){
        allattackclick('block')
    }
    if (event.keyCode === 32){
        allattackclick('skill')
    }
    if (event.keyCode === 70){
        allattackclick('light')
    }
    if (event.keyCode === 86){
        spamAttack()
    }
})

function spamAttack() {
    while (enemy_health > 0 && player_health > 0) {
        for (let i = 0; i < 10; i++) {
            scorehit();
            var playermoving = document.querySelector('.player_move');
            enemy_health=enemy_health-en_hit
            playermoving.textContent = `${player_name} атакует и наносит ${en_hit} урона.`;
            magic_kr=Math.floor(enemy_magic/20)
            if (player_skill=='Кража (крадёт ману у противника при атаке)' && magic_kr>0){
                enemy_magic-=magic_kr
                player_magic+=magic_kr
                playermoving.textContent = `${player_name} атакует и наносит ${en_hit} урона, украв ${magic_kr} маны у противника.`;
            }
            enemy_move();
            showbattlestat();
            if(enemy_health < 0 || player_health < 0){i=1000}
        }
    }
    alert(`
    Результаты Авто-боя:\n
    ${player_name}\n
    Здоровье: ${player_health}\n
    Мана: ${player_magic}\n
    Атака: ${player_attack}\n
    Защита: ${player_defense}\n
    ${enemy_name}\n\n
    Здоровье: ${enemy_health}\n
    Мана: ${enemy_magic}\n
    Атака: ${enemy_attack}\n
    Защита: ${enemy_defense}`)
    Condition();
}


function Condition(){
    // if(angel_priz==true && player_health<=0){
    //     player_health = angel_health
    //     player_attack = angel_attack
    //     player_defense = angel_defense
    //     player_magic = angel_magic
    //     angel_priz=false
    //     yourStatElement = document.querySelector('.your-stat');
    //     yourStatElement.textContent = `${player_name}\n
    //     Здоровье: ${player_health}\n
    //     Мана: ${player_magic}\n
    //     Атака: ${player_attack}\n
    //     Защита: ${player_defense}`;
    //     var blueSamuraiImage = document.querySelector('.blue-port');
    //     blueSamuraiImage.src = ('img/battle-angel.jpeg');
    // }
    // if (player_health<=0){
    //     noninvis=false;
    //     choose_pl=false;
    //     choose_en=false;
    //     player_health = 1;
    //     player_attack = 0;
    //     player_defense =0;
    //     player_magic = 0;
    //     player_skill = 0;
    //     player_open =0;
    //     player_level= 0;
    //     player_name=0;
    //     enemy_health = 1;
    //     enemy_attack = 0;
    //     enemy_defense = 0;
    //     enemy_magic = 0;
    //     enemy_skill = 0;
    //     angel_one = false
    //     player_passive==false
    //     enemy_open = 0;
    //     enemy_level= 0;
    //     enemy_name= 0;  
    //     var battleZone = document.querySelector('.battle-zone');
    //     // battleZone.style.display = 'none';
    //     var menuZone = document.querySelector('.vs-zone');
    //     // menuZone.style.display = 'none';
    //     var mZone = document.querySelector('.PvEmode');
    //     mZone.style.display = 'flex';
    //     alert("Вы проиграли !!!")
    // }
    // if (enemy_health<=0){
    //     noninvis=false;
    //     choose_pl=false;
    //     choose_en=false;
    //     player_health = 1;
    //     player_attack = 0;
    //     player_defense =0;
    //     angel_one = false
    //     player_magic = 0;
    //     player_skill = 0;
    //     player_open =0;
    //     player_level= 0;
    //     player_name=0;
    //     enemy_health = 1;
    //     enemy_attack = 0;
    //     enemy_defense = 0;
    //     enemy_magic = 0;
    //     enemy_skill = 0;
    //     enemy_open = 0;
    //     enemy_level= 0;
    //     enemy_name= 0;

    //     player_passive==false
    //     alert("Вы победили !!!")
    //     var battleZone = document.querySelector('.battle-zone');
    //     // battleZone.style.display = 'none';
    //     var menuZone = document.querySelector('.vs-zone');
    //     // menuZone.style.display = 'none';
    //     var mZone = document.querySelector('.PvEmode');
    //     mZone.style.display = 'flex';

    // }
}

// Изменяем стиль на 'block' для отображения
// var enStatElement = document.querySelector('.en-stat');
// enStatElement.textContent = 'Новый текст';

