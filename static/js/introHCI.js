'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Experience Chan! It's not a lot of questions. Too many ... Ask your own heart.");
		$(".jumbotron p").addClass("active");
	});


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);
}

function updateProject(e){
	var projectID = $('#project').val();
	$(projectID).animate({width: $('#width').val()});
	var newText = $('#description').val();
	$(projectID + " .project-description").text(newText);
}
function projectClick(e)
{
	e.preventDefault();
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	console.log(projectTitle);
	jumbotronHeader.text(projectTitle);
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if(description.length == 0)
	{
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	}
	else
	{
			$(".project-description").fadeIn();	
			$(".project-description").fadeOut();

		
	}
}