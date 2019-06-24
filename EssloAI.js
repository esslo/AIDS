var AI = {
    name: 'AI',
    logic: (game) => {
          //Diagonals and Outsides
            if(game.state[6] == 'O' && game.state[7] == 'O' && game.state[8] == '') {
                game.makeMove(8)} 
            else if(game.state[6] == 'O' && game.state[3] == 'O' && game.state[0] == '') {
                game.makeMove(0)} 
            else if(game.state[6] == 'O' && game.state[4] == 'O' && game.state[2] == '') {
                game.makeMove(2)} 

            else if(game.state[0] == 'O' && game.state[3] == 'O' && game.state[6] == '') {
                game.makeMove(6)} 
                else if(game.state[0] == 'O' && game.state[1] == 'O' && game.state[2] == '') {
                game.makeMove(2)} 
                else if(game.state[0] == 'O' && game.state[4] == 'O' && game.state[8] == '') {
                game.makeMove(8)} 
            
                else if(game.state[8] == 'O' && game.state[7] == 'O' && game.state[6] == '') {
                game.makeMove(6)} 
                else if(game.state[8] == 'O' && game.state[5] == 'O' && game.state[2] == '') {
                game.makeMove(2)} 
                else if(game.state[8] == 'O' && game.state[4] == 'O' && game.state[0] == '') {
                game.makeMove(0)} 

                else if(game.state[2] == 'O' && game.state[1] == 'O' && game.state[0] == '') {
                game.makeMove(0) } 
                else if(game.state[2] == 'O' && game.state[5] == 'O' && game.state[8] == '') {
                game.makeMove(8)} 
                else if(game.state[2] == 'O' && game.state[4] == 'O' && game.state[6] == '') {
                game.makeMove(6)} 
    
                else if(game.state[0] == 'O' && game.state[2] == 'O' && game.state[1] == '') {
                game.makeMove(1)} 
                else if(game.state[0] == 'O' && game.state[6] == 'O' && game.state[3] == '') {
                game.makeMove(3) } 
                else if(game.state[6] == 'O' && game.state[8] == 'O' && game.state[7] == '') {
                game.makeMove(7)}  
                else if(game.state[2] == 'O' && game.state[8] == 'O' && game.state[5] == '') {
                game.makeMove(5)  } 
                else if(game.state[2] == 'O' && game.state[6] == 'O' && game.state[4] == '') {
                game.makeMove(4)} 
                else if(game.state[0] == 'O' && game.state[8] == 'O' && game.state[4] == '') {
                game.makeMove(4)} 
    
        //Crosses
            if(game.state[1] == 'O' && game.state[4] == 'O' && game.state[7] == ''){
                game.makeMove(7)}
                else if(game.state[7] == 'O' && game.state[4] == 'O' && game.state[1] == ''){
                game.makeMove(1)} 
                else if(game.state[3] == 'O' && game.state[4] == 'O' && game.state[5] == ''){
                game.makeMove(5)} 
                else if(game.state[5] == 'O' && game.state[4] == 'O' && game.state[3] == ''){
                game.makeMove(3) } 
        
                else if(game.state[7] == 'O' && game.state[1] == 'O' && game.state[4] == ''){
                game.makeMove(4)} 
                else if(game.state[3] == 'O' && game.state[5] == 'O' && game.state[4] == ''){
                game.makeMove(4)}
    
       
        //Diagonals and Outsides
            if(game.state[6] == 'X' && game.state[7] == 'X' && game.state[8] == '') {
                game.makeMove(8)} 
                else if(game.state[6] == 'X' && game.state[3] == 'X' && game.state[0] == '') {
                game.makeMove(0) } 
                else if(game.state[6] == 'X' && game.state[4] == 'X' && game.state[2] == '') {
                game.makeMove(2)} 

                else if(game.state[0] == 'X' && game.state[3] == 'X' && game.state[6] == '') {
                game.makeMove(6)} 
                else if(game.state[0] == 'X' && game.state[1] == 'X' && game.state[2] == '') {
                    game.makeMove(2)} 
                    else if(game.state[0] == 'X' && game.state[4] == 'X' && game.state[8] == '') {
                game.makeMove(8)} 
                else if(game.state[8] == 'X' && game.state[7] == 'X' && game.state[6] == '') {
                game.makeMove(6) }
                else if(game.state[8] == 'X' && game.state[5] == 'X' && game.state[2] == '') {
                game.makeMove(2)} 
                else if(game.state[8] == 'X' && game.state[4] == 'X' && game.state[0] == '') {
                game.makeMove(0)} 

                else if(game.state[2] == 'X' && game.state[1] == 'X' && game.state[0] == '') {
                game.makeMove(0)} 
                else if(game.state[2] == 'X' && game.state[5] == 'X' && game.state[8] == '') {
                game.makeMove(8)} 
                else if(game.state[2] == 'X' && game.state[4] == 'X' && game.state[6] == '') {
                game.makeMove(6)} 
    
                else if(game.state[0] == 'X' && game.state[2] == 'X' && game.state[1] == '') {
                game.makeMove(1)} 
                else if(game.state[0] == 'X' && game.state[6] == 'X' && game.state[3] == '') {
                game.makeMove(3)} 
                else if(game.state[6] == 'X' && game.state[8] == 'X' && game.state[7] == '') {
                game.makeMove(7)} 
                else if(game.state[2] == 'X' && game.state[8] == 'X' && game.state[5] == '') {
                game.makeMove(5)} 
                else if(game.state[2] == 'X' && game.state[6] == 'X' && game.state[4] == '') {
                game.makeMove(4)} 
                else if(game.state[0] == 'X' && game.state[8] == 'X' && game.state[4] == '') {
                game.makeMove(4)
        } 
       
        //Crosses
            if(game.state[1] == 'X' && game.state[4] == 'X' && game.state[7] == ''){
            game.makeMove(7)} 
                else if(game.state[7] == 'X' && game.state[4] == 'X' && game.state[1] == ''){
                game.makeMove(1)} 
                else if(game.state[3] == 'X' && game.state[4] == 'X' && game.state[5] == ''){
                game.makeMove(5)} 
                else if(game.state[5] == 'X' && game.state[4] == 'X' && game.state[3] == ''){
                game.makeMove(3)
    } 
        
            else if(game.state[7] == 'X' && game.state[1] == 'X' && game.state[4] == ''){
                game.makeMove(4)}
                else if(game.state[3] == 'X' && game.state[5] == 'X' && game.state[4] == ''){
                game.makeMove(4)}









        if(game.state[6] == '') {
            game.makeMove(6)
        }  else if(game.state[4] == '') {
            game.makeMove(4)
        }  else if(game.state[7] == '') {
            game.makeMove(7)
        }  else if(game.state[2] == '') {
            game.makeMove(2)
        }  else if(game.state[0] == '') {
            game.makeMove(0)
        }  else if(game.state[8] == '') {
            game.makeMove(8)
        }  else if(game.state[3] == '') {
            game.makeMove(3)
        }  else if(game.state[5] == '') {
            game.makeMove(5)
        }  else if(game.state[1] == '') {
            game.makeMove(1)
        } 

        
    }
}