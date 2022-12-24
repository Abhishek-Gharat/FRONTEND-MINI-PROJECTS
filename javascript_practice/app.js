  // let tempInDegree =15;
  // if(tempInDegree <0){
  //   console.log("extremly cold outside");
  // }
  // else if(tempInDegree<13){
  //   console.log("cold outside");
  // }
  // else if(tempInDegree<25){
  //   console.log("weather is okey");
  // }
  // else if(tempInDegree<35){
  //   console.log("lets go for swim");
  // }
  // else if(tempInDegree <45){
  //   console.log("turn on Ac");
  // }
  // else
  // {
  //   console.log("too hot!!");
  // }



  // switch statement
  // let day=2;
  // switch(day){
  //   case 0:
  //     console.log("sunday");
  //     break;
  //     case 1:
  //       console.log("monday");
  //       break;
  //       case 2:
  //         console.log("tuesday");
  //         break;
  //         case 3:
  //           console.log("wednesday");
  //           break;
  //           case 4:
  //             console.log("Thrusday");
  //             break;
  // }


  // Array
  let fruits=["apple","mango","graps"]
  console.log(fruits);

  // push
  // fruits.push("banana");
  // console.log(fruits);


  // pop
  fruits.pop();
  console.log(fruits);

  // unshift
  fruits.unshift("banana");
  fruits.unshift("myfruits")
  console.log(fruits)

  // shift
  let removeFruit=fruits.shift();
  console.log(fruits);
  console.log("remove fruits is ",removeFruit)
  // primitive vs refference data types

// peimitive
  let num1 =6;
  let num2= num1;
  console.log("value of num1 is",num1);
  console.log("value of num2",num2);
  num1++;
// reffernce
// array
let array1=["item1","item2"];
let array2=array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("after pushing item 3 in array1");
console.log("array1",array1);
console.log("array2",array2);


