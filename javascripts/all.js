
toggleSponsors = function(){
	var sponsors = document.getElementById('sponsors');
	
	if(sponsors.className == 'show'){
		sponsors.className = '';
	}else{
		sponsors.className = 'show';
	}
	
	return false;
}

show = function(element_id){
	var id = document.getElementById(element_id);
	var sections = document.getElementsByTagName('section');
	for(var i =0; i < sections.length; i++){
		sections[i].className= "hidden";
	}
	id.className = "show";
	return false;
}
;
