const currentLocation = location.href;
const menuItem = document.querySelectorAll('.section_sidebar ul li a');
const menuLength = menuItem.length
for(let i = 0; i<menuLength; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "menu_active"
    }
}

 $(document).ready(function(){
            $('.sidebar_Btn button').click(function(){
                $('.section_sidebar').toggleClass('active')
                $('.sidebar_Btn').toggleClass('btn_active')
                $('.sidebar_Btn span').toggleClass('change')
            })
            function removeAllActiveClasses() {
                $('.section_sidebar ').removeClass('active')
                $('.sidebar_Btn').removeClass('btn_active')
                $('.sidebar_Btn span').removeClass('change')
            }
            $(window).scroll(removeAllActiveClasses);
})