$(document).ready(function(){
	alert("privet7");
	window.addEventListener('resize', mediaSize, false);  
	$(".btn_menusecond").click(function(){
		$(".menusecond").toggle("slow");
	});	
	$(".btn_brandrepair").on("click",function(){
		$(".brandrepair_item-hide").toggle("slow");
	});	
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
});
	
	


