/**
 * 
 */
var Bookstore = {
	name : "bookstore",
	url : "/Exercise_4/BookstoreServlet/",
	div : "BookstoreDiv",
	table : "bookstoreTable",
	primaryKey : "storeID",
	trData : "bookstoreData",
	title : new Array("Name", "Zip", "Address", "Telephone", "Update",
			"Delete", "Book"),

	data : {
		storeID : null,
		name : null,
		zip : null,
		address : null,
		tel : null,
	},
	fields : [ {
		value : "",
		column : "storeID",
		servlet : "storeID",
		type : "text",
		display : false
	}, {
		value : "",
		column : "bookstoreName",
		servlet : "name",
		type : "text",
		display : true
	}, {
		value : "",
		column : "bookstoreZip",
		servlet : "zip",
		type : "text",
		display : true
	}, {
		value : "",
		column : "bookstoreAddress",
		servlet : "address",
		type : "text",
		display : true
	}, {
		value : "",
		column : "bookstoreTel",
		servlet : "tel",
		type : "text",
		display : true
	} ],
	button : [ {
		column : "update",
		type : "button",
		display : "dataRow",
		listener : function() {
			UiChangeMode.setEditView(buildUIObj.Entity)
		}
	}, {
		column : "delete",
		type : "button",
		display : "dataRow",
		listener : function() {
			Controller.deleteEntity(buildUIObj.Entity)
		}

	}, {
		column : "open",
		type : "button",
		display : "dataRow",
		listener : function() {
			Controller.openBookList()
		}

	}, {
		id : "create",
		column : "create",
		type : "button",
		display : "createRow",
		listener : function() {
			Controller.createEntity(buildUIObj.Entity)
		}
	} ],
	getDataRowButton : function() {
		var dataRowButton = new Array();
		for (var i = 0; i < Bookstore.button.length; i++) {
			if (Bookstore.button[i].display == "dataRow") {
				dataRowButton.push(Bookstore.button[i].column);
			}
		}
		return dataRowButton;
	},
	getDataRowButtonIndex : function() {
		var dataRowButtonIndex = new Array();
		for (var i = 0; i < Bookstore.button.length; i++) {
			if (Bookstore.button[i].display == "dataRow") {
				dataRowButtonIndex.push(i);
			}
		}
		return dataRowButtonIndex;
	},
	getCreateRowButton : function() {
		var createRowButton = [];
		for (var i = 0; i < Bookstore.button.length; i++) {
			if (Bookstore.button[i].display == "createRow") {
				createRowButton.push(Bookstore.button[i].column);
			}
		}
		return createRowButton;
	},
	getCreateRowButtonIndex : function() {
		var createRowButtonIndex = [];
		for (var i = 0; i < Bookstore.button.length; i++) {
			if (Bookstore.button[i].display == "createRow") {
				createRowButtonIndex.push(i);
			}
		}
		return createRowButtonIndex;
	},
	getDisplayData : function(dataArray) {
		var displayData = new Array();
		for (var i = 0; i < Bookstore.fields.length; i++) {
			if (Bookstore.fields[i].display == true) {
				displayData.push(dataArray[i]);
			}
		}
		return displayData;
	},
	getDisplayFieldsColumn : function() {
		var displayFieldsColumn = [];
		for (var i = 0; i < Bookstore.fields.length; i++) {
			if (Bookstore.fields[i].display == true) {
				displayFieldsColumn.push(Bookstore.fields[i].column);
			}
		}
		return displayFieldsColumn;
	},
	getDisplayFieldsIndex : function() {
		var displayFieldsIndex = [];
		for (var i = 0; i < Bookstore.fields.length; i++) {
			if (Bookstore.fields[i].display == true) {
				displayFieldsIndex.push(i);
			}
		}
		return displayFieldsIndex;
	},
	getSpaceTd : function() {
		var spaceNum = Bookstore.title.length
				- Bookstore.getDisplayFieldsColumn().length
				- Bookstore.getCreateRowButton().length;
		var spaceArray = [];
		for (var i = 0; i < spaceNum; i++) {
			spaceArray.push("");
		}
		return spaceArray;
	},
	getId : function() {
		return Bookstore.data.storeID;
	}
}