function getFirstSelector(selector){
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.querySelector(".target");
};

function deepestChild(){
  var gNode = document.querySelector("div#grand-node");
  return gNode.lastElementChild;
};

function increaseRankBy(n){
    var lis = document.querySelectorAll("ul.ranked-list li");

    for(var i=0; i<lis.length; i++){
        var num = parseInt(lis[i].innerHTML);
        num+=n;
        var plusNum = num.toString();
        lis[i].innerHTML = plusNum;
    }
}
