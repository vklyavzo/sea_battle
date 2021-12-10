window.onload = function(){
    let restart = document.querySelector('#restart');
    let box = document.querySelectorAll('.box');
    box.forEach(item => item.style.display = 'none');
    let start_friends = document.querySelector('#start_friends');
    let start_bot = document.querySelector('#start_bot');
    let player1 = document.querySelector('#player1');
    let player2 = document.querySelector('#player2');

    //отрисовка полей
    let field1 = document.querySelector('#field1');
    let ctx1 = field1.getContext('2d');
    for(let i = 0; i <= 10; i++){
        ctx1.moveTo(0,30*i);
        ctx1.lineTo(300,30*i);
    }
    for(let i = 0; i <= 10; i++){
        ctx1.moveTo(30*i,0);
        ctx1.lineTo(30*i,300);
    }
    ctx1.stroke();

    let field1_check = document.querySelector('#field1_check');
    let ctx12 = field1_check.getContext('2d');
    for(let i = 0; i <= 10; i++){
        ctx12.moveTo(0,30*i);
        ctx12.lineTo(300,30*i);
    }
    for(let i = 0; i <= 10; i++){
        ctx12.moveTo(30*i,0);
        ctx12.lineTo(30*i,300);
    }
    ctx12.stroke();

    let field2 = document.querySelector('#field2');
    let ctx2 = field2.getContext('2d');
    for(let i = 0; i <= 10; i++){
        ctx2.moveTo(0,30*i);
        ctx2.lineTo(300,30*i);
    }
    for(let i = 0; i <= 10; i++){
        ctx2.moveTo(30*i,0);
        ctx2.lineTo(30*i,300);
    }
    ctx2.stroke();

    let field2_check = document.querySelector('#field2_check');
    let ctx22 = field2_check.getContext('2d');
    for(let i = 0; i <= 10; i++){
        ctx22.moveTo(0,30*i);
        ctx22.lineTo(300,30*i);
    }
    for(let i = 0; i <= 10; i++){
        ctx22.moveTo(30*i,0);
        ctx22.lineTo(30*i,300);
    }
    ctx22.stroke();

    // Создание координат и проверочных массивов
    let randomXY = [[0,0],[0,30],[0,60],[0,90],[0,120],[0,150],[0,180],[0,210],[0,240],[0,270],[30,0],[30,30],[30,60],[30,90],[30,120],[30,150],[30,180],[30,210],[30,240],[30,270],[60,0],[60,30],[60,60],[60,90],[60,120],[60,150],[60,180],[60,210],[60,240],[60,270],[90,0],[90,30],[90,60],[90,90],[90,120],[90,150],[90,180],[90,210],[90,240],[90,270],[120,0],[120,30],[120,60],[120,90],[120,120],[120,150],[120,180],[120,210],[120,240],[120,270],[150,0],[150,30],[150,60],[150,90],[150,120],[150,150],[150,180],[150,210],[150,240],[150,270],[180,0],[180,30],[180,60],[180,90],[180,120],[180,150],[180,180],[180,210],[180,240],[180,270],[210,0],[210,30],[210,60],[210,90],[210,120],[210,150],[210,180],[210,210],[210,240],[210,270],[240,0],[240,30],[240,60],[240,90],[240,120],[240,150],[240,180],[240,210],[240,240],[240,270],[270,0],[270,30],[270,60],[270,90],[270,120],[270,150],[270,180],[270,210],[270,240],[270,270]];
    let randomXY_check1 = [];
    let randomXY_check2 = [];
    let empty1 = [];
    let empty2 = [];
    let ship1_length = 0;
    let ship2_length = 0;
    let win1 = 0;
    let win2 = 0;
    let player1_array = [];
    let player2_array = [];

    function drawShip(name, field, array, empty, sum){

        function random1(ship1){
            if(name != 'Бот'){
                field.fillStyle = 'red';
            }
            else{
                field.fillStyle = 'White';
            }
             for(let i = 0; i < ship1; i++){
                let randomI = Math.floor(Math.random()*randomXY.length);
                let random_coordinates = randomXY[randomI];
                if(array.indexOf(random_coordinates) == -1 && empty.indexOf(random_coordinates) == -1){
                    array.push(random_coordinates);
                    field.fillRect(random_coordinates[0], random_coordinates[1] ,30, 30);
                    field.stroke();
                    empty.push(randomXY[randomI-11]);
                    empty.push(randomXY[randomI-10]);
                    empty.push(randomXY[randomI-9]);
                    empty.push(randomXY[randomI-1]);
                    empty.push(randomXY[randomI+1]);
                    empty.push(randomXY[randomI+9]);
                    empty.push(randomXY[randomI+10]);
                    empty.push(randomXY[randomI+11]);
                    for(let j = 0; j < empty.length; j ++){
                        let undf = empty.findIndex(elem => elem == undefined)
                        if(undf != -1){
                            empty.splice(undf,1)
                        }
                    }
                }
                else{
                    i--;
                }
            }
        };

        function random2(ship2){
            if(name != 'Бот'){
                field.fillStyle = 'blue';
            }
            else{
                field.fillStyle = 'White';
            }
            for(let i = 0; i < ship2; i++){
                let randomI = Math.floor(Math.random()*randomXY.length)
                let random_coordinates = randomXY[randomI];
                if(array.indexOf(random_coordinates) == -1 && empty.indexOf(random_coordinates) == -1){
                    array.push(random_coordinates);
                    let randomNumber = Math.floor(Math.random()*2)
                    if(randomNumber == 0 && array.indexOf(randomXY[randomI+10]) == -1 && empty.indexOf(randomXY[randomI+10]) == -1){
                        if(random_coordinates[0]!=270){
                            field.fillRect(random_coordinates[0], random_coordinates[1] ,60, 30);
                            field.stroke();
                            array.push(randomXY[randomI+10]);
                            empty.push(randomXY[randomI-11]);
                            empty.push(randomXY[randomI-10]);
                            empty.push(randomXY[randomI-9]);
                            empty.push(randomXY[randomI-8]);
                            empty.push(randomXY[randomI-1]);
                            empty.push(randomXY[randomI+2]);
                            empty.push(randomXY[randomI+9]);
                            empty.push(randomXY[randomI+10]);
                            empty.push(randomXY[randomI+11]);
                            empty.push(randomXY[randomI+12]);
                            for(let j = 0; j < empty.length; j ++){
                                let undf = empty.findIndex(elem => elem == undefined)
                                if(undf != -1){
                                    empty.splice(undf,1)
                                }
                            }
                        }
                        else{
                            i--;
                            array.pop(random_coordinates);
                        }
                    }
                    else{
                        if(random_coordinates[1]!=270 && array.indexOf(randomXY[randomI+1]) == -1 && empty.indexOf(randomXY[randomI+1]) == -1){
                            field.fillRect(random_coordinates[0], random_coordinates[1] ,30, 60);
                            field.stroke();
                            array.push(randomXY[randomI+1]);
                            empty.push(randomXY[randomI-11]);
                            empty.push(randomXY[randomI-10]);
                            empty.push(randomXY[randomI-9]);
                            empty.push(randomXY[randomI-1]);
                            empty.push(randomXY[randomI+1]);
                            empty.push(randomXY[randomI+9]);
                            empty.push(randomXY[randomI+11]);
                            empty.push(randomXY[randomI+19]);
                            empty.push(randomXY[randomI+20]);
                            empty.push(randomXY[randomI+21]);
                            for(let j = 0; j < empty.length; j ++){
                                let undf = empty.findIndex(elem => elem == undefined)
                                if(undf != -1){
                                    empty.splice(undf,1)
                                }
                            }
                        }
                        else{
                            i--;
                            array.pop(random_coordinates);
                        }
                    }
                }
                else{
                    i--;
                }
            }
        };

        function random3(ship3){
            if(name != 'Бот'){
                field.fillStyle = 'yellow';
            }
            else{
                field.fillStyle = 'White';
            }
            for(let i = 0; i < ship3; i++){
                let randomI = Math.floor(Math.random()*randomXY.length)
                let random_coordinates = randomXY[randomI];
                if(array.indexOf(random_coordinates) == -1 && empty.indexOf(random_coordinates) == -1){
                    array.push(random_coordinates);
                    let randomNumber = Math.floor(Math.random()*2)
                    if(randomNumber == 0){
                        if(random_coordinates[0]!=270 && random_coordinates[0]!=240 && array.indexOf(randomXY[randomI+10]) == -1 && array.indexOf(randomXY[randomI+20]) == -1 && empty.indexOf(randomXY[randomI+10]) == -1 && empty.indexOf(randomXY[randomI+20]) == -1){
                            field.fillRect(random_coordinates[0], random_coordinates[1] ,90, 30);
                            field.stroke();
                            array.push(randomXY[randomI+10]);
                            array.push(randomXY[randomI+20]);
                            empty.push(randomXY[randomI-11]);
                            empty.push(randomXY[randomI-10]);
                            empty.push(randomXY[randomI-9]);
                            empty.push(randomXY[randomI-8]);
                            empty.push(randomXY[randomI-7]);
                            empty.push(randomXY[randomI-1]);
                            empty.push(randomXY[randomI+3]);
                            empty.push(randomXY[randomI+9]);
                            empty.push(randomXY[randomI+10]);
                            empty.push(randomXY[randomI+11]);
                            empty.push(randomXY[randomI+12]);
                            empty.push(randomXY[randomI+13]);
                            for(let j = 0; j < empty.length; j ++){
                                let undf = empty.findIndex(elem => elem == undefined)
                                if(undf != -1){
                                    empty.splice(undf,1)
                                }
                            }
                        }
                        else{
                            i--;
                            array.pop(random_coordinates)
                        }     
                    }
                    else{
                        if(random_coordinates[1]!=270 && random_coordinates[1]!=240 && array.indexOf(randomXY[randomI+1]) == -1 && array.indexOf(randomXY[randomI+2]) == -1 && empty.indexOf(randomXY[randomI+1]) == -1 && empty.indexOf(randomXY[randomI+2]) == -1){
                            field.fillRect(random_coordinates[0], random_coordinates[1] ,30, 90);
                            field.stroke();
                            array.push(randomXY[randomI+1]);
                            array.push(randomXY[randomI+2]);
                            empty.push(randomXY[randomI-11]);
                            empty.push(randomXY[randomI-10]);
                            empty.push(randomXY[randomI-9]);
                            empty.push(randomXY[randomI-1]);
                            empty.push(randomXY[randomI+1]);
                            empty.push(randomXY[randomI+9]);
                            empty.push(randomXY[randomI+11]);
                            empty.push(randomXY[randomI+19]);
                            empty.push(randomXY[randomI+21]);
                            empty.push(randomXY[randomI+29]);
                            empty.push(randomXY[randomI+30]);
                            empty.push(randomXY[randomI+31]);
                            for(let j = 0; j < empty.length; j ++){
                                let undf = empty.findIndex(elem => elem == undefined)
                                if(undf != -1){
                                    empty.splice(undf,1)
                                }
                            }
                        }
                        else{
                            i--;
                            array.pop(random_coordinates)
                        } 
                    }
                }
                else{
                    i--;
                }
            }
        };

        function random4(){
            if(name != 'Бот'){
                field.fillStyle = 'purple';
            }
            else{
                field.fillStyle = 'White';
            }
            let randomI = Math.floor(Math.random()*randomXY.length)
            let random_coordinates = randomXY[randomI];
            if(array.indexOf(random_coordinates) == -1 && empty.indexOf(random_coordinates) == -1){
                array.push(random_coordinates);
                let randomNumber = Math.floor(Math.random()*2)
                if(randomNumber == 0){
                    if(random_coordinates[0]!=270 && random_coordinates[0]!=240 && random_coordinates[0]!=210 && array.indexOf(randomXY[randomI+10]) == -1 && array.indexOf(randomXY[randomI+20]) == -1 && array.indexOf(randomXY[randomI+30]) == -1 && empty.indexOf(randomXY[randomI+10]) == -1 && empty.indexOf(randomXY[randomI+20]) == -1 && empty.indexOf(randomXY[randomI+30]) == -1){
                        field.fillRect(random_coordinates[0], random_coordinates[1] ,120, 30);
                        field.stroke();
                        array.push(randomXY[randomI+10]);
                        array.push(randomXY[randomI+20]);
                        array.push(randomXY[randomI+30]);
                        empty.push(randomXY[randomI-11]);
                        empty.push(randomXY[randomI-10]);
                        empty.push(randomXY[randomI-9]);
                        empty.push(randomXY[randomI-8]);
                        empty.push(randomXY[randomI-7]);
                        empty.push(randomXY[randomI-6]);
                        empty.push(randomXY[randomI-1]);
                        empty.push(randomXY[randomI+4]);
                        empty.push(randomXY[randomI+9]);
                        empty.push(randomXY[randomI+10]);
                        empty.push(randomXY[randomI+11]);
                        empty.push(randomXY[randomI+12]);
                        empty.push(randomXY[randomI+13]);
                        empty.push(randomXY[randomI+14]);
                        for(let j = 0; j < empty.length; j ++){
                            let undf = empty.findIndex(elem => elem == undefined)
                            if(undf != -1){
                                empty.splice(undf,1)
                            }
                        }
                        }
                    else{
                        array.pop(random_coordinates);
                        random4();
                    }     
                }
                else{
                    if(random_coordinates[1]!=270 && random_coordinates[1]!=240 && random_coordinates[1]!=210 && array.indexOf(randomXY[randomI+1]) == -1 && array.indexOf(randomXY[randomI+2]) == -1 && array.indexOf(randomXY[randomI+3]) == -1 && empty.indexOf(randomXY[randomI+1]) == -1 && empty.indexOf(randomXY[randomI+2]) == -1 && empty.indexOf(randomXY[randomI+3]) == -1){
                        field.fillRect(random_coordinates[0], random_coordinates[1] ,30, 120);
                        field.stroke();
                        array.push(randomXY[randomI+1]);
                        array.push(randomXY[randomI+2]);
                        array.push(randomXY[randomI+3]);
                        empty.push(randomXY[randomI-11]);
                        empty.push(randomXY[randomI-10]);
                        empty.push(randomXY[randomI-9]);
                        empty.push(randomXY[randomI-1]);
                        empty.push(randomXY[randomI+1]);
                        empty.push(randomXY[randomI+9]);
                        empty.push(randomXY[randomI+11]);
                        empty.push(randomXY[randomI+19]);
                        empty.push(randomXY[randomI+21]);
                        empty.push(randomXY[randomI+29]);
                        empty.push(randomXY[randomI+31]);
                        empty.push(randomXY[randomI+39]);
                        empty.push(randomXY[randomI+40]);
                        empty.push(randomXY[randomI+41]);
                        for(let j = 0; j < empty.length; j ++){
                            let undf = empty.findIndex(elem => elem == undefined)
                            if(undf != -1){
                                empty.splice(undf,1)
                            }
                        }
                        }
                    else{
                        array.pop(random_coordinates);
                        random4();
                    } 
                }
            }
            else{
                random4();
            }
        };

        alert(`Заполнение поля игрока ${name}`);
        let conf;

        // однопалубные
        let ship1;
        if(name != 'Бот'){
            conf = confirm('Хотите ввести количество кораблей самостоятельно?');
            if(conf == true){
                ship1 = prompt('Сколько катеров? (Не больше 4)');
                if(ship1 > 4){
                    alert('Введенное число больше 4');
                    ship1 = prompt('Сколько катеров? (Не больше 4)');
                }
                else{
                    random1(ship1);
                }
            }
            else{
                random1(4);
            }
        }
        else{
            random1(4);
        }
        
        
        // двухпалубные
        let ship2;
        if(name != 'Бот'){
            if(conf == true){
                ship2 = prompt('Сколько эсминцев? (Не больше 3)');
                if(ship2 > 3){
                    alert('Введенное число больше 3');
                    ship2 = prompt('Сколько эсминцев? (Не больше 3)');
                }
                else{
                    random2(ship2);
                }
            }
            else{
                random2(3);
            }
        }
        else{
            random2(3);
        }
        
        
        // трехпалубные
        let ship3;
        if(name != 'Бот'){
            if(conf == true){
                ship3 = prompt('Сколько крейсеров? (Не больше 2)');
                if(ship3 > 2){
                    alert('Введенное число больше 2');
                    ship3 = prompt('Сколько крейсеров? (Не больше 2)');
                }
                else{
                    random3(ship3);
                }
            }
            else{
                random3(2);
            }
        }
        else{
            random3(2);
        }
       
        // четырехпалубные
        let ship4;
        if(name != 'Бот'){
            if(conf == true){
                ship4 = confirm('Ставим линкор?');
                if(ship4 == true){
                    random4();
                }
                else{
                    alert(`${name} играет без четырехпалубных`)
                }
            }
            else{
                random4();
            }
        }
        else{
            random4();
        }
         sum = ship1 + ship2 + ship3;
    };
    //начало игры
    let player1_play = true;
    let player2_play = false;

    let GameBot = function(){
        if(player1_play == false){
            let x = Math.floor((Math.random()*271)/30)*30;
            let y = Math.floor((Math.random()*271)/30)*30;
            let index = randomXY_check1.findIndex(elem => elem[0] === x && elem[1] === y)
	    let index2 = player1_array.findIndex(elem => elem[0] === x && elem[1] === y)
            if(index == -1 && index2 == -1){
                ctx12.fillStyle = 'Gray';
		player1_array.push([x,y]);
                player1_play = true;
                player2_play = false;
                field1_check.style.top = '-1000px';
                field2_check.style.top = '50px';
		ctx12.moveTo(x, y);
		ctx12.lineTo(x+30, y+30);
		ctx12.moveTo(x+30, y);
		ctx12.lineTo(x, y+30);
		ctx12.stroke();
                ctx1.moveTo(x, y);
                ctx1.lineTo(x+30, y+30);
                ctx1.moveTo(x+30, y);
                ctx1.lineTo(x, y+30);
                ctx1.stroke();
            }
            else if (index != -1 && index2 == -1){
		win2++;
		player1_array.push([x,y]);
                ctx12.fillStyle = 'Red';
                player2_play = true;
                player1_play = false;
                ctx12.fillRect(x,y,30,30)
                ctx12.stroke();
                ctx1.moveTo(x, y);
                ctx1.lineTo(x+30, y+30);
                ctx1.moveTo(x+30, y);
                ctx1.lineTo(x, y+30);
                ctx1.stroke();
            }
	else{
		player2_play = true;
                player1_play = false;
	}
        }
        else{
            timer = setInterval(() => GameBot(), 5000)
        }
        if(win2 > ship1_length || win1 > ship2_length){
            clearInterval(timer);
            box.forEach(item => item.style.display = 'none');
            restart.style.display = 'block';
            let winner = document.querySelector('#winner');
            if(player1_play == true){
                winner.innerHTML = `Победитель: ${player1.innerHTML}`
            }
            else{
                winner.innerHTML = `Победитель: ${player2.innerHTML}`
            }
        }
    }

    let Game = function(event){
        if(player1_play == false && player2_play.innerHTML != 'Бот'){
            field2_check.style.top = '-1000px';
            field1_check.style.top = '50px';
                let x = Math.floor((event.offsetX || event.originalEvent.layerX || event.layerX)/30)*30;
                let y = Math.floor((event.offsetY || event.originalEvent.layerY || event.layerY)/30)*30;
                let index = randomXY_check1.findIndex(elem => elem[0] === x && elem[1] === y)
		let index2 = player1_array.findIndex(elem => elem[0] === x && elem[1] === y)
                if(index == -1 && index2 == -1){
                    ctx12.fillStyle = 'Gray';
		    player1_array.push([x,y]);
                    player1_play = true;
                    player2_play = false;
                    field2_check.style.top = '50px';
                    field1_check.style.top = '-1000px';
                    ctx12.moveTo(x, y);
                    ctx12.lineTo(x+30, y+30);
                    ctx12.moveTo(x+30, y);
                    ctx12.lineTo(x, y+30);
                    ctx12.stroke();
                    ctx1.moveTo(x, y);
                    ctx1.lineTo(x+30, y+30);
                    ctx1.moveTo(x+30, y);
                    ctx1.lineTo(x, y+30);
                    ctx1.stroke();
                }
                else if (index != -1 && index2 == -1){
		    win2++;
		    player1_array.push([x,y]);
                    ctx12.fillStyle = 'Red';
                    player2_play = true;
                    player1_play = false;
                    ctx12.fillRect(x,y,30,30)
                    ctx12.stroke();
                    ctx1.moveTo(x, y);
                    ctx1.lineTo(x+30, y+30);
                    ctx1.moveTo(x+30, y);
                    ctx1.lineTo(x, y+30);
                    ctx1.stroke();
                }
		else{
		    player2_play = true;
                    player1_play = false;
	        }
         }
        else{
            field1_check.style.top = '-1000px';
            field2_check.style.top = '50px';
                let x = Math.floor((event.offsetX || event.originalEvent.layerX || event.layerX)/30)*30;
                let y = Math.floor((event.offsetY || event.originalEvent.layerY || event.layerY)/30)*30;
                let index = randomXY_check2.findIndex(elem => elem[0] === x && elem[1] === y)
		let index2 = player2_array.findIndex(elem => elem[0] === x && elem[1] === y)
                if(index == -1 && index2 == -1){
                    ctx22.fillStyle = 'Gray';
	            player2_array.push([x,y]);
                    player2_play = true;
                    player1_play = false;
                    field1_check.style.top = '50px';
                    field2_check.style.top = '-1000px';
                    ctx22.moveTo(x, y);
                    ctx22.lineTo(x+30, y+30);
                    ctx22.moveTo(x+30, y);
                    ctx22.lineTo(x, y+30);
                    ctx22.stroke();
                    ctx2.moveTo(x, y);
                    ctx2.lineTo(x+30, y+30);
                    ctx2.moveTo(x+30, y);
                    ctx2.lineTo(x, y+30);
                    ctx2.stroke();
                }
                else if (index != -1 && index2 == -1){
		    win1++;
		    player2_array.push([x,y]);
                    ctx22.fillStyle = 'Red';
                    player1_play = true;
                    player2_play = false;
                    field2_check.style.top = '50px';
                    field1_check.style.top = '-1000px';
                    ctx22.fillRect(x,y,30,30)
                    ctx22.stroke();
                    ctx2.moveTo(x, y);
                    ctx2.lineTo(x+30, y+30);
                    ctx2.moveTo(x+30, y);
                    ctx2.lineTo(x, y+30);
                    ctx2.stroke();
                }
		else{
		    player1_play = true;
                    player2_play = false;
	        }
        }
        if(win2 > ship1_length || win1 > ship2_length){
            box.forEach(item => item.style.display = 'none');
            restart.style.display = 'block';
            let winner = document.querySelector('#winner');
            if(player1_play == true){
                winner.innerHTML = `Победитель: ${player1.innerHTML}`
            }
            else{
                winner.innerHTML = `Победитель: ${player2.innerHTML}`
            }
        }
    };

    // Игра с другом
    start_friends.addEventListener('click', function(){
        // Создание игроков
        let conf = confirm('Хотите ввести имена игроков?')
        if(conf == true){
            let name1 = prompt('Первый игрок');
            let name2 = prompt('Второй игрок');
            player1.innerHTML = name1.charAt(0).toUpperCase() + name1.slice(1);
            player2.innerHTML = name2.charAt(0).toUpperCase() + name2.slice(1);
        }
        box.forEach(item => item.style.display = 'inline-block');
        start_bot.style.display = 'none';
        start_friends.style.display = 'none';
        // Заполнение полей
        drawShip(player1.innerHTML, ctx1, randomXY_check1, empty1);
        drawShip(player2.innerHTML, ctx2, randomXY_check2, empty2);
        field2_check.style.top = '50px';
        field2_check.addEventListener('click', Game);
        field1_check.addEventListener('click', Game);
    });

    // Игра с ботом
    let timer;
    start_bot.addEventListener('click', function(){
        // Создание игрока
        let conf = confirm('Хотите ввести свое имя?')
        if(conf == true){
            let name = prompt('Введите свое имя');
            player1.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
            player2.innerHTML = 'Бот';
        }
        else{
            player2.innerHTML = 'Бот';
        }
        box.forEach(item => item.style.display = 'inline-block');
        start_bot.style.display = 'none';
        start_friends.style.display = 'none';
        // Заполнение полей
        drawShip(player1.innerHTML, ctx1, randomXY_check1, empty1, ship1_length);
        drawShip(player2.innerHTML, ctx2, randomXY_check2, empty2, ship2_length);
        field2_check.style.top = '50px';
        field2_check.addEventListener('click', Game);
        timer = setInterval(() => GameBot(), 2500);
    });
}






