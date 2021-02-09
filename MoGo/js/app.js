$(function(){
   var header =$("#header"),
       introH =$("#intro").innerHeight(),
       scrolloffset = $(window).scrollTop();
      //  fixedHeader
       checkScroll(scrolloffset);

   $(window).on("scroll", function() {
      scrolloffset =$(this).scrollTop();
      checkScroll(scrolloffset);
   });  
   function checkScroll(scrolloffset){
      if(scrolloffset >= introH) {
         header.addClass("fixed");
      }  else{
         header.removeClass("fixed");
      }
   }

   // Smooth sccroll
   $("[data-scroll]").on("click", function(event){
      event.preventDefault();
      var $this=$(this),
          blockld = $(this).data("scroll"),
          blockOffset = $(blockld).offset().top;
      $("#nav a").removeClass("active");
      $this.addClass("active");
      $("html, body").animate({
         scrollTop: blockOffset
      }, 500);
   });

   // menu nav toggle
   $("#nav_toggle").on("click", function(event){
      event.preventDefault();
      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
   });
   // COLLAPSE
   $("[data-collapse]").on("click", function(event){
      event.preventDefault();

      var $this= $(this),
         blockld=$this.data('collapse');
      $this.toggleClass("active");
     
   });
   // Slider
   $("[data-slider]").slick({
      infinite: true,
      fade:false,
      slidesToShow: 1,
      slidesToScroll: 1
   });


});