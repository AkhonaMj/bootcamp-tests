function countAllPaarl(regNum){
    var regNumbers = regNum.split(", ")
    var count = 0
    for(var i=0;i<regNumbers.length;i++){
      var forPaarlReg =regNumbers[i];
      if(forPaarlReg.startsWith("CJ")){
        count++
      }  
    }
    return count;
  }