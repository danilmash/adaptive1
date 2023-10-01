let burger = document.getElementsByClassName("burger")[0];
let auth_link = document.getElementsByClassName('menu__auth-link')[0];
let logo = document.getElementsByClassName("header__logo")[0];
let menu = document.getElementsByClassName("menu__body")[0];
let burger_close = document.querySelectorAll(".burger-close");
let burger_open = document.querySelectorAll(".burger-open");
let figure_container = document.querySelector(".quotes__figures-container");
let buttonsWrapper = document.querySelector(".quotes__map")

let x = 0;
burger.addEventListener('click', function() {
    x+= 1
    if (x % 2 == 1) {
        burger_close.forEach((element) => {
        element.beginElement();
        menu.classList.add("active")
        
        
        })
    }
    else {
        burger_open.forEach((element) => {
        element.beginElement();
        menu.classList.remove("active")
        
        })
}});
window.addEventListener("resize", () => {
    if (window.innerWidth >= 801) {
        menu.classList.remove("active")
        if (x % 2 == 1) {
            burger_open.forEach((element) => {
            element.beginElement(); 
            x += 1
            })
        }
        
    }
}
)

buttonsWrapper.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
      Array.from(buttonsWrapper.children).forEach(item =>
        item.classList.remove("btn-active")
      );
      if (e.target.classList.contains("first")) {
        figure_container.style.transform = "translateX(0)";
        e.target.classList.add("btn-active");
      } else if (e.target.classList.contains("second")) {
        figure_container.style.transform = "translateX(-25%)";
        e.target.classList.add("btn-active");
      } else if (e.target.classList.contains('third')){
        figure_container.style.transform = 'translatex(-50%)';
        e.target.classList.add('btn-active');
      } else if (e.target.classList.contains('fourth')){
        figure_container.style.transform = 'translatex(-75%)';
        e.target.classList.add('btn-active');
      }

    }
  });

window.onload = 
  setTimeout(() => {
    let toast = document.getElementsByClassName('toast')[0]
    let toast_text = document.getElementsByClassName('toast__text')[0]
    let toast_header = document.getElementsByClassName('toast__header')[0]
    let toast_btn = document.getElementsByClassName('toast__close')[0]
    err = "Ошибка"
    err_text = "Какая-то ошибка"

    toast_header.innerText = err
    toast_text.innerText = err_text
    
    
    // window.addEventListener('scroll', () => {
    //   toast__mask.style.height += 
    // })
    toast.classList.remove("visually-hidden")
    toast_btn.addEventListener('click', () => {
      toast.classList.add("visually-hidden")
      
    })
    
  }, 2000)

