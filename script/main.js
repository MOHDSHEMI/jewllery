//active navbar

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on")
    }
}

//nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
     a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
     })
}
)

const showFormButton = document.getElementById("showFormBtn");
const closeFormButton = document.getElementById("closeFormBtn");
const signInForm = document.getElementById("signInForm");

// Show the sign-in form when the button is clicked
showFormButton.addEventListener("click", function () {
    signInForm.style.display = "block";
});

// Close the sign-in form when the close button is clicked
closeFormButton.addEventListener("click", function () {
    signInForm.style.display = "none";
});

// Close the sign-in form when clicking outside the form
window.addEventListener("click", function (event) {
    if (event.target === signInForm) {
        signInForm.style.display = "none";
    }
});