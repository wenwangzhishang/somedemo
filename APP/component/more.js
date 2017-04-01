const  more={
	loadmore () {
		$("#header").load("../html/more.html #moreheader",()=>{
			
		})
	},
	loadcontent(){
		$("#content").load("../html/more.html #morecontent",()=>{
			
		})
	}
};

export default more;
