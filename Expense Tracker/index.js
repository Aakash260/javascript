const form = document.getElementById('transactionid');
const state = {
    earnings: 0,
    expense: 0,
    net: 0,
    transactions: []
}
const render=()=>{
    const transContainer=document.querySelector('.transactions');
    const netb=document.querySelector('#netbal');
    const e=document.querySelector('#earnings');
    const ex=document.querySelector('#expense');
   const transsact=state.transactions;
 
   let earning=0;
   let expense=0;
   let net=0;
   transContainer.innerHTML=''
   transsact.forEach((transaction)=>{
const{id,amount,text,type}=transaction;
const isCredit=type==='credit'?true:false;
const sign=isCredit?'+':'-';
const Strans=`
<div class="transaction" id="${id}">
                    <div class="left">
                        <p>${text}</p>
                        <p>${sign}${amount}</p>
                    </div>
                    <div class="status ${isCredit?'credit':'debit'}">${isCredit?'C':'D'}</div>
                </div>`;
                earning+=isCredit ?amount:0;
                expense+= !isCredit ?amount:0;
                net=earning-expense
                transContainer.insertAdjacentHTML('afterbegin',Strans)

            })

             netb.innerHTML= `💳${net}`;
             e= `${earning}`;
           ex= `${expense}`;


}
const addTran = (e) => {
    e.preventDefault();
    const isEarn = e.submitter.id === 'earntbtn' ? true : false;
    const data = new FormData(form)
    const tData = {};
    data.forEach((value, key) => {
        tData[key] = value;
    })
    form.reset()
    const { text, amount } = tData;
    const transaction = {
        id: Math.floor(Math.random() * 1000),
        text: text,
        amount: +amount,
        type: isEarn ? 'credit' : 'debit',
    }
    state.transactions.push(transaction)
    render()
}

form.addEventListener('submit', addTran)



