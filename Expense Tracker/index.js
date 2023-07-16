const form = document.getElementById('transactionid');
const state = {
    earnings: 0,
    expense: 0,
    net: 0,
    transactions: []
}
const render = () => {
    const transContainer = document.querySelector('.transactions');
    const netb = document.querySelector('#netbal');
    const e = document.querySelector('#earnings');
    const ex = document.querySelector('#expense');
    const transsact = state.transactions;

    let earning = 0;
    let expense = 0;
    let net = 0;
    transContainer.innerHTML = ''
    transsact.forEach((transaction) => {
        const { id, amount, text, type } = transaction;
        const isCredit = type === 'credit' ? true : false;
        const sign = isCredit ? '+' : '-';
        const Strans = `<div class="singleTrans" id="${id}"> 
                <div class="transaction" onclick='showedit(${id})'>
                <div class="left">
                       <p id='textIn'>${text}</p>
                        <p>${sign}<span id='amountN'>${amount}</span></p>
                    </div>
                    <div class="status ${isCredit ? 'credit' : 'debit'}">${isCredit ? 'C' : 'D'}</div>
                </div>
                <div class="edit">
                   <div class="img1" onclick='handleUpdate(${id})'>✏️</div>
                   <div class="img2" onclick='handleDelete(${id})'>🪣</div>
                </div>
           </div> `
        earning += isCredit ? amount : 0;
        expense += !isCredit ? amount : 0;
        net = earning - expense
        transContainer.insertAdjacentHTML('afterbegin', Strans)

    })

    netb.innerHTML = `💳${net}`;
    e.innerHTML = `${earning}`;
    ex.innerHTML = `${expense}`;


}

let isUpdate = false;
let tid;

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
        id: isUpdate ? tid : Math.floor(Math.random() * 1000),
        text: text,
        amount: +amount,
        type: isEarn ? 'credit' : 'debit',
    }
    if (isUpdate) {
        const tindex = state.transactions.findIndex((t) => t.id === tid);
        state.transactions[tindex] = transaction;
        isUpdate = false;
        tid = null;
    } else {
        state.transactions.push(transaction)
    }
    render()
}
const showedit = (id) => {
    const selected = document.getElementById(id)
    const lower = selected.querySelector('.edit')
    lower.classList.toggle('show')
}

const handleDelete = (id) => {
    const filterd = state.transactions.filter((t) => t.id !== id)
    state.transactions = filterd;
    render()
}

const handleUpdate = (id) => {
    const filterd = state.transactions.find((t) => t.id === id)
    const { text, amount } = filterd;
    const textinput = document.getElementById(`text`)
    const tamount = document.getElementById('amountIn')
    textinput.value = text;
    tamount.value = amount;
    tid = id;
    isUpdate = true;
}

form.addEventListener('submit', addTran)



