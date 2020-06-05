  const calculateRightDiag = (board, discCount, winnerArr, gameStatus) => {
        let redArr = [];
        let blueArr = [];
        let redSeqCount = 0;
        let blueSeqCount = 0;

        for(let i=5; i>=3; i--){
            for(let k=0; k<=3; k++){
                for(let j=0; j<=3; j++){
                    if (board[i-j][j+k]) {
                        if (board[i-j][j+k] === 'RED') {
                          redSeqCount++;
                          blueSeqCount = 0;
                          redArr = [...redArr,`${j+k},${i-j}`];
                          blueArr = [];
                        } else if(board[i-j][j+k] === 'BLUE') {
                          blueSeqCount++;
                          redSeqCount = 0;
                          blueArr = [...blueArr,`${j+k},${i-j}`];
                          redArr = [];
                        } 

                        if (redSeqCount === 4)  {
                            gameStatus = 'RED';
                            winnerArr = redArr;
                            console.log('red won right diagonal');
                            return ['RED', winnerArr, 'Red has won!'];
                        }

                        if (blueSeqCount === 4)  {
                            gameStatus = 'BLUE';
                            winnerArr = blueArr;
                            console.log('blue won right diagonal');
                            return ['BLUE', winnerArr, 'Blue has won!'];
                        }
                        if (discCount  === 41) {
                            return['', [], 'It is a tie'];
                           
                        };
                    } else {
                        redSeqCount = 0;
                        blueSeqCount = 0;
                        redArr = [];  
                        blueArr = [];
                    } // first if
                } //3rd for
                redSeqCount = 0;
                blueSeqCount = 0; 
                redArr = [];
                blueArr = [];
            } // 2nd for
        } // 1st for
        return null;
    } // func

    export default calculateRightDiag;