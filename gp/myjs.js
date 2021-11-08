window.onload=function()
			{
				window.requestAnimationFrame(getDate)
			}
			
			function getDate()
			{
				window.setTimeout(function(){
					window.requestAnimationFrame(getDate)
				},1000/2)
				var d=new Date();   
				var year=d.getFullYear()  //获取年
				var month=d.getMonth()+1;  //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
				var day=d.getDay()    //获取日
				var days=d.getDate() //获取日期
				var hour=d.getHours()   //获取小时
				var minute=d.getMinutes()  //获取分钟
				var second=d.getSeconds()   //获取秒
				
				var month1=month
				var days1=day
				if(month<10) month="0"+month
				if(days1<10) days1="00"+days1
				var da=year+"-"+month1+"-"+days1+""
				var da1=year+"年"+month1+"月"+days1+"日"
				Tools.innerHTML=da1+" "+hour+":"+minute+":"+second
				
				var Tools1=document.getElementById("kssj")
                                                                var minute1=minute
                                                                var hour1=hour
                                                                minute1=minute-15
				Tools1.innerHTML=da
				document.all['name'].innerText="高普"
				document.all['sex'].innerText="男"
				document.all['xh'].innerText="2201002050"
				document.all['sjh'].innerText="13121962322"
				document.getElementById("touxiangid").src = "./touxiang.jpg";
			}