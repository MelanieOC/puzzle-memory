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
			let now=$(e.currentTarget);
			if(voltear && now.attr('class')=='pausa'){
				now.removeClass('pausa').addClass('flip');
				comparar.push({
					td: now,
					imagen:now.find('.back img:first-child').attr('src')});
				if(comparar.length==2){
					if(comparar[0].imagen==comparar[1].imagen){
						voltear=false;
						contar+=1;
						console.log(contar)
						let t = setTimeout(()=>{
							voltear=true;
							comparar.forEach(a=>a.td.css('visibility','hidden'));
							comparar=[];
						}, 1000);
					} else {
						voltear=false;
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
	$('#juego').show()
	juego()
});