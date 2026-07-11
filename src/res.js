const cont=document.querySelector("#content");
// function setActiveTab(activeId) {
//     const buttons = document.querySelectorAll("nav button");
//     buttons.forEach((button) => {
//         button.classList.toggle("active", button.id === activeId);
//     });
// }
export function res(){
    cont.textContent=""
    const pr=document.createElement("p");
    pr.textContent="Page 1"
    cont.append(pr)
    
}