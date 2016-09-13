var buildUIObj = {
	name : "buildUIObj",
	title : null,
	Table : null,
	Entity : null,
	setEntity : function() {
		this.Entity = Controller.Entity;
		this.Table = Controller.Entity.table;
	},
	initTable : function() {
		this.Table = DomUtils.setTable(buildUIObj.Entity);
		var div = document.getElementById(buildUIObj.Entity.div);
		DomUtils.clearOldTable(div);
		div.appendChild(this.Table);
	},

	initTitle : function() {
		this.title = buildUIObj.Entity.title;
		var tr = document.createElement('tr');
		for (i = 0; i < buildUIObj.title.length; i++) {
			var th = DomUtils.setTh(buildUIObj.Entity, i);
			tr.appendChild(th);
		}
		this.Table.appendChild(tr);
	},

	initContent : function(jsonString) {
		var jsonArray = JSON.parse(jsonString);
		var entityArray = jsonArray.entity;
		for (var index = 0; index < entityArray.length; index++) {
			tableBuilderObj.insertRow(entityArray[index]);
		}
		Book.category = jsonArray.category;
		tableBuilderObj.createRow();
		if (buildUIObj.Entity == Book) {
			tableBuilderObj.addCloseButton();
		}
	},

	//參數
	addListener : function() {
		//entity (小寫)
		
		createBtnIndex = buildUIObj.Entity.getCreateRowButtonIndex();
		for (var i = 0; i < createBtnIndex.length; i++) {
			$(buildUIObj.Entity.button[createBtnIndex[i]].id).addEventListener(
					'click',
					buildUIObj.Entity.button[createBtnIndex[i]].listener, true);
		}

		dataRowBtnIndex = buildUIObj.Entity.getDataRowButtonIndex();
		for (var i = 0; i < $$('tr.' + buildUIObj.Entity.name + 'Data').length; i++) {
			for (var btnCount = 0; btnCount < dataRowBtnIndex.length; btnCount++) {
				$$('button.' + buildUIObj.Entity.button[dataRowBtnIndex[btnCount]].column
						+ buildUIObj.Entity.name)[i].addEventListener('click',
						buildUIObj.Entity.button[dataRowBtnIndex[btnCount]].listener,
						true);
			}
		}
		//TODO
		 if (buildUIObj.Entity == Book) {
				$('close').addEventListener('click', Controller.closeBook, true);}
	}
	
	// addListener : function() {
	// if (buildUIObj.Entity == Bookstore) {
	// $('create').addEventListener('click', function() {
	// Controller.createEntity(buildUIObj.Entity)
	// }, true);
	// for (var i = 0; i < $$('tr.bookstoreData').length; i++) {
	// $$('button.open' + buildUIObj.Entity.name)[i].addEventListener(
	// 'click', function() {
	// Controller.openBookList()
	// }, true);
	// $$('button.update' + buildUIObj.Entity.name)[i]
	// .addEventListener('click', function() {
	// UiChangeMode.setEditView(buildUIObj.Entity)
	// }, true);
	// $$('button.delete' + buildUIObj.Entity.name)[i]
	// .addEventListener('click', function() {
	// Controller.deleteEntity(buildUIObj.Entity)
	// }, true);
	// }
	// } else if (buildUIObj.Entity == Book) {
	// $('createBook').addEventListener('click', function() {
	// Controller.createEntity(buildUIObj.Entity)
	// }, true);
	// $('close').addEventListener('click', Controller.closeBook, true);
	// for (var i = 0; i < $$('tr.bookData').length; i++) {
	// $$('button.update' + buildUIObj.Entity.name)[i]
	// .addEventListener('click', function() {
	// UiChangeMode.setEditView(buildUIObj.Entity)
	// }, true);
	// $$('button.delete' + buildUIObj.Entity.name)[i]
	// .addEventListener('click', function() {
	// Controller.deleteEntity(buildUIObj.Entity)
	// }, true);
	// }
	// }
	// }


}
