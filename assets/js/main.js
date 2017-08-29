
var imagenes = [
['assets/img/BMO.png', 'assets/img/grumosa.png', 'assets/img/princesa.png', 'assets/img/rey_helado.png', 'assets/img/fiona.png'],
['assets/img/grumosa.png', 'assets/img/jake.png', 'assets/img/gunter.png', 'assets/img/fiona.png', 'assets/img/marceline.png'],
['assets/img/BMO.png', 'assets/img/princesa.png', 'assets/img/caracol.png', 'assets/img/rey_helado.png', 'assets/img/finn.png'],
['assets/img/jake.png', 'assets/img/finn.png', 'assets/img/gunter.png', 'assets/img/marceline.png', 'assets/img/caracol.png']
];

function dibujar() {
	var tabla = $('<table>');
	for(let i=0; i<imagenes.length;i++){
		var fila = $('<tr>');
		for (let j = 0; j < imagenes[0].length; j++) {
			$('<td>').addClass('pausa').append(
				$('<div>').addClass('front').append($('<img>').attr('src', 'assets/img/logo.png'))
				).append(
				$('<div>').addClass('back').append($('<img>').attr('src', imagenes[i][j]))
			).appendTo(fila);
		}
		tabla.append(fila);
	} 
	$('#juego').append(tabla);
}
dibujar();
var voltear=true;
var comparar=[];
$('td').click( (e)=>{
	console.log(this);
	let now=e.currentTarget;
	if(voltear && now.className=='pausa'){
			now.className='flip';
			comparar.push({
				td: now,
				imagen:now.lastChild.firstChild.src});
			if(comparar.length==2){
				if(comparar[0].imagen==comparar[1].imagen){
					voltear=false;
					let t = setTimeout(()=>{ 
						voltear=true;
						comparar.forEach(a=>a.td.style.visibility='hidden');
						comparar=[];
					}, 700);
				} else {
					voltear=false;
					let t = setTimeout(()=>{
						voltear=true; 
						comparar.forEach(a=>a.td.className='pausa');
						comparar=[];
					}, 800);
				}
			}
		}
})
	




