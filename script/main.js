
 $(document).ready(function (){
    
   /**
    * DROPDOWN MENU
    */

   // Referenze
   var dropDown = $('.with-dropdown');
   var dropLink = dropDown.children('a'); 
   var dropMenus = dropDown.children('.with-dropdown'); 


   // A. CLICK Gestione click per mostrare/nascondere il sottomenu
   /*dropLink.click(function(e){
      // 1a soluzione
      // $(this).next('.dropdown-menu').toggle();

      // 2a soluzione
      var actualMenu = $(this).next('.dropdown-menu');

      dropMenus.not(actualMenu).hide();
      actualMenu.toggle();
   });*/

   // B. HOVER - mouseenter / mouseleave
   dropDown.hover(function(){
      $(this).children('.dropdown-menu').toggle();
   });

 });

 /**************************************
  * FUNCTION
 ***************************************/

