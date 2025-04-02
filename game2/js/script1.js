// Получение данных из сессии
// const mobId = sessionStorage.getItem('mob_id');
// const mobName = sessionStorage.getItem('mob_name');
// const mobPicture = sessionStorage.getItem('mob_picture');
// const mobRang = sessionStorage.getItem('mob_rang');
// const mobBattvarype = sessionStorage.getItem('mob_battle_type');
// const mobLvl = sessionStorage.getItem('mob_lvl');
// const mobExp = sessionStorage.getItem('mob_exp');
// const mobExpBonus = sessionStorage.getItem('mob_exp_bonus');
// const mobStrength = sessionStorage.getItem('mob_strength');
// const mobIntelligence = sessionStorage.getItem('mob_intelligence');
// const mobAgility = sessionStorage.getItem('mob_agility');
// const mobMagic = sessionStorage.getItem('mob_magic');
// const mobSpell1 = sessionStorage.getItem('mob_spell1');
// const mobSpell2 = sessionStorage.getItem('mob_spell2');
// const mobSpell3 = sessionStorage.getItem('mob_spell3');
// const mobHpBonus = sessionStorage.getItem('mob_hp_bonus');
// const mobMpBonus = sessionStorage.getItem('mob_mp_bonus');
// const mobLoot1 = sessionStorage.getItem('mob_loot1');
// const mobLoot2 = sessionStorage.getItem('mob_loot2');
// const mobLoot3 = sessionStorage.getItem('mob_loot3');
// const player_name = sessionStorage.getItem('name');
// const userpic = sessionStorage.getItem('userpic');
// const race = sessionStorage.getItem('race');
// const raceBonus = sessionStorage.getItem('race_bonus');
// const gender = sessionStorage.getItem('gender');
// const strength = sessionStorage.getItem('strength');
// const intelligence = sessionStorage.getItem('intelligence');
// const agility = sessionStorage.getItem('agility');
// const magic = sessionStorage.getItem('magic');
// const lvl = sessionStorage.getItem('lvl');
// const exp = sessionStorage.getItem('exp');
// const art1 = sessionStorage.getItem('art1');
// const art2 = sessionStorage.getItem('art2');
// const art3 = sessionStorage.getItem('art3');
// const pet = sessionStorage.getItem('pet');
// const clanRelic = sessionStorage.getItem('clan_relic');
// const petId = sessionStorage.getItem('pet_id');
// const petName = sessionStorage.getItem('pet_name');
// const petPicture = sessionStorage.getItem('pet_picture');
// const petRang = sessionStorage.getItem('pet_rang');
// const petRangBonus = sessionStorage.getItem('pet_rang_bonus');
// const petLvl = sessionStorage.getItem('pet_lvl');
// const petExp = sessionStorage.getItem('pet_exp');
// const petHunger = sessionStorage.getItem('pet_hunger');
// const petStrength = sessionStorage.getItem('pet_strength');
// const petIntelligence = sessionStorage.getItem('pet_intelligence');
// const petAgility = sessionStorage.getItem('pet_agility');
// const petMagic = sessionStorage.getItem('pet_magic');
// const petBonusType = sessionStorage.getItem('pet_bonus_type');
// const petBonusEqual = sessionStorage.getItem('pet_bonus_equal');
// const petSpell1 = sessionStorage.getItem('pet_spell1');
// const petSpell2 = sessionStorage.getItem('pet_spell2');
// const petAccessory = sessionStorage.getItem('pet_accessory');

var characters = {
    'blue_samurai': { 'health': 200, 'attack': 18, 'defense': 12, 'magic': 80, 'skill': "Воин (+2 к атаке)", 'open': 0, 'level': 0, 'name': 'Синий самурай' },
    'white_dragon': { 'health': 240, 'attack': 22, 'defense': 13, 'magic': 160, 'skill': "Защитник (+1 к защите)", 'open': 0, 'level': 0, 'name': 'Белый дракон' },
    'cowboy': { 'health': 180, 'attack': 20, 'defense': 10, 'magic': 90, 'skill': 'Критический урон (шанс нанести доп. урон)', 'open': 0, 'level': 0, 'name': 'Ковбой' },
    'lucifer': { 'health': 280, 'attack': 26, 'defense': 25, 'magic': 160, 'skill': 13, 'open': 1, 'level': 0, 'name': 'Дьявол' },
    'ogre_mage': { 'health': 200, 'attack': 19, 'defense': 14, 'magic': 100, 'skill': 1, 'open': 0, 'level': 0, 'name': 'Огр-маг' },
    'ogre': { 'health': 220, 'attack': 22, 'defense': 12, 'magic': 60, 'skill': 6, 'open': 0, 'level': 0, 'name': 'Огр' },
    'pink_dragon': { 'health': 220, 'attack': 24, 'defense': 13, 'magic': 160, 'skill': 'Мудрость (усиливает заклинания)', 'open': 1, 'level': 0, 'name': 'Розовый дракон' },
    'pirate': { 'health': 160, 'attack': 18, 'defense': 11, 'magic': 80, 'skill': 'Кража (крадёт ману у противника при атаке)', 'open': 0, 'level': 0, 'name': 'Пират' },
    'zombie': { 'health': 196, 'attack': 16, 'defense': 10, 'magic': 50, 'skill': 'none', 'open': 0, 'level': 0, 'name': 'Зомби' },
    'haos': { 'health': 300, 'attack': 24, 'defense': 12, 'magic': 120, 'skill': 'Бойня (ваша защита и защита противника опускается до 0)', 'open': 1, 'level': 0, 'name': 'Генерал Хаоса' },
    'battle-angel': { 'health': 300, 'attack': 22, 'defense': 12, 'magic': 120, 'skill': 'Призыв (Призывает Крестьянина)', 'open': 1, 'level': 0, 'name': 'Боевой Ангел' },
    'village': { 'health': 100, 'attack': 18, 'defense': 16, 'magic': 40, 'skill': 'none', 'open': 1, 'level': 0, 'name': 'Крестьянин' }
};



