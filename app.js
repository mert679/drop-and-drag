//---------------------------------------------------------------------------
input={category1:"Frontend Technologies",category2:"Backend Technologies",
category1values:["HTML5","JQuery","CSS","JavaScript","Angular"],
category2values:["Java","Python","Database","Linux","node.js"]
}
//---------------------------------------------------------------------------
result={category1values:[],category2values:[]}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  //console.log(ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  //var score =parseInt(document.getElementById("score").value);
  //console.log(data);
  console.log(ev.target.id);
  result[ev.target.id].push(data);
}
function populate(){
  document.getElementById("category1").innerHTML="<strong>" + input.category1 + "</strong>";
  document.getElementById("category2").innerHTML="<strong>" + input.category2 + "</strong>";
  var j = document.getElementById("options");
  var x = input.category1values;
  var y = input.category2values;
  var bin = shuffle(x.concat(y));
  for(var i=0;i<bin.length;i++){
    var ele= '<button draggable="true" ondragstart="drag(event)" class="abc"';
    ele+=' id="';
    ele+=bin[i];
    ele+='">';
    ele+=bin[i] + '</button>';
    j.innerHTML+=ele;
  }

}
function contains(myarray,ele){
  if (myarray.indexOf(ele) > -1){
    return true;
  }
  else{
    return false;
  }
}
function getscore(){
  var score=0;
  var y = input.category1values;
  var x = result.category1values;
  for(var i=0;i<y.length;i++){
    if (contains(x,y[i])){
      score+=1;
    }
  }
  y = input.category2values;
  x = result.category2values;
  for(var i=0;i<y.length;i++){
    if (contains(x,y[i])){
      score+=1;
    }
  }
  score = (score /10) * 100;
  document.getElementById("score").value=score + " %";
}
