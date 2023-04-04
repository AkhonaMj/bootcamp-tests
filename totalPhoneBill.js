function totalPhoneBill(data){
    var phoneLog = data.split(', ');
    var total = 0;
    
    for(var i = 0;i < phoneLog.length;i++){ 
      var phoneBill = phoneLog[i];
      if(phoneBill === "call"){
        total += 2.75;
     }else if(phoneBill === "sms"){
        total += 0.65;
    }
   }
       console.log(total)
  
    return "R" + total.toFixed(2);
  }
    
  