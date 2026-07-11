
    const cont=document.querySelector("#content");
export function proj(){
    cont.textContent="";
    const pr=document.createElement("p");
    pr.textContent="Page 2"
    cont.append(pr);
}