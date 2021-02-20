// Navigation Links creation

//saves the array with the links names in a variable
const navLinks = ['home', 'services', 'works', 'contact']; 
//fetches the element which will receive the links
const navMenu = document.querySelector('.nav_links'); 
// creates a minimal lightweight DOM to enhance performance
const fragment = document.createDocumentFragment(); 

navLinks.forEach ((navLink) => {
    //creates a new li for each nav link
    const newLi = document.createElement('li'); 
    // creates a new a for each nav link
    const newA = document.createElement('a'); 

        //sets the name for each link as per the array
        newA.innerHTML = navLink; 
        //sets the attribute href and respective id link to scroll to as per the array
        newA.setAttribute('href', `#${navLink}`); 
        //appends the a to the li
        newLi.appendChild(newA); 
        //appends the li to the DOM fragment created
        fragment.appendChild(newLi); 
});
    //appends the fragment (which has the li a) to the navigation
    navMenu.appendChild(fragment); 


// Navigation bar sticky when starts scrolling

    //create event listener for window scrolling
window.addEventListener('scroll', () => {
        let header = document.getElementById('header'); //look for the element with the header ID
        let windowPosition = window.scrollY > 30; // window scrolling over 30px on the Y axis
        header.classList.toggle('nav_scroll', windowPosition); // toggle the class nav_scroll 
});


//Navigation bar to highlight active section when scrolled

//create scroll event listener, grabbing the navigationLinks (already had used navLinks so) and saving the scrollY into a variable
window.addEventListener('scroll', event => {
    const navigationLinks = document.querySelectorAll('nav ul li a');
    const fromTop = window.scrollY;
    
    //forEach link, check the section to which it belongs that its represented by the hash # and save it and if that section height and distance from the top makes it in the viewport, add the class to highlight the respective link nav else remove it
    navigationLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop - 20 <= fromTop &&
            section.offsetTop - 20 + section.offsetHeight > fromTop
        ) {
            link.classList.add('nav_highlight');
        } else {
            link.classList.remove('nav_highlight');
        }
    });
});
   

// Button to scroll back to top

//gets the button
const buttonTop = document.querySelector('#btn_top');
//event listener for scrolling
window.addEventListener('scroll', showButton);
//function to show the button after yoffset is over 50px displaying the button
function showButton() {
    if (window.pageYOffset > 100) {
        buttonTop.style.display = "block";
    } else {
        buttonTop.style.display = "none";
    }
}
//event listener for clicks on the button
buttonTop.addEventListener('click', backToTop);
//returns the view to the top
function backToTop() {
    window.scrollTo(0, 0);
};


// Navigation mobile
function navSlide() {     

    const burger = document.querySelector('.nav_burger'); //gets the burger
    const navMenu = document.querySelector('.nav_links'); // gets the nav links
    const navLis = document.querySelectorAll('.nav_links li'); //gets the li

    burger.addEventListener('click', () => { //event listener for clicks on the burger
            //toggle Nav
            navMenu.classList.toggle('nav_active'); //toggles the nav active 
            //animate links 
            navLis.forEach((link, index) => { //for each link in the nav links creates the animation fade
                if (link.style.animation) {
                    link.style.animation = ''; //if animation active, leaves it as it is
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`; // if nav not active, active and boom
                }
            });
            //burger animation 
            burger.classList.toggle('toggle'); //toggle the burger animation (open close)
        });  
        
            //closing the menu after clicking a link - the opposite of the above after clicking a link in the menu
            navMenu.addEventListener('click', ()=> { 
                navMenu.classList.remove('nav_active');
                burger.classList.remove('toggle');

                navLis.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    }
                });
            });
};

navSlide();

    
   
    
    
     

    