const currentLocation = location.href;
const menuItem = document.querySelectorAll('.navbar .nav-item a');
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

$(document).ready(function(){
    $(window).scrollTop(0);
});

// project section show hide section
// $(function() {
//     $('.showSingle').click(function() {
//       $('.targetDiv').not('#div' + $(this).attr('target')).hide();
//       $('#div' + $(this).attr('target')).toggle();
//     });
//   });
// scroll Top Action


let calcScrollValue = () => {
    let scrollProgress = document.getElementById("scroll-top");
    let progressValue = document.getElementById("scroll-top-icon");
    let pos = document.documentElement.scrollTop;
   
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   
    let scrollValue = Math.round((pos * 100)/ calcHeight);

    if(pos > 100){
        scrollProgress.style.display = "grid"
    }else {
        scrollProgress.style.display = "none"
    }

    scrollProgress.addEventListener("click", () =>{
        document.documentElement.scrollTop = 0;
    })

    scrollProgress.style.background = `conic-gradient(#45b1af ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;




var li_elements = document.querySelectorAll(".section_Project-product-fixed a");
var item_elements = document.querySelectorAll(".targetDiv");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(a) {
      a.classList.remove("active-product");
    });
    this.classList.add("active-product");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(targetDiv) {
        targetDiv.style.display = "none";
    });
    if (li_value == "Attendance") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "Industrial") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "Furnace") {
      document.querySelector("." + li_value).style.display = "block";
    }else {
      console.log("");
    }
  });
}