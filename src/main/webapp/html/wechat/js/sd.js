﻿//切换插件外链
//document.write("<scri" + "pt type='text/javascript' src='../swaf_plugin.js'></sc" + "ript>");
//document.write("<scri" + "pt type='text/javascript' src='swaf_plugin.js'></sc" + "ript>");

if(window.swaf){
	sdStatusBar.setStyle("Black");
	sdStatusBar.setColor("#FFFFFF");
}

//解决IE不支持console的问题
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}

	//日期修改
	Date.prototype.addDay = function(d){
		return (new Date(this.valueOf() + d * 86400000));
	};
	// 对Date的扩展，将 Date 转化为指定格式的String
	// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
	// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
	// 例子：
	// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
	// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
	Date.prototype.Format = function (fmt) { //author: meizz
		var wd = ['日', '一', '二', '三', '四', '五', '六'];
		var o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			"S": this.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		if(/(D)/.test(fmt)) fmt = fmt.replace(RegExp.$1, wd[this.getDay()]);
		for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	};
	Date.prototype.FormatWeek = function (day) {
		var wd = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
		var week = wd[day.getDay()];
		return week;
	};
	Date.prototype.FormatWeek2 = function (day) {
		var wd = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
		var week = wd[day.getDay()];
		return week;
	};
	Date.prototype.FormatWeek3 = function (day) {
		var wd = ['星期日Sunday', '星期一Monday', '星期二Tuesday', '星期三Wednesday', '星期四Thursday', '星期五Friday', '星期六Saturday'];
		var week = wd[day.getDay()];
		return week;
	};
}());
/*滚动事件*/
(function(){
    var special = jQuery.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);
    special.scrollstart = {
        setup: function() {
            var timer,
                handler =  function(evt) {
                    var _self = this,
                        _args = arguments;
                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        jQuery.event.handle.apply(_self, _args);
                    }
                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency);
                };
            jQuery(this).bind('scroll', handler).data(uid1, handler);
        },
        teardown: function(){
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
        }
    };
    special.scrollstop = {
        latency: 300,
        setup: function() {
            var timer,
                    handler = function(evt) {
                    var _self = this,
                        _args = arguments;
                    if (timer) {
                        clearTimeout(timer);
                    }
                    timer = setTimeout( function(){
                        timer = null;
                        evt.type = 'scrollstop';
                        jQuery.event.handle.apply(_self, _args);
                    }, special.scrollstop.latency);
                };
            jQuery(this).bind('scroll', handler).data(uid2, handler);
        },
        teardown: function() {
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
        }
    };
})();
/*=======================*/

SD = {};
SD.app = 'http://10.16.8.22:8080/SmartLock/';

SD.jsonp= function(u, f, ff){
	$.ajax({
		dataType: "json",
		url: u,
		timeout: 5000,
		xhrFields: {withCredentials:true},
		crossDomain: true,
		success: function(j){if(f) f(j);},
		error: function(){
			if(ff) ff();
		}
	});
};
//获取url中的参数
SD.getUrlParam=function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
};
SD.countDown = function(el,v,f){
	if(v>0){
		$(el).attr('tv', v);
		$(el).everyTime('1s', function(){
			var tv = eval($(this).attr('tv')) - 1;
			if(tv > 0){
				$(this).attr('tv', tv);
				$(el).html(tv<10?'0'+tv:tv);
			}else{
				$(el).stopTime();
				$(el).html('60');
				if(f) f();
			}
		});
	}else{
		if(f) f();
	}
};


/**
 * 在屏幕上显示一条消息，持续3秒
 */
SD.toast = function(s,f){
    var v =
        '<div class="sdtoast" style="position:fixed;opacity:0.8;background-color:#000;border-radius:10px;z-index:2000;left:20%;right:20%;top:200px;width:60%;height:135px;text-align:center;">' +
        '<div style="padding-top:20px;"><img src="./images/sd_info.png"></div>'+
        '<div style="display:inline-block;padding:4px 8px;color:white;font-size:16px;margin-top:10px;">' + s +
        '</div></div>';
    $(v).appendTo('body').fadeIn().oneTime('1.5s', function(){
        $('.sdtoast').fadeOut(function(){
            $('.sdtoast').remove();
            if(f){
            	f();
            }
        });
    });
};
SD.toastSuc = function(s,f){
    var v =
        '<div class="sdtoast" style="display:inline-block;position:fixed;opacity:0.8;background-color:#000;border-radius:10px;z-index:2000;left:20%;right:20%;top:200px;width:60%;height:135px;text-align:center;">' +
        '<div style="padding-top:20px;"><img src="./images/sd_success.png"></div>'+
        '<div style="display:inline-block;padding:4px 8px;color:white;font-size:16px;margin-top:10px;">' + s +
        '</div></div>';
    $(v).appendTo('body').fadeIn().oneTime('1s', function(){
        $('.sdtoast').fadeOut(function(){
            $('.sdtoast').remove();
            if(f){
            	f();
            }
        });
    });
};
SD.toastOpen = function(s,f){
    var v =
        '<div class="sdtoast" style="position:fixed;opacity:0.8;background-color:#000;border-radius:10px;z-index:2000;left:20%;right:20%;top:200px;width:60%;height:135px;text-align:center;">' +
        '<div style="padding-top:20px;"><img src="./images/sd_openDoor.png" width="35px"></div>'+
        '<div style="display:inline-block;padding:4px 8px;color:white;font-size:16px;margin-top:10px;">' + s +
        '</div></div>';
    $(v).appendTo('body').fadeIn().oneTime('1.5s', function(){
        $('.sdtoast').fadeOut(function(){
            $('.sdtoast').remove();
            if(f){
            	f();
            }
        });
    });
};
/*随机数*/
SD.random=function(n){
	var s="";
	for(var i=0;i<n;i++){
		var num=parseInt(10*Math.random());
		s+=num+'';
	}
	return s;
}

