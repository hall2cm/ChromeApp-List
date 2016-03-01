(function () {
	'use strict';
	
	console.log("appjs executed");

	/**
	 * Sets up a brand new Todo list.
	 *
	 * @param {string} name The name of your new to do list.
	 */
	function Todo(name) {
		this.storage = new app.Store(name);
		/*this.model = new app.Model(this.storage);
		this.view = new app.View();
		this.controller = new app.Controller(this.model, this.view);*/
	}

	var todo = new Todo('todos-test');
	
})();