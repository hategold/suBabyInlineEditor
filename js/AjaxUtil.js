/**
 * 和程式同名 
 * 不要有list那些FUNCTION
 */
var ajaxRequestObj = {
	name : "ajaxRequestObj",
	responseData : null,
	getXmlhttp : function() {
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xmlhttp;
	},
	makeAjaxRequest : function(url, func, params) {
		var xmlhttp = this.getXmlhttp();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				ajaxRequestObj.responseData = xmlhttp.responseText;
				func.call();
			}
		};
		xmlhttp.open("POST", url, true);
		xmlhttp.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded');
		xmlhttp.send(params);
	}
}


