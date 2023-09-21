


const player = (name,symbol) => 
    {  
        
        const winner = () => { console.log(`${symbol} wins!`)}
        return { winner, name, symbol }
        

    }


const gameboard = ( () => 
    {   
        let grids = [];


        const create = () => 
        { 
        
        for (var i = 0;i<9;i++)
            {
                grids[i] = document.createElement('div')
                grids[i].textContent = ""
                grids[i].classList.add('grids')
                document.querySelector('.biggrid').append(grids[i]);

                (function (index) {
                    grids[index].addEventListener('click', () => {
                        if(gameboard.makeMove(index, currentPlayer.symbol))
                        {gameboard.playerSwap(currentPlayer,player1,player2);

                            if (gameboard.victory(currentPlayer.symbol)) 
                            {
                                console.log(`${currentPlayer.name} wins`);
                                gameboard.clearBoard();
                            }
                    }});
                })(i);

            }
        };

        const clearBoard = () => {
            const bigGrid = document.querySelector('.biggrid');
            bigGrid.innerHTML = "";
            grids = [];
            create(); // Recreate the board and event listeners
        };

        const victory = (symbol) =>
            {
                if (grids[0].textContent == symbol && grids[4].textContent == symbol && grids[8].textContent == symbol)
                    {
                        return true;

                    }

                else if (grids[2].textContent == symbol && grids[4].textContent == symbol && grids[6].textContent == symbol)
                    {
                        return true;
                    }

                else if (grids[0].textContent == symbol && grids[1].textContent == symbol && grids[2].textContent == symbol)
                    {
                        return true;
                    }

                else if (grids[3].textContent == symbol && grids[4].textContent == symbol && grids[5].textContent == symbol)
                    {
                        return true;
                    }

                else if (grids[6].textContent == symbol && grids[7].textContent == symbol && grids[8].textContent == symbol)
                    {
                        return true;
                    }
                
                else 
                    {
                        return false;
                    }



                
            };

            
            const makeMove = (index,symbol) =>
            {
                if (grids[index].textContent == "")
                    {
                        grids[index].textContent = symbol
                        return true;
                        
                    }
                return false;


            };

            const playerSwap = (current,p1,p2) => 
            {
                
                if(currentPlayer.symbol == p1.symbol)
                    {
                        currentPlayer = p2
                    }

                else if(currentPlayer.symbol == p2.symbol)
                    {
                        currentPlayer = p1
                    }
                
                
            }

            return { makeMove, victory, create, playerSwap,clearBoard }


    }

)();

const play = () =>
{

}


gameboard.create()
const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");
let currentPlayer = player1
