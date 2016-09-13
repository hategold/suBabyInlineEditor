/**
 * 
 */
var Book = {
	name : "book",
	url : "/Exercise_4/BookServlet/",
	div : "BookDiv",
	table : "bookTable",
	primaryKey : "bookID",
	category : null,
	trData : "bookData",
	title : new Array("Name", "Category", "Price", "Update", "Delete"),

	data : {
		bookID : null,
		storeID : null,
		name : null,
		category : null,
		price : null
	},
	fields : [ {
		column : "bookID",
		servlet : "bookID",
		type : "text",
		display : false
	}, {
		column : "storeID",
		servlet : "storeID",
		type : "text",
		display : false
	}, {
		column : "bookName",
		servlet : "name",
		type : "text",
		display : true
	}, {
		column : "bookCategory",
		servlet : "category",
		type : "select",
		display : true
	}, {
		column : "bookPrice",
		servlet : "price",
		type : "text",
		display : true
	} ],
	button : [ {
		column : "update",
		servlet : "update",
		display : "dataRow",
		listener : function() {
			UiChangeMode.setEditView(buildUIObj.Entity)
		}
	}, {
		column : "delete",
		servlet : "delete",
		display : "dataRow",
		listener : function() {
			Controller.deleteEntity(buildUIObj.Entity)
		}
	}, {
		id : "createBook",
		column : "create",
		type : "button",
		display : "createRow",
		listener : function() {
			Controller.createEntity(buildUIObj.Entity)
		}
	}, {
		column : "close",
		type : "button",
		display : "outside",
		listener : function() {
			Controller.closeBook
		}
	} ],
	getDataRowButton : function() {
		var dataRowButton = new Array();
		for (var i = 0; i < Book.button.length; i++) {
			if (Book.button[i].display == "dataRow") {
				dataRowButton.push(Book.button[i].column);
			}
		}
		return dataRowButton;
	},
	getDataRowButtonIndex : function() {
		var dataRowButtonIndex = new Array();
		for (var i = 0; i < Book.button.length; i++) {
			if (Book.button[i].display == "dataRow") {
				dataRowButtonIndex.push(i);
			}
		}
		return dataRowButtonIndex;
	},
	getCreateRowButton : function() {
		var createRowButton = [];
		for (var i = 0; i < Book.button.length; i++) {
			if (Book.button[i].display == "createRow") {
				createRowButton.push(Book.button[i].column);
			}
		}
		return createRowButton;
	},
	getCreateRowButtonIndex : function() {
		var createRowButtonIndex = [];
		for (var i = 0; i < Book.button.length; i++) {
			if (Book.button[i].display == "createRow") {
				createRowButtonIndex.push(i);
			}
		}
		return createRowButtonIndex;
	},
	getDisplayData : function(dataArray) {
		var displayData = [];
		for (var i = 0; i < Book.fields.length; i++) {
			if (Book.fields[i].display == true) {
				displayData.push(dataArray[i]);
			}
		}
		return displayData;
	},
	getDisplayFieldsColumn : function() {
		var displayFieldsColumn = [];
		for (var i = 0; i < Book.fields.length; i++) {
			if (Book.fields[i].display == true) {
				displayFieldsColumn.push(Book.fields[i].column);
			}
		}
		return displayFieldsColumn;
	},
	getDisplayFieldsIndex : function() {
		var displayFieldsIndex = [];
		for (var i = 0; i < Book.fields.length; i++) {
			if (Book.fields[i].display == true) {
				displayFieldsIndex.push(i);
			}
		}
		return displayFieldsIndex;
	},
	getSpaceTd : function() {
		var spaceNum = Book.title.length - Book.getDisplayFieldsColumn().length
				- Book.getCreateRowButton().length;
		var spaceArray = [];
		for (var i = 0; i < spaceNum; i++) {
			spaceArray.push("");
		}
		return spaceArray;
	},
	getId : function() {
		return Book.data.bookID;
	}
}
