    const calculateLeftDiag = (board, discCount, winnerArr, gameStatus) => {
        let redArr = [];
        let blueArr = [];
        let redSeqCount = 0;
        let blueSeqCount = 0;

        for(let i=5; i>=3; i--){
            for(let k=0; k<=3; k++){
                for(let j=6, n=0; j>=3; j--, n++){
                    if (board[i-n][j-k]) {
                        if (board[i-n][j-k] === 'RED') {
                          redSeqCount++;
                          blueSeqCount = 0;
                          redArr = [...redArr,`${j-k},${i-n}`];
                          blueArr = [];
                        } else if(board[i-n][j-k] === 'BLUE') {
                          blueSeqCount++;
                          redSeqCount = 0;
                          blueArr = [...blueArr,`${j-k},${i-n}`];
                          redArr = [];
                        } // 2nd if
      
                        if (redSeqCount === 4)  {
                            gameStatus = 'RED';
                            winnerArr = redArr;
                            console.log('red won left diagonal');
                            return ['RED', winnerArr, 'Red has won!'];
                        }

                         if (blueSeqCount === 4)  {
                            gameStatus ='BLUE';
                            winnerArr = blueArr;
                            console.log('blue won left diagonal');
                            return ['BLUE', winnerArr, 'Blue has won!'];
                        }

                        if (discCount === 41) {
                            return['', [], 'It is a tie'];
                        }
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
            } //2nd for
        } //1st fot
        return null;
    } //func 

export default calculateLeftDiag;