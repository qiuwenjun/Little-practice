    //模拟的sort排序
    Array.prototype.sort=function(callBack){
      let This=this;
      callBack=callBack&&callBack(1,2)!=undefined? callBack:true;        //如果有回调函数，就按回调函数的模式来，否则默认就是从小到大
      for(let i=0;i<This.length;i++){
        for(let l=i+1;l<This.length;l++){
          if(typeof callBack==='boolean'||(This[i]-This[l])===callBack(This[i],This[l])){          //从小到大排序
            if(This[i] > This[l]){
              console.log(1);
              let value=This.splice(l,1,This[i]);
              This.splice(i,1,value[0]);
            }
          }else if((This[l] - This[i]) === callBack(This[i], This[l])){               //从大到小
            if (This[i] < This[l]) {
              console.log(2);
              let value = This.splice(l, 1, This[i]);
              This.splice(i, 1, value[0]);
            }
          }else{                    //随机排序
            let value=callBack(This[i], This[l]);
            if(Math.sign(value)==-1){
              console.log(3);
              let value = This.splice(l, 1, This[i]);
              This.splice(i, 1, value[0]);
            }
          }
        }
      }
      return This;
    };
    let arr = [1, 2, 3, 9, 8, 4, 5, 5];
    arr.sort((a,b)=>{
      return b-a;
    })
//数组降维,降维打击
Array.prototype.flat = function (index = 1) {
  return flat(this);
  function flat(data, l = 0) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (Array.isArray(data[i]) && l < index) {
        arr = arr.concat(flat(data[i], l + 1));
      } else {
        arr.push(data[i]);
      }
    }
    return arr;
  };
};
//派生在降维
Array.prototype.flatMap = function (callBack, This, index = 1) {
  if (!(callBack instanceof Function)) {
    return new TypeError('请传回调函数!!!');
  }
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callBack.call(This, this[i], i, this));
  };
  return flat(arr);
  function flat(data, l = 0) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (Array.isArray(data[i]) && l < index) {
        arr = arr.concat(flat(data[i], l + 1))
      } else {
        arr.push(data[i]);
      }
    }
    return arr;
  }
}
Number.parseInt=function(str){
  str=str.toString();
 let num=str.match(/^\d+/);
 return num?Number(num[0]):NaN;
}
Number.parseFloat=function(str){
  str=str.toString();
 let num=str.match(/^\d+(?:\.\d+)?/);
 return num?Number(num[0]):NaN;
}
Number.parseInt=function(str){
  let index=1;
  let val;
  str=str.toString();
  while(str&&!isNaN(str.substr(0,index))){
      val=str.substr(0,index);
      if(val[val.length-1]=='.'){
          val=val.substring(0,index-1);
          break;
      }else if(index==str.length){
          break;
      }
      index++;
  }
  return val?Number(val):NaN;
}
Number.parseFloat=function(str){
  let index=1;
  let val;
  str=str.toString();
  while(str&&!isNaN(str.substr(0,index))){
      val=str.substr(0,index);
      if(index==str.length){
          break;
      }
      index++;
  }
  if(val){
      if(val[val.length-1]=='.') val=val.substring(0,val.length-1);
      return Number(val);
  }else{
      return NaN;
  }
}
Number.parseInt=function(str){
  let num='';
  str=str.toString();
  for(let i=0;i<str.length;i++){
      if(!isNaN(str[i])){
          num+=str[i];
      }else{
          break;
      }
  }
  return num?Number(num):NaN;
}
Number.parseFloat=function(str){
  let num='';
  let flag=true;
  str=str.toString();
  for(let i=0;i<str.length;i++){
      if(!isNaN(str[i])||str[i]==='.'&&flag){
          if(str[i]==='.') flag=false;
          num+=str[i];
      }else{
          break;
      }
  }
  if(num){
      if(num[num.length-1]=='.') num=num.substring(0,num.length-1);
      return Number(num);
  }else{
      return NaN;
  }
}