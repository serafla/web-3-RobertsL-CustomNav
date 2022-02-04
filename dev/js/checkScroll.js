import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {textArray, circleButton, buttonText, currentLink} from "./navigation"

gsap.registerPlugin(ScrollTrigger);

export function sectionSlide(){

        const sections = document.querySelectorAll(".content");

        sections.forEach((section , i) => {

                ScrollTrigger.create({
                    start: "top 20%",
                    end: "bottom 80%",
                    trigger: section,
                    // markers: true,
                    onLeave: () => {
                        console.log("leaving section " + i);
                        // animate in
                        gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
                        gsap.to(circleButton[i], {duration: 0.25, scale: 1, backgroundColor: "transparent", ease: "back.out(1.7)"});

                        // animate out
                        gsap.to(textArray[currentLink], {duration: 0.25, scrambleText: "", ease: "none"});
                        gsap.to(circleButton[currentLink], {duration: 0.25, backgroundColor: "#808080", ease: "none"});
                    },
                    onEnterBack: () =>{
                        console.log("entering seciton " + i);

                         // animate in
                         gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
                         gsap.to(circleButton[i], {duration: 0.25, scale: 1, backgroundColor: "transparent", ease: "back.out(1.7)"});

                        // animate out
                        gsap.to(textArray[currentLink], {duration: 0.25, scrambleText: "", ease: "none"});
                        gsap.to(circleButton[currentLink], {duration: 0.25, backgroundColor: "#808080", ease: "none"});

                    }
                })

        })


}



// let circleButton = document.querySelectorAll(".circle");
// let textArray = gsap.utils.toArray(".text");
// let currentLink = 1;
// let buttonText = ["INTRODUCTION.","BRANDING.","WEB & MOTION.","TYPOGRAPHY."];

// export function checkScrollOne(){
//     const tl = new gsap.timeline({paused:true});

//     tl.from (circleButton[1],{ 
//         duration: 0.25,
//         alpha: 0,
//         scrollTrigger: {
//             trigger: "section",
//             start: "top 20%",
//             end: "bottom 80%",
//             toggleActions: "restart none resume none",
//             // scrub: true,
//             markers: true
//         }
//     });

//     // animate in  
//     gsap.to(textArray[1], {duration: 0.25, scrambleText: buttonText[1], ease: "none"}),
//     gsap.to(circleButton[1], {duration: 0.25, scale: 1, backgroundColor: "transparent", ease: "back.out(1.7)"}),
//     // animate out
//     gsap.to(textArray[currentLink], {duration: 0.25, scrambleText: "", ease: "none"});
//     gsap.to(circleButton[currentLink], {duration: 0.25, backgroundColor: "#808080", ease: "none"});

//     return tl;
// }

