const seach={
	loadheader(){
		$("#header").load("../html/seach.html #seachheader",()=>{
			$(".back").on('tap',function(){
				
			})
		})
	},
	loadcontent(){
		$("#content").load("../html/seach.html #seachcontent",()=>{

		})
	},
}
export default seach;