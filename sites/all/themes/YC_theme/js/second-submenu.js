/********mobil second submenu change of class, animation is done with css3 in responsive.sidebars.css*********/



var overlaySidebarOut=true;
	
function overlaySidebar(){
	
	//change second submenu change onClick via overlay-second-sidebar-secondButton
	//sidebar out
	if(overlaySidebarOut==true){
		document.getElementById('overlay-second-sidebar-second').id='overlay-second-sidebar-second_clicked';
		document.getElementById("overlay-second-sidebar-secondButton").style.backgroundImage = "url(sites/all/themes/YC_theme/images/arrow2.png)"; 
		overlaySidebarOut=false;
	}
	//change back via overlay-second-sidebar-secondButton
	//sidebar back in
	else if(overlaySidebarOut==false){
		document.getElementById('overlay-second-sidebar-second_clicked').id='overlay-second-sidebar-second';
		document.getElementById("overlay-second-sidebar-secondButton").style.backgroundImage = "url(sites/all/themes/YC_theme/images/arrow.png)"; 
		overlaySidebarOut=true;
	}
}
/***********/