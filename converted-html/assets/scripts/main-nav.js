$(function(){

// ==========================================================================
// Primary Navigation
// 
// ==========================================================================

   function closeNav(){
       $('.psn-dropdown').parent('li').removeClass('open');
       $('.overlay').removeClass('active');
   }

   //Close nav on overlay click
   $('.overlay').on('click', function(){
       if($('.navbar-nav').children('li').hasClass('open')){
           console.log('true');
           $('.navbar-nav').children('li').removeClass('open');
           $('.overlay').removeClass('active');
       }else{
           console.log('false');
       }
   });

   //open nav
   $('.psn-dropdown').on('click', function(evt){
       evt.preventDefault();

       var $this = $(this);
       
       //check if its already open
       if($this.parent('li').hasClass('open')){
           closeNav();

       }else{
           //enable overlay
           $('.overlay').addClass('active');

           //close other top tier navs already open
           $this.parent('li').parent('ul').children('li').removeClass('open');

           //reset subnav elements
           $this.next('.dropdown-menu').children('li').removeClass('subNav-open').removeClass('open');

           //go through and remove 2nd tier subnav elements
           $this.next('.dropdown-menu').find('.dropdown-submenu').find('.sub-link').removeClass('subNav-open').parent('li')
               .find('.dropdown-menu').children('li').removeClass('subNav-open').removeClass('open');

           //open the current nav element
           $this.parent('li').addClass('open');
       }
       
   });

   //open submenu up
   $('.dropdown-submenu').on('click', 'a.sub-link', function(evt){
       evt.preventDefault();
       
       //check if the item has subnava on it or not
       if(!$(this).hasClass('subNav-open')){

           //hide parent nav items
           $(this).parent('li').parent('ul').children('li').addClass('subNav-open');

           //add open to the subnav element
           $(this).parent('li').removeClass('subNav-open').addClass('open');

           //open subnav
           $(this).addClass('subNav-open');

       } else{
           //do nothing
       }

   });

   //back btn
   $('.back').on('click', function(evt){
       evt.preventDefault();

       //go back up one level
       $(this).parent('li').parent('ul').parent('li').children('a').removeClass('subNav-open').parent('li').removeClass('open').parent('ul').children('li').removeClass('subNav-open');
   });

})();