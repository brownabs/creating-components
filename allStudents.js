// //FIRST SOLUTION --using a for of loop

// const h1 = (title, style) => {
//     return `<h1 class="${style} xx-large">${title}</h1>`
// }

// const section = (title, style) => {
//     return `<section class="bordered dashed ${style}">${title}</section>`
// }

// const aside = (title, style) => {
//     return `<aside class="${style}">${title}</aside>`
// }

// const student = (name, studentStatus, sectionContent, info) => {
//     return `
//         <div id="student">
//             ${h1(name, studentStatus)}
//             ${section(sectionContent, "gold")}
//             ${aside(info, "pushRight")}
//         </div>
//     `
// }
// let finalStudentHTML = ""
//     for (stu of students) {
//         let studentHTML = ""
//         if (stu.score >= 60) {
//             studentHTML = student(
//                 stu.name,
//                 "passing",
//                 stu.class,
//                 stu.info)

//         } else {
//             studentHTML = student(
//                 stu.name,
//                 "failing",
//                 stu.class,
//                 stu.info)
//         }
//         document.querySelector("#container").innerHTML += studentHTML   
//         test = studentHTML;
//     }
// console.log(finalStudentHTML)



//FINAL RESULT//using a forEach loop & DRY coding 


//function that adds arguments to h1, section, and aside function that makes the html elements dynamic 
const element = (...args) => {
    return `<${args[0]} class="${args[1]}">${args[2]}</${args[0]}>`
};

//creates a function with a forEach loop that checks to see if the student is passing or failing
//then creates a variable to hold the variable element with appropriate arguments 
const finalStudentHTML = () => {
    students.forEach(studentObject => {
        let passFail = studentObject.score >= 60 ? "passing" : "failing"; //shortcut to if else statement
        let header = element("h1", passFail, studentObject.name);
        let section = element("section", "bordered dashed", studentObject.class);
        let aside = element("aside", "pushRight", studentObject.info);
        //adds student div to html 
        document.querySelector("#container").innerHTML += `<div id="student">${header} ${section} ${aside}</div>`
    });
}
finalStudentHTML();
