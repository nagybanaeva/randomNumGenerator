var x = Math.floor(Math.random()*100)+1;
document.write(document.getElementById('intro'));

do{
	var tipp = prompt('Add meg a tipped!');
			if(tipp>x) {
				alert('Kisebbet! <br />');
			}
			else if(tipp<x) {
				alert('Nagyobbat! <br />');
			}
			}
			while (tipp!=x);
				alert('Gratulálok, a gondolt szám: ' + x);