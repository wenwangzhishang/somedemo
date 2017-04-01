/*
module.exports={
	say:function(){
		console.log(我是首页);
	}
}*/
import seach from './seach.js';
import detail from './detail.js'
import myajax from './myajax.js';

const  home={
	loadheader () {
		$("#header").load("../html/home.html #homeheader",()=>{
			$('.hdseach').on('tap',function(){
				seach.loadheader();
				seach.loadcontent();
				$("#footer").html('');
				
			})

		})

	},
	loadbanner(data){
		for(var item of data){
				$("#homewrapper").append('<div class="swiper-slide">'+
				'<img src="'+JSON.parse(item.goodsBenUrl)[0]+'" alt="">'+
				'</div>');
				// console.log(JSON.parse(item.goodsBenUrl)[0]);
			}

		var swiper=new Swiper("#homebanner",{
				pagination:".swiper-pagination",
				autoplay:1000,
				loop:true,
				autoplayDisableOninteraction:false

			})
			
	},
	loadgoodlist(data){
		for(var item of data){
			$(".goodlist").append('<li class="goodli" goodsid="'+item.goodsID+'">'+
				'<div class="goodlidiv">'+
					'<img class="goodimg" src="'+item.goodsListImg+'" data-original="img/pic01.jpg"/>'
				+'</div>'+
				'<div class="goodinfo">'
					+'<p>'+item.className+'</p>'
					+'<p>'+'￥'+item.price+'</p>'+
					+'<p>'+item.discount+'</p>'+
					'<button class="addCartBtn">加入购物车</button>'+
				'</div>'
			+'</li>')

		}
		$('.goodli').on('tap',function(){
			var goodsID=$(this).attr('goodsid');
			console.log(goodsID);
			detail.loadheader();
			detail.loadcontent(goodsID);

		})
	},
	loadcontent(){
		var that=this;
		// console.log(that);
		$("#content").load("../html/home.html #homecontent",()=>{
			if(localStorage.getItem("homebannerList")){
				var data = localStorage.getItem("homebannerList");
					// console.log(2);
					that.loadbanner(JSON.parse(data));

			}else{
				//获取banner图
			var bannerUrl ="http://datainfo.duapp.com/shopdata/getBanner.php";
				
			myajax.getdata(bannerUrl,'get',null,"JSONP",function(result){
				var data =eval(result);
					localStorage.setItem("homebannerList",JSON.stringify(data));
					that.loadbanner(data);

				
				})
			}

			
			//获取首页的商品list
			if(localStorage.getItem("goodlist")){
				var data=localStorage.getItem("goodlist");
				that.loadgoodlist(JSON.parse(data));
			}else{

				var listUrl="http://datainfo.duapp.com/shopdata/getGoods.php"
					myajax.getdata(listUrl,'get',null,'JSONP',function(res){
								var data=eval(res);
								// console.log(data);
								// console.log(data[0].goodsListImg);
								// console.log(data[0].className)
								 that.loadgoodlist(data);

					});
			
			}
			


		})
	},
};

export default home;

