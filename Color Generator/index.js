const btn = document.getElementById('btn');
let divc = document.querySelector('.colorcontainer');
const singleColorGenerator = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexcolor = '#';
    for (let index = 0; index < 6; index++) {
        let random = Math.floor(Math.random() * hex.length);
        hexcolor += hex[random];
    }
    return hexcolor;
}
const helper = () => {
    const colArray = [];
    divc.innerHTML = '';
    for (let index = 0; index < 4; index++) {
        colArray.push(singleColorGenerator())
    }
    colArray.forEach((color, i) => {
        const cdiv = document.createElement("div");
        const par = document.createElement("p");
        par.id = `color${i + 1}Tag`;
        par.className = 'code';
        par.innerHTML = color
        cdiv.id = `color${i + 1}`;
        cdiv.className = 'colorbox'
        cdiv.style.backgroundColor = color;
        divc.append(cdiv);
        cdiv.appendChild(par);
    })



}
const copyClipboard = (id) => {
    const el = document.getElementById(id);

    navigator.clipboard.writeText(el.innerText)
    console.log("🚀 ~ file: index.js:38 ~ copyClipboard ~ el.innerText:", el.innerText)
   

        .then(() => {
            alert('copied to ClipBoard')
        })
        .catch((error) => {
            alert('Failed to Copy')
        });

}
const aColor = document.querySelectorAll('.code')

aColor.forEach((color, i) => {
    aColor.addEventListener('click', copyClipboard(`color${i + 1}Tag`));
})
btn.addEventListener('click', helper)
helper();

