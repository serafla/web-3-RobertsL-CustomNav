import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrambleTextPlugin);

gsap.set(".circle",{transformOrigin:"center"});

let navLinks = gsap.utils.toArray("#main-nav a");
console.log(navLinks.length + " nav length");

export let circleButton = document.querySelectorAll(".circle");
// let circleButton = gsap.utils.toArray(".circle");

export let textArray = gsap.utils.toArray(".text");
export let currentLink = 0;
export let buttonText = ["INTRODUCTION.","BRANDING.","WEB & MOTION.","TYPOGRAPHY."];

function menuSetUp(){
	navLinks.forEach((link, i) => {
		if(i !== 0){
			gsap.set(circleButton[i],{scale: 1, backgroundColor: "#808080"})
            // circleButton[i].classList.add("circle-selected");
		} else {
            gsap.set(circleButton[i],{scale: 1, backgroundColor: "transparent"})
            circleButton[i].classList.add("circle-selected")
        }
	// force the portfolio to be selected
	gsap.to(textArray[0], {duration: 0.25, scrambleText: buttonText[0], ease: "none"})
})}



export function buttonClicks(){
	console.log("clicks");
	menuSetUp();

    navLinks.forEach((link, i) => {
        link.addEventListener("click", e => {
            e.preventDefault();
            // set the currentLink

            console.log(i + " index value");

            // remove old circle class
            circleButton[currentLink].classList.remove("circle-selected");
          
            gsap.to(window, {scrollTo: i * innerHeight});

            // animate in
            gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
            gsap.to(circleButton[i], {duration: 0.25, scale: 1, backgroundColor: "transparent", ease: "back.out(1.7)"});
           
            // animate out
            gsap.to(textArray[currentLink], {duration: 0.25, scrambleText: "", ease: "none"});
            gsap.to(circleButton[currentLink], {duration: 0.25, backgroundColor: "#808080", ease: "none"});

            circleButton[i].classList.add("circle-selected");

            currentLink = i;
          
        });
    });
}


export function buttonMouseEvents(){

    navLinks.forEach((link, i) => {
        /* ------------
            mouse enter
        ------------ */
        link.addEventListener("mouseenter", e => {
            e.preventDefault();
            //check to see if the link is the current link and if so don't use a mouse enter on it
            if(i != currentLink){
                gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
                gsap.to(circleButton[i], {duration: 0.25, scale:0.5, backgroundColor: "#fff", ease: "none"});
            }
        });


        /* ------------
            mouse out
        ------------ */
        link.addEventListener("mouseleave", e => {
            e.preventDefault();
            if(i != currentLink){
                gsap.to(textArray[i], {duration: 0.25, scrambleText: "", ease: "none"});
                gsap.to(circleButton[i], {duration: 0.25, scale:1, backgroundColor: "#808080", ease: "none"});
            }
        });
    });

}