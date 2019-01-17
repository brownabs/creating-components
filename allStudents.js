// const h1 = (title, style) => {
//     return `<h1 class="${style} xx-large">${title}</h1>`
// }

// // const section = (title, style) => {
// //     return `<section class="bordered dashed ${style}">${title}</section>`
// // }

// // const aside = (title, style) => {
// //     return `<aside class="${style}">${title}</aside>`
// // }

// // const student = (name, studentStatus, sectionContent, info) => {
// //     return `
// //         <div id="student">
// //             ${h1(name, studentStatus)}
// //             ${section(sectionContent, "gold")}
// //             ${aside(info, "pushRight")}
// //         </div>
// //     `
// // }
// // let test = ""
// //     for (stu of students) {
// //         let studentHTML = ""
// //         if (stu.score >= 60) {
// //             studentHTML = student(
// //                 stu.name,
// //                 "passing",
// //                 stu.class,
// //                 stu.info)

// //         } else {
// //             studentHTML = student(
// //                 stu.name,
// //                 "failing",
// //                 stu.class,
// //                 stu.info)
// //         }
// //         document.querySelector("#container").innerHTML += studentHTML  //+= takes what's currently there & appends
// //         test = studentHTML;
// //     }
// // console.log(test)


// const h1 = (...props) => {
// return `<h1 class="${props[1]}">${props[0]}</h1>`
// }

// const section = (...props) => {
//     return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
// }

// const aside = (...props) => {
//     return `<aside class="${props[1]}">${props[0]}</aside>`
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


// let test = ""
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
//         document.querySelector("#container").innerHTML += studentHTML  //+= takes what's currently there & appends
//         test = studentHTML;
//     }
// console.log(test)



// const h1 = (...args) => {
//     console.log(...args)
//     return `<h1 class="${args[1]}">${args[0]}</h1>`
// }

// const section = (...props) => {
//     console.log(...props)
//     return `<section class="bordered dashed">${props[0]}</section>`
// }

// const aside = (...dumbName) => { 
//     console.log(dumbName)
//     return `<aside class="">${dumbName[0]}</aside>`
// }

// students.forEach(personInfo => {
//     let passFail = ""
//     if (personInfo.score >= 60) {
//         passFail = "passing";

//     } else {
//         passFail = "failing";

//     }
//     const studentInformation = [personInfo.name, personInfo.class, personInfo.info, passFail];
//     const combineStrings = (studentInformation) => {
//         return (`<div id="student">${h1(studentInformation[0], studentInformation[3])} ${section(studentInformation[1])} ${aside(studentInformation[2])}</div>`);
//     }
//      let newStudent = combineStrings(studentInformation);
//      document.querySelector("#container").innerHTML += newStudent;
// });


const element = (...cats) => {
    return `<${cats[0]}class="${cats[1]}">${cats[2]}</${cats[0]}>`
}

const passFailFunction = () => {
    students.forEach(personInfo => {
        let passFail = () => {
            if (personInfo.score >= 60) {
                passFail = "passing";
                return passFail

            } else {
                passFail = "failing";
                return passFail

            }
        };
        let header = element("h1", passFail(), personInfo.name)
        let section = element("section", "bordered dashed", personInfo.class)
        let aside = element("aside", "pushRight", personInfo.info)
        document.querySelector('#container').innerHTML += `<div id="student"> ${header} ${section} ${aside}</div>`
    });
}
passFailFunction();

