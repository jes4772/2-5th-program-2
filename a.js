function onLoad() {
	var get = [],
		theCanvas = $("#this").get(0).innerHTML,
		canvasObj = new fabric.StaticCanvas('this', {backgroundColor : '#fff'}),
		o = 0,
		theLetters = "Cerner Engineering";

	out = function (l00) {
		return 50 + l00 * 25;
	};

	$("#this").on("click", function (event, theLetters, theCanvas) {
		get[theCanvas].print(out(theLetters));
	});

	function Thingy(object) {
		this.a = object;
		this.print = function (out) {
			canvasObj.add(new fabric.Text(this.a, {left : out, fontFamily : "Courier"}));
		};
	}

	$(theCanvas.split("")).each(function () {
		get[o++] = new Thingy(this);
	});

	for (theCanvas = 0; theCanvas < o; theCanvas++) {
		$("#this").trigger("click", [theCanvas, theCanvas]);
	}

	$("#this").off("click");
}