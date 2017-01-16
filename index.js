function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  var newStr = "";
  for(var i = 0; i < musicians.length; i++) {
    newStr = `${musicians[i]} plays ${instruments[i]}`;
    newArr.push(newStr);
  }
  return newArr;
}

function johnLennonFacts(array) {
  var newArr = [];
  var i = 0;
  while (i < array.length) {
    newArr.push(`${array[i]}!!!`);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(n){
  var newArr = [];
  var i = 0;
  do {
    newArr.push("I love the Beatles!");
    i++;
  } while ( i <= n && n < 15 );
  return newArr;
}
