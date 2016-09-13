var Controller = {
	Entity : null,
	listBookstore : function() {
		Controller.Entity = Bookstore;
		ajaxRequestObj.makeAjaxRequest(Bookstore.url, function() {
			Controller.listCallback(buildUIObj)
		}, null);
	},
	openBookList : function() {
		UiChangeMode.disableEditButton(this.Entity);
		$('storeID').value = event.target.value;

		Controller.Entity = Book;
		if (UiChangeMode.isSave() == false) {
			if (confirm('Do you want to dismiss the update?') == false) {
				return;
			}
		}
		var params = "openID=" + $('storeID').value + "&action=list";
		document.getElementById("storeName").innerHTML = $('bookstoreName'
				+ $('storeID').value).firstChild.nodeValue;

		ajaxRequestObj.makeAjaxRequest(Book.url, function() {
			Controller.listCallback(buildUIObj)
		}, params);
	},

	createEntity : function(Entity) {
		var params = "action=create";
		for (var i = 0; i < Entity.fields.length; i++) {
			params = params + "&" + Entity.fields[i].servlet + "="
					+ $(Entity.fields[i].column).value;
		}
		if (confirm('Are you sure?')) {
			ajaxRequestObj.makeAjaxRequest(Entity.url, function() {
				Controller.crudCallback(buildUIObj)
			}, params);
		}
	},

	updateEntity : function(Entity) {
		var id = event.target.value;
		$(Entity.primaryKey).value = id;

		var params = "action=update" + "&storeID=" + $('storeID').value;
		for (var i = 0; i < Entity.fields.length; i++) {
			if ($("update" + Entity.fields[i].column + id) != null) {
				params = params + "&" + Entity.fields[i].servlet + "="
						+ $("update" + Entity.fields[i].column + id).value;

				//console.log($("update" + Entity.fields[i].column + id).value);
				UiChangeMode
						.setUpdateData($("update" + Entity.fields[i].column
								+ id), $("update" + Entity.fields[i].column
								+ id).value);
			}
		}

		params = params + "&" + Entity.primaryKey + "=" + id;
		ajaxRequestObj.makeAjaxRequest(Entity.url, function() {
			Controller.updateCallback(buildUIObj, id)
		}, params);
	},

	deleteEntity : function(Entity) {
		var id = event.target.value;
		var params = "action=delete" + "&deleteID=" + id + "&storeID="
				+ $('storeID').value;
		if (confirm('Are you sure?')) {
			ajaxRequestObj.makeAjaxRequest(Entity.url, function() {
				Controller.crudCallback(buildUIObj)
			}, params);
		}
	},

	closeBook : function() {
		Controller.Entity = Bookstore;
		buildUIObj.setEntity();
		while ($('BookDiv').childNodes.length > 0) {
			$('BookDiv').removeChild($('BookDiv').childNodes[0]);
		}
		$('storeID').value = "";
		$('storeName').firstChild.nodeValue = "";

		UiChangeMode.setButtonEnable('btn');
	},
	cancelUpdate : function() {
		var id = event.target.value;
		var trId = Controller.Entity.name + id;
		var originalTr = UiChangeMode.updateMap.get(trId);
		$(trId).parentNode.replaceChild(originalTr, $(trId));
		$('update' + id).addEventListener('click', function() {
			UiChangeMode.setEditView(buildUIObj.Entity)
		}, true);
		UiChangeMode.setButtonEnable("update" + UiChangeMode.Entity.name);
		if (UiChangeMode.isSave() == true) {
			Controller.crudCallback(buildUIObj);
		}
	},
	listCallback : function(buildUIObj) {
		buildUIObj.setEntity();
		buildUIObj.initTable();
		buildUIObj.initTitle();
		buildUIObj.initContent(ajaxRequestObj.responseData);
		buildUIObj.addListener();
	},

	crudCallback : function(buildUIObj) {
		buildUIObj.setEntity();
		$(buildUIObj.Table).parentNode.removeChild($(buildUIObj.Table));
		Controller.listCallback(buildUIObj);
	},

	updateCallback : function(buildUIObj, id) {
		UiChangeMode.removeCancelButton($('cancel' + id));
		UiChangeMode.setUpdateButton($('save' + id));
		if (UiChangeMode.isSave() == true) {
			Controller.crudCallback(buildUIObj);
		}
	}

}
