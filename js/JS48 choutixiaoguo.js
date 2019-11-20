var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleWidth=60; // 标题宽
var contentWidth=590; // 内容宽
var n=0;
for(var i=0;i<title.length;i++) {
	title[i].idx=i; // 把序号保存到自定义的idx属性中
	title[i].onclick=function() {
		n=this.idx; // 点击的序号记为n
		for(var i=0;i<ctbox.length;i++) {
			if(i<=n) {
				// ctbox序号小于等于n的时候，ctbox的left值计算公式为序号*titleWidth
				ctbox[i].style.left=i*titleWidth+'px';
			}else {
				// ctbox序号大于n的时候,ctbox的left值计算公式为
				ctbox[i].style.left=i*titleWidth+contentWidth+'px';
			}
		}
	}
}
// 点击的序号记为n，则
// ctbox序号小于等于n的时候,ctbox的left值计算公式为序号*titleWidth
// ctbox序号大于n的时候.ctbox的left值计算公式为
// 点击0号标题 0*titleWidth=0
// 0 650px 710px 770px
// 点击1号标题 1*titleWidth=60
// 0 60px 710px 770px
// 点击2号标题 2*titleWidth=120
// 0 60px 120px 770px
// 点击3号标题 3*titleWidth=180
// 0 60px 120px 180px

