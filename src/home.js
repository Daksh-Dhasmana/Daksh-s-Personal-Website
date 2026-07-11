import "./style.css"

const cont=document.querySelector("#content");
const br=document.createElement("br");
// let tagArray=["info","hobby","interest"];
// tagArray.forEach((tag)=>{
//     const hd=document.createElement("h2");
//     hd.textContent=tag;
// })
import homeback from "./homeback.avif";
export function para1() {
    cont.textContent=""
    cont.style.backgroundImage=`url('${homeback}')`;
    cont.style.backgroundSize = "cover";
    cont.style.backgroundPosition ="center";
    cont.style.height = "auto";
    cont.style.minHeight = "445px";
    cont.style.backgroundRepeat="no-repeat"
    cont.innerHTML = `
        <style>
            #head{
                color: #39ff14
            }
            #para{
                color: #d4edd9
            }
            
        </style>
        <h1 id="head">Who Am I?</h1>
        <p id="para">Hello!! My Name is Daksh Dhasmana, currently residing in Dehradun, Uttarakhand. I have a huge interest in Web Development.</p>
        <br><br>
        <h1 id="head">My Hobbies</h1>
        <p id="para" style="">Gaming, Reading Novels, Coding Website</p>
        <br><br>
        <h1 id="head">Why Did I Choose Web-Development?</h1>
        <p id="para">I chose Web-Development because I like to see the code or changes I made, Like changing a button color from red to orange, It gives me a sense of accomplishment</p>
        <p id="para">I feel rewarded by seeing those changes</p>
        <br><br>
        <p id="para">Well, enough talking about me, Let me show you my projects, Go ahead and click on projects tab</p>
    `;
}