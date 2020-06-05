

const calculateHorizontal = (board, discCount, winnerArr, gameStatus) => {
        let redArr = [];
        let blueArr = [];
        let redSeqCount = 0;
        let blueSeqCount = 0;
        // checks winning in a row
        for(let j=5; j>=0; j--){
            for(let i=0; i<=6; i++){
                if(board[j][i]) {
                    if (board[j][i] === 'RED') {
                      redSeqCount++;
                      blueSeqCount = 0;
                      redArr = [...redArr,`${i},${j}`];
                      blueArr = [];
                    } else if (board[j][i] === 'BLUE')  {
                      blueSeqCount++;
                      redSeqCount = 0;
                      redArr = [];
                      blueArr = [...blueArr,`${i},${j}`];
                    } else {
                      redSeqCount = 0;
                      blueSeqCount = 0;
                      redArr = [];
                      blueArr = [];
                    }
                    if (redSeqCount === 4)  {
                        gameStatus = 'RED';
                        winnerArr = redArr;
                        console.log('red won horizontal');
                        return ['RED', winnerArr, 'Red has won!' ];
                        break;
                    }
                    if (blueSeqCount === 4) {
                        gameStatus = 'BLUE';
                        winnerArr = blueArr;
                        console.log('blue won horizontal');
                        return ['BLUE', winnerArr, 'Blue has won!'];
                        break;
                    }

                    if (discCount  === 41) {
                       return['', [], 'It is a tie']
                    };

                } else {
                redSeqCount = 0;
                blueSeqCount = 0; 
                redArr = [];
                blueArr = []; 
                }
            } // 2nd for
            redSeqCount = 0;
            blueSeqCount = 0;
            redArr = [];
            blueArr = [];
        } // 1st for
        redSeqCount = 0;
        blueSeqCount = 0;
        redArr = [];
        blueArr = [];
        return null;
    }

    export default calculateHorizontal;