const formdata=document.getElementById('form');

const calculateMarks=(event) => {
    event.preventDefault(); 
    const max=400;
  const Data=new FormData(formdata);
  const oData={};
  Data.forEach((value,key)=>{
      oData[key]= value;
    });
    const Omaxm=oData.math +oData.english+oData.hindi+oData.science;
    const per=(Omaxm/max)*100;
     
    const resEl=document.createElement('p');
    resEl.className='result'
    resEl.innerText=`You got ${Omaxm} out of 400 and Your Percentage is ${per}`
    formdata.after(resEl)
}