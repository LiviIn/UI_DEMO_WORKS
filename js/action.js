const currentLocation = location.href;
const menuItem = document.querySelectorAll('.section_sidebar ul li a');
const menuLength = menuItem.length
for(let i = 0; i<menuLength; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "menu_active"
    }
}