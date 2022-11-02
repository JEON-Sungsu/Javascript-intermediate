const people = {
    name : "전성수",
    sayHi : function(name){
        console.log(`안녕 나는 ${this.name}`);
    }
}

// people.sayHi();

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

// sumData();

// for (let i = 1; i < 6; i++) { 
//     setTimeout(function() { 
//         console.log(i); }
//     , i*1000 ); 
// }

//함수 고정 파라미터 만들기
function 함수(a = 5, b = a * 2 ){
    console.log(a + b);
    return 10
}
// 함수(3);


//함수로 받은 파라미터를 배열로 만들기
function 어레이(...reset){
    return reset
}
  
var newArray = 어레이(1,2,3,4,5);
// console.log(newArray); 


//배열에서 가장 큰 숫자 뽑아내기 
const numbers = [1,2,3,4,5,6,1,2,3,4,6,7,9,0,2,2,1,10]

// console.log(Math.max(...numbers));


//string 뽑아서 글자순으로 정렬하기
function 정렬(a){
    let divide = [...a];
    let divideOrder = divide.sort();
    console.log(...divideOrder);

}

// 정렬('bear'); 

//데이터마이닝 기능 만들기
//내가 만든것
const result = {};
function 글자수체크(data){
    const getData = [...data];

    getData.forEach(function(item){
        if(Object.keys(result).includes(item)) {
            result[item] += 1;
        } else {
            result[item] = 1;
        }
    })
    console.log(result);
}

글자수체크('aaabbc');

//데이터마이닝 답안
function 글자수체크2(data){
    const dataObj = {};
    [...data].forEach(function(i){
        if (dataObj[i] > 0) {
            dataObj[i]++
        } else {
            dataObj[i] = 1;
        }
    })

    console.log(dataObj);
}

글자수체크2('sglkasp')