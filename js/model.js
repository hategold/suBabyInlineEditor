/**
 * 
 * 
 *   bookstore & book
 */

var model = {
	bookstore : {
		url : "/Exercise_4/BookstoreServlet/",
		column : {
			storeID : null,
			name : null,
			zip : null,
			address : null,
			tel : null,
			book : null
		},
		jsonMap : {
			"id" : "storeID" ,
			"name" : "name" ,
			"zip" : "zip" ,
			"address" : "address" ,
			"tel" : "tel" 
		}
//		var id = json.storeID;
//		var name = json.name;
//		var zip = json.zip;
//		var address = json.address;
//		var tel = json.tel;
		
	},
	book : {
		url : "/Exercise_4/BookServlet/",
		category : null,
		column : {
			bookID : null,
			storeID : null,
			name : null,
			category : null,
			price : null
		}	
	}
}
var config = {
		CUTE : "cute",
		HAPPY : "happy",
		RECOMMEND : "recommend",
		DELICIOUS : "delicious"
	}
