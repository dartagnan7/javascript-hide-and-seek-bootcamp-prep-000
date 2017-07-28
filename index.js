function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target) {
  return document.querySelector('[class=target]');
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('[class=ranked-list]');
  for (var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = (n+parseInt(rankedList[i].innerHTML))
  }
}


/*function deepestChild() {
  var target = document.querySelector('div#grand-node');
  var listArray = [];
  while(target.children[0] !== undefined) {
    listArray.push(target.children[0]);
  }
  return listArray[listArray.length - 1];
}*/

function deepestChild() {
  var target = document.querySelector('div#grand-node');
  var deepestNode = target.children[0];
  while(typeof deepestNode.children[0] !== 'undefined') {
    deepestNode = deepestNode.children[0]
  }
  return deepestNode;
  }
