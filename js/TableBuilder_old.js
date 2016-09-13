/**
 * 
 */

var tableBuilderObj = {
	name : "tableBuilderObj",
	insertRow : function(json) {
		var id = json.storeID;
		var name = json.name;
		var zip = json.zip;
		var address = json.address;
		var tel = json.tel;
		var content = new Array(name, zip, address, tel, "update", "delete",
				"open");
		var contentName = new Array("bookstoreName", "bookstoreZip", "bookstoreAddress", "bookstoreTel", "update", "delete",
		"open");
		
		var tr = document.createElement('tr');

		for (var i = 0; i < buildUIObj.title.length; i++) {
			var td = document.createElement('td');
			var contentText = document.createTextNode(content[i]);
			// i =4 --- td is button
			if (i > 3) {
				var button = document.createElement('button');
				button.appendChild(contentText);
				
				button.setAttribute("id", contentName[i] + '' + id);
				button.setAttribute("class", "btn btn-default " + content[i]);
				button.setAttribute("value", id);
				td.appendChild(button);
			} else {
				var label = document.createElement('label');
				label.appendChild(contentText);
				//label.setAttribute("id",i + 'td' + id);
				label.setAttribute("id",contentName[i]+id);
				td.setAttribute("class", "dataContentText");
				td.appendChild(label);
				
//				td.setAttribute("id", i + 'td' + id);
//				td.setAttribute("class", "dataContentText");
//				td.appendChild(contentText);
			}
			
			
			tr.appendChild(td);

		}
		tr.setAttribute("id", id);
		tr.setAttribute("class", "bookstoreData");
		buildUIObj.Table.appendChild(tr);

	},
	createRow : function() {
		var content = new Array("Name", "Zip", "Address", "Tel", "create", "",
				"");
		var tr = document.createElement('tr');
		for (i = 0; i < content.length; i++) {
			var td = document.createElement('td');
			if (i == 4) {
				var contentText = document.createTextNode(content[i]);
				var button = document.createElement('button');
				button.appendChild(contentText);
				button.setAttribute("id", content[i]);
				button.setAttribute("class", "btn btn-default ");
				button.setAttribute("name", "action");
				button.setAttribute("value", content[i]);
				td.appendChild(button);
			} else if (i > 4) {
				var td = document.createElement('td');
			} else {
				var input = document.createElement('input');
				input.setAttribute("type", "text");
				// input.setAttribute("name", content[i]);
				input.setAttribute("id", Bookstore.name+content[i]);
				td.appendChild(input);
			}
			tr.appendChild(td);
		}
		buildUIObj.Table.appendChild(tr);
	}

}
// use model to create table
var bookTableBuilderObj = {
	name : "bookTableBuilderObj",
	insertRow : function(json) {
		var id = json.bookID; // var id = json["bookID"]
		var storeID = json.storeID;
		var name = json.name;
		var category = json.category;
		var price = json.price;
		var content = new Array(name, category, price, "update", "delete");
		var contentName = new Array("bookName", "bookCategory", "bookPrice", "create", "");
		var tr = document.createElement('tr');

		for (var i = 0; i < bookBuildUIObj.title.length; i++) {
			var td = document.createElement('td');
			var contentText = document.createTextNode(content[i]);
			// i =4 --- td is button

			if (i > 2) {
				var button = document.createElement('button');
				button.appendChild(contentText);
				button.setAttribute("id", content[i] + '' + id);
				button.setAttribute("class", "btn btn-default " + content[i]
						+ "Book");
				button.setAttribute("name", content[i]);
				button.setAttribute("value", id);

				td.appendChild(button);
			} else {
				var label = document.createElement('label');
				label.appendChild(contentText);
				//label.setAttribute("id",i + 'td' + id);
				label.setAttribute("id",contentName[i]+id);
				td.setAttribute("class", "dataContentText");
				td.appendChild(label);

//				td.setAttribute("class", "dataContentText");
//				td.setAttribute("id", i + 'td' + id);
//				td.appendChild(contentText);
			}
			tr.appendChild(td);

		}
		tr.setAttribute("id", id);
		tr.setAttribute("class", "bookData");
		bookBuildUIObj.Table.appendChild(tr);
	},
	createRow : function() {
		var content = new Array("Name", "Category", "Price", "create", "");
		var tr = document.createElement('tr');
		for (i = 0; i < content.length; i++) {
			var td = document.createElement('td');
			if (i == 1) {
				var select = document.createElement('select');
				select.setAttribute("id", Book.name + content[i]);
				select.setAttribute("class", "form-control");
				select.setAttribute("style", "width: auto;");
				for (var category = 0; category < Book.category.length; category++) {
					var option = document.createElement("option");
					var contentText = document
							.createTextNode(Book.category[category]);
					option.setAttribute("value", Book.category[category]);
					option.appendChild(contentText);

					select.appendChild(option);
				}
				td.appendChild(select);
			} else if (i == 3) {// no magic number
				var contentText = document.createTextNode(content[i]);
				var button = document.createElement('button');
				button.appendChild(contentText);
				button.setAttribute("id", 'createBook');
				button.setAttribute("class", "btn btn-default ");
				button.setAttribute("name", "action");
				button.setAttribute("value", content[i]);

				td.appendChild(button);
			} else if (i > 3) {
				var td = document.createElement('td');
			} else {
				var input = document.createElement('input');
				input.setAttribute("type", "text");
				// input.setAttribute("name", content[i]);
				input.setAttribute("id", Book.name+content[i]);
				td.appendChild(input);
			}
			tr.appendChild(td);
		}
		bookBuildUIObj.Table.appendChild(tr);
	},
	addCloseButton : function() {
		var button = document.createElement('button');
		var contentText = document.createTextNode('close');
		button.appendChild(contentText);
		button.setAttribute("id", "close");
		button.setAttribute("class", "btn btn-default ");
		$(Book.div).appendChild(button);
	}
}
