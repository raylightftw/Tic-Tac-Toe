


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

                            if (gameboard.victory("X")) 
                            {   
                                winner = gameboard.displaywinner(player1)
                                document.querySelector('.biggrid').append(winner)
                                console.log(`${player1.name} wins`);
                                
                                winner.addEventListener('click',() => { clearBoard() })
                            }

                            else if (gameboard.victory("O")) 
                            {   
                                winner = gameboard.displaywinner(player2)
                                document.querySelector('.biggrid').append(winner)
                                console.log(`${player2.name} wins`);
                                
                                winner.addEventListener('click',() => { clearBoard() })
                            }


                            else if (gameboard.victory("X") != true && gameboard.victory("O") != true && gameboard.countspaces() == 9)
                            {   console.log("entered")
                                
                                tieboard = gameboard.displaytie("tie")
                                document.querySelector('.biggrid').append(tieboard)
                                console.log(`tie`);
                                
                                tieboard.addEventListener('click',() => { clearBoard() })
                            }
                    }});
                })(i);

            }
        };

        const clearBoard = () => {
            const bigGrid = document.querySelector('.biggrid');
            
            bigGrid.innerHTML = "";
            grids = [];
            create(); 
            currentPlayer = player1;
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
                
                else if (grids[0].textContent == symbol && grids[3].textContent == symbol && grids[6].textContent == symbol)
                    {
                        return true;
                    }

                else if (grids[1].textContent == symbol && grids[4].textContent == symbol && grids[7].textContent == symbol)
                    {
                        return true;
                    }
                else if (grids[2].textContent == symbol && grids[5].textContent == symbol && grids[8].textContent == symbol)
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

            const displaywinner = (winner) =>
            {   
                const winnerboard = document.createElement('div')
                winnerboard.classList.add('winnerboard')

                

                
                winnerboard.textContent = `${winner.name} wins! \n Click to restart`
                
                return winnerboard;

            }

            const displaytie = () =>
            {   
                const tieboard = document.createElement('div')
                tieboard.classList.add('winnerboard')

                

                
                tieboard.textContent = `It's a tie! \n Click to restart`
                
                return tieboard;

            }

            const countspaces = () => 
            {   
                var count = 0;
                
                for (var j = 0; j<9;j++)
                    {
                        if (grids[j].textContent != "")
                            {
                                count++
                            }
                        console.log(count)
                        return count
                    }
            }
        
            return { makeMove, victory, create, playerSwap,clearBoard, displaywinner,countspaces,displaytie }

            
    }

)();

const play = () =>
{

}


gameboard.create()
const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");
let currentPlayer = player1
