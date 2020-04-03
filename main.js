// Basic events practice

const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const onClick = function() {
    box.style.backgroundColor="#8e44ad"
}


//list
const list=document.getElementById("list")

const addItem = function() {
    const newItem=document.createElement("li")
    newItem.innerHTML="A new item!"
    list.appendChild(newItem)
}

//reservations
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }

const checkReservation=function(){
    const textBox = document.getElementById("textBox")

    valueBox=textBox.value.toLowerCase()
    
    const newMess=document.createElement("h4")
    



    
    console.log(valueBox)
    // console.log(reservations[valueBox].claimed)


    if (valueBox in reservations){

        if (reservations[valueBox].claimed) {  
            newMess.innerHTML="Welcome, "+valueBox
            document.body.appendChild(newMess)
        }
        else {
            newMess.innerHTML="I don't know you, "+valueBox
            document.body.appendChild(newMess)
        }
    }
}




// boxes
const getRandomColor=function() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }


// const overBox=function(){   
//     const oneBox=document.getElementsByClassName("nBox")
//     newColor=getRandomColor()
//     oneBox.style.backgroundColor=newColor
// }



const container=document.getElementById("container")
const makeBox=function(){
    const nBox=document.createElement("div")
    nBox.setAttribute("class","nBox") 
    nBox.onmouseover=function(){
        newColor=getRandomColor()
        nBox.style.backgroundColor=newColor
    }
    container.appendChild(nBox)
    
}

for (let i=0;i<6;i++){
    makeBox()
}




