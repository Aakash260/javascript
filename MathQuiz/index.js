const ip=document.getElementById('ques')
const point=document.getElementById('sc')
let sans;
let score=localStorage.getItem('score')
let ans;
const rn=(min,max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generate=()=>{
    const n1=rn(1,10);
    const n2=rn(1,10);
    const cases=rn(1,4);
    // const ques=`Q. What is ${n1} multiply by ${n2}`;
    // const ans= n1* n2;
    let ques;
    switch(cases){
        case 1:
        ques=`Q. What is ${n1} multiply by ${n2}`;
        ans= n1* n2;
        break;
        case 2:
        ques=`Q. What is ${n1} Added to ${n2}`;
        ans= n1+ n2;
        break;
        case 3:
        ques=`Q. What is ${n1} subtracted to ${n2}`;
        ans= n1-n2;
        break;
        case 4:
        ques=`Q. What is ${n1} divided by ${n2}`;
        ans= n1/ n2;
        break;
        
    }
    return {ques,ans}
}

const showQuest=()=>{
    const {ques,ans}=generate();  
    point.innerText=score;
    ip.innerText=ques;
    sans=ans;
    
}
showQuest();

const checkno=(event) => {
    event.preventDefault();
    const formdata=document.getElementById('input1');
 const anw=+formdata.value
 if(anw===sans){
    console.log('true')
    score++;
    Toastify({
        text: `Your Score:${score}`,
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
      
 }else{
    score--;
    Toastify({
        text: `Try Again Your Score:${score}`,
        className: "info",
        style: {
          background: "linear-gradient(to right, red,rgb(159, 105, 105))",
        }
      }).showToast();
 }
 point.innerText=score;
 localStorage.setItem('score',score)
 event.target.reset();
 showQuest();
}