let gameData=[[0,0,0],
[0,0,0],[0,0,0]];
let editedPlayer=0;
let activePlayer=0;
let currentRound=1;
let gameIsOver=false;
const players=[{
    name:'',
    symbol:'X'
},{
    name:'',
    symbol:'O'
},];
const playerConfigOverlayElement=document.getElementById('config-overlay');
const activePlayerNameElement=document.getElementById('active-player-name');
const startNewGameBtnElement=document.getElementById('start-game-btn');
const playername=document.getElementById('playername');
const backdropElement=document.getElementById('backdrop');
const editPlayer1BtnElement=document.getElementById('edit-player1-btn');
const editPlayer2BtnElement=document.getElementById('edit-player2-btn');
const cancelConfigBtnElement=document.getElementById('cancel-config-btn');
const formElement=document.querySelector('form');
const gameFieldELements=document.querySelectorAll('#game-board li');
const gameAreaElement=document.getElementById('active-game');
const errorsOutputElement=document.getElementById('config-errors');
const gameOverElement=document.getElementById('game-over');
editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);
cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);
formElement.addEventListener('submit',savePlayerConfig);
startNewGameBtnElement.addEventListener('click',startNewGame);
for(const gameFieldELement of gameFieldELements){
    gameFieldELement.addEventListener('click',selectGameField);
}