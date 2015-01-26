//This will contain some JS code
document.getElementById('btn').onclick = function(){
		var src = 'http://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg',
			img = document.createElement('img');

		img.src = src;
		document.getElementById('image').appendChild(img);
}