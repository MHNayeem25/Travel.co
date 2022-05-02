const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.home');

btn.addEventListener('click', function() {
    menu.classList.toggle('menu-active');
    this.classList.toggle('is-active');
})

const link = document.querySelectorAll('.menu');

link.forEach(element => element.addEventListener('click', function(){
        menu.classList.remove('menu-active');
        btn.classList.remove('is-active');
    })
)


window.addEventListener('resize', function(){
    if(this.screen.width>650 && menu.classList.contains('menu-active') ){
        menu.classList.remove('menu-active');
        btn.classList.remove('is-active');
    }
})




var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })