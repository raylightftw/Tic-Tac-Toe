
startingpage = document.querySelector('.starter');
var form = document.querySelector(".playerform");
function handleForm(event) { event.preventDefault(); 
    var pl1name  = document.getElementById('pl1').value;
    var pl2name  = document.getElementById('pl2').value; 
    var checkbox= document.querySelector('#AI').checked;

    const player1 = player(pl1name, "X");
    const player2 = player(pl2name, "O");
    console.log(checkbox)
    initializegame(player1,player2,checkbox)
 
}
form.addEventListener('submit', handleForm
);

const player = (name,symbol) => 
    {  
        
        const winner = () => { console.log(`${symbol} wins!`)}
        return { winner, name, symbol }
        

    }

document.querySelector('#namesubmit').addEventListener('click',()=> { startingpage.style.display = 'none' })
const initializegame = (player1,player2,check) => {
const gameboard = ( () => 
    {   
        let grids = [];
        let score1 = 0
        let score2 = 0

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
                        if(gameboard.makeMove(index, currentPlayer.symbol,check))
                        {   
                            
                            document.querySelector('.p1').textContent = `${player1.name}'s Score: \n ${score1}`;
                            document.querySelector('.p2').textContent = `${player2.name}'s Score: \n ${score2}`
                            
                            
                            gameboard.playerSwap(currentPlayer,player1,player2);

                            if(check == true && currentPlayer == player2)
                                {
                                    setTimeout(makeMove(index,currentPlayer.symbol,check),100)
                                    playerSwap(currentPlayer,player1,player2)
                                    
                                    let finalindex = -1
                                    let counter = 0
                                    for(i=0;i<9;i++)
                                        {
                                            if(grids[i].textContent=="")
                                                {
                                                    counter+=1
                                                    finalindex = i
                                                }
                                        }
                                    if(counter==1)
                                        {   console.log("countr is 1")
                                            console.log(i)
                                            grids[finalindex].textContent = "X"
                                            if (gameboard.victory("X")) 
                                                {   
                                                    winner = gameboard.displaywinner(player1)
                                                    document.querySelector('.biggrid').append(winner)
                                                    console.log(`${player1.name} wins`);
                                                    score1++
                                                    document.querySelector('.p1').textContent = `${player1.name}'s Score: \n ${score1}`;
                                                    winner.addEventListener('click',() => { clearBoard() })
                                                }
                                                            }
                                                else if (gameboard.victory("X") != true && gameboard.victory("O") != true && gameboard.countspaces() == true)
                                                {   console.log("entered")
                                                            
                                                    tieboard = gameboard.displaytie("tie")
                                                    document.querySelector('.biggrid').append(tieboard)
                                                    console.log(`tie`);
                                                                
                                                    tieboard.addEventListener('click',() => { clearBoard() })
                                                }

                                    

                                }

                            if (gameboard.victory("X")) 
                            {   
                                winner = gameboard.displaywinner(player1)
                                document.querySelector('.biggrid').append(winner)
                                console.log(`${player1.name} wins`);
                                score1++
                                document.querySelector('.p1').textContent = `${player1.name}'s Score: \n ${score1}`;
                                
                                winner.addEventListener('click',() => { clearBoard() })
                            }

                            else if (gameboard.victory("O")) 
                            {   
                                winner = gameboard.displaywinner(player2)
                                document.querySelector('.biggrid').append(winner)
                                console.log(`${player2.name} wins`);
                                score2++
                                document.querySelector('.p2').textContent = `${player2.name}'s Score: \n ${score2}`
                                winner.addEventListener('click',() => { clearBoard() })
                            }


                            else if (gameboard.victory("X") != true && gameboard.victory("O") != true && gameboard.countspaces() == true)
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
                        colorchange(0,4,8)
                        return true;

                    }

                else if (grids[2].textContent == symbol && grids[4].textContent == symbol && grids[6].textContent == symbol)
                    {   colorchange(2,4,6)
                        return true;
                    }

                else if (grids[0].textContent == symbol && grids[1].textContent == symbol && grids[2].textContent == symbol)
                    {   colorchange(0,1,2)
                        return true;
                    }

                else if (grids[3].textContent == symbol && grids[4].textContent == symbol && grids[5].textContent == symbol)
                    {   colorchange(3,4,5)
                        return true;
                    }

                else if (grids[6].textContent == symbol && grids[7].textContent == symbol && grids[8].textContent == symbol)
                    {   colorchange(6,7,8)
                        return true;
                    }
                
                else if (grids[0].textContent == symbol && grids[3].textContent == symbol && grids[6].textContent == symbol)
                    {   colorchange(0,3,6)
                        return true;
                    }

                else if (grids[1].textContent == symbol && grids[4].textContent == symbol && grids[7].textContent == symbol)
                    {   colorchange(1,4,7)
                        return true;
                    }
                else if (grids[2].textContent == symbol && grids[5].textContent == symbol && grids[8].textContent == symbol)
                    {   colorchange(2,5,8)
                        return true;
                    }









                else 
                    {
                        return false;
                    }



                
            };

            
            const makeMove = (index,symbol,checker) =>
            { 
                if (checker == false)
                    {if (grids[index].textContent == "")
                        {
                            grids[index].textContent = symbol
                            return true;
                            
                        }
                    return false;
                    }

                else
                {
                    if (symbol == "O")

                        {   
                            let flag = false
                            while (flag == false)
                            {   
                                let index = Math.floor(Math.random()*9)
                                if (grids[index].textContent == "")
                                    {   
                                        grids[index].textContent = "O"
                                        flag = true
                                        
                                    }
                            }
                            return true;


                        }
                    
                    else   
                        {
                            if (grids[index].textContent == "")
                        {
                            grids[index].textContent = symbol
                            return true;
                            
                        }
                    return false;

                        }
                }

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
            const colorchange = (i1,i2,i3) =>
            {
                grids[i1].classList.add('victory')
                grids[i2].classList.add('victory')
                grids[i3].classList.add('victory')
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
                
                if(grids[0].textContent != "" && grids[1].textContent != "" && grids[2].textContent != "" && grids[3].textContent != "" && grids[4].textContent != "" && grids[5].textContent != "" && grids[6].textContent != "" && grids[7].textContent != "" && grids[8].textContent != "")
                    {
                        return true
                    }
                return false;
            
            }
        
            return { colorchange, makeMove, victory, create, playerSwap,clearBoard, displaywinner,countspaces,displaytie }

            
    }

)();



gameboard.create()

let currentPlayer = player1
}
