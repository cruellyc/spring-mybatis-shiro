SD.setDateTime=function(){
	var str='<div id="date_main"><div class="date_main_row2">'+
		'<div class="date_main_week">日</div>'+
		'<div class="date_main_week">一</div>'+
		'<div class="date_main_week">二</div>'+
		'<div class="date_main_week">三</div>'+
		'<div class="date_main_week">四</div>'+
		'<div class="date_main_week">五</div>'+
		'<div class="date_main_week">六</div>'+
'</div>'+
'<div class="date_main2">'+
	
'</div>'+
'<div class="date_choicetime">'+
	'<div class="date_timeRow2">'+
		'<div class="date_row5"><div class="com_floatLeft date_hour" id="date_hourSelect">'+
		'<div></div>'+
		'<div></div>'+
		'<div id="h0"><span>00</span>时</div>'+
		'<div id="h1"><span>01</span>时</div>'+
		'<div id="h2"><span>02</span>时</div>'+
		'<div id="h3"><span>03</span>时</div>'+
		'<div id="h4"><span>04</span>时</div>'+
		'<div id="h5"><span>05</span>时</div>'+
		'<div id="h6"><span>06</span>时</div>'+
		'<div id="h7"><span>07</span>时</div>'+
		'<div id="h8"><span>08</span>时</div>'+
		'<div id="h9"><span>09</span>时</div>'+
		'<div id="h10"><span>10</span>时</div>'+
		'<div id="h11"><span>11</span>时</div>'+
		'<div id="h12"><span>12</span>时</div>'+
		'<div id="h13"><span>13</span>时</div>'+
		'<div id="h14"><span>14</span>时</div>'+
		'<div id="h15"><span>15</span>时</div>'+
		'<div id="h16"><span>16</span>时</div>'+
		'<div id="h17"><span>17</span>时</div>'+
		'<div id="h18"><span>18</span>时</div>'+
		'<div id="h19"><span>19</span>时</div>'+
		'<div id="h20"><span>20</span>时</div>'+
		'<div id="h21"><span>21</span>时</div>'+
		'<div id="h22"><span>22</span>时</div>'+
		'<div id="h23"><span>23</span>时</div>'+
		'<div></div>'+
		'<div></div>'+
		'</div><div class="com_floatRight date_minutes" id="date_minuteSelect">'+
		'<div></div>'+
		'<div></div>'+
		'<div id="m0"><span>00</span>分</div>'+
		'<div id="m1"><span>01</span>分</div>'+
		'<div id="m2"><span>02</span>分</div>'+
		'<div id="m3"><span>03</span>分</div>'+
		'<div id="m4"><span>04</span>分</div>'+
		'<div id="m5"><span>05</span>分</div>'+
		'<div id="m6"><span>06</span>分</div>'+
		'<div id="m7"><span>07</span>分</div>'+
		'<div id="m8"><span>08</span>分</div>'+
		'<div id="m9"><span>09</span>分</div>'+
		'<div id="m10"><span>10</span>分</div>'+
		'<div id="m11"><span>11</span>分</div>'+
		'<div id="m12"><span>12</span>分</div>'+
		'<div id="m13"><span>13</span>分</div>'+
		'<div id="m14"><span>14</span>分</div>'+
		'<div id="m15"><span>15</span>分</div>'+
		'<div id="m16"><span>16</span>分</div>'+
		'<div id="m17"><span>17</span>分</div>'+
		'<div id="m18"><span>18</span>分</div>'+
		'<div id="m19"><span>19</span>分</div>'+
		'<div id="m20"><span>20</span>分</div>'+
		'<div id="m21"><span>21</span>分</div>'+
		'<div id="m22"><span>22</span>分</div>'+
		'<div id="m23"><span>23</span>分</div>'+
		'<div id="m24"><span>24</span>分</div>'+
		'<div id="m25"><span>25</span>分</div>'+
		'<div id="m26"><span>26</span>分</div>'+
		'<div id="m27"><span>27</span>分</div>'+
		'<div id="m28"><span>28</span>分</div>'+
		'<div id="m29"><span>29</span>分</div>'+
		'<div id="m30"><span>30</span>分</div>'+
		'<div id="m31"><span>31</span>分</div>'+
		'<div id="m32"><span>32</span>分</div>'+
		'<div id="m33"><span>33</span>分</div>'+
		'<div id="m34"><span>34</span>分</div>'+
		'<div id="m35"><span>35</span>分</div>'+
		'<div id="m36"><span>36</span>分</div>'+
		'<div id="m37"><span>37</span>分</div>'+
		'<div id="m38"><span>38</span>分</div>'+
		'<div id="m39"><span>39</span>分</div>'+
		'<div id="m40"><span>40</span>分</div>'+
		'<div id="m41"><span>41</span>分</div>'+
		'<div id="m42"><span>42</span>分</div>'+
		'<div id="m43"><span>43</span>分</div>'+
		'<div id="m44"><span>44</span>分</div>'+
		'<div id="m45"><span>45</span>分</div>'+
		'<div id="m46"><span>46</span>分</div>'+
		'<div id="m47"><span>47</span>分</div>'+
		'<div id="m48"><span>48</span>分</div>'+
		'<div id="m49"><span>49</span>分</div>'+
		'<div id="m50"><span>50</span>分</div>'+
		'<div id="m51"><span>51</span>分</div>'+
		'<div id="m52"><span>52</span>分</div>'+
		'<div id="m53"><span>53</span>分</div>'+
		'<div id="m54"><span>54</span>分</div>'+
		'<div id="m55"><span>55</span>分</div>'+
		'<div id="m56"><span>56</span>分</div>'+
		'<div id="m57"><span>57</span>分</div>'+
		'<div id="m58"><span>58</span>分</div>'+
		'<div id="m59"><span>59</span>分</div>'+
		'<div></div>'+
		'<div></div>'+
		'</div></div>'+
		'</div>'+
	 '<div class="date_choiceRow2"><div class="com_halfBtn2 date_choiceBtn">确认添加</div></div>'+
'</div>'+
'<div class="date_line1"></div>'+
'<div class="date_line2"></div></div>';
	$('body').append(str);
	SD.datetimeInit();
}
SD.datetimeInit=function(){
	var nowYear=new Date().getFullYear();
	var nowMonth=new Date().getMonth()+1;
	var nowMinutes=new Date().getMinutes();
	var nowHours=new Date().getHours()
	DATE.setDateTime($('.date_main2'),nowYear,nowMonth);
	for(var i=0;i<11;i++){
		if(nowMonth==12){
			nowMonth=1;
			nowYear+=1;
		}else{
			nowMonth+=1;
		}
		DATE.setDateTime($('.date_main2'),nowYear,nowMonth);
	}
	$('.date_day_choice').click(function(){
		$('.date_day_choice').removeClass('date_dayselect');
		$('.date_day_choice').addClass('date_daychoice');
		$('.date_day_choice').attr('d','0');
		if($(this).attr('d')=='0'){
			$(this).removeClass('date_daychoice');
			$(this).addClass('date_dayselect');
			$(this).attr('d','2');
		}
	});
	$('.date_choiceBtn').click(function(){
		var day=$('.date_dayselect').text();
		var date=$('.date_dayselect').parent().parent().parent().find('.date_yearmonth').attr('id');
		var hour=$('#date_hourSelect').find('.date_select span').text();
		var minute=$('#date_minuteSelect').find('.date_select span').text();
		window.localStorage.setItem("time",date+'-'+(day>9?day:('0'+day))+' '+hour+':'+minute);
		init();
		function init(){
			var type=window.localStorage.getItem("timeType");
			if(type=='1'){
				$('#startTime').val(window.localStorage.getItem("time"));
			}else{
				$('#endTime').val(window.localStorage.getItem("time"));
			}
			
		}
		$('#date_main').remove();
	});

	$('#date_hourSelect').bind({
		'touchend touchcancel mouseup' : function(){
			var x=$(this).scrollTop()/24;
			if(($(this).scrollTop()%24) != 0){
				if($(this).scrollTop()%24>12){
					console.log("##"+($(this).scrollTop()+(24-$(this).scrollTop()%24)));
					x=($(this).scrollTop()+(24-$(this).scrollTop()%24))/24;
					setClass('#date_hourSelect',($(this).scrollTop()+(24-$(this).scrollTop()%24)),"h"+x);
				}else{
					console.log("**"+($(this).scrollTop()-($(this).scrollTop()%24)));
					x=($(this).scrollTop()-($(this).scrollTop()%24))/24;
					setClass('#date_hourSelect',($(this).scrollTop()-($(this).scrollTop()%24)),"h"+x);
				}
				setnoClass('#date_hourSelect',"h",x);
			}else{
				$('#date_hourSelect').children().removeClass('date_select');
				$('#date_hourSelect').find('#h'+x).addClass('date_select');
				setnoClass('#date_hourSelect',"h",x);
			}
		}
	});
	$('#date_minuteSelect').bind({
		'touchend touchcancel mouseup' : function(){
			var x=$(this).scrollTop()/24;
			if(($(this).scrollTop()%24) != 0){
				if($(this).scrollTop()%24>12){
					console.log("##"+($(this).scrollTop()+(24-$(this).scrollTop()%24)));
					x=($(this).scrollTop()+(24-$(this).scrollTop()%24))/24;
					setClass('#date_minuteSelect',($(this).scrollTop()+(24-$(this).scrollTop()%24)),"m"+x);
				}else{
					console.log("**"+($(this).scrollTop()-($(this).scrollTop()%24)));
					x=($(this).scrollTop()-($(this).scrollTop()%24))/24;
					setClass('#date_minuteSelect',($(this).scrollTop()-($(this).scrollTop()%24)),"m"+x);
				}
				setnoClass('#date_minuteSelect',"m",x);
			}else{
				$('#date_minuteSelect').children().removeClass('date_select');
				$('#date_minuteSelect').find('#m'+x).addClass('date_select');
				setnoClass('#date_minuteSelect',"m",x);
			}
		}
	});
	setClass('#date_minuteSelect',nowMinutes*24,"m"+nowMinutes);
	setClass('#date_hourSelect',nowHours*24,"h"+nowHours);
	setnoClass('#date_minuteSelect',"m",nowMinutes);
	setnoClass('#date_hourSelect',"h",nowHours);
	function setClass(e,h,x){
		$(e).animate({scrollTop:(h)});
		$(e).children().removeClass('date_select');
		$(e).find('#'+x).addClass('date_select');
	}
	function setnoClass(e,m,x){
		$(e).children().removeClass('date_noselect');
		$(e).find('#'+m+(x+1)).addClass('date_noselect');
		$(e).find('#'+m+(x-1)).addClass('date_noselect');
	}
}