$(document).ready(function(){
	//menusecond collapse
	$(".btn_menusecond").click(function(){
		$(".menusecond").toggle("slow");
	});	
	//menusecond collapse END
	//brandrepair collapse on 1024 and 767
	$(".btn_brandrepair").click(function(){
		$(".brandrepair_item-hide").toggle("slow");
	});	
	//brandrepair collapse on 1024 and 767 END
	// media query 1024 and 767 for menusecond and brandrepair
	function mediaSize() { 
		if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
			$(".brandrepair_item").slice(15,).addClass("brandrepair_item-hide").hide();
		} else if (window.matchMedia('(max-width: 767px)').matches) {
			$(".brandrepair_item").slice(9,).addClass("brandrepair_item-hide").hide();
		}
		else if (window.matchMedia('(min-width: 1024px)').matches) {
			$(".brandrepair_item-hide").show();	
		}
	};
  mediaSize();
	window.addEventListener('resize', mediaSize, false);  
	// media query 1024 and 767 for menusecond and brandrepair END
});
	
	


