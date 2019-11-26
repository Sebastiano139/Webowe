function openNav() {
    document.getElementById("mySidenav").style.left = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-450px";
    $("#recipieForm")[0].reset();

    var elems = document.querySelectorAll(".incorrectContent");
    [].forEach.call(elems, function(el) {
        console.log(el);
        el.classList.remove("incorrectContent");
    });

    var elems = document.querySelectorAll(".correctContent");
    [].forEach.call(elems, function(el) {
        console.log(el);
        el.classList.remove("correctContent");
    });
}

function formIsEmpty(elements) {
    for (const [key, value] of Object.entries(elements)) {
        if(value === "") return true;    
    }
      return false;
}

function urlIsCorrect(url) {
    if(url.match(/https?:[\/|.|\w|\s|-]*\.(?:jpg|gif|png|jpeg).*/g) === null) return false;
    return true;
}

function validateFormWhenIsFocus(element) {
    $(element).focusout(function() {  
        if($(this).val()=='') {  
            incorrectForm(this);
        } 
        else {  
            correctForm(this);
        }     
    });
}

function correctForm(element) {
    removeFormCss(element);
    element.classList.add("correctContent");
}

function incorrectForm(element) {
    removeFormCss(element);
    element.classList.add("incorrectContent");
}

function removeFormCss(element) {
    element.classList.remove("incorrectContent");
    element.classList.remove("correctContent");
}

$(document).ready(function() {      
    validateFormWhenIsFocus("input");
    validateFormWhenIsFocus("textarea");
    $("#primaryImage").focusout(function(){
        if($(this).val().match(/https?:[\/|.|\w|\s|-]*\.(?:jpg|gif|png|jpeg).*/g) === null){
            incorrectForm(this);
        }
        else { 
            correctForm(this); 
        }     
    })
    $("#secondaryImage").focusout(function(){
        if($(this).val().match(/https?:[\/|.|\w|\s|-]*\.(?:jpg|gif|png|jpeg).*/g) === null){
            incorrectForm(this);
        }
        else { 
            correctForm(this);
        }     
    })
});

window.onclick = function(e) {
   if (!e.target.matches('.dropbtn')) {
       let myDropdown = document.getElementById("myDropdown");
       if (myDropdown.classList.contains('show')) {
           myDropdown.classList.remove('show');
       }
   }
}