import { createContent } from "./contentSections";
import { buttonClicks, buttonMouseEvents } from "./navigation";
import { sectionSlide } from "./checkScroll";

window.addEventListener('load', function() {
    // create the content on load
    createContent();
    buttonClicks();
    buttonMouseEvents();
    sectionSlide();
})

// function ChangeNavOnScroll() {
//     if (burgerClicked === false) {
//         burgerTL.play();
//         menuAnimation.play();
//         burgerClicked = true;
//     } else {
//         burgerTL.reverse();
//         menuAnimation.reverse();
//         burgerClicked = false;
//     }
// }
