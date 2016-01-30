//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////
	$(document).ready(function(){
	   $('#login-button').on('click', function() { 
		   $('#login-form').hide(); 
		   $('.user-info').show();
		   $('.user-fullname').text(userInfo.firstName + " "+ userInfo.lastName);
	   });
		$('#logout-button').on('click', function(){
			$('.user-info').hide();
			$('#login-form').show();
		});
		
			// TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
    //      2. Within that parent, find all the elements that have the class `details`.
    //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.
	  $(".view-details").on ('click',function() {
		  console.log('hello');
			   var detailsParent = $(".view-details").parents();
		  console.log(detailsParent);
		      var details = detailsParent.find('.details');
		  console.log(details);
			   details.toggle();
		 if ($(details).is(':visible'))
		 {$(".view-details").html('Hide details');
		 }
		  else{
			  $(".view-details").html('View details');
		  }
		   });
		
		$(".vote").on ('click', function(){
			var voteData =$(this).data('vote');
					   console.log(voteData);
			if (voteData == "great") {
				voteCounts.great++;
			}
			if (voteData == "greatest") {
				voteCounts.greatest++;
			}
			voteCounts.total++;
			console.log(voteCounts);
			var progressBarGreat = (voteCounts.great / voteCounts.total) * 100;
			var progressBarGreatest = (voteCounts.greatest / voteCounts.total) * 100;
			console.log(progressBarGreat);
			console.log(progressBarGreatest);
			$('.great-progress').attr('style',"width:" + progressBarGreat+ "%");
			$('.greatest-progress').attr('style',"width:" + progressBarGreatest+ "%");		   
		});
		 });
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    var userInfo = {
        firstName: 'Marlie',
        lastName: 'Magic'
    };
      /*  var ValEmail = $('#email').val() ==='admin@admin.com'; // Email Value
        var ValPassword = $('#password').val() === 'admin'; // Password Value
        if (ValEmail === true && ValPassword === true) { // if ValEmail & ValPass are as above*/	
		   



  




