import home from './home.js';
import myajax from './myajax';
const detail={
	loadheader(){
		$("#header").load("../html/detail.html #detailheader",()=>{
			$(".back").on('tap',function(){
				home.loadheader();
				home.loadcontent();
			})
		})
	},
	loadcontent(goodsID){
		$("#content").load("../html/detail.html #detailcontent",()=>{
			var url="http://datainfo.duapp.com/shopdata/getGoods.php";
			var data={
				goodsID:goodsID
			}
			// myajax.getdata(url,'get',data,'JSON',function(res){
			// 	var data=eval(res)
			// 	console.log(2);
			// })
			$.get(url,function(data){
				function callback(d){
					d.forEach((v)=>{
						if(v.goodsID == goodsID){
							$('#detailcontent').append('<li class="goodli" >'+
									'<div class="goodlidiv">'+
										'<img class="goodimg" src="'+v.goodsListImg+'" data-original="img/pic01.jpg"/>'
									+'</div>'+
									'<div class="goodinfo">'
										+'<p>'+v.className+'</p>'
										+'<p>'+'￥'+v.price+'</p>'+
										+'<p>'+v.discount+'</p>'+
										
									'</div>'
								+'</li>');

						}
					});
					//console.log(goodsID);

				}
				eval(data);		

			});
		})
	},
}
export default detail;