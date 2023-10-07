let cart = 10;

let elemH2 = document.querySelector('h2');

elemH2.innerText = cart;


const addToCart = () => {
  cart++;
  console.log(cart);
  elemH2.innerText = cart; // re-render for the h2 element
  return cart;
}

