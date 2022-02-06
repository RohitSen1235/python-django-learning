// Restart functionality
var restart=document.querySelector("#restart");


// Selecting all the boxes

var squares=document.querySelectorAll(".square")

// function for clearing the board
function clearBoard(){
    for(var sq in squares)
    {
        squares[sq].textContent="";
    }
}

// function for changing the marker in a given field
function changeMarker(){
    if(this.textContent===""){
        this.textContent ="X";
        this.style.color="blue";
    }
    else if(this.textContent==="X"){
        this.textContent="O";
        this.style.color= "orange";
    }
    else{
        this.textContent="";
    }
}

restart.addEventListener('click',clearBoard);

for(var sq in squares){
    squares[sq].addEventListener('click',changeMarker);
}
