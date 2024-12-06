var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

$(document).ready(function(){
    
    $(".faq__questions i").on("click", function(){
        var faqItem = $(this).closest(".faq")
        var faqTitle = faqItem.find(".faq__questions h1")
         if($(this).hasClass("fa-square-plus")){
            faqItem.find(".faq__answer").slideDown()
            faqItem.find(".fa-square-plus").hide()
            faqItem.find(".fa-square-minus").show()
            faqTitle.css("color", "black")
        }else if($(this).hasClass("fa-square-minus")){
            faqItem.find(".faq__answer").slideUp()
            faqItem.find(".fa-square-minus").hide()
            faqItem.find(".fa-square-plus").show()
            faqTitle.css("color", "white")
        }
    })
    $(".faq__answer").hide()
    $(".fa-square-minus").hide()
  })