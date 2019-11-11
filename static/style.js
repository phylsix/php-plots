
var myAnim = function () {
	var animWidth, animHeight, $this = $(this);
	if ($this.parent().hasClass('ui-sortable-helper')) {
		return;
	}
	if ($this.hasClass('wide')) {
		animWidth = this.width/2; //"40ex";
		animHeight = this.height/2;
		if ($this.hasClass('thumb')) {
			/// this.src = this.src.replace(".","_thumb.");
			this.src = this.src.substring(0, this.src.lastIndexOf(".")) + "_thumb" + this.src.substring(this.src.lastIndexOf("."));
		}
	} else {
		animWidth = this.width*2; //"80ex";
		animHeight = this.height*2;
		if (this.src.indexOf("_thumb") != -1) {
			$this.addClass('thumb');
		}
		this.src = this.src.replace("_thumb", "");
	}
	$this.toggleClass('wide').animate({ width: animWidth, height: animHeight }, "fast");
}

$(document).ready(function () {
	$("img").click(myAnim);
	$("img").dblclick(myAnim);
	$("#piccont").sortable({
		revert: true
	});
});