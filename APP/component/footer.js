
import home from './home.js';
import car from './car.js';
import find from './find.js';
import myshow from './myshow.js';
import more from './more.js';


const footer={
	loadfooter(){
		$("#footer").load("../html/footer.html #subfooter" ,()=>{
			console.log(1);
			$("#footer").find("ul").find("li").on("tap",function(){

				$(this).addClass('active').siblings().removeClass('active');
				var iIndex=$(this).index();
				switch(iIndex){
					case 0:
						home.loadheader();
						home.loadcontent();
						break;
					case 1:
						find.loadfind();
						find.loadcontent();
						break;
					case 2:
					    car.loadcar();
					    car.loadcontent();
						break;
					case 3:
						myshow.loadmyshow();
						myshow.loadcontent();
						break;
					case 4:
						more.loadmore();
						more.loadcontent();
						break;

				}

		});
			

			
			

		});

		

	}
		
};
export default footer;