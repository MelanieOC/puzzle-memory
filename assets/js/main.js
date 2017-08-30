const imagenes = [
'assets/img/BMO.png', 'assets/img/grumosa.png', 'assets/img/princesa.png', 'assets/img/rey_helado.png', 'assets/img/fiona.png',
'assets/img/grumosa.png', 'assets/img/jake.png', 'assets/img/gunter.png', 'assets/img/fiona.png', 'assets/img/marceline.png',
'assets/img/BMO.png', 'assets/img/princesa.png', 'assets/img/caracol.png', 'assets/img/rey_helado.png', 'assets/img/finn.png',
'assets/img/jake.png', 'assets/img/finn.png', 'assets/img/gunter.png', 'assets/img/marceline.png', 'assets/img/caracol.png'
];

(function () {
	let voltear=true;
	let comparar=[];
	for (let i = imagenes.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [imagenes[i - 1], imagenes[j]] = [imagenes[j], imagenes[i - 1]];
    }
	for(let i=0; i<imagenes.length;i++){
			$('<div>').addClass('pausa').append(
				$('<div>').addClass('front').append($('<img>').attr('src', 'assets/img/logo.png'))
				).append(
				$('<div>').addClass('back').append($('<img>').attr('src', imagenes[i]))
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
			});
		}
})();
