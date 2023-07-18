const cardContainer =document.getElementById('cardContainer')
const moon =document.getElementById('moon')
const search =document.getElementById('search')
const htmlCat =document.getElementById('htmlCat')
const jsCat =document.getElementById('jsCat')
const allCat =document.getElementById('allCat')
const createDiv=(element)=>{
    const {name,src}=element;
    return  `<div class="card">
        <div class="card_container">
            <div class="card_contant fc1">
                <div class="imf_contant"><iframe src="${src}" frameborder="0"></iframe></div>
                <div class="flex2">
                    <a class="img_details" href="${src}" class="hover_code" type="_blank">Live Demo🤗</a>
                    <h4>${name}</h4>
                </div>
                <a class="source_code" href="#" class="hover_code">Source Code</a> 
            </div>
        </div>
    </div>`   
}
const renderProduct=(products)=>{
    cardContainer.innerHTML='';
    products.forEach(element => { 
        cardContainer.innerHTML+=createDiv(element);
    });}
fetch('index.json')
.then(response => response.json())
.then(data => {
    
    renderProduct(data)
        const searchHelper=(text,value)=>{
            return text.toString().toLowerCase().includes(value)
            }
            const catHelper=(text,cat)=>{
                return text===cat;
            }
        search.addEventListener('keyup',(e)=>{
            const gettext=e.target.value.toLowerCase();
            const filterp=data.filter((product)=>{
                return (
                    searchHelper(product.name,gettext)
                )
            })
            renderProduct(filterp)
        })
        htmlCat.addEventListener('click',(e)=>{
          
            const filterC=data.filter((product)=>{
                return (
                    catHelper(product.cat,'html')
                )
            })
            renderProduct(filterC)
        })
        jsCat.addEventListener('click',(e)=>{
          
            const filterC=data.filter((product)=>{
                return (
                    catHelper(product.cat,'js')
                )
            })
            renderProduct(filterC)
        })
           allCat.addEventListener('click',(e)=>{
             
            
                renderProduct(data)
            
           })
})
.catch(error => {
  console.error('Error:', error);
});
 
 
moon.addEventListener('click',toggleDarkMode)

function toggleDarkMode() {
        var body = document.body;
        body.classList.toggle('dark-mode');
}

 
