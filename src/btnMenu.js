const $btnMenuOpen = document.querySelector('.btnMenu_open');
const $menu = document.querySelector('.menu-nav');


$btnMenuOpen.addEventListener('click',function() {
   
    if($menu.classList.contains('menu_open')){
        $menu.classList.remove('menu_open'); 
        return;   
    }
    $menu.classList.add('menu_open');
})