import myajax from './myajax';
const  find={
	loadfind () {
		$("#header").load("../html/find.html #findheader",()=>{
			
		});
		
	},
	loadcontent(){
		$("#content").load("../html/find.html #findcontent",()=>{
			var findUrl='http://datainfo.duapp.com/shopdata/getclass.php';
			myajax.getdata(findUrl,"get",null,'JSON',function(res){
				var data=JSON.parse(res);
				

				for(var item in data){
					$('#findlist').append('<li class="fdli">'+data[item].className+'<span class="fdlisp">&gt</span>'+"</li>")
					
				}
				

			})
			
		})
	}
};

export default find;
