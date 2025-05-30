document.addEventListener('DOMContentLoaded',function(){
    const gameArena = document.getElementById('game-arena');
    const arenaSize = 600;
    const cellSize = 20;
    let gameStarted = false;
    let score = 0;
    let food =[{x:300,y:200}];
    let snake=[{x:140,y:200},{x:160,y:200},{x:180,y:200}];


    function runGame(){
        
    }

    function initiateGame(){
        const scoreBoard = document.createElement('div');
        scoreBoard.id='score-board';
        document.body.insertBefore(scoreBoard,gameArena);

        const startButton = document.createElement('button');
        startButton.textContent ="Start Game";
        startButton.classList.add('start-button');
        startButton.addEventListener('click', function startGame(){
            startButton.style.display= 'none';

            runGame();
        })
        document.body.append(startButton);
    }

    initiateGame();

})
