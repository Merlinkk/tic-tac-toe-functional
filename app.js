const boxes = document.querySelectorAll(".box")

var state = {
    ox: true,
    box1:true,
    box2:true,
    box3:true,
    box4:true,
    box5:true,
    box6:true,
    box7:true,
    box8:true,
    box9:true,
}

var boxarray = ["emp","emp","emp","emp","emp","emp","emp","emp","emp"]
let count=0
function updateBox(box,index){
    if(state.ox){
        box.innerHTML = "O"
        console.log("O")
        boxarray[index] = "O"
    }
    else{
        box.innerHTML = "X"
        console.log("X")
        boxarray[index] = "X"

    }
    state.ox = !state.ox
    state[`box${index + 1}`] = false
    count+=1
    draw(count)
    gameOver()

    
}



boxes.forEach((box,index)=>{
    box.addEventListener('click',function(){
        if(state[`box${index + 1}`]){
            updateBox(box,index)
        }
        
    })
})

const screen = document.getElementById('result') 
const message = document.getElementById('message')
const playAgain = document.getElementById('button')

function draw(count){
    gameOver()
    if(count==9){
        screen.style.visibility = "inherit"
        message.innerHTML = "DRAW"
    }
}

function gameOver(){
    if(boxarray[0]=='O' && boxarray[3]=='O' && boxarray[6]=='O'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'O' Won The Game!"
    }
    else if(boxarray[0]=='X' && boxarray[3]=='X' && boxarray[6]=='X'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'X' Won The Game!"
    }

    if(boxarray[1]=='O' && boxarray[4]=='O' && boxarray[7]=='O'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'O' Won The Game!"
    }
    else if(boxarray[1]=='X' && boxarray[4]=='X' && boxarray[7]=='X'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'X' Won The Game!"
    }

    if(boxarray[2]=='O' && boxarray[5]=='O' && boxarray[8]=='O'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'O' Won The Game!"
    }
    else if(boxarray[2]=='X' && boxarray[5]=='X' && boxarray[8]=='X'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'X' Won The Game!"
    }

    if(boxarray[0]=='O' && boxarray[1]=='O' && boxarray[2]=='O'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'O' Won The Game!"
    }
    else if(boxarray[0]=='X' && boxarray[1]=='X' && boxarray[2]=='X'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'X' Won The Game!"
    }

    if(boxarray[3]=='O' && boxarray[4]=='O' && boxarray[5]=='O'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'O' Won The Game!"
    }
    else if(boxarray[3]=='X' && boxarray[4]=='X' && boxarray[5]=='X'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'X' Won The Game!"
    }

    if(boxarray[6]=='O' && boxarray[7]=='O' && boxarray[8]=='O'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'O' Won The Game!"
    }
    else if(boxarray[6]=='X' && boxarray[7]=='X' && boxarray[8]=='X'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'X' Won The Game!"
    }

    if(boxarray[0]=='O' && boxarray[4]=='O' && boxarray[8]=='O'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'O' Won The Game!"
    }
    else if(boxarray[0]=='X' && boxarray[4]=='X' && boxarray[8]=='X'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'X' Won The Game!"
    }

    if(boxarray[2]=='O' && boxarray[4]=='O' && boxarray[6]=='O'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'O' Won The Game!"
    }
    else if(boxarray[2]=='X' && boxarray[4]=='X' && boxarray[6]=='X'){
        screen.style.visibility = "inherit"
        message.innerHTML = "'X' Won The Game!"
    }
}

playAgain.onclick = () =>{
    window.location.reload()
}