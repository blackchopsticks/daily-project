var outer=document.getElementById('outer');
var wrap=document.getElementById('wrap');
var con=document.getElementById('con');
var imgs=con.getElementsByTagName('img');
wrap.scrollLeft=imgs[0].offsetWidth;
var timer1=null,timer2=null,x=1;
	function everygo() {
		clearInterval(timer2);
		var start=wrap.scrollLeft;
		var end=imgs[0].offsetWidth*x;
		var step=0;
		var maxstep=30;
		var everystep=(end-start)/30;
		timer2=setInterval(function() {
			step++;
			if (step>=30) {
				clearInterval(timer2);
				step=0;
			};
			start+=everystep;
			wrap.scrollLeft=start;
		},10)
	}
	function autogo() {
		timer1=setInterval(function() {
		x++;
		if (x>=imgs.length) {
			x=2;
			wrap.scrollLeft=imgs[0].offsetWidth;
		};
		everygo();
	},2000)
	}
autogo();
var con_word=document.getElementById("con_word");
var divs=con_word.getElementsByTagName('div');
var block2=document.getElementById("block2");
var ps=block2.getElementsByTagName("p");
for (var i = 0; i < divs.length; i++) {
	divs[i].onmouseover=function(){
		for (var i = 0; i < divs.length; i++) {
			if (this==divs[i]) {
				ps[i].style.color="#ad6d3c";
			}else{
				ps[i].style.color="#000";
			}
		}
	}
}
var read1=document.getElementById("read1");
var read2=document.getElementById("read2");
var read3=document.getElementById("read3");
var img1=read1.getElementsByTagName("img");
var img2=read2.getElementsByTagName("img");
var img3=read3.getElementsByTagName("img");
read1.onmouseover=function(){
	read1.style.background="#ff9701";
	img1.src="images/c_readmore_bai_37.png";
}
read1.onmouseout=function(){
	read1.style.background="#414141";
	img1.src="c_readmore_huang_40.png";
}
read2.onmouseover=function(){
	read2.style.background="#ff9701";
	img2.src="images/c_readmore_bai_37.png";
}
read2.onmouseout=function(){
	read2.style.background="#414141";
	img2.src="c_readmore_huang_40.png";
}
read3.onmouseover=function(){
	read3.style.background="#ff9701";
	img3.src="images/c_readmore_bai_37.png";
}
read3.onmouseout=function(){
	read3.style.background="#414141";
	img3.src="c_readmore_huang_40.png";
}
var nav_block1=document.getElementById("nav_block1");
var nav_bl1_img=document.getElementById("nav_bl1_img");
