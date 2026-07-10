import "./style.css"

const cont=document.querySelector("#content");
const br=document.createElement("br");

    const para=document.createElement("p");
export function para1(){
    para.innerText="Hello world"
    cont.append(para);
    cont.append(para)
}