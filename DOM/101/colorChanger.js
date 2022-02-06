// grabing h1 tag from the Document Object Model
var header =document.querySelector("h1");

// Random Color generator function:
function getRandomColor()
{
    var letters="0123456789ABCDEF";
    var hex="#";
    for(var i=0;i<6;i++)
    {
        hex += letters[Math.floor(Math.random()*16)];
    }
    return hex;
}

// Simple function for clarity
function changeHeaderColor ()
{
   var colorInput = getRandomColor();
   header.style.color= colorInput;
}


// Now perform the action over intervals (milliseocnds):
setInterval("changeHeaderColor()", 1000);