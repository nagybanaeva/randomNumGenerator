var x = Math.floor(Math.random()*100)+1;
document.write('Gondoltam egy számra 1 és 100 között! <br />');

do{
	var tipp = prompt('Add meg a tipped!');
			if(tipp>x) {
				document.write('Kisebbet! <br />');
			}
			else if(tipp<x) {
				document.write('Nagyobbat! <br />');
			}
			}
			while (tipp!=x);
				document.write('Gratulálok, a gondolt szám: ', x, 'volt!');