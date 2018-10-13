function takeANumber(line, customer){
  line.push(customer);
  var message = "Welcome, "+customer+". You are number "+line.length+" in line.";
  return message;
}
function nowServing(line){
  if (line.size>0){
    var serving = line.shift();
    return serving;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}
function currentLine(line){
  var message = "The line is currently:";
  for (let i=0; i<line.length; i++){
    message += i+". "+line[i];
  }
  return message;
}
