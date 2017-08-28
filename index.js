$(function(){
	rule();
	toggle("friend",1,2);
	 toggle("parent",3,4);
	toggle("heart",5,6);
	 toggle("part",7,8);
});
function rule(){
	$("#rule").click(function(){
		$(".toggle").css("opacity","0");
		$("#fourhome").css("background","url('images/三行情书规则.png') no-repeat center center").css("backgroundSize","100% 100%");
		$("#delete").css("display","block");
		$("#delete").click(function(){
		$("#fourhome").css("background","url('images/四个书屋.png') no-repeat center center").css("backgroundSize","100% 100%");
		$(this).css("display","none");
		$(".toggle").css("opacity","1");
	});
	});
	$("#rule1").click(function(){
		$("#fourhome").css("background","url('images/三行情书规则.png') no-repeat center center").css("backgroundSize","100% 100%");
		$("#delete").css("display","none");
		$("#delete1").css("display","block");
		$(".toggle").css("opacity","0");

		$("#delete1").click(function(){
		$("#fourhome").css("background","url('images/四个书屋.png') no-repeat center center").css("backgroundSize","100% 100%");
		$(".toggle").css("opacity","1");
	});
	});
}

function toggle(obj,img1,img2){
	$("."+obj).click(function(){
		$(".toggle").css("background","url('images/"+img1+".png') no-repeat center center").css("backgroundSize","100% 100%");
		$(".four-toggle-button").css("display","none");
		$(".toggle-bottom").css("display","block");
		$("#rule1").css("display","block");
				
		$("#uploading").click(function(){
			$(".toggle").css("background","url('images/"+img2+".png') no-repeat center center").css("backgroundSize","100% 100%");
			$(".four-toggle-button").css("display","none");
		});
	});
	$("#back").click(function(){
		$(".toggle").css("background","url('images/四个书屋.png') no-repeat center center").css("backgroundSize","100% 100%");
		$(".four-toggle-button").css("display","block");
		$(".toggle-bottom").css("display","none");
		$("#rule1").css("display","none");
	});
}