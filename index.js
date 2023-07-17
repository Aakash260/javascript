fetch('index.json')
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        const {name,src}=element;
        const createDiv= `<div class="card">
        <div class="card_container">
            <div class="card_contant fc1">
                <div class="imf_contant"><iframe src="${src}" frameborder="0"></iframe></div>
                <div class="flex2">
                    <a class="img_details" href="${src}" class="hover_code" type="_blank">Live Demo🤗</a>
                    <h4>"${name}"</h4>
                </div>
                <a class="source_code" href="#" class="hover_code">Source Code</a> 
            </div>
        </div>
    </div>`
    const cardContainer =document.getElementById('cardContainer')
    cardContainer.innerHTML+=createDiv
    });
})
.catch(error => {
  console.error('Error:', error);
});
