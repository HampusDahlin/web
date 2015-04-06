$(document).ready(function(){
	$("a").click(function(){
		var addressValue = $(this).attr("href");
        var current = document.URL;
		if(addressValue == "#SV" && current.indexOf("EN") != -1){
            current == (current.substr(0, current.indexOf("EN")) + "SE" + current.substr(current.indexOf("EN") + 2));
            window.location = current;
            return false;
		}else if(addressValue == "#EN"{
            current == (current.substr(0, current.indexOf("SE")) + "EN" + current.substr(current.indexOf("SE") + 2));
            window.location = current;
            return false;
		}
    });
}