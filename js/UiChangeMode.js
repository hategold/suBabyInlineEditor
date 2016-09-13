var UiChangeMode = {
	updateMap : new Hash(),
	//
	Entity : null,
	setEditView : function(Entity) {
		//
		UiChangeMode.Entity = Entity;
		var id = event.target.value;
		var updateBtn = $('update' + id);
		var dataIndex = Entity.getDisplayFieldsIndex();
		UiChangeMode.updateMap.set(Entity.name + id, $(Entity.name + id)
				.cloneNode(true));

		for (var i = 0; i < dataIndex.length; i++) {
			var labelObj = $(Entity.fields[dataIndex[i]].column + id);
			var labelName = Entity.fields[dataIndex[i]].column;
			var originalData = labelObj.innerHTML;
			if (Entity.fields[dataIndex[i]].type == "text") {
				UiChangeMode.setTbEditable(labelObj, labelName + id,
						originalData);
			} else if (Entity.fields[dataIndex[i]].type == "select") {
				UiChangeMode.setTbToSelect(labelObj, labelName + id,
						originalData);
			}
		}

		UiChangeMode.setButtonDisable('btn');
		UiChangeMode.setButtonEnable("update" + Entity.name);
		// TODO
		if (Entity == Book) {
			UiChangeMode.setButtonEnable("openbookstore");
			UiChangeMode.setButtonEnable("close");
		}

		UiChangeMode.setCancelButton(updateBtn);
		UiChangeMode.setSaveButton(updateBtn);
		$(Entity.primaryKey).value = id;
	},
	setTbEditable : function(labelObj, labelName, originalData) {
		labelObj.removeChild(labelObj.childNodes[0]);
		var input = DomUtils.setInput("update" + labelName, originalData);
		labelObj.appendChild(input);
	},
	setButtonDisable : function(btnClass) {
		var button = document.getElementsByClassName(btnClass);
		var i = 0;
		while (i < button.length) {
			button[i].disabled = true;
			i++;
		}
	},
	setButtonEnable : function(btnClass) {
		var button = document.getElementsByClassName(btnClass);
		var i = 0;
		while (i < button.length) {
			button[i].disabled = false;
			i++;
		}
	},
	setSaveButton : function(updateBtn) {
		var saveBtn = updateBtn.cloneNode(true);
		updateBtn.parentNode.replaceChild(saveBtn, updateBtn);
		saveBtn.id = "save" + updateBtn.value;
		saveBtn.firstChild.nodeValue = "save";
		$(saveBtn.id).disabled = false;
		$(saveBtn.id).classList.add("save");
		$(saveBtn.id).addEventListener('click', function() {
			Controller.updateEntity(Controller.Entity)
		}, true);
	},
	setUpdateButton : function(saveBtn) {
		var updateBtn = saveBtn.cloneNode(true);
		saveBtn.parentNode.replaceChild(updateBtn, saveBtn);
		updateBtn.id = "update" + saveBtn.value;
		updateBtn.firstChild.nodeValue = "update";
		$(updateBtn.id).classList.remove("save");
		$(updateBtn.id).addEventListener('click', function() {
			UiChangeMode.setEditView(buildUIObj.Entity)
		}, true);
	},
	setCancelButton : function(updateBtn) {
		var cancelBtn = updateBtn.cloneNode(true);
		cancelBtn.id = "cancel" + updateBtn.value;
		cancelBtn.value = updateBtn.value;
		cancelBtn.firstChild.nodeValue = "cancel";
		updateBtn.parentNode.appendChild(cancelBtn);
		cancelBtn.addEventListener('click', Controller.cancelUpdate, true);
	},

	removeCancelButton : function(cancelBtn) {
		cancelBtn.parentNode.removeChild(cancelBtn);
	},
	setUpdateData : function(input, labelValue) {
		var contentText = document.createTextNode(labelValue);
		input.parentNode.replaceChild(contentText, input);
	},
	setTbToSelect : function(td, colName, selected) {
		var select = DomUtils.setSelect("update" + colName, Book.category,
				selected)
		td.removeChild(td.lastChild);
		td.appendChild(select);
	},
	isSave : function() {
		return $$('button.save').length == 0 ? true : false;
	},
	disableEditButton : function(Entity) {
		UiChangeMode.setButtonDisable('update' + Controller.Entity.name);
		UiChangeMode.setButtonDisable('delete' + Controller.Entity.name);
		$('create').disabled = true;
	}
}
