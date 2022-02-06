var p= document.querySelector("p");

var special=document.querySelector("#special");

var specialA =special.querySelector("a");



function changeTextContent()
{
    // alert("Changing text content");
    p.textContent="MODIFIED THE TEXT THAT WAS HERE BEFORE";
}

function changeInnerHtml()
{
    // alert("changing Inner HTML");
    p.innerHTML="<strong>I'm Bold</strong>";
}

function changeAttribute()
{
    // alert("changing the href Attribute for the link")
    specialA.innerText = "AMAZON";
    specialA.setAttribute("href","https://Amazon.com")
}


// sample logic to test ou the different DOM modifications

var start = prompt("Allow javascript to modify the DOM, (y/n)");
var action ="default";
if(start === "y")
{
     while(action !== "4")
     {
        action =prompt("Select an action\n1.change-text\n2.change-HTML\n3.change-attribute\n4.quit");
        if(action === "1"){
            changeTextContent();
        }
        else if(action === "2"){
            changeInnerHtml();
        }
        else if(action ==="3"){
            changeAttribute();
        }
        else{
            alert("re-load the program to start over");
            break;
        }
     }
}