import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrambleTextPlugin);

gsap.set(".circle",{transformOrigin:"center"});

let navLinks = gsap.utils.toArray("#main-nav a");
// let outlineButton = gsap.utils.toArray(".outline");
let circleButton = gsap.utils.toArray(".circle");
let textArray = gsap.utils.toArray(".text");
let currentLink = 0;
let buttonText = ["Introduction.","Branding.","Web &#38; Motion","Typography."];

function menuSetUp(){
	navLinks.forEach((link, i) => {
		if(i !== 0){
			gsap.set(circleButton[i],{scale: 1, backgroundColor: "#fff"})
		}
	});
	// force the portfolio to be selected
	gsap.to(textArray[0], {duration: 0.25, scrambleText: "Introduction.", ease: "none"})
}

export function buttonClicks(){
	console.log("clicks");
	menuSetUp();

    navLinks.forEach((link, i) => {
        link.addEventListener("click", e => {
            e.preventDefault();

            console.log(currentLink);
            // set the currentLink
          
            gsap.to(window, {scrollTo: i * innerHeight});

            console.log(i);
            gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
            gsap.to(circleButton[i], {duration: 0.25, scale: 1, backgroundColor: "#000", ease: "none"});
            gsap.to(circleButton[i], {duration: 0.25, backgroundColor: "#fff", ease: "none", delay:0.25});
            // remove style the link to show the text

            gsap.to(textArray[currentLink], {duration: 0.25, scrambleText: "", ease: "none"});
            gsap.to(circleButton[currentLink], {duration: 0.25, backgroundColor: "#000", ease: "none"});

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
                gsap.to(circleButton[i], {duration: 0.25, scale:1, backgroundColor: "#000", ease: "none"});
            }
        });
    });

}