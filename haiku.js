//import { thisExpression } from "@babel/types";

export function Haiku(line1, line2, line3){
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
}



Haiku.prototype.checktype = function() {
  var line1Words = this.line1.split(" ");
  var line2Words = this.line2.split(" ");
  var line3Words = this.line3.split(" ");
  if ((line1Words.length === 5 )){
    console.log("line1 is good");
  } 
  if (line2Words.length === 7) {
    console.log("line2 is good");
  }
  if(line3Words.length === 5) {
    console.log("line3 is good");
  }
}