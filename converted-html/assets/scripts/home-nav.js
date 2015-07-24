$(function(){

    var nav0Height = $('#nav_0').height();

    //set container height
    function setHeight(height){
      $('#psn-nav-home').children('.container').css('height', height );
      // console.log(height);
    }

    setHeight(nav0Height);


    $("label.btn").on('click',function () {
    	var choice = $(this).find('input:radio').val();

        // What am I clicking?
        // console.log(choice);


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
            setHeight(nav0Height);
            $('#nav_why').fadeOut();
            $('#nav_what').fadeOut();
            $('#nav_visit').fadeOut();
            $('#nav_doctor').fadeOut();
            $('#nav_opinions').fadeOut();
            $('#nav_stories').fadeOut();

            //remove classes using back btn
            $('#nav_0').children('label').each(function(index){
              $(this).removeClass('active');
            });

            $('#nav_0').fadeIn();

        });

        var getHeight;

        // Why Polaris
        if (choice == 1) {
            $('#nav_0').fadeOut();
            $('#nav_why').fadeIn();
            // MATCH HEIGHT
            getHeight = $('#nav_why').height();
            setHeight(getHeight);
        }

        // What We Do
        if (choice == 2) {
            $('#nav_0').fadeOut();
            $('#nav_what').fadeIn();

            getHeight = $('#nav_what').height();
            setHeight(getHeight);
        }

        // My First Visit
        if (choice == 3) {
            $('#nav_0').fadeOut();
            $('#nav_visit').fadeIn();

            getHeight = $('#nav_visit').height();
            setHeight(getHeight);
        }

        // Doctors
        if (choice == 4) {
            window.location.href = "team.html";
        }

        // Second Opinions
        if (choice == 5) {
            $('#nav_0').fadeOut();
            $('#nav_opinions').fadeIn();

            getHeight = $('#nav_opinions').height();
            setHeight(getHeight);
        }

        // Patient Stories
        if (choice == 6) {
            window.location.href = "patient-stories.html";
        }
    });


});