function PvEm() {
    var mZone = document.querySelector('.PvEmode');
    mZone.style.display = 'none';

    var menuZone = document.querySelector('.vs-zone');
    menuZone.style.display = 'inline-flex';
    // if (level2_open == false) {
    //     var l2Zone = document.querySelector('.level2');
    //     l2Zone.style.display = 'none';
    // }

}
var player_skill = 0;
var player_open = 0;
var player_level = 0;
var noninvis = false;
var choose_pl = false;
var choose_en = false;
var player_health = 0;
var player_attack = 0;
var player_defense = 0;
var player_magic = 0;
var enemy_health = 0;
var enemy_attack = 0;
var enemy_defense = 0;
var enemy_magic = 0;
var enemy_health = 3;
var enemy_attack = 0;
var enemy_defense = 0;
var enemy_magic = 0;
var enemy_skill = 0;
var player_passive = false;
var enemy_open = 0;
var enemy_level = 0;
var enemy_name = '';
var yourStatElement = 0;
var plhl_previous = 0
var plhl_now = 0
var plat_previous = 0
var plat_now = 0
var pldf_previous = 0
var pldf_now = 0
var angel_one = false
var angel_health = player_health
var angel_attack = player_attack
var angel_defense = player_defense
var angel_skill = player_skill
var angel_magic = player_magic
var angel_priz = false
var player_kombo = 0;
var player_vampire_style = true
var angel_priz = false
var enemy_poison = false
var player_fire_shield = false
var player_heavenly_shield = false
var player_heavenly_armor = false
var enemy_plaque = false
var player_vampire_style = false
var enemy_silence = 0
var player_regen = false
var player_storm = false
var enemy_kombo = 0;
function savePlayerSettings() {
    let characterName = document.getElementById("playerCharacter").value;
    characters[characterName].health = parseInt(document.getElementById("playerHealth").value);
    characters[characterName].attack = parseInt(document.getElementById("playerAttack").value);
    characters[characterName].defense = parseInt(document.getElementById("playerDefense").value);
    characters[characterName].magic = parseInt(document.getElementById("playerMagic").value);
    alert(`Настройки для ${characters[characterName].name} сохранены!`);
}

function saveEnemySettings() {
    let characterName = document.getElementById("enemyCharacter").value;
    characters[characterName].health = parseInt(document.getElementById("enemyHealth").value);
    characters[characterName].attack = parseInt(document.getElementById("enemyAttack").value);
    characters[characterName].defense = parseInt(document.getElementById("enemyDefense").value);
    characters[characterName].magic = parseInt(document.getElementById("enemyMagic").value);
    alert(`Настройки для ${characters[characterName].name} сохранены!`);
}

var enemyStatElement = 0
// Функция для выбора персонажа
function chooseCharacter_player(characterName) {
    player_health = characters[characterName]['health'];
    player_attack = characters[characterName]['attack'];
    player_defense = characters[characterName]['defense'];
    player_magic = characters[characterName]['magic'];
    player_skill = characters[characterName]['skill'];
    player_open = characters[characterName]['open'];
    player_level = characters[characterName]['level'];
    player_name = characters[characterName]['name'];
    var player_start = player_health
    player_passive = false;
    angel_priz == false;
    angel_one = true
    yourStatElement = document.querySelector('.your-stat');
    choose_pl = true;
    yourStatElement.textContent = `${player_name}\n
//     Здоровье: ${player_health}\n
//     Мана: ${player_magic}\n
//     Атака: ${player_attack}\n
//     Защита: ${player_defense}`;
    var blueSamuraiImage = document.querySelector('.blue-port');
    blueSamuraiImage.src = ('img/' + characterName + '.jpeg');
    if (player_skill === "Воин (+2 к атаке)" || player_skill === "Защитник (+1 к защите)"
        || player_skill === 'Бойня (ваша защита и защита противника опускается до 0)'
        || player_skill === 'Возврат во времени (Ваше здоровье и здоровье противника возвращаются к стартовому)'
        || player_skill === 'Призыв (Призывает Крестьянина)') {
        player_passive = true;
    }
    if (player_skill === 'Призыв (Призывает Крестьянина)') {
        player_passive = true;
        angel_priz = true
    }
    if (choose_en && choose_pl && true) {
        var battleZone = document.querySelector('.battle-zone');
        battleZone.style.display = 'inline';
        var menuZone = document.querySelector('.vs-zone');
        menuZone.style.display = 'none';

    }
}

