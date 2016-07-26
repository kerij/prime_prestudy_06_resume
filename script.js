$(document).ready(function() {
	$("article").hide();
	$("button").on("click", function() {
		$("article").toggle();
		if($("button").text() == "Show Resume") {
			$("button").text("Hide Resume");
		} else {
			$("button").text("Show Resume");
		}
	});
});