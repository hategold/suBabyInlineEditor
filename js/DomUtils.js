var DomUtils = {

	setSelect : function(id, selectOption,selected) {
		var select = document.createElement('select');
		select.setAttribute("id", id);
		select.setAttribute("class", "form-control");
		select.setAttribute("style", "width: auto;");
		for (var category = 0; category < selectOption.length; category++) {
			var option = document.createElement("option");
			var contentText = document.createTextNode(selectOption[category]);
			option.setAttribute("value", selectOption[category]);
			if (selectOption[category] == selected) {
			option.setAttribute("selected", true);
		}
			option.appendChild(contentText);
			select.appendChild(option);
		}
		return select;
	},

	setCreateButton : function(Entity, buttonIndex) {
		var contentText = document
				.createTextNode(Entity.button[buttonIndex].column);
		var button = document.createElement('button');
		button.appendChild(contentText);
		button.setAttribute("id", Entity.button[buttonIndex].id);
		button.setAttribute("class", "btn btn-default ");
		button.setAttribute("name", "action");
		button.setAttribute("value", Entity.button[buttonIndex].column);

		return button;
	},
	setInput : function(id, value) {
		var input = document.createElement('input');
		input.setAttribute("type", "text");
		input.setAttribute("id",id);
		input.setAttribute("value", value);
		input.setAttribute("contentEditable", true);
		return input;
	},
	
	clearOldTable : function(div) {
		while (div.hasChildNodes()) {
			div.removeChild(div.lastChild);
		}
	},
	setDataLable : function(TextNode, fieldsIndex, Entity) {
		var contentText = document.createTextNode(TextNode);
		var label = document.createElement('label');
		label.appendChild(contentText);
		label.setAttribute("id", Entity.fields[fieldsIndex].column
				+ Entity.getId());
		return label;

	},
	setTable : function(Entity) {
		var table = document.createElement('table');
		table.setAttribute("id", buildUIObj.Entity.table);
		table.setAttribute("border", 2);
		table.setAttribute("width", "100%");
		return table;

	},
	setTh : function(Entity, i) {
		var th = document.createElement('th');
		var titleText = document.createTextNode(Entity.title[i]);
		th.appendChild(titleText);
		return th;
	},
	setInsertRowButton : function(Entity, buttonIndex, id) {
		var button = document.createElement('button');
		var contentText = document
				.createTextNode(Entity.button[buttonIndex].column);
		button.appendChild(contentText);
		button.setAttribute("id", Entity.button[buttonIndex].column + ''
				+ id);
		button.setAttribute("class", "btn btn-default "
				+ Entity.button[buttonIndex].column + Entity.name + " "
				+ Entity.name);
		button.setAttribute("value", id);
		return button;
	},

	setCloseButton : function() {
		var button = document.createElement('button');
		var contentText = document.createTextNode('close');
		button.appendChild(contentText);
		button.setAttribute("id", "close");
		button.setAttribute("class", "btn btn-default close ");
		return button;
	},
	
}