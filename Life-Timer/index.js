let toggel=false;
const skullEl=document.getElementById('logo');
const hideEL=document.getElementById('inputarea');
const intialtext=document.getElementById('initialtext')
const skullbtn=document.getElementById('afterDOB')
const enterbtn=document.getElementById('submit')
const dob=document.getElementById('dobinput')
const initial=document.getElementById('initial')
const page2=document.getElementById('time-container')
let date1;

const year1=document.getElementById('y')
const month1=document.getElementById('m')
const day1=document.getElementById('d')
const hour1=document.getElementById('h')
const minute1=document.getElementById('min')
const second1=document.getElementById('s')
 
const twodigit=(number)=>{
return number > 9 ? number: `0${number}`;
}
const togglefuct=()=>{
if(toggel){
    hideEL.classList.add('hide');   
}else{
    hideEL.classList.remove('hide');
}
toggel=!toggel;
}
const updateAge=()=>{
    const curdate=new Date();  
    const dateDiff=curdate - date1;   
    const year=Math.floor(dateDiff/(1000*60*60*24*365));
    const month=Math.floor(dateDiff/(1000*60*60*24*365))%12;
    const day=Math.floor(dateDiff/(1000*60*60*24)) %30;
    const hour=Math.floor(dateDiff/(1000*60*60)) % 24;
    const minute=Math.floor(dateDiff/(1000*60))%60 ;
    const second=Math.floor(dateDiff/(1000))%60;
    year1.innerHTML=twodigit(year);
    month1.innerHTML= month;
    day1.innerHTML=twodigit(day);
    hour1.innerHTML=twodigit(hour);
    minute1.innerHTML=twodigit(minute);
    second1.innerHTML=twodigit(second);
}
const submithandler=()=>{
   let date=dob.value;
   date1=new Date(date);
if(date1){
    initial.classList.add('hide')
    page2.classList.remove('hide')
    setInterval(()=>updateAge(),1000);
}
}
skullEl.addEventListener('click',togglefuct)
enterbtn.addEventListener('click',submithandler)
