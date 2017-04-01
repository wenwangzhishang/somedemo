// export default {
// 	getdata (url,type,data,datatype,callback) {
// 		var myUrl=url;
// 		if(datatype=="JSONP"){
// 			myUrl=url+'callback';
// 		}
// 		$.ajax({
// 			url:url,
// 			type:type,
// 			data:data,
// 			datatype:datatype,
// 			success:function(response){
// 				callback(response);
// 			}
// 		})

// 	}
// }

export default {
	getdata (url,type,data,dataType,callback) {
		var myUrl = url;
		if(dataType == "JSONP"){
			myUrl += "?callback=";
		}
		$.ajax({
			url:myUrl,
			type:type,
			data:data,
			dataType:dataType,
			success:function(response){
				// console.log("response",response)
				callback(response);
			}
		})
	}
}