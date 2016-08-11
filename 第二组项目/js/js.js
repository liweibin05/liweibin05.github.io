//显示小图标
var bol = false;
var xtb = $('.con1_1 ul');
$('#zk').on("click",function(){
	if (bol) {
		bol=false;
		xtb.animate({
			right:0,
		},300);
		xtb.hide(200)		
	}else {
		bol=true;
		xtb.show().animate({
			right:-40,
		},300);	
	}	
})
//hover事件
var $li =$('.con1_21 li');
var $div1 = $('.con1_21 .div1');
var $con1_3 = $('.content .con1_3')
$li.hover(function(){
	$div1.fadeOut();
	$div1.eq($(this).index()).fadeIn();
},function(){
	$div1.hide();
}) 
$('.content .con1_3 div img').hover(function(){
	$('.content .con1_3 div').addClass('animated shake');
},function(){
	$('.content .con1_3 div').removeClass('animated shake');
})
$('.content .con2 .c2 li').hover(function(){
	$('.content .con2 .c2 li div').fadeOut();
	$('.content .con2 .c2 li div').eq($(this).index()).show();
},function(){
	$('.content .con2 .c2 li div').fadeOut();
})

//大图滚动
var aimg = document.querySelectorAll(".con1_1 .div1 img");
var span = document.querySelectorAll(".con1_1 .dian span");
var index = 0;
for (var i = 0; i < span.length; i++) {
		span[i].index = i;
		span[i].onclick = function () {
			if (bol) {return}
			var before = index;
			index = this.index;
			yd()
			show(before)
		}
	}
	function yd(){
		for (var i = 0; i < span.length; i++) {
			span[i].style.backgroundColor="white";
		}
		if (index==3) {
			var j = 0;
		}else {
			j=index;
		}
		span[j].style.backgroundColor="#ccc";
	}
var timer2 =null;
	timer2 = setInterval(function () {
	  	rBtn.click();//下一张的点击事件
	  },3000)
		
	 for (var i = 0; i < aimg.length; i++) { 	
	 	aimg[i].onmouseenter=function(){		
	 		clearInterval(timer2);	 		
	 	}
	 	aimg[i].onmouseleave=function(){
	 		clearInterval(timer2)	 		
	 		timer2 = setInterval(function () {
	  			rBtn.click();//下一张的点击事件
	 		 },3000)
	 	}
	 }
	rBtn.onclick=function(){
		if (bol) {return}
			bol=false;
		var before = index;
		index++;
		if (index>2) {
			index=0;
		}
		yd()
		show(before);	
	}

function show(before){
		bol=true;
		for (var i = 0; i < aimg.length; i++) {
			if(before!=i){
				aimg[i].style.opacity="0";	
			}
			aimg[i].style.zIndex="0";
		}
		var op = 0;
		var timer = setInterval(function(){
			op+=0.05;
			if (op>=1) {
				bol=false;
				clearInterval(timer)
			}
		aimg[index].style.zIndex=1
		aimg[index].style.opacity=op		
		},30)
	}

//切换
var qh = document.querySelectorAll('.content .con2 .c1 .p2 span');
var url2 = document.querySelector('.content .con2 .url2');
var btr = document.querySelector('#right');
var btl = document.querySelector('#left');
var j = 0;

for (var i = 0; i < qh.length; i++) {
	qh[i].onclick=function(){
		for (var i = 0; i < qh.length; i++) {
			qh[i].style.backgroundColor='#ccc';
		}
		this.style.backgroundColor="red";
	}
}


setInterval(function(){
	btr.click();
},2000)
btr.onclick=function(){
	if (bol) {return}
	j++;
	if (j>5) {
		j=1;
	}
	move(-2)
}
btl.onclick=function(){
	if (bol) {return}
	j--;
	if (j<0) {
		
		j=4;
		url2.style.left=-990+"px";
	}
	move(2)

}
function move(n){
	var m = 0;	
	bol=true;
	clearInterval(time);
	var time = setInterval(function(){
		var l =  url2.offsetLeft;	
		l+=n;
		m+=2;
		if (m>=198) {
			clearInterval(time);
			l=-j*198;
			bol=false;
		}

		url2.style.left=l+"px";
	},10)
}

	









