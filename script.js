document.body.innerHTML=`
<h1 id="title">Calculator</h1>
<p id="description">This calculator is used for  solving simple calculations</p>
<div class="container">

<div class="calculator mt-3">

<input type="text" id="result" placeholder="0" disabled>
<div class="griddisplay">
        <button class="clear" id="clear">C</button>
        <button class="backspace" id="ce">CE</button>
        <button class="button" id="mod">%</button>
        <button class="button" id="div">/</button>
   
        <button class="button" id="7">7</button>
        <button class="button" id="8">8</button>
        <button class="button" id="9">9</button>
        <button class="button" id="mul">*</button>
    
        <button class="button" id="4">4</button>
        <button class="button" id="5">5</button>
        <button class="button" id="6">6</button>
        <button class="button" id="subtract">-</button>
    
        <button class="button" id="1">1</button>
        <button class="button" id="2">2</button>
        <button class="button" id="3">3</button>
        <button class="button" id="add">+</button>
    
        <button class="button" id=".">.</button>
        <button class="button" id="0">0</button>
        <button class="equal" id="equal">=</button>
    </div>
</div>
</div>
`;
let result=document.getElementById("result");


const buttons=document.querySelectorAll(".button")
for( let button of buttons)
{
    button.addEventListener("click",()=>{
 result.value+=button.innerHTML;
    });
}

document.addEventListener("keypress",()=>{
    alert("use buttons for input")
});

let equalbtn=document.getElementById("equal");
equalbtn.addEventListener("click",()=>{
    try{
        if(result.value.length>0)
        {
        res=eval(result.value);
        result.value=res;
        }
    }
    catch(e){
         alert("Enter a proper expression");
    }
})

let clearbtn=document.getElementById("clear");
clearbtn.addEventListener("click",()=>{
    result.value="";
})


let cebtn=document.getElementById("ce")
cebtn.addEventListener("click",()=>{
   result.value=result.value.slice(0,-1);
 
})