function takeANumber(line, customer){
  line.push(customer);
  var message = "Welcome, "+customer+". You are number "+line.length+" in line.";
  return message;
}
