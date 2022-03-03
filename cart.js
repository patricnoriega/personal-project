console.log("hello");

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'black shirt',
        tag: 'blackshirt',
        price: 15,
        inCart: 0
    }
]

// for loop to add product to cart
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNum();
        console.log('added to cart')
    })
}

//function onLoad
// need to call function
function onLoadCartNum() {
    let productNum = localStorage.getItem('cartNum');

    if (productNum){
        document.querySelector('.cart span').textContent = productNum;
    }
}


// function to know how many items are added to cart
// this function is attached to clickEvent
function cartNum() {
    let productNum = localStorage.getItem('cartNum');
    // console.log(productNum);
    // console.log(typeof productNum)

    productNum = parseInt(productNum)
    // console.log(typeof productNum)
    if (productNum) {
        localStorage.setItem('cartNum', productNum + 1);
        document.querySelector('.cart span').textContent = productNum + 1;

    }else {
        localStorage.setItem('cartNum', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}

onLoadCartNum();