//health, mana, attack, defense, skill, story, rang (max = 5)
// Объект с персонажами и их характеристиками
var level_player = {
    '1level': {'health': 100, 'attack': 15, 'defense': 10, 'magic': 40, 'skill': "Воин (+2 к атаке)", 'open': 0, 'level':1, 'name':'Мицунари', 'picture':'blue_samurai'},
    '2level': {'health': 120, 'attack': 20, 'defense': 11, 'magic': 80, 'skill': 'Бойня (ваша защита и защита противника опускается до 0)', 'open': 0, 'level':2, 'name':'Генерал Хаоса', 'picture':'pinksamurai'},
    '3level': {'health': 90, 'attack': 17, 'defense': 9, 'magic': 45, 'skill': 6, 'open': 0, 'level':0, 'name':'Ковбой', 'picture':'blue_samurai'}};
var level_enemy = {
    '1level': {'health': 100, 'attack': 15, 'defense': 10, 'magic': 40, 'skill': 5, 'open': 0, 'level':1, 'name':'Мицухиде', 'picture':'red_samurai'},
    '2level': {'health': 120, 'attack': 20, 'defense': 11, 'magic': 80, 'skill': 1, 'open': 0, 'level':2, 'name':'Зомби', 'picture':'lucifer_blue'},
    '3level': {'health': 90, 'attack': 17, 'defense': 9, 'magic': 45, 'skill': 6, 'open': 0, 'level':0, 'name':'Ковбой', 'picture':'blue_samurai'}};

var level_now=1

// Функция для выбора персонажа
function chooselevel(characterName) {
    player_health = level_player[characterName]['health'];
    player_attack = level_player[characterName]['attack'];
    player_defense = level_player[characterName]['defense'];
    player_magic = level_player[characterName]['magic'];
    player_skill = level_player[characterName]['skill'];
    player_open = level_player[characterName]['open'];
    player_level= level_player[characterName]['level'];
    player_name= level_player[characterName]['name'];
    player_pic= level_player[characterName]['picture'];
    yourStatElement = document.querySelector('.your-stat');
    choose_pl=true;
    yourStatElement.textContent = `${player_name}\n
    Здоровье: ${player_health}\n
    Мана: ${player_magic}\n
    Атака: ${player_attack}\n
    Защита: ${player_defense}`;
    var blueSamuraiImage = document.querySelector('.blue-port');
    blueSamuraiImage.src = ('img/'+player_pic+'.jpeg');
    if (choose_en && choose_pl && true){
    var battleZone = document.querySelector('.battle-zone');
    battleZone.style.display = 'inline';
    var menuZone = document.querySelector('.vs-zone');
    menuZone.style.display = 'none';
    }
    enemy_health = level_enemy[characterName]['health'];
    enemy_attack = level_enemy[characterName]['attack'];
    enemy_defense = level_enemy[characterName]['defense'];
    enemy_magic = level_enemy[characterName]['magic'];
    enemy_skill = level_enemy[characterName]['skill'];
    enemy_open = level_enemy[characterName]['open'];
    enemy_level= level_enemy[characterName]['level'];
    enemy_nameforopen= level_enemy[characterName]
    enemy_name= level_enemy[characterName]['name'];
    enemy_pic= level_enemy[characterName]['picture'];
    enemyStatElement = document.querySelector('.en-stat');
    if (player_skill==="Воин (+2 к атаке)" ||player_skill==="Защитник (+1 к защите)" 
    ||player_skill==='Бойня (ваша защита и защита противника опускается до 0)' 
    ||player_skill==='Возврат во времени (Ваше здоровье и здоровье противника возвращаются к стартовому)'
    ||player_skill==='Призыв (Призывает Крестьянина)'){
        player_passive=true;
    }
    if (player_skill==='Призыв (Призывает Крестьянина)'){
        player_passive=true;
        angel_priz=true
    }
    enemyStatElement.textContent = `${enemy_name} \n   
    Здоровье: ${enemy_health}\n
    Мана: ${enemy_magic}\n
    Атака: ${enemy_attack}\n
    Защита: ${enemy_defense}`;
    var choose_en=true;
    var redSamuraiImage = document.querySelector('.red-port');
    redSamuraiImage.src = ('img/'+enemy_pic+'.jpeg');
    if (choose_en && choose_pl && true){
        var battleZone = document.querySelector('.battle-zone');
        battleZone.style.display = 'inline';
        var menuZone = document.querySelector('.vs-zone');
        menuZone.style.display = 'none';
        }
    var playermoving = document.querySelector('.player_move');
    var enemymoving = document.querySelector('.enemy_move');
    if (characterName == '1level'){alert(`
    Вы бежите за предателем! Нельзя дать ему убежать!\n
    -Я знаю о заговоре. Сдавайся!\n
    -Нет, я не сдамся`)
    playermoving.textContent = `Я не проиграю!!!`;
    enemymoving.textContent = `Ты поплатишься за это!!!`;
    }
    if (characterName == '2level'){alert(`
    Вы бежите за предателемwqewwqerwerwqerweqr! Нельзя дать ему убежать!\n
    -Я знаю о заговоре. Сдавайся!\n
    -Нет, я не сдамся`)
    playermoving.textContent = `Я не проиграю!!!`;
    enemymoving.textContent = `Ты поплатишься за это!!!`;
    }
    
    }