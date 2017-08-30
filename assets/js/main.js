const imagenes = ['BMO', 'BMO', 'grumosa', 'grumosa', 'princesa', 'princesa', 'rey_helado', 'rey_helado', 'fiona', 'fiona', 'marceline',
'marceline', 'finn', 'finn', 'caracol', 'caracol', 'gunter', 'gunter', 'jake', 'jake'];

function juego () {
	$('#juego').empty();
	let voltear=true;
	let comparar=[];
	let contar=0;
	let random=(a)=>{
		for (let i = a.length; i; i--) {
        	let j = Math.floor(Math.random() * i);
        	[a[i - 1], a[j]] = [a[j], a[i - 1]];
    	}
    }
    random(imagenes);
	for(let i=0; i<imagenes.length;i++){
		$('<div>').addClass('pausa').append(
			$('<div>').addClass('front').append($('<img>').attr('src', 'assets/img/logo.png'))
			).append(
			$('<div>').addClass('back').append($('<img>').attr('src', 'assets/img/'+imagenes[i]+'.png'))
		).appendTo('#juego').click((e)=>{
			let carta=$(e.currentTarget);
			if(voltear && carta.attr('class')=='pausa'){
				carta.removeClass('pausa').addClass('flip');
				comparar.push({
					td: carta,
					imagen:carta.find('.back img:first-child').attr('src')});
				if(comparar.length==2){
					voltear=false;
					if(comparar[0].imagen==comparar[1].imagen){
						contar+=1;
						let t = setTimeout(()=>{
							voltear=true;
							comparar.forEach(a=>a.td.css('visibility','hidden'));
							comparar=[];
						}, 1000);
					} else {
						let t = setTimeout(()=>{
							voltear=true;
							comparar.forEach(a=>a.td.removeClass("flip").addClass("pausa"));
							comparar=[];
						}, 1500);
					}
				}
			}
			if(contar==10){
				let t= setTimeout(()=>{
					$('#juego').hide();
					$('.presentacion').hide();
					$('#ganar').show();
				}, 1500);
			}
		});
	}
}

$('.jugar').click(()=>{
	$('#ganar').hide();
	$('#juego').show();
	$('.presentacion').show();
	juego()
});