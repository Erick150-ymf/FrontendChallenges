import { project1, project2, project3, project4, project5, project6, project7, project8, project9, project10, project11, project12, project13, project14, project15 } from "./projetcs.js";

let rendering = [
    project1.render(),
    project2.render(),
    project3.render(),
    project4.render(),
    project5.render(),
    project6.render(),
    project7.render(),
    // project8.render(),
    // project9.render(),
    // project10.render(),
    // project11.render(),
    // project12.render(),
    // project13.render(),
    // project14.render(),
    // project15.render(),
];

rendering.forEach(e => {
    document.body.appendChild(e)
});