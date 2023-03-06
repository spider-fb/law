function showChapter() {
	var legalText = document.getElementById("legalText").value;
	var chapterNumber = document.getElementById("chapterNumber").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("chapterText").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", legalText + "/" + chapterNumber + ".txt", true);
	xhttp.send();
}

var langBtn = document.querySelector('#langBtn');

langBtn.addEventListener('click', function() {
  var html = document.querySelector('indexe.html');
  if (html.getAttribute('lang') === 'ar') {
    html.setAttribute('lang', 'en');
  } else {
    html.setAttribute('lang', 'ar');
  }
});