function chooseCharacter_enemy(characterName) {
    enemy_health = characters[characterName]['health'];
    enemy_attack = characters[characterName]['attack'];
    enemy_defense = characters[characterName]['defense'];
    enemy_magic = characters[characterName]['magic'];
    enemy_skill = characters[characterName]['skill'];
    enemy_open = characters[characterName]['open'];
    enemy_level = characters[characterName]['level'];
    enemy_name = characters[characterName]['name'];
    enemyStatElement = document.querySelector('.en-stat');
    var enemy_start = enemy_health
    enemyStatElement.textContent = `${enemy_name} \n   
//     Здоровье: ${enemy_health}\n
//     Мана: ${enemy_magic}\n
//     Атака: ${enemy_attack}\n
//     Защита: ${enemy_defense}`;
    var choose_en = true;
    var redSamuraiImage = document.querySelector('.red-port');
    redSamuraiImage.src = ('img/' + characterName + '.jpeg');
    if (choose_en && choose_pl && true) {
        var battleZone = document.querySelector('.battle-zone');
        battleZone.style.display = 'inline';
        var menuZone = document.querySelector('.vs-zone');
        menuZone.style.display = 'none';
    }
}
var pl_hit = 0
var en_hit = 0
function scorehit() {
    pl_hit = enemy_attack - player_defense;
    if (pl_hit < 1) {
        pl_hit = 1
    }
    en_hit = player_attack - enemy_defense;
    if (player_skill == 'Критический урон (шанс нанести доп. урон)') {
        var chance = (Math.floor(Math.random() * (100 - 1 + 1) + 1))
        if (chance > 74) { en_hit += Math.floor(Math.random() * player_attack) }
    }
    if (en_hit < 1) {
        en_hit = 1
    }
}


