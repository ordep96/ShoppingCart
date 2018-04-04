let checkoutMenu = document.getElementById("checkout"),
    btnCart = document.getElementById("cart-button"),
    overlay = document.getElementById("overlay");
    menu = document.getElementById("menu");
    menuWrapper = document.getElementById("menu-wrapper");
    header = document.getElementById("header");
    hamburguerBtn = document.getElementById("menu-btn");
    body = document.body;





const activeCheckout = (e) => {
    e.preventDefault();

    checkoutMenu.classList.toggle('active-checkout');
    overlay.classList.toggle('active-overlay');
    document.body.classList.remove("no-scroll");

    checkoutMenu.addEventListener('transitionend',(e) =>{
        if(e.propertyName === "transform")  document.body.classList.toggle("no-scroll");
    })

}


const activeMenu = (e) =>{
    e.preventDefault();
    menu.classList.toggle("active-menu");
}



window.addEventListener("resize", () =>{
    moveWindow(menu,1200);
})

const moveWindow = (element,size) =>{

   width = document.body.clientWidth;
    console.log(width);
    if(width >= size){
        element.remove;
        menuWrapper.append(element)
    }else{
        element.remove();
        header.after(element);

         /* Hammer  */
         const hammer = new Hammer(body);
         hammer.on('swipe', (e) => {
             activeMenu(e);

            if(e.direction === 4){
                menu.classList.add("active-menu");
            }
            else if(e.direction === 2){
                menu.classList.remove("active-menu");
            }

         });


    }
}


moveWindow(menu,1200);







btnCart.addEventListener("click", activeCheckout);
hamburguerBtn.addEventListener("click", activeMenu);