var bindLoginContainerResizeHandler = function(){
		
	
		var windowHeight = window.innerHeight;
		var windowWidth = window.innerWidth;
		var elementHeight = $(".loginContainer").height();
		var elementWidth = $(".loginContainer").width();
		var topMargin = (windowHeight - elementHeight) / 2;
		
		$(".loginContainer").css("marginTop", "" + topMargin + "px");
	};

function init() {
	$(window).ready(bindLoginContainerResizeHandler);
	$(window).resize(bindLoginContainerResizeHandler);
	
}

function togglePasswordView() {
	var current = $("#passwordField").attr("type");
	
	if(current=="password")
		$("#passwordField").attr("type", "text")
	else
		$("#passwordField").attr("type", "password")
}