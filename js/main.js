(function() {
const tabs = document.querySelectorAll('.js-features__tabs-item');
const contentItems = document.querySelectorAll('.js-features__content-item');

 tabs.forEach(item => {
    item.addEventListener('click', (e) => {
         const dataBtn = e.target.getAttribute('js-data-button');
            tabs.forEach(item => {
               item.classList.remove('is-active');
            })

             contentItems.forEach(item => {
             item.classList.remove('is-active');
            })

             e.target.classList.add('is-active');
             document.querySelector(`#${dataBtn}`).classList.add('is-active');
    });
 });
})();

 (function() {
   const hamburger = document.querySelector('.js-menu-hamburger');
   hamburger.addEventListener('click', toggleMenu);   

   function toggleMenu () {
      document.querySelector('.js-menu').classList.toggle('menu_active');
   }
   
 })();


function showItemsCount () {
   const shoppingCart = document.querySelector('.js-active-cart');
   const cartLabel = document.querySelector('.js-cart-label');
  
   let count = shoppingCart.getAttribute('data-count');
   return  cartLabel.textContent = `Shopping cart with ${count} ${count == 1 ? 'item' : 'items'} inside`;
}
showItemsCount ();