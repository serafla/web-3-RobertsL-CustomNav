// number of sections
let numberOfSections = 4;

// array of colors for the list items
let colors = ["#00008b","#013220","#AA336A","#222222"];

// this will create a reference to the #section-container id in the content.kit file
let contentContainer = document.querySelector("#content-container");

let idNames = ["Introduction", "Branding", "WebDesign", "Typography"];

export function createContent(){
    for(var i = 0; i < numberOfSections; i++){

        let section = document.createElement("section");
    
        section.style.backgroundColor = colors[i];

        section.classList.add("content");

        section.id = idNames[i];
    
        contentContainer.appendChild(section);

        // crate a <h1> title to hold the island information
        let title = document.createElement("h1");

        // set the innerHTML to the text with the values of the array placed into it
        title.innerHTML = idNames[i];

        // append the title to the li
        section.appendChild(title);

        // let para = document.createElement("p");

        // para.innerHTML = "here is my text!!!";

        //     section.appendChild(para);
    }
}