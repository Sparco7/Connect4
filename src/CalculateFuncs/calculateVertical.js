

	const calculateVertical = (board, discCount, winnerArr, gameStatus) => {
        let redArr = [];
        let blueArr = [];
        let redSeqCount = 0;
        let blueSeqCount = 0;
        // checks winning in a row
        for(let i=0; i<=6; i++){
            for(let j=5; j>=0; j--){
                if(board[j][i]) {
                    if (board[j][i] === 'RED') {
                      redSeqCount++;
                      blueSeqCount = 0;
                      redArr = [...redArr,`${i},${j}`];
                      blueArr = [];
                    } else  {
                      blueSeqCount++;
                      redSeqCount = 0;
                      redArr = [];
                      blueArr = [...blueArr,`${i},${j}`];
                    } 
                    if (redSeqCount === 4)  {
                        gameStatus = 'RED';
                        winnerArr = redArr;
                        console.log('red won vertical');
                        return ['RED', winnerArr, 'Red has won!'];
                    }
                    if (blueSeqCount === 4) {
                        gameStatus = 'BLUE';
                        winnerArr = blueArr;
                        console.log('blue won vertical');
                        return ['BLUE', winnerArr, 'Blue has won!'];
                    } 
                    if (discCount === 41) {
                        return['', [], 'It is a tie'] 
                    };
                } // 1st if
            } // 2nd for
            redSeqCount = 0;
            blueSeqCount = 0;
            redArr = [];
            blueArr = [];
        } // 1st for
        return null;
    }

    export default calculateVertical;