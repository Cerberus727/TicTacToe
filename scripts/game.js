function resetGameStatus(){
    gameIsOver=false;
    activePlayer=0;
    currentRound=1;
    gameOverElement.firstElementChild.innerHTML=
    'You won,<span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display='none';
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j]=0;
        }
    }
    for(const gameFieldElement of gameFieldELements){
        gameFieldElement.innerHTML='';
        gameFieldElement.classList.remove('disabled');
    }
}
function startNewGame(){
    if(players[0].name=='' || players[1].name==''){
        alert('Please set custome player names for both players!');
        return;
    }
    resetGameStatus();
    gameAreaElement.style.display='block';
    activePlayerNameElement.textContent=players[activePlayer].name;
}
function switchPlayer(){
    if(activePlayer==0){
        activePlayer=1;
    }
    else{
        activePlayer=0;
    }
    activePlayerNameElement.textContent=players[activePlayer].name;
}
function checkForGameOver() {
    for (let i = 0; i < 3; i++) {
      if (
        gameData[i][0] > 0 &&
        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] === gameData[i][2]
      ) {
        return gameData[i][0];
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        gameData[0][i] > 0 &&
        gameData[0][i] === gameData[1][i] &&
        gameData[0][i] === gameData[2][i]
      ) {
        return gameData[0][i];
      }
    }

    if (
      gameData[0][0] > 0 &&
      gameData[0][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
    ) {
      return gameData[0][0];
    }
    if (
      gameData[2][0] > 0 &&
      gameData[2][0] === gameData[1][1] &&
      gameData[1][1] === gameData[0][2]
    ) {
      return gameData[2][0];
    }
    if(currentRound==9){
        return -1;
    }
    return 0;
}  
function selectGameField(event){
    const selecedField=event.target;
    
    const selectedColumn=selecedField.dataset.col-1;
    const selectedRow=selecedField.dataset.row-1;
    
    if(gameData[selectedRow][selectedColumn]>0){
        alert('Please select an empty field');
        return;
    }
    if(gameIsOver){
        return;
    }
    selecedField.textContent=players[activePlayer].symbol;
    selecedField.classList.add('disabled');
    gameData[selectedRow][selectedColumn]=activePlayer+1;
    const winnerId=checkForGameOver();
    if(winnerId!==0){
        endGame(winnerId);
    }
    currentRound++;
    switchPlayer();
    
}
function endGame(winnerId){
    gameIsOver=true;
    gameOverElement.style.display='block';
    if(winnerId>0){
        const winnerName=players[winnerId-1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent=winnerName;
    }
    else{
        gameOverElement.firstElementChild.textContent='It\'s a draw';
    }

}
