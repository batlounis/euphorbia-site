//= require_tree .

toggleSponsors = function(){
	var sponsors = document.getElementById('sponsors');
	
	if(sponsors.className == 'show'){
		sponsors.className = '';
	}else{
		sponsors.className = 'show';
	}
	
	return false;
}