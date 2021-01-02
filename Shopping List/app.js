// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list')
form.addEventListener('submit', function (event){
    const productInput = form.elements.product.value;
    const quantityInput = form.elements.qty.value;
    event.preventDefault();
    addProduct(productInput,quantityInput)
    form.elements.product.value = '';
    form.elements.qty.value = '';
});

const addProduct = (productInput, quantityInput) => {
    const newProduct = document.createElement('li');
    newProduct.append(`${productInput} ${quantityInput}`)
    list.append(newProduct);
}