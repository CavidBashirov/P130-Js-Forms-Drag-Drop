
// let loginForm = document.getElementById("login-form");


// loginForm.addEventListener("submit", function(e){
//     e.preventDefault();

//     let userName = document.querySelector("#exampleInputEmail1").value;

//     if(userName.trim() == ""){
//         console.log("Bosh buraxmayin");
//         return;
//     }

//     createUser(userName);

// })

// function createUser(userName){
//     console.log(userName);
// }


// let dragElems = document.querySelectorAll(".item");
// let dropElem = document.querySelector(".drop-area");

// dragElem.ondragend = () =>{
//     console.log("drag end")
// }

// dragElem.ondrag = () =>{
//     console.log("drag continue")
// }


// for (const item of dragElems) {
//     item.ondragstart = (e) => {
//         e.dataTransfer.setData("id", e.target.getAttribute("id"))

//     }
// }





// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }

// dropElem.ondrop = (e) => {
//     let id = e.dataTransfer.getData("id");
//     let dragElement = document.getElementById(id)

//     e.target.append(dragElement)
// }


let uploadIcon = document.querySelector(".upload-icon");
let table = document.querySelector(".table");


uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();
})


uploadIcon.nextElementSibling.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader();

        reader.onloadend = (event) => {

            let base64 = event.currentTarget.result;

            table.lastElementChild.innerHTML += `<tr>
            <td>${file.size/1024} Kb</td>
            <td>${file.name}</td>
            <td><img src="${base64}" width="100px" height="100px" alt=""></td>
          </tr>`

        }

        reader.readAsDataURL(file)

    }
})
