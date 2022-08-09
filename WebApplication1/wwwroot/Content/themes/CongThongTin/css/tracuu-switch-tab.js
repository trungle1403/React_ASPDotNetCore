document.addEventListener("DOMContentLoaded", function(event) { 
   const tracuutype= document.querySelectorAll('.tc-submit-dif');
   tracuutype.forEach((item)=>{
        item.addEventListener('click',()=>{
            openPage(item.dataset.form,item,"red")
        })

   })
document.getElementById("defaultOpen").click();
  
})
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tracuu-form");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tc-submit-dif")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.background = "white";
    tablinks[i].style.color = "black";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
  elmnt.style.color = "white";
}

// Get the element with id="defaultOpen" and click on it