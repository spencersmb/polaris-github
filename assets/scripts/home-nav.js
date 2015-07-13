$(function(){

    
    $("label.btn").on('click',function () {
    	var choice = $(this).find('input:radio').val();
    	
        // What am I clicking?
        console.log(choice);

        // MATCH HEIGHT
        // getHeight = $(".quiz").height();
        // console.log(getHeight);
        // getHeight;

        // setHeight = $("#psn-nav-home").css("height", $(".quiz").height()+387);
        // // getHeight = $('.quiz').height();
        // // findContainer = $('#psn-nav-home').height();

        // // console.log(getHeight);
        // // console.log(findContainer);
        // console.log(setHeight);

        // Go back to Home
        if (choice == 0) {
            getHeight;
            $('#nav_why').fadeOut();
            $('#nav_0').fadeIn();
        }

        // Why Polaris
        if (choice == 1) {
            getHeight;
            $('#nav_0').fadeOut();
            $('#nav_why').fadeIn();
        }

        // My First Visit
        if (choice == 2) {
            alert('2');
        }
    });

    
});	