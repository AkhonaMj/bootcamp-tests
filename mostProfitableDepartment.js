function mostProfitableDepartment(departments){
    const depMap = {};
    
    for(var i in departments){
      const dep = departments[i];
      if (depMap[dep.department] === undefined) {
        depMap[dep.department] = 0;
      }  else {
      depMap[dep.department] += dep.sales
      }
    
    }
       console.log(depMap)
  
      var currentMaxSales = 0;
      var currentDepartment = "";
      for(var depType in depMap){
    
      if(depMap[depType] > currentMaxSales){
        currentMaxSales = depMap[depType]
        currentDepartment = depType
        
       // console.log(currentMaxSales)
            }
      }
    //console.log(currentDepartment)
   return currentDepartment;
  }