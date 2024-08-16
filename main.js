
function buttonPress(buttonID) {
    var currentSelectionID = localStorage.getItem("buttonID");
    if (currentSelectionID) {
      var currentSelection = document.getElementById(currentSelectionID);
        currentSelection.style.backgroundColor = "";
        currentSelection.style.color = "";
    }
    var buttonPressed = document.getElementById(buttonID);
    buttonPressed.style.backgroundColor = "white";
    buttonPressed.style.color = "rgb(30, 37, 47)";
    localStorage.setItem("buttonID", buttonID);
  }

  document.getElementById("submit").addEventListener('click', (e) =>{
    window.location.href= "thank-you.html";
    
  })
document.addEventListener('DOMContentLoaded', () =>  {
    var rating= document.getElementById('rating');
    var currentSelectionID = localStorage.getItem("buttonID");
    rating.innerHTML=mapID(currentSelectionID);
});

