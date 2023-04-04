function countAllFromTown(regNum,location){
    var allRegNum = regNum.split(",")
    var count = 0
    for(var i=0;i<allRegNum.length;i++){
      var forTownReg = allRegNum[i].trim();
      if(forTownReg.includes(location))
      count++
  }
    return count;
  }