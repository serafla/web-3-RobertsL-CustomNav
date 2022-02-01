import { createContent } from "./contentSections";
import { buttonClicks, buttonMouseEvents } from "./navigation";

window.addEventListener('load', function() {
    // create the content on load
    createContent();
    // startPageScroll();
    buttonClicks();
    buttonMouseEvents();
    
})