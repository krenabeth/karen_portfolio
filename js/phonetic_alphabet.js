function convertABC() {

var name = document.getElementById("input").value;
name = name.toUpperCase();

var i = 0;
var word;
var msg = 'Your phonetic alphabet translation: ';

while (i < name.length) {
  var letter = name.charAt(i);
    if (letter === "A") {
      word = "Alpha";
    } else if (letter === "B") {
      word = "Bravo";
    } else if (letter === "C") {
      word = "Charlie";
    } else if (letter === "D") {
      word = "Delta";
    } else if (letter === "E") {
      word = "Echo";
    } else if (letter === "F") {
      word = "Foxtrot";
    } else if (letter === "G") {
      word = "Golf";
    } else if (letter === "H") {
      word = "Hotel";
    } else if (letter === "I") {
      word = "India";
    } else if (letter === "J") {
      word = "Juliett";
    } else if (letter === "K") {
      word = "Kilo";
     } else if (letter === "L") {
      word = "Lima";
    } else if (letter === "M") {
      word = "Mike";
    } else if (letter === "N") {
      word = "November";
    } else if (letter === "O") {
      word = "Oscar";
    } else if (letter === "P") {
      word = "Papa";
    } else if (letter === "Q") {
      word = "Quebec";
    } else if (letter === "R") {
      word = "Romeo";
    } else if (letter === "S") {
      word = "Sierra";
    } else if (letter === "T") {
      word = "Tango";
    } else if (letter === "U") {
      word = "Uniform";
    } else if (letter === "V") {
      word = "Victor";
    } else if (letter === "W") {
      word = "Whiskey";
    } else if (letter === "X") {
      word = "Xray";
    } else if (letter === "Y") {
      word = "Yankee";
    } else {
      word = "Zulu";
    }
  msg += word + ' '; i++;
}
// get rid of last space on answer
 document.getElementById("answer").innerHTML = msg;
}
