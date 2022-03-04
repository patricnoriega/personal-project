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
        cartNum(products[i]);
        // console.log('added to cart')
    })
}

//function onLoad
// need to call function
function onLoadCartNum() {
    let productNum = localStorage.getItem('cartNum');

    if (productNum) {
        document.querySelector('.cart span').textContent = productNum;
    }
}


// function to know how many items are added to cart
// this function is attached to clickEvent
function cartNum(product) {

    let productNum = localStorage.getItem('cartNum');
    // console.log(productNum);
    // console.log(typeof productNum)

    productNum = parseInt(productNum)
    // console.log(typeof productNum)
    if (productNum) {
        localStorage.setItem('cartNum', productNum + 1);
        document.querySelector('.cart span').textContent = productNum + 1;

    } else {
        localStorage.setItem('cartNum', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

// function to know what product is added to cart
function setItems(product) {
    // console.log("inside of setItems function")
    // console.log("my product is ", product)
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    if (cartItems != null) {

        // line under make sure it wont overwrite first selection
        if (cartItems[product.tag] === undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

onLoadCartNum();