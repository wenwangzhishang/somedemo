import myajax from './myajax';
const  car={
	loadcar () {
		$("#header").load("../html/car.html #carheader",()=>{
			
		})
		
	},
	loadcontent(){
		$("#content").load("../html/car.html #carcontent",()=>{
			var carUrl="http://datainfo.duapp.com/shopdata/getCar.php";
			myajax.getdata(carUrl,'get',null,'JSON',function(res){
				var data=JSON.parse(res);
				// console(data);
				alert(1)

			})

		})
	}
};

export default car;