function enemy_move() {
    scorehit();
    if (pl_hit < 5 && enemy_magic > 19) {
        var enemymoving = document.querySelector('.enemy_move');
        enemy_attack += 5
        enemy_magic -= 20
        enemymoving.textContent = `${enemy_name} использует Жажду крови (+5 к атаке)`;
        return 0
    }
    if (en_hit < 5 && enemy_magic > 14) {
        var enemymoving = document.querySelector('.enemy_move');
        enemy_defense += 5
        enemy_magic -= 15
        enemymoving.textContent = `${enemy_name} использует Каменную кожу (+5 к защите)`;
        return 0
    }
    if (enemy_health < 50 && enemy_magic > 9 && en_hit < 19) {
        var enemymoving = document.querySelector('.enemy_move');
        enemy_health += 20
        enemy_magic -= 10
        enemymoving.textContent = `${enemy_name} использует Лечение (+20 к здоровью)`;
        return 0
    }
    var enemymoving = document.querySelector('.enemy_move');
    player_health = player_health - pl_hit
    enemymoving.textContent = `${enemy_name} атакует и наносит ${pl_hit} урона.`;

}
function showbattlestat() {
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

function skill_function(player_skill) {
    if (player_skill == 'Воин (+2 к атаке)') {
        player_attack += 2;
    }
    if (player_skill == 'Защитник (+1 к защите)') {
        player_defense += 1;
    }
    if (player_skill == 'Бойня (ваша защита и защита противника опускается до 0)') {
        enemy_defense = 0
        player_defense = 0
    }
    if (player_skill == 'Призыв (Призывает Крестьянина)' && angel_one == true) {
        angel_health = player_health
        angel_attack = player_attack
        angel_defense = player_defense
        angel_skill = player_skill
        angel_magic = player_magic
        player_health = 50
        player_defense = 15
        player_attack = 15
        player_magic = 20
        player_skill = 'none'
        player_passive = false;
        yourStatElement = document.querySelector('.your-stat');
        yourStatElement.textContent = `${player_name}\n
        Здоровье: ${player_health}\n
        Мана: ${player_magic}\n
        Атака: ${player_attack}\n
        Защита: ${player_defense}`;
        var blueSamuraiImage = document.querySelector('.blue-port');
        blueSamuraiImage.src = ('img/village.jpeg');
        angel_priz = true
        angel_one = false
    }

}

function allattackclick(name) {
    //Атака
    if (name == 'attack') {
        player_kombo += 1;
        scorehit();
        var playermoving = document.querySelector('.player_move');

        enemy_health = enemy_health - en_hit - player_kombo
        if (player_kombo > 10) {
            player_kombo = 10;
        }
        var chance = (Math.floor(Math.random() * (100 - 1 + 1) + 1));
        if (chance > 50 && chance < 91 && player_attack > enemy_defense) {
            en_hit += Math.floor(Math.random() * (player_attack - enemy_defense) / 2)
        } else {
            if (chance > 50 && chance < 91) {
                en_hit += 10;
            }
        }
        if (chance > 90) {
            en_hit += Math.floor(Math.random() * (player_attack))
        } else {
            if (chance > 90) {
                en_hit += 20;
            }
        }
        playermoving.textContent = `${player_name} атакует и наносит ${en_hit + player_kombo} урона.`;
        magic_kr = Math.floor(enemy_magic / 20)
        if (player_skill == 'Кража (крадёт ману у противника при атаке)' && magic_kr > 0) {
            enemy_magic -= magic_kr
            player_magic += magic_kr
            playermoving.textContent =
                `${player_name} атакует и наносит ${en_hit} урона, украв ${magic_kr} маны у противника.`;
        }
        if (player_vampire_style == true && player_magic > 4) {
            player_health += Math.floor(en_hit);
            player_health_bonus = Math.floor(en_hit);
            player_magic -= 5;
            playermoving.textContent =
                `${player_name} атакует и наносит ${en_hit} урона, восстановив ${en_hit} здоровья.`;
            //console.log('Яд хуй')
        }
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    }

    //Лечение
    if (name == 'heal' && player_magic > 9) {
        player_kombo = 0;
        plhl_previous = player_health;
        player_health += 10;
        player_magic -= 10;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_health += 5;
        }
        plhl_now = player_health
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Лечение (+ ${plhl_now - plhl_previous} к  здоровью)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'fast_heal' && player_magic > 24) {
        player_kombo = 0;
        plhl_previous = player_health;
        player_health += 10;
        player_magic -= 25;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_health += 5;
        }
        plhl_now = player_health
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Лечение (+ ${plhl_now - plhl_previous} к  здоровью)`;
        // everyMove();pet_move();enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'gods_gift' && player_magic > 79) {
        player_kombo = 0;
        plhl_previous = player_health;
        player_health += 50;
        player_magic -= 80;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_health += 5;
        }
        plhl_now = player_health
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Длань богов (+ ${plhl_now - plhl_previous} к  здоровью)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }
    if (name == 'poison' && player_magic > 19) {
        player_kombo = 0;
        enemy_poison = true;
        player_magic -= 20;
        var poisonIcon = document.getElementById('poison_icon');

        poisonIcon.style.display = 'flex';

        // if(player_skill=='Мудрость (усиливает заклинания)'){
        //     player_health+=5;
        // }
        plhl_now = player_health
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Яд (каждый ход враг теряет 1 здоровья)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'regen' && player_magic > 74) {
        player_kombo = 0;
        player_regen = true;
        player_magic -= 75;
        // if(player_skill=='Мудрость (усиливает заклинания)'){
        //     player_health+=5;
        // }
        plhl_now = player_health
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Регенерацию (каждый ход восстанавливает 3 здоровья)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'storm' && player_magic > 94) {
        player_kombo = 0;
        player_storm = true;
        player_magic -= 95;
        // if(player_skill=='Мудрость (усиливает заклинания)'){
        //     player_health+=5;
        // }
        plhl_now = player_health
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Гроза (каждый ход наносит 10 урона противнику)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'vampire_style' && player_magic > 39) {
        player_kombo = 0;
        player_vampire_style = true;
        player_magic -= 40;

        var vampirestyleicon = document.getElementById('vampirestyle_icon');

        vampirestyleicon.style.display = 'inline-flex';
        // if(player_skill=='Мудрость (усиливает заклинания)'){
        //     player_health+=5;
        // }
        plhl_now = player_health
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Вампиризм (теперь каждая атака восстанавливает половину здоровья от отнятого)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'fire-shield' && player_magic > 54) {
        player_kombo = 0;
        player_fire_shield = true;
        player_magic -= 55;
        var fireshieldIcon = document.getElementById('fireshield_icon');

        fireshieldIcon.style.display = 'flex';
        // if(player_skill=='Мудрость (усиливает заклинания)'){
        //     player_health+=5;
        // }
        plhl_now = player_health
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Огненный щит (каждый ход враг теряет 2 здоровья)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'heavenly-shield' && player_magic > 119) {
        player_kombo = 0;
        player_heavenly_shield = true;
        player_magic -= 120;
        var shieldIcon = document.getElementById('shield_icon');

        shieldIcon.style.display = 'flex';
        // if(player_skill=='Мудрость (усиливает заклинания)'){
        //     player_health+=5;
        // }
        plhl_now = player_health
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Небесный щит (каждый ход +1 защиты)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'heavenly-armor' && player_magic > 229) {
        player_kombo = 0;
        player_heavenly_armor = true;
        player_magic -= 230;
        // if(player_skill=='Мудрость (усиливает заклинания)'){
        //     player_health+=5;
        // }
        plhl_now = player_health
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Небесную броню (каждый ход +2 защиты)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'plaque' && player_magic > 229) {
        player_kombo = 0;
        enemy_plaque = true;
        player_magic -= 230;
        // if(player_skill=='Мудрость (усиливает заклинания)'){
        //     player_health+=5;
        // }
        plhl_now = player_health
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Чуму (каждый ход -1 атаки противнику)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }




    if (name == 'block' && player_magic > 29) {
        player_kombo = 0;
        pldf_previous = player_defense
        player_defense += 5;
        player_magic -= 30;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_defense += 2;
        }
        pldf_now = player_defense
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Каменную кожу (+ ${pldf_now - pldf_previous} к  защите)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'equipment' && player_magic > 29) {
        player_kombo = 0;
        pldf_previous = player_defense
        plat_previous = player_attack
        player_defense += 2;
        player_attack += 2;
        player_magic -= 30;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_defense += 2;
            player_attack += 2;
        }
        plat_now = player_attack
        pldf_now = player_defense
        enemy_kombo = 0
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Снаряжение (+ ${pldf_now - pldf_previous} к  защите и + ${plat_now - plat_previous} к атаке)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'blessing' && player_magic > 59) {
        player_kombo = 0;
        pldf_previous = player_defense
        plat_previous = player_attack
        player_defense += 5;
        player_attack += 5;
        player_magic -= 60;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_defense += 2;
            player_attack += 2;
        }
        enemy_kombo = 0
        plat_now = player_attack
        pldf_now = player_defense
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Благословение (+ ${pldf_now - pldf_previous} к  защите и + ${plat_now - plat_previous} к атаке)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'prayer' && player_magic > 119) {
        player_kombo = 0;
        pldf_previous = player_defense
        plat_previous = player_attack
        player_defense += 15;
        player_attack += 15;
        player_magic -= 120;
        enemy_kombo = 0
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_defense += 2;
            player_attack += 2;
        }
        plat_now = player_attack
        pldf_now = player_defense
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Молитву (+ ${pldf_now - pldf_previous} к  защите и + ${plat_now - plat_previous} к атаке)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'slaughterhouse' && player_magic > 119) {
        player_kombo = 0;
        pldf_previous = player_defense
        player_defense = 0;
        enemy_defense = 0;
        player_magic -= 120;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_defense += 2;
        }
        pldf_now = player_defense
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Бойня (защита ${player_name} и ${enemy_name} обнулилась)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'devastation' && player_magic > 99) {
        player_kombo = 0;
        player_magic = Math.round(player_magic + player_health * 0.4);
        player_health = Math.round(player_health * 0.2);
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_defense += 2;
        }
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Разорение, теряя 80% здоровья, конвертируя 40% в магию`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'berserk' && player_magic > 49) {
        player_kombo = 0;
        pldf_previous = player_defense
        plat_previous = player_attack
        player_defense -= 5;
        player_attack += 10;
        player_magic -= 49;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_defense += 2;
            player_attack += 2;
        }
        plat_now = player_attack
        pldf_now = player_defense
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Берсерк (- 5 к  защите и + 15 к атаке)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'sacrifice' && player_magic > 99) {
        player_kombo = 0;
        pldf_previous = player_defense
        plat_previous = player_attack
        player_health -= 30;
        player_magic += 20;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_defense += 2;
            player_attack += 2;
        }
        plat_now = player_attack
        pldf_now = player_defense
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Жертвоприношение (- 30 к здоровью и + 60 к магии)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }



    if (name == 'shield' && player_magic > 14) {
        player_kombo = 0;
        pldf_previous = player_defense
        player_defense += 2;
        player_magic -= 15;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_defense += 2;
        }
        pldf_now = player_defense
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Щит (+ ${pldf_now - pldf_previous} к  защите)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }
    if (name == 'defender' && player_magic > 79) {
        player_kombo = 0;
        pldf_previous = player_defense
        player_defense += 10;
        player_magic -= 80;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_defense += 2;
        }
        pldf_now = player_defense
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Каменную кожу (+ ${pldf_now - pldf_previous} к  защите)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'sword' && player_magic > 14) {
        player_kombo = 0;
        plat_previous = player_attack
        player_attack += 2;
        player_magic -= 15;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_attack += 2;
        }
        plat_now = player_attack
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Меч (+ ${plat_now - plat_previous} к  атаке)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }



    if (name == 'silence' && player_magic > 69) {
        player_kombo = 0;
        enemy_silence += 3;
        player_magic -= 70;
        // if(player_skill=='Мудрость (усиливает заклинания)'){
        //     player_attack+=2;
        // }
        plat_now = player_attack
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Безмолвие (на один ход оппонент не может использовать заклинания)(на данный момент ${enemy_silence - 1} ходов)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'executioner' && player_magic > 79) {
        player_kombo = 0;
        plat_previous = player_attack
        player_attack += 10;
        player_magic -= 80;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_attack += 2;
        }
        plat_now = player_attack
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} испольует Палач (+ ${plat_now - plat_previous} к  атаке)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'madness' && player_magic > 109) {
        player_kombo = 0;
        plat_previous = player_attack
        player_attack += 15;
        player_magic -= 110;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_attack += 2;
        }
        plat_now = player_attack
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Кровавое безумие (+ ${plat_now - plat_previous} к  атаке)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'fire' && player_magic >= 39) {
        player_kombo = 0;
        plat_previous = player_attack
        player_attack += 5;
        player_magic -= 40;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            player_attack += 2;
        }
        plat_now = player_attack
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent =
            `${player_name} испольует Жажду крови (+ ${plat_now - plat_previous} к  атаке)`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'sparks' && player_magic > 9) {
        player_kombo = 0;
        player_magic -= 10
        scorehit();
        en_hit = 3
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent = `${player_name} использует Искры и наносит ${en_hit} урона.`;
        // everyMove();pet_move();enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'magic_fist' && player_magic > 24) {
        player_kombo = 0;
        player_magic -= 25
        scorehit();
        en_hit = 10
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent = `${player_name} использует Волшебный кулак и наносит ${en_hit} урона.`;
        // everyMove();pet_move();enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'hand_of_death' && player_magic > 124) {
        player_kombo = 0;
        player_magic -= 125
        scorehit();
        en_hit = 50
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent = `${player_name} использует Руку Смерти и наносит ${en_hit} урона.`;
        // everyMove();pet_move();enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'disintegration' && player_magic > 199) {
        player_kombo = 0;
        player_magic -= 200
        scorehit();
        en_hit = 120
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent = `${player_name} использует Дезинтеграцию и наносит ${en_hit} урона.`;
        // everyMove();pet_move();enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'light' && player_magic > 9) {
        player_kombo = 0;
        player_magic -= 10
        scorehit();
        en_hit = 10
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent = `${player_name} использует Молнию и наносит ${en_hit} урона.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'antimagic' && player_magic > 79) {
        player_kombo = 0;
        player_magic -= 80
        var enemy_magic_perv = enemy_magic
        enemy_magic -= 60
        scorehit();
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent =
            `${player_name} использует Антимагия и отнимает ${enemy_magic_perv - enemy_magic} урона.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'magic_boom' && player_magic > 74) {
        player_kombo = 0;
        player_magic -= 75
        scorehit();
        en_hit = Math.round(player_health * 0.3 * 1.2)
        player_health = Math.round(player_health * 0.3)
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent = `${player_name} использует Магический взрыв и наносит ${en_hit} урона.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }


    if (name == 'vampire_touch' && player_magic > 24 && player_vampire == false) {
        player_kombo = 0;
        player_magic -= 24
        scorehit();
        en_hit = 10
        player_health += 10;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent =
            `${player_name} использует Вампирское касание и наносит ${en_hit} урона, восстанавливая 10 здоровья.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }
    if (name == 'vampire_bite' && player_magic > 49 && play_vampire == false) {
        player_kombo = 0;
        player_magic -= 50
        scorehit();
        en_hit = 15
        player_health += 15;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent =
            `${player_name} использует Вампирский укус и наносит ${en_hit} урона, восстанавливая 15 здоровья.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'vampire_touch' && player_magic > 14 && player_vampire == true) {
        player_kombo = 0;
        player_magic -= 15
        scorehit();
        en_hit = 10
        player_health += 10;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent =
            `${player_name} использует Вампирское касание и наносит ${en_hit} урона, восстанавливая 10 здоровья.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }
    if (name == 'vampire_bite' && player_magic > 39 && play_vampire == true) {
        player_kombo = 0;
        player_magic -= 40
        scorehit();
        en_hit = 15
        player_health += 15;
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent =
            `${player_name} использует Вампирский укус и наносит ${en_hit} урона, восстанавливая 15 здоровья.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'arrow' && player_magic > 4) {
        player_kombo = 0;
        player_magic -= 5
        scorehit();
        en_hit = 5
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent = `${player_name} использует Волшебную стрелу и наносит ${en_hit} урона.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'fireball' && player_magic > 24) {
        player_kombo = 0;
        player_magic -= 25
        scorehit();
        en_hit = 20
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent = `${player_name} использует Огненный шар и наносит ${en_hit} урона.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'inferno' && player_magic > 39) {
        player_kombo = 0;
        player_magic -= 40
        scorehit();
        en_hit = 35
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent = `${player_name} использует Инферно и наносит ${en_hit} урона.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }

    if (name == 'meteor' && player_magic > 59) {
        player_kombo = 0;
        player_magic -= 60
        scorehit();
        en_hit = 55
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent = `${player_name} использует Метеоритный дождь и наносит ${en_hit} урона.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }
    if (name == 'armagedon' && player_magic > 149) {
        player_kombo = 0;
        player_magic -= 150
        scorehit();
        en_hit = 120
        if (player_skill == 'Мудрость (усиливает заклинания)') {
            en_hit += 5;
        }
        var playermoving = document.querySelector('.player_move');
        enemy_health = enemy_health - en_hit
        playermoving.textContent = `${player_name} использует Метеоритный дождь и наносит ${en_hit} урона.`;
        everyMove();
        enemy_move();
        showbattlestat();
        Condition();
        return 0
    } else {
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `Не хватает маны`;
    }



    if (name === 'skill' && player_skill !== "none" && player_passive === true) {
        player_kombo = 0;
        var playermoving = document.querySelector('.player_move');
        playermoving.textContent = `${player_name} использует навык ${player_skill}`;
        skill_function(player_skill);
        everyMove();
        // pet_move();
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




// old version
function everyMove() {
    if (enemy_poison == true) {
        if (Math.round(enemy_health * 0.97) < 30) {
            enemy_health = Math.round(enemy_health * 0.97);
        } else {
            enemy_health -= 30
        }
        //console.log('Яд хуй')
    }
    if (player_fire_shield == true) {

        if (Math.round(enemy_health * 0.93) < 50) {
            enemy_health = Math.round(enemy_health * 0.93);
        } else {
            enemy_health -= 50
        }
    }
    if (player_heavenly_shield == true) {
        player_defense += 2;
        //console.log('Яд хуй')
    }
    if (player_heavenly_armor == true) {
        player_defense += 3;
        //console.log('Яд хуй')
    }


    // if (pet_poison == true) {
    //     if (Math.round(enemy_health * 0.99) < 30) {
    //         enemy_health = Math.round(enemy_health * 0.99);
    //     } else {
    //         enemy_health -= 30
    //     }
    //     //console.log('Яд хуй')
    // }
    // if (pet_fire_shield == true) {
    //     if (Math.round(enemy_health * 0.97) < 30) {
    //         enemy_health = Math.round(enemy_health * 0.97);
    //     } else {
    //         enemy_health -= 30
    //     }
    //     //console.log('Яд хуй')
    // }
    // if (pet_heavenly_shield == true) {
    //     player_defense += 3;
    //     //console.log('Яд хуй')
    // }
    // if (pet_heavenly_armor == true) {
    //     player_defense += 6;
    //     //console.log('Яд хуй')
    // }

    // if (pet_plaque == true) {
    //     enemy_attack -= 1;
    //     //console.log('Яд хуй')
    // }
    // if (pet_desecration == true) {
    //     enemy_attack -= 2;
    //     enemy_defense -= 3;

    //     if (Math.round(enemy_health * 0.97) < 50) {
    //         enemy_health = Math.round(enemy_health * 0.97);
    //     } else {
    //         enemy_health -= 50
    //     }
    //     enemy_kombo = 0;
    //     //console.log('Яд хуй')
    // }
    if (enemy_plaque == true) {
        enemy_attack -= 1;
        //console.log('Яд хуй')
    }

    if (player_regen == true) {


        if (Math.round(player_health * 1.03) < 25) {
            player_health = Math.round(player_health * 1.03);
        } else {
            player_health += 25
        }
    }

    // if (pet_regen == true) {

    //     if (Math.round(player_health * 1.01) < 25) {
    //         player_health = Math.round(player_health * 1.01);
    //     } else {
    //         player_health += 25
    //     }
    // }

    if (player_storm == true) {
        enemy_defense -= 2;
    }

    // if (pet_storm == true) {
    //     enemy_defense -= 2;
    // }
    if (enemy_defense < 0) {
        enemy_defense = 1;
    }
    if (enemy_attack < 0) {
        enemy_attack = 1;
    }
    if (player_defense > 1) {
        player_defense -= 1
    }
    if (enemy_defense > 1) {
        enemy_defense -= 1
    }
}
function enemy_move() {
    scorehit();



    // if (pl_hit < 10 && enemy_magic>69 && enemy_silence <1){enemy_kombo=0;
    //     var enemymoving = document.querySelector('.enemy_move');
    //     enemy_attack+=12
    //     enemy_magic-=70
    //     enemymoving.textContent = `${enemy_name} использует Великую Жажду крови (+12 к атаке)`;
    //     return 0        
    // }
    // if (en_hit > 10 && enemy_magic>69&& enemy_silence <1){enemy_kombo=0;
    //     var enemymoving = document.querySelector('.enemy_move');
    //     enemy_defense+=12
    //     enemy_magic-=70
    //     enemymoving.textContent = `${enemy_name} использует Великую Каменную кожу (+12 к защите)`;
    //     return 0        
    // }

    if (pl_hit < 10 && enemy_magic > 39 && enemy_silence < 1) {
        enemy_kombo = 0;
        var enemymoving = document.querySelector('.enemy_move');
        enemy_attack += 5
        enemy_magic -= 40
        enemymoving.textContent = `${enemy_name} использует Жажду крови (+5 к атаке)`;
        return 0
    }
    if (en_hit > 10 && enemy_magic > 29 && enemy_silence < 1) {
        enemy_kombo = 0;
        var enemymoving = document.querySelector('.enemy_move');
        enemy_defense += 5
        enemy_magic -= 30
        enemymoving.textContent = `${enemy_name} использует Каменную кожу (+5 к защите)`;
        return 0
    }
    if (enemy_health < 50 && enemy_magic > 9 && en_hit < 19 && enemy_silence < 1) {
        enemy_kombo = 0;
        var enemymoving = document.querySelector('.enemy_move');
        enemy_health += 10
        enemy_magic -= 10
        enemymoving.textContent = `${enemy_name} использует Лечение (+10 к здоровью)`;
        return 0
    }

    var chance1 = (Math.floor(Math.random() * (100 - 1 + 1) + 1));
    if (chance1 > 90) {
        if (enemy_magic > 29 && enemy_poison == true && enemy_silence < 1) {
            enemy_kombo = 0;
            var enemymoving = document.querySelector('.enemy_move');
            enemy_poison = false;
            enemy_magic -= 30;
            var poisonIcon = document.getElementById('poison_icon');
            poisonIcon.style.display = 'none';
            enemymoving.textContent = `${enemy_name} использует Восстановление (Яд снят)`;
            return 0
        }
    }
    if (enemy_silence > 0) {
        enemy_silence -= 1;
    }
    var enemymoving = document.querySelector('.enemy_move');
    var chance = (Math.floor(Math.random() * (100 - 1 + 1) + 1));
    if (chance > 80 && chance < 95 && enemy_attack > player_defense) {
        pl_hit += Math.floor(Math.random() * (enemy_attack - player_defense) / 2);
    } else {
        // if (pet_unluck == true) {
        //     chance -= 3;
        // }
        // if (pet_weakness == true) {
        //     chance -= 5;
        // }
        if (chance > 80 && chance < 95) {
            pl_hit += 10;
        }
    }
    if (chance > 95) {
        pl_hit += Math.floor(Math.random() * (enemy_attack));
    } else {
        if (chance > 95) {
            pl_hit += 30;
        }
    }

    player_health = player_health - pl_hit - enemy_kombo
    enemy_kombo += 1;
    if (enemy_kombo > 10) {
        enemy_kombo = 10;
    }

    enemymoving.textContent = `${enemy_name} атакует и наносит ${pl_hit + enemy_kombo} урона.`;

}
document.addEventListener('keyup',
    function (event) {
        if (event.keyCode === 82) { //R
            allattackclick('attack')
        }
        if (event.keyCode === 69) { //E
            allattackclick('heal')
        }
        if (event.keyCode === 87) { //W
            allattackclick('fire')
        }
        if (event.keyCode === 83) { //S
            allattackclick('sword')
        }
        if (event.keyCode === 81) { //Q
            allattackclick('block')
        }
        if (event.keyCode === 65) { //A
            allattackclick('shield')
        }
        if (event.keyCode === 68) { //D
            allattackclick('fast_heal')
        }
        if (event.keyCode === 90) { //Z
            allattackclick('defender')
        }
        if (event.keyCode === 88) { //X
            allattackclick('executioner')
        }
        if (event.keyCode === 84) { //T
            allattackclick('sparks')
        }
        if (event.keyCode === 71) { //G
            allattackclick('poison')
        }
        if (event.keyCode === 66) { //B
            allattackclick('regen')
        }
        if (event.keyCode === 67) { //C
            allattackclick('gods_gift')
        }
        if (event.keyCode === 89) { //Y
            allattackclick('equipment')
        }
        if (event.keyCode === 72) { //H
            allattackclick('blessing')
        }
        if (event.keyCode === 78) { //N
            allattackclick('prayer')
        }
        if (event.keyCode === 49) { //1
            allattackclick('art1')
        }
        if (event.keyCode === 50) { //2
            allattackclick('art2')
        }
        if (event.keyCode === 51) { //3
            allattackclick('art3')
        }
        if (event.keyCode === 52) { //4
            allattackclick('berserk')
        }
        if (event.keyCode === 53) { //5
            allattackclick('devastation')
        }
        if (event.keyCode === 54) { //5
            allattackclick('sacrifice')
        }
        if (event.keyCode === 55) { //6
            allattackclick('slaughterhouse')
        }
        if (event.keyCode === 17) { //LCtrl
            allattackclick('vampire_style')
        }
        if (event.keyCode === 85) { //U
            allattackclick('magic_fist')
        }
        if (event.keyCode === 74) { //J
            allattackclick('hand_of_death')
        }
        if (event.keyCode === 77) { //M
            allattackclick('disintegration')
        }
        if (event.keyCode === 188) { //,
            allattackclick('vampire_touch')
        }
        if (event.keyCode === 190) { //>.
            allattackclick('vampire_bite')
        }
        if (event.keyCode === 16) { //LShift
            allattackclick('magic_boom')
        }
        if (event.keyCode === 79) { //O
            allattackclick('fire_shield')
        }
        if (event.keyCode === 76) { //L
            allattackclick('antimagic')
        }
        if (event.keyCode === 80) { //P
            allattackclick('silence')
        }
        if (event.keyCode === 73) { //I
            allattackclick('heavenly-shield')
        }
        if (event.keyCode === 75) { //K
            allattackclick('heavenly-armor')
        }
        if (event.keyCode === 70) { //F
            allattackclick('light')
        }
        if (event.keyCode === 13) { //Enter
            allattackclick('arrow')
        }
        if (event.keyCode === 86) { //V
            spamAttack()
        }
    })

function spamAttack() {
    while (enemy_health > 0 && player_health > 0) {
        for (var i = 0; i < 10; i++) {
            scorehit();
            var playermoving = document.querySelector('.player_move');
            enemy_health = enemy_health - en_hit
            playermoving.textContent = `${player_name} атакует и наносит ${en_hit} урона.`;
            magic_kr = Math.floor(enemy_magic / 20)
            if (player_skill == 'Кража (крадёт ману у противника при атаке)' && magic_kr > 0) {
                enemy_magic -= magic_kr
                player_magic += magic_kr
                playermoving.textContent = `${player_name} атакует и наносит ${en_hit} урона, украв ${magic_kr} маны у противника.`;
            }
            enemy_move();
            showbattlestat();
            if (enemy_health < 0 || player_health < 0) { i = 1000 }
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


function Condition() {
    if (angel_priz == true && player_health <= 0) {
        player_health = angel_health
        player_attack = angel_attack
        player_defense = angel_defense
        player_magic = angel_magic
        angel_priz = false
        yourStatElement = document.querySelector('.your-stat');
        yourStatElement.textContent = `${player_name}\n
        Здоровье: ${player_health}\n
        Мана: ${player_magic}\n
        Атака: ${player_attack}\n
        Защита: ${player_defense}`;
        var blueSamuraiImage = document.querySelector('.blue-port');
        blueSamuraiImage.src = ('img/battle-angel.jpeg');
    }
    if (player_health <= 0) {
        noninvis = false;
        choose_pl = false;
        choose_en = false;
        player_health = 1;
        player_attack = 0;
        player_defense = 0;
        player_magic = 0;
        player_skill = 0;
        player_open = 0;
        player_level = 0;
        player_name = 0;
        enemy_health = 1;
        enemy_attack = 0;
        enemy_defense = 0;
        enemy_magic = 0;
        enemy_skill = 0;
        angel_one = false
        player_passive == false
        enemy_open = 0;
        enemy_level = 0;
        enemy_name = 0;
        var battleZone = document.querySelector('.battle-zone');
        battleZone.style.display = 'none';
        var menuZone = document.querySelector('.vs-zone');
        menuZone.style.display = 'none';
        var mZone = document.querySelector('.PvEmode');
        mZone.style.display = 'flex';
        alert("Вы проиграли !!!")
    }
    if (enemy_health <= 0) {
        noninvis = false;
        choose_pl = false;
        choose_en = false;
        player_health = 1;
        player_attack = 0;
        player_defense = 0;
        angel_one = false
        player_magic = 0;
        player_skill = 0;
        player_open = 0;
        player_level = 0;
        player_name = 0;
        enemy_health = 1;
        enemy_attack = 0;
        enemy_defense = 0;
        enemy_magic = 0;
        enemy_skill = 0;
        enemy_open = 0;
        enemy_level = 0;
        enemy_name = 0;

        player_passive == false
        alert("Вы победили !!!")
        var battleZone = document.querySelector('.battle-zone');
        battleZone.style.display = 'none';
        var menuZone = document.querySelector('.vs-zone');
        menuZone.style.display = 'none';
        var mZone = document.querySelector('.PvEmode');
        mZone.style.display = 'flex';

    }
}
