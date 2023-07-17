
const pl=document.getElementById('pl')
const pr=document.getElementById('slider')
const generate =document.getElementById('generate')
const input1 =document.getElementById('input');
let passl=6;

let isUpperCase='';
let isLowerCase='';
let isSymbol='';

pr.addEventListener('input',(e)=>{
    passl= +e.target.value;
    pl.innerText=passl;
})
 
const passGene=(passwordlength)=>{
    const small='abcdefghijklmnopqrstuvwxyz'
const lowerCase= isLowerCase? small:'';
const upperCase= isUpperCase? small.toUpperCase() :'';
const numB='0123456789'
const symbol= isSymbol? '!@#$%^&*()_+':''

const combinePdata=lowerCase+upperCase+numB+symbol;
let password='';
for (let index = 0; index < passl; index++) {
    const element = Math.floor(Math.random()*combinePdata.length);   
password+=combinePdata[element];
}
return password;
}

generate.addEventListener('click',(e)=>{
    e.preventDefault();
    const uc =document.getElementById('uc')
    const lc =document.getElementById('lc')
    const is =document.getElementById('is')
    isUpperCase=uc.checked;
    isLowerCase=lc.checked;
    isSymbol=is.checked;


    
input1.value= passGene(passl);
})

input1.addEventListener('click',(e)=>{
    if(e.target.value>0){

        navigator.clipboard.writeText(input1.value)
        .then(()=>{
            alert('copied to clipboard')
        })
        .catch((err)=>{
            alert('not copied')
        })
    }
   
})

 