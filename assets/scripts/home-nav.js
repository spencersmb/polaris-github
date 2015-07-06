$(function(){
    
    $("label.btn").on('click',function () {
    	var choice = $(this).find('input:radio').val();
    	
        // What am I clicking?
        console.log(choice);

        // Go back to Home
        if (choice == 0) {
            $('#nav_why').fadeOut();
            $('#nav_0').fadeIn();
        }

        // Why Polaris
        if (choice == 1) {
            $('#nav_0').fadeOut();
            $('#nav_why').fadeIn();
        }

        // My First Visit
        if (choice == 2) {
            alert('2');
        }
    });

});	