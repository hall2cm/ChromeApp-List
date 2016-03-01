var itemNumber = 2;

function addFunction() {
  var form = document.getElementById("inputSet");
  
  var div = document.createElement("DIV");
  var divText = "group" + itemNumber;
  div.setAttribute("id",divText);
  form.appendChild(div);
  
  var input = document.createElement("INPUT");
  var idNum = itemNumber += 1;
  var inputText = "input" + itemNumber;
  input.setAttribute("type","text");
  input.setAttribute("size","60");
  input.setAttribute("id",inputText);
  input.setAttribute("class","input");
  input.setAttribute("value",inputText);
  div.appendChild(input);
  
  var checkBox = document.createElement("INPUT");
  var checkText = "check" + itemNumber;
  checkBox.setAttribute("type","checkbox");
  checkBox.setAttribute("id",checkText);
  document.getElementById("two").innerHTML = checkText;
  checkBox.setAttribute("class","checkBox");
  /*checkBox.addEventListener('click', masterClickHandler, false);*/
  div.appendChild(checkBox);
}

/*function masterClickHandler(){
  var vari = this.id;
  var varLength = vari.length;
  var idLength = 5;
  var num = vari.slice(idLength,varLength);
  var inputVar = "input" + num
  var isDisabled = document.getElementById(inputVar).disabled
  if (isDisabled){
    document.getElementById(inputVar).disabled = false;
  }else{
    document.getElementById(inputVar).disabled = true;
  };
};*/

function testFunction(){
  var vari = "input3";
  var vari1 = "input30";
  var num = vari1.slice(5,7);
  document.getElementById("testButton").innerHTML = num;
}

$(document).ready(function() {
$(document.body).on("click",".checkBox",function(){
  var thisItem = this.id;
  var varLength = thisItem.length;
  var idLength = 5;
  var numLength = thisItem.slice(idLength,varLength);
  var inputVar = "input" + numLength;
  var inputClassVar = "#" + inputVar;
  var checkClassVar = "#" + thisItem;
  var isDisabled = document.getElementById(inputVar).disabled;
  document.getElementById("two").innerHTML = inputVar;
  if(isDisabled){
    document.getElementById(inputVar).disabled= false;
    $(inputClassVar).fadeTo("slow",1);
    $(checkClassVar).fadeTo("slow",1);
  }else{
    document.getElementById(inputVar).disabled= true;
    $(inputClassVar).fadeTo("slow",0.5);
    $(checkClassVar).fadeTo("slow",0.5);
  }
});
});

$(document).ready(function() {
  $(document.body).on("dblclick",".input",function(){
    var thisItem = this.id;
    var thisItemClass = "#" + thisItem;
    if (document.getElementById(thisItem).disabled){
      
    }else{
      var varLength = thisItem.length;
      var idLength = 5;
      var numLength = thisItem.slice(idLength,varLength);
      var inputVar = "dropDownDiv" + numLength;
      var inputIdVar = "#" + inputVar;
      var has = $(inputIdVar).parent().hasClass("inputFieldsetToggle");
      document.getElementById("two").innerHTML = has;
      if (has){
        $(inputIdVar).slideToggle("slow", function(){
        $(inputIdVar).parent().toggleClass("inputFieldsetToggle"); 
        $(thisItemClass).toggleClass("inputToggle");  
        });
      }else{
        $(inputIdVar).parent().toggleClass("inputFieldsetToggle");
        $(inputIdVar).slideToggle("slow");
        $(thisItemClass).toggleClass("inputToggle");  
      }
    }
  });
});

/*$("#testButton").click(function(){
  /*$("#input1").parent().toggleClass("inputFieldsetToggle");
  $("#dropDownDiv1").slideToggle("slow");
  $("#input1").parent().animate({
    height:'30em',
    width: '50em'
  });
});*/

$(document).ready(function() {
 $(document.body).on("click",".reoccurCheckBox",function(){
    var divId = $(this).siblings("div").attr("id");
    var divId1 = "#" + divId;
    $(divId1).slideToggle("fast");    
    document.getElementById("two").innerHTML = divId;
  });
});




$(document).ready(function() {
  $(document.body).on("click","#testButton", function(){
  var widthVar = $("#inputSet").width() / $("#mainForm").width() * 100;
  document.getElementById("two").innerHTML = widthVar;
    if (widthVar > '90'){
      $("#leftForm").animate({
      width: '40%'}, 350);
      $("#inputSet").animate({
        width: '60%'}, 350);
    }else {
      $("#leftForm").animate({
        width: '2%'},350);
      $("#inputSet").animate({
        width: '98%'},350);
    }
  });
});

/*$(".checkBox").click(function(){
  $("#input1").fadeOut("slow");
});*/

$(document).ready(function() {
  var toggle = 0;
  $(document.body).on("click","#list1", function(){
    var display = $("#inputSet").css('display');
    if(toggle === 0){
      $("#inputSet").toggleClass("inputSetToggle") ;
      toggle = 1;
    }else{
      $("#inputSetToggle").toggleClass("inputSet") ;
      toggle = 0;
    }
  });
});