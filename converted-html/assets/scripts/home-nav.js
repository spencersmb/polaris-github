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
        // if (choice == 0) {
        //     getHeight;
        //     $('#nav_why').fadeOut();
        //     $('#nav_0').fadeIn();
        // }

        $('.btn-back').click(function(){
            $('#nav_why').fadeOut();
            $('#nav_what').fadeOut();
            $('#nav_visit').fadeOut();
            $('#nav_doctor').fadeOut();
            $('#nav_opinions').fadeOut();
            $('#nav_stories').fadeOut();
            $('#nav_0').fadeIn();
        });

        // Why Polaris
        if (choice == 1) {
            $('#nav_0').fadeOut();
            $('#nav_why').fadeIn();
        }

        // What We Do
        if (choice == 2) {
            $('#nav_0').fadeOut();
            $('#nav_what').fadeIn();
        }

        // My First Visit
        if (choice == 3) {
            $('#nav_0').fadeOut();
            $('#nav_visit').fadeIn();
        }

        // Doctors
        if (choice == 4) {
            window.location.href = "team.html";
        }

        // Second Opinions
        if (choice == 5) {
            $('#nav_0').fadeOut();
            $('#nav_opinions').fadeIn();
        }

        // Patient Stories
        if (choice == 6) {
            window.location.href = "patient-stories.html";
        }
    });

    
});	