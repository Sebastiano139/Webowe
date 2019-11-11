function openNav() {
    document.getElementById("mySidenav").style.left = "0";
}

function closeNav() {
   document.getElementById("mySidenav").style.left = "-450px";
   console.log(document.getElementById("dish").value);
   
}

window.onclick = function(e) {
   if (!e.target.matches('.dropbtn')) {
       let myDropdown = document.getElementById("myDropdown");
       if (myDropdown.classList.contains('show')) {
           myDropdown.classList.remove('show');
       }
   }
}