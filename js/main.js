const people = {
    name : "전성수",
    sayHi : function(name){
        console.log(`안녕 나는 ${this.name}`);
    }
}

people.sayHi();

const arr = {
    data:[1,2,3,4,5],
}

function sumData(){
    let sumDt = 0;
    arr.data.forEach(function(item){
        sumDt += item;
    })
    console.log(sumDt)
}

sumData();

for (let i = 1; i < 6; i++) { 
    setTimeout(function() { 
        console.log(i); }
    , i*1000 ); 
  }

  function 함수(a = 5, b = a * 2 ){
    console.log(a + b);
    return 10
  }
  함수(3);