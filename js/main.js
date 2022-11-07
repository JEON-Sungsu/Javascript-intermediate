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

var 이름1 = {name : "김"};

function Student(name,age){
    this.name = name; //새로 생성되는 오브젝트에 name을 넣어줘
    this.age = age; //새로 생성되는 오브젝트에 age를 넣어줘
    this.sayHi = function(){
        console.log('안녕하세요 ' + this.name + ' 입니다.')
    }
}

new Student("kim",17); //{name: "kim", age: 15,} 변수에 담아서 이렇게 호출해야된다.
new Student("park", 15);


function Products(product,price){
    this.name = product;
    this.price = price;
    this.vat = function(){
        return this.price * 1.1
    }
}

const sale = new Products('shirts',50000);
const sale2 = new Products('pants',35000);

console.log(sale.vat());
console.log(sale2);


// Constructor 연습문제 
function StudentInfo(name,age){
    this.name = name;
    this.age = age;
    this.speech = function(){
        console.log('하이 나는 ' + name +'이고 ' + age + '살 이야')
    }
}

const cs = new StudentInfo("철수",15);
const yh = new StudentInfo("영희",15);
const zg = new StudentInfo("짱구",15);

cs.speech();

cs.__proto__.name = "테스트";
console.log(StudentInfo.name)

//모든 배열에 3을 지워주는 함수를 추가하기
const arr123 = [1,2,3];

//Array는 모든 배열의 부모가 되는 요소임.
Array.prototype.remove3 = function(){
    for (let i = 0; i < this.length; i++){
        if(this[i] === 3) {
            this.splice(i,1);
        }
    }
}
arr123.remove3()


const 부모 = {name : "JEON", age : 50};
const 자식 = Object.create(부모)
자식.name = "KIM";
console.log(부모.name);
console.log(자식.name);


class 부모2 {
    constructor(){
        this.name="JEON";
        this.testFunction = function(){
            console.log('hi')
        }
    }

     test12(){
        console.log('이건 프로토타입 함수임')
     }
}

const 자식2 = new 부모2();

자식2.test12();

class 할아버지 {
    constructor(name){
        this.lastName = "Kim";
        this.firstName = name;
        this.sayHi();
    }
    sayHi(){
        console.log('안녕');
    }
}

class 아버지 extends 할아버지 {
    constructor(name){
        super(name)
        this.나이 = 50;
    }
}

new 할아버지();

//클래스 사용과 extends 사용법 연습
class dogs {
    constructor(type,color){
        this.type = type;
        this.color = color;
    }
}

let dog1 = new dogs('말티즈','white');
let dog2 = new dogs('토이푸들','brown');

class cats extends dogs {
    constructor(type,color,age){
        super(type,color);
        this.age = age
    }

    //extends 에서 상속받은 함수 말고, 본인의 함수를 사용하기 위해서는 return이 필요하다.
    nextAge(){
        return this.age + 1;
    }
}

let cat1 = new cats("코숏","white",3);

class Unit{
    constructor(){
        this.attack = 5;
        this.life = 100;
    }

    get battlePoint(){
        return this.attack + this.life;
    }

    set healing(qtt){
        this.life += qtt;
    }
}

let unit1 = new Unit();

unit1.battlePoint;
unit1.healing = 50;

console.log(unit1)

const data = {
    odd : [],
    even: [],
    setter : function(...a){
        a.forEach((item) => {
            if (item % 2 == 0){
                this.even.push(item);
            } else {
                this.odd.push(item);
            }
        })
    },
    
    getter : function(a,b){
        return [...this.odd, ...this.even].sort(function(a,b){
            return a - b;
        })
    }
}

data.setter(1,2,3,4);
data.getter(this.odd, this.even);

// 지출계산기 
function 돈계산(총수입,...고지비){
    let 잔액 = 0;
    let 급여 = 총수입;
    const 고정지출비 = 고지비;
    
    고정지출비.forEach(function(item){
        급여 -= item;
        잔액 = 급여;
    })
    console.log(잔액);
}

돈계산(1940000,550000,100000,800000,100000,14400);


//Distructuring 연습문제 
let 신체정보 = {
    body: {
      height: 190,
      weight: 70
    },
    size: ["상의 Large", "바지 30인치"],
  };

  let {
    body: {
      height, 
      weight
    },
    size: [ 상의, 하의 ]
  } = 신체정보;

  //Promise 연습문제
  const _img = document.querySelector('#test');
  const testPr = new Promise(function(resolve,reject){
    _img.addEventListener('load',function(){
        resolve();
    })
    _img.addEventListener('error',function(){
        reject()
    })
  })


  testPr.then(function(){
    console.log("성공");
  }).catch(function(){
    console.log("실패");
  })


//첫번쨰 ajax 호출시 성공하면 두번쨰 ajax 호출해서 출력하기
const testPr2 = new Promise(function(ok,fail){
    $.ajax({
        url:"https://codingapple1.github.io/hello.txt",
        method: 'GET',
        success: function(data){
            ok(data);
        },
        error:function(data){
            fail();
        }
    })
})

testPr2.then(function(data){
    console.log(data)
    const testPr3 = new Promise(function(ok,fail){
        $.get('https://codingapple1.github.io/hello2.txt').done(function(data){
            ok(data);
        })
    })
    //리턴을 써줘야한다.
    return testPr3;
}).then(function(data){
    console.log(data)
})
.catch(function(){
    console.log("실패했습니다.")
})