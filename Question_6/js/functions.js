function question_6(){
	var array_q6 = document.getElementsByTagName('a')
	for (var i = 0; i < array_q6.length; i++) {
		var item =  document.getElementsByTagName('a')[i];
		var hasTitle = item.hasAttribute('title');
		if (hasTitle) {
			var logText = item.getAttribute('title');
			item.removeAttribute("href");
			item.setAttribute("style","font-weight:800");
			item.setAttribute("onclick","prinTitle('"+logText+"')");

		}
	}
}
function prinTitle(logText){
	console.log(logText);
}