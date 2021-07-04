
    if (screen.width < 480) 

    function openNav() {
    document.getElementById("mySidenav").style.fontSize = "14px";
    document.getElementById("mySidenav").style.width = "100px";
    document.getElementById("mySidenav").style.left = "0px";
    document.getElementById("main").style.marginLeft = "90px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("nav-icon").style.display= "none";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.left = "0px";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("nav-icon").style.display= "block";
  }
  
  if (screen.width > 480) 
  function openNav() {
    
    document.getElementById("mySidenav").style.fontSize = "18px";
    document.getElementById("mySidenav").style.width = "100px";

    document.getElementById("main").style.marginLeft = "60px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("nav-icon").style.display= "none";
  }
  
  
  function closeNav() {
    
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("nav-icon").style.display= "block";
  }
  if (screen.width > 800) 
  function openNav() {
    
    document.getElementById("mySidenav").style.fontSize = "18px";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("nav-icon").style.display= "none";
  }
    
  function closeNav() {
    
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("nav-icon").style.display= "block";
  }
  
  $(document).ready(function(){
 
    $('.ir-arriba').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 300);
    });
   
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('.ir-arriba').slideDown(300);
      } else {
        $('.ir-arriba').slideUp(300);
      }
    });
   
  });
  


  
     