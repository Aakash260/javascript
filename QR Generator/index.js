const cardid=document.getElementById('cardid');
const btntxt=document.getElementById('btntxt');
const rebderQr=(url)=>{
    if(!url) return;
    const img=document.getElementById('ig');
    btntxt.innerHTML='Generating...'
    img.src=url;
    const onIload=()=>{
        const interval=setInterval(()=>{
            img.classList.add('show')
clearInterval(interval)
btntxt.innerHTML='Generate QR CODE'
        },200)
    }
    img.addEventListener('load',onIload)
}

cardid.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formdata=new FormData(cardid);
    const text=formdata.get('inputdata')
 const url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

 rebderQr(url)
})