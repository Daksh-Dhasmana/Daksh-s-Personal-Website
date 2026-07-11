import "./style.css"
import { para1 } from "./home.js"
import { res } from "./res.js";
import { proj } from "./proj.js";
const homebuto=document.querySelector("#hm");
const resbuto=document.querySelector("#res");
const projbuto=document.querySelector("#proj")
para1();
projbuto.addEventListener("click",(e)=>{
    e.preventDefault();
    proj();
})
resbuto.addEventListener("click",(e)=>{
    e.preventDefault();
    res();

})
homebuto.addEventListener("click",(e)=>{
    e.preventDefault();
    para1();
})

