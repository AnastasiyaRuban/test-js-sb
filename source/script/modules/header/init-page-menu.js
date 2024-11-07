export function burgerActive() {
   const burger = document.querySelector('[data-sandwich="data-sandwich"]');
   const navigation = document.querySelector('[data-main-nav="nav"]');
   const logo = document.querySelector('[data-header-logo="data-header-logo"]');
   let idTo = null;

   burger.addEventListener('click', () => {
    if (burger.ariaPressed === 'false') {
        openMenu();
    } else {
        closeMenu();
    }
   });

   document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
        closeMenu();
    }
    });

   const resizeObserver = new ResizeObserver(checkResizeViewport);
    function checkResizeViewport(en) {
        if (en[0].contentRect.width > 1023) {
            closeMenu();
        }
    }

    resizeObserver.observe(document.body)

   function openMenu() {
    addClassMenuTO();
    burger.classList.add("is-active");
    navigation.classList.add("is-active");
    document.body.classList.add('scroll-lock');
    logo.classList.add('is-menu');
    burger.ariaPressed = "true";
   }

   function closeMenu() {
    burger.classList.remove("is-active");
    navigation.classList.remove("is-active");
    document.body.classList.remove('scroll-lock');
    logo.classList.remove('is-menu');
    burger.ariaPressed = "false";
   }

   function addClassMenuTO() {
    const listIM = navigation.querySelectorAll('li');
    clearTimeout(idTo);
    //довольно странная реализация, но если не править стили, то лесенку можно сделать только так.
    //я бы сделал через добавление класса.
    listIM.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateX(-15px)";
        idTo = setTimeout(() => {
            el.style = "";
        }, 300 * (index + 1))
    });
   }
 }