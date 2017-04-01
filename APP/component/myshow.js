const  myshow={
	loadmyshow () {
		$("#header").load("../html/myshow.html #myshowheader",()=>{
			
		})
	},
	loadcontent(){
		$("#content").load("../html/myshow.html #myshowcontent",()=>{
			
		})
	}
};

export default myshow;
