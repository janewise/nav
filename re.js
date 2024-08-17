    // ********** for sticky animation

    // One with waypoint
    $('#Skill').waypoint(function(direction){

        if (direction=='down') {
            $('nav').addClass('sticky');
        } 
        else{
            $('nav').removeClass('sticky');
        }
    },{
        Offset:'10%'
    })

// Two with W3scool fix

//     // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.querySelector(".nav-bg");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// Three with w3school shrink
// window.onscroll = function() {scrollFunction()};
// var navbar = document.querySelector(".nav-bg");
// var sticky = navbar.offsetTop;

// function scrollFunction() {
//   if (window.pageYOffset > sticky) {
//     navbar.classList.add("sticky")
//     document.querySelector(".nav-bg").style.height= "9vh";
//     document.querySelector(".navbar-brand").style.fontSize = "1.5rem";
//   } else {
//     navbar.classList.remove("sticky")
//     document.querySelector(".nav-bg").style.height= "10vh";
//     document.querySelector(".navbar-brand").style.fontSize = "1.7rem";
//   }
// }

