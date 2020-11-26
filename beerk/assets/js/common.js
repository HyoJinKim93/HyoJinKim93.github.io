// functions for only ui design
// var $("body") = $("body"),
var	popps = [], // scroll obj array for popup 
	serialNum=0,  //for popup scroll
	screenMode ="", // for responsive web
	modalCnt =0;
var modal = function(message){
	var id = "modal-"+modalCnt;
	var temp = "<div class='popup pop_alert auto' id="+id
				+"><div class='popup_container'><p class='pop_icon'></p><span>"+message
				+"</span><button type='button' class='btn_navy02'  onclick='closePop(\""+id
				+"\")'>확인</button></div></div>";
	modalCnt++;
	$('.wrapper').append(temp);
	openPop(id);
}
function openPop(pop){
	var dim = document.querySelector('.dim');
	if($('.dim').length==0) {
		var dim= document.createElement("div");
		dim.className="dim";
		dim.onclick=function(){
			$('.dim').fadeOut();
			popup.removeClass('show');
			document.body.removeChild(dim);
			if($("body").hasClass("openpop"))
				$("body").removeClass("openpop");	
		};
		document.body.appendChild(dim);
   }
   var	popup = $("#"+pop);
	popup.addClass('show');
    $("body").addClass("openpop");
	if(popup.is(':visible')){
		if(popup.has('.noscroll').length>0) return false;
		var serial = popup.data('serial');
		if(serial === undefined && popup.find('.scrollBox').length > 0){
			popup.data('serial',serialNum);
			popps[serialNum] = new PerfectScrollbar("#"+pop+' .scrollBox');
			serialNum++;
		}
	}
}
function closePop(pop){
	var	popup = $("#"+pop);
	if(popup.hasClass('auto')) popup.remove();
	else popup.removeClass('show');
	var isPopup = false;
	$(".popup:not(#"+pop+")").each(function(){
		if($(this).is(':visible')){
			isPopup = true;
			return false;
		}
	});
	if(!isPopup) {
		document.body.removeChild(document.querySelector('.dim'));
		if($("body").hasClass("openpop"))
				$("body").removeClass("openpop");
	}
}
var scrolledBox = {// scroll design  for boxes
	boxes:[],
	obj:$(".box_flow .scroll-box"),
	init:function(){
			var boxes = this.boxes;
			$.each(this.obj,function(i,item){
				var newId = "scroll-box"+i;
				$(item).attr('id', newId);
				var psobj = new PerfectScrollbar("#"+newId);
				boxes.push(psobj);
			});
			this.obj.find('label')
				.on('click',function(e){e.preventDefault();$(this).siblings('input').click();});
			this.boxes = boxes;
			return boxes;
		}
};
$.datepicker.setDefaults({ //datepicker 한글화
	regional: "ko",
	dateFormat:'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true
});
function getTextLength(str) { // byte counter
 	var len = 0;
	for (var i = 0; i < str.length; i++) {
		if (escape(str.charAt(i)).length == 6) len++;
		len++;
	}
	return len;
}
function setScreenMode(){ 
	var screen = $(window).width();
	if(screen > 768) screenMode = "pc";
	else if(screen > 640) screenMode = "tablet";
	else screenMode = "mobile";
}
function gnbEvent(str){
	var mode = $.parseJSON(str);
	var open = false;
	if(mode){
		$(".gnb").on('mouseOut mouseleave',function(){ 
			$(".gnb > li > a").removeClass('on open');
			$(".gnb .current").addClass('on');
		}).find('> li > a').on('click',function(){
			$(".gnb > li > a").removeClass('on open');
			$(this).addClass('on open');
		});
		return false;
	}else{
		$(".gnb").off('mouseOut mouseleave');
		$(".gnb").find('> li > a').on('click',function(){
			if(open){ 
				if($(this).hasClass('open')){
					$(".gnb > li > a").removeClass('on open');
					$(".gnb .current").addClass('on');
					open = !open;
					return false;
				}else{
					$(".gnb > li > a").removeClass('on open');
					$(this).addClass('on open');
					open = true;
					return false;
				}
			}else{
				$(this).addClass('on open');
				open = !open;
			}
		});
		return false;
	}
}
$(function() { // load init
	setScreenMode();
	var isHoverEvent = screenMode == 'mobile' ? false : true;
	gnbEvent(isHoverEvent);
	var savedWidth = $(window).width(),
		boxes = scrolledBox.init(); // boxes : getter scrolled boxes array
	$(window).resize(function(){ 
		var newWidth = $(window).width();
		if(savedWidth == newWidth) return ; 
		savedWidth = newWidth;
		$("body").removeClass('openmenu');
		$(".gnb > li > a").removeClass('on open');
		$(".gnb .current").addClass('on');
		setScreenMode();
		var isHoverEvent = screenMode == 'mobile' ? false : true;
		gnbEvent(isHoverEvent);
		$.each(popps,function(i,item){//popup scroll update
			if(item != null) item.update();
		});
		$.each(boxes,function(i,item){ //boxes scroll update
			if(item != null) item.update();
		});
	});
	//gnb
	$(".btn-menu").on("click",function(){
		$("body").addClass('openmenu');
	});
	$(".btn-menu-close").on("click",function(){
		$("body").removeClass('openmenu');
	});
	//calendar 	
	$(".calender").datepicker();
	//tab
	$(".tab li a").on('click',function(){  
		var $this = $(this),
			$tab = $(".tab").has($this),
			$tabcon = $tab.siblings(".tab-con");
		$tab.find('li').removeClass("on");	
		$this.parent().addClass("on");
		var index= $tab.find('li').index($this.parent());
		if($tabcon.eq(index) != null)
			$tabcon.hide().eq(index).show();
	});
	//checkbox
	$(".chk_all input").on('change',function(){
		var $this = $(this),
			name = $this.attr('name');
		if($this.is(":checked"))
			$("input[name="+name+"]").prop("checked",true);
		else
			$("input[name="+name+"]").prop("checked",false);
		$(".t_chk input[name="+name+"]").trigger("change");
	});
	$(".t_chk input").on('change',function (){
		var $this = $(this),
			name = $this.attr('name'),
			table =$('table').has($this),
			boxLength= table.find("tbody input[name="+name+"]").length,
			checkedLength = table.find("tbody input[name="+name+"]:checked").length,
			selectAll = (boxLength == checkedLength);
			table.find('.chk_all input').prop("checked",selectAll);
			if($this.is(":checked"))  table.find('tr').has($this).addClass("active");
			else table.find('tr').has($this).removeClass("active");
	});
	// popup 닫기 버튼
	$(".popup .btn_close").on('click',function(){ 
		var popId = $('.popup').has($(this)).attr('id');
		closePop(popId);
	});
});
