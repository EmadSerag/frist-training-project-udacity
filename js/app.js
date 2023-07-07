//Start of global variables.
const sections = Array.from(document.querySelectorAll('section'));
const navigationBar = document.getElementById('navbar__list');

/*This is a regular for loop which iterates over an array (sections) each time
the querySelector is updated with the change of iterator i .
also CSS class name is added to each element here and the name of each li element is taken from the data-nav.
*and creating a class for each li element
*/
for (let i = 1; i <= sections.length; i++) {
    //selecting each section + getting it's name from data nav
    let section = document.querySelector('#section' + i);
    let name = section.getAttribute('data-nav');
    //creating li elements to populate navBar with each having a unique id
    let navListItem = document.createElement('li');
    navListItem.id = 'li' + i;
    //setting the class of each li element and appending it to the navigationBar
    navListItem.className = 'menu__link';
    navigationBar.append(navListItem);
    //selecting each li element and adding the corresponding name
    let item = document.querySelector('#li' + i)
    item.innerText = name;
    //this part of the loop adds an event listener to each <li> element
    //on click it scroll into the selected section
    navListItem.addEventListener('click', function pageScroll() {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
    })


};


/*
This is an event listener to the whole window to listen to event
'scrolling' through the page.
*Inside the event function a for-of loop which iterates over the sections
array to determine if the section is in the field of view .. if true
it will add the active class else it will add an embty class.
*/
window.addEventListener('scroll', function() {
    for (section of sections) {
        let place = section.getBoundingClientRect();
        if (place.top > -1 && place.top <50) {
            section.className = 'your-active-class ';
        }
        else {
            section.className = '';
        }
    }

});
