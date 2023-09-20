


const player = (name,symbol) => 
    {  
        
        const winner = () => { console.log(`${symbol} wins!`)}
        return { winner, name, symbol }
        

    }


const gameboard = ( () => 
    {   
        const grids = [];


        const create = () => 
        { 
        
        for (var i = 0;i<9;i++)
            {
                grids[i] = document.createElement('div')
                grids[i].textContent = "h"
                grids[i].classList.add('grids')
                document.querySelector('.biggrid').append(grids[i]);

                grids[i].addEventListener('click',()=> {
                    console.log("Clicked index:", i)
                    gameboard.makeMove(i, currentPlayer.symbol)
                })

            }
        };

        const victory = (symbol) =>
            {
                if (grids[1].textContent == symbol && grids[5].textContent == symbol && grids[9].textContent == symbol)
                    {
                        return true;

                    }

                else if (grids[3].textContent == symbol && grids[5].textContent == symbol && grids[7].textContent == symbol)
                    {
                        return true;
                    }

                else if (grids[1].textContent == symbol && grids[2].textContent == symbol && grids[3].textContent == symbol)
                    {
                        return true;
                    }

                else if (grids[4].textContent == symbol && grids[5].textContent == symbol && grids[6].textContent == symbol)
                    {
                        return true;
                    }

                else if (grids[7].textContent == symbol && grids[8].textContent == symbol && grids[9].textContent == symbol)
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
                if (grids[index].textContent == "h")
                    {
                        grids[index].textContent = "hi"
                        return true;
                        
                    }
                return false;


            };


            return { makeMove, victory, create }


    }

)();

const play = () =>
{

}


gameboard.create()
const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");
let currentPlayer = player1
