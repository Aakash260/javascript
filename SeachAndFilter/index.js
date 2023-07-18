const containerDiv = document.getElementById('container')
const searchinput = document.getElementById('searchinput')
async function fetchData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        const generateProd = (product) => {

            return `  <div class="card">
<div class="col1">
    <img src=${product.image} alt="">
</div>
<div class="col2 flex">
    <h2 class="title">${product.title}</h2>
    <p>${product.description.split(' ').slice(0,20).join(' ')}</p>
</div>
</div>
<button class="price">Rs:${product.price}</button>`
        }
const searchHelper=(text,value)=>{
return text.toString().toLowerCase().includes(value)
}

        searchinput.addEventListener('keyup',(e)=>{
            const gettext=e.target.value.toLowerCase();
            const filterp=products.filter((product)=>{
                return (
                    searchHelper(product.description,gettext)||
                    searchHelper(product.title,gettext)||
                    searchHelper(product.price,gettext)
                     
                )
            })
          
            renderProduct(filterp);
            })
const renderProduct=(products)=>{
    containerDiv.innerHTML='';
    products.forEach(element => { 
        containerDiv.innerHTML+=generateProd(element);
    });
}
renderProduct(products);
} catch (error) {
    console.error(error);
    }
 
}
fetchData();

