/*jshint eqeqeq:false */
(function (window) {
  'use strict';

  /**
   * Creates a new client side storage object and will create an empty
   * collection if no collection already exists.
   *
   * @param {string} name The name of our DB we want to use
   * @param {function} callback Our fake DB uses callbacks because in
   * real life you probably would be making AJAX calls
   */
  function Store(name, callback) {
    var data;
    var dbName;

    callback = callback || function () {};

    dbName = this._dbName = name;
    console.log(dbName);

    chrome.storage.local.get(dbName, function(storage) {
      if ( dbName in storage ) {
        callback.call(this, storage[dbName].todos);
      } else {
        storage = {};
        storage[dbName] = { todos: [] };
        chrome.storage.local.set( storage, function() {
          callback.call(this, storage[dbName].todos);
        }.bind(this));
      }
      console.log(storage);
    }.bind(this));
    
  }
  
  /**
   * Will save the given data to the DB. If no item exists it will create a new
   * item, otherwise it'll simply update an existing item's properties
   *
   * @param {number} id An optional param to enter an ID of an item to update
   * @param {object} data The data to save back into the DB
   * @param {function} callback The callback to fire after saving
   */
  
  Store.prototype.save = function (id, updateData, callback) {
    
    chrome.storage.local.get(this._dbName, function(storage) {
      console.log("store prototype executed");
      var data = storage[this._dbName];
      var todos = data.todos;

      callback = callback || function () {};

      // If an ID was actually given, find the item and update each property
      if (typeof id !== 'object'  || Array.isArray(id) ) {
        var ids = [].concat( id );
        ids.forEach(function(id) {
          for (var i = 0; i < todos.length; i++) {
            if (todos[i].id == id) {
              for (var x in updateData) {
                todos[i][x] = updateData[x];
              }
            }
          }
        });

        chrome.storage.local.set(storage, function() {
          chrome.storage.local.get(this._dbName, function(storage) {
            callback.call(this, storage[this._dbName].todos);
          }.bind(this));
        }.bind(this));

      } else {
        callback = updateData;

        updateData = id;

        // Generate an ID
        updateData.id = new Date().getTime();

        todos.push(updateData);
        chrome.storage.local.set(storage, function() {
          callback.call(this, [updateData]);
        }.bind(this));

      }
    }.bind(this));
  };
  
    // Export to window
    window.app.Store = Store;
})(window);