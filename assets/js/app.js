$(document).ready(function() {
  $(function() {
      mobileMenuToggle();
      closeMobileMenu();
    });
    
    function mobileMenuToggle() {
      $('#wrapper #navicon').click(function() {
        $("#wrapper .dt-block .side-bar").addClass('active');
        $('#wrapper').addClass('active');
        return false;
      });
    }
    
    function closeMobileMenu() {
      $('#wrapper .dt-block .side-bar .close').click(function() {
        $('#wrapper .dt-block .side-bar').removeClass('active');
        $('body #wrapper').removeClass('active');
    });
  }
});

$(document).ready(function() {
  $(function() {
      mobileMenuToggle();
      closeMobileMenu();
    });
    
    function mobileMenuToggle() {
      $('#main .f-block .box .btn-area .b-btn').click(function() {
        $("#popup-bar").addClass('active');
        $('#wrapper').addClass('active');
        return false;
      });
    }
    
    function closeMobileMenu() {
      $('#popup-bar .close').click(function() {
        $('#popup-bar').removeClass('active');
        $('body #wrapper').removeClass('active');
    });
  }
});