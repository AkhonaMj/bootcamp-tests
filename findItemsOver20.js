function findItemsOver20(itemList){
    const maxItem = [];
    for(var i=0; i<itemList.length; i++){
     const list = itemList[i]
     if(list.qty > 20){
       maxItem.push(list)
     }
    }
      return maxItem;
    }