const grid = ( () => { 

    const create = () => 
        { 
        var grids = [];
        for (var i = 0;i<9;i++)
            {
                grids[i] = document.createElement('div')
                grids[i].classList.add('grids')
                document.querySelector('.biggrid').append(grids[i]);
            }
        }
return {create};
                    })();


grid.create()