//判断提示对话框
SD.confirme=function(t,s,ff,good,cann,cf){
    var str ='<div class="confirme">'+
        '<div class="confirmeWin">'+
        '    <div class="tit">'+t+'</div>'+
        '    <div class="contents">'+s+'</div>'+
        '    <div class="bottom">'+
        '        <div class="cancel"><div class="cann">'+(cann?cann:'取消')+'</div></div>'+
        '        <div class="good">'+(good?good:'确定')+'</div>'+
        '    </div>'+
        '</div>'+
        '<div class="confirmeBg"></div>'+
        '</div>';
    $('body').append(str);
    //取消
    $('.cancel').on("click",function(){
        $('.confirme').remove();
        if(cf) cf();
    });
    //好
    $('.good').on("click",function(){
        $('.confirme').remove();
        if(ff) ff();
    });
};

DATE={};
DATE.setDateTime=function(e,year,month,t){
	var str=year+"/"+month+"/1";
	var oneday=new Date(str);
	var dayNum=0;
	var nowYear=new Date().getFullYear();
	var nowMonth=new Date().getMonth();
	var nowDate=new Date().getDate();
	if(month==1|month==3|month==5|month==7|month==8|month==10|month==12){
		dayNum=31;
	}else if(month==4|month==6|month==9|month==11){
		dayNum=30;
	}else{
		if(((year % 100 == 0) && (year % 400 == 0)) || ((year % 100 != 0) && (year % 4 == 0))){
			dayNum=29;
		}else{
			dayNum=28;
		}
	}
	var s='<div class="date_dateShow">'+
		'<div class="date_main_dateheader">'+
		'	<div class="date_dateShow_left date_yearmonth" id="'+year+'-'+(month>9?month:('0'+month))+'">'+year+'年'+month+'月</div>'+
		'</div>';
	for(var i=1;i<=dayNum;i++){
		if(i==1){
			s+='<div class="date_main_row3">';
			for(var n=0;n<oneday.getDay();n++){
				s+='<div class="date_main_day"><div class="date_day_datetime"></div></div>';
			}
		}
		if(nowYear==year && (nowMonth+1)==month){
			if(t){
				if(i==nowDate){
					s+='<div class="date_main_day"><div class="date_day_datetime date_day_choice date_dayselect" d="0">'+i+'</div></div>';
				}else if(i>nowDate){
					s+='<div class="date_main_day"><div class="date_day_datetime">'+i+'</div></div>';
				}else{
					s+='<div class="date_main_day"><div class="date_day_datetime date_day_choice date_daychoice" d="0">'+i+'</div></div>';
				}
			}else{
				if(i==nowDate){
					s+='<div class="date_main_day"><div class="date_day_datetime date_day_choice date_dayselect" d="0">'+i+'</div></div>';
				}else if(i<nowDate){
					s+='<div class="date_main_day"><div class="date_day_datetime">'+i+'</div></div>';
				}else{
					s+='<div class="date_main_day"><div class="date_day_datetime date_day_choice date_daychoice" d="0">'+i+'</div></div>';
				}
			}
		}else{
			s+='<div class="date_main_day"><div class="date_day_datetime date_day_choice date_daychoice" d="0">'+i+'</div></div>';
		}
		if(((oneday.getDay()+i)%7)==0){
			s+='</div>';
			if(i<dayNum){
				s+='<div class="date_main_row3">';
			}
		}
	}
	s+='</div>';
	$(e).append(s);
};
SD.popstate=function(f,p){
	if(p){
		SD.pushHistory();
	}
	window.addEventListener("popstate", function(e) {
		//alert("sfd");
		if(f) f();
		}, false);
}

SD.pushHistory =function() {
	var state = {
			title: "title",
			url: "#"
	};
	window.history.pushState(state, "title", "#");
}

