
const pl=document.getElementById('pl')
const pr=document.getElementById('slider')
let passl=6;
pr.addEventListener('input',(e)=>{
    passl= +e.target.value;
    pl.innerText=passl;
})
 
const passGene=(passwordlength)=>{
const lowerCase='abcdefghijklmnopqrstuvwxyz'
const upperCase=lowerCase.toUpperCase();
const numB='0123456789'
const symbol='!@#$%^&*()_+'

const combinePdata=lowerCase+upperCase+numB+symbol;

}

passGene(2);