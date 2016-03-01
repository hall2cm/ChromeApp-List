
window.onload=function(){
(function() {
  
  var valueIn = document.getElementById("input1"),
      valueOut = document.getElementById("value-Out"),
      form = document.querySelector("form");
      
  function valueChanged(newValue) {
    valueOut.innerText = newValue;
  }
  
  document.getElementById("check1").addEventListener("click", function(){
    var value = valueIn.value;
    
    chrome.storage.sync.set({
      myValue: value,
      timestamp:Date.now()
    }, function() {
      console.log("Value set:" + value);
    });
    
    chrome.storage.onChanged.addListener(function(changes, namespace){
      
      if(changes.myValue) {
        valueChanged(changes.myValue.newValue);
      }
      
    });
    
  });
  
  chrome.storage.sync.get("myValue", function(result) {
    valueChanged(result.myValue);
  });
  
})();
};