var tableBuilderObj = {
	name : "tableBuilderObj",
	Entity : null,
	
	insertRow : function(json) {
		//TODO
		this.Entity= Controller.Entity;
		var trData = this.Entity.name +"Data";
		var dataArray = tableBuilderObj.getJsonData(json);
		var fields = tableBuilderObj.convertToInsertData(dataArray);
		var fieldsIndex = tableBuilderObj.Entity.getDisplayFieldsIndex();
		var buttonIndex = tableBuilderObj.Entity.getDataRowButtonIndex();
		var id = tableBuilderObj.Entity.getId();

		var tr = document.createElement('tr');

		for (var i = 0; i < fields.length; i++) {
			var td = document.createElement('td');
			td.setAttribute("class", "dataContentText");			
			var label=DomUtils.setDataLable(fields[i],fieldsIndex[i],tableBuilderObj.Entity);
			td.appendChild(label);
			tr.appendChild(td);
		}

		for (var i = 0; i < buttonIndex.length; i++) {
			var td = document.createElement('td');
			var button = DomUtils.setInsertRowButton(tableBuilderObj.Entity,buttonIndex[i],id);
			td.appendChild(button);
			tr.appendChild(td);
		}

		tr.setAttribute("id", Controller.Entity.name+id);
		tr.setAttribute("class", trData);
		buildUIObj.Table.appendChild(tr);

	},
	createRow : function() {
		this.Entity= Controller.Entity;
		var dataIndex = tableBuilderObj.Entity.getDisplayFieldsIndex();
		var buttonIndex = tableBuilderObj.Entity.getCreateRowButtonIndex();
		var space = tableBuilderObj.Entity.getSpaceTd();
		var tr = document.createElement('tr');

		for (var i = 0; i < dataIndex.length; i++) {
			var td = document.createElement('td');
			if (tableBuilderObj.Entity.fields[dataIndex[i]].type == "text") {
				var input = DomUtils.setInput(tableBuilderObj.Entity.fields[dataIndex[i]].column,"");
				td.appendChild(input);
			}
			if (tableBuilderObj.Entity.fields[dataIndex[i]].type == "select") {
				var select = DomUtils.setSelect(
						tableBuilderObj.Entity.fields[dataIndex[i]].column,
						tableBuilderObj.Entity.category,"");
				td.appendChild(select);
			}
			tr.appendChild(td);
		}

		for (var i = 0; i < buttonIndex.length; i++) {
			var td = document.createElement('td');
			var button = DomUtils.setCreateButton(tableBuilderObj.Entity, buttonIndex[i]);
			td.appendChild(button);
			tr.appendChild(td);
		}

		for (var i = 0; i < space.length; i++) {
			var td = document.createElement('td');
			tr.appendChild(td);
		}

		buildUIObj.Table.appendChild(tr);
	},
	addCloseButton : function() {
		var button =DomUtils.setCloseButton();
		$(Book.div).appendChild(button);
	},
	getJsonData : function(json) {
		var dataArray = [];
		for ( var key in tableBuilderObj.Entity.data) {
			if (tableBuilderObj.Entity.data.hasOwnProperty(key)) {
				tableBuilderObj.Entity.data[key] = json[key];
				dataArray.push(tableBuilderObj.Entity.data[key]);
			}
		}
		return dataArray;
	},
	convertToInsertData : function(dataArray) {
		return tableBuilderObj.Entity.getDisplayData(dataArray);
	}
}
