# 자바스크립트 심화 강의 내용 정리

## this keyword 

<b>this 는 3~4가지 뜻이 있음.</b>

1. this 값이 window를 가리킬때 
    - 아무것도 없이 그냥 this 만 사용할 때
    - 함수 정의할때, 함수 안에서 그냥 this만 쓸 때.
    - 이 window가 뭐냐면, 우리가 전역으로 변수나 함수같은것을 만들면 자동으로 브라우저에서 이것들을 {} 객체안에 넣어주게 된다. 따로 파일에 {} 넣지 않지만, 저 안에 우리가 전역으로 만든것들이 들어가있다고 보면 되는거고, window 는 저것을 지칭하게 되는것이다. (글로벌 오브젝트라고도 한다)
2. 객체안에서의 this
    - 객체 안에서 메소드를 쓸때 이때의 this는 해당 함수를 포함하고 있는 object 자체를 의미하게된다.
    ```
    let obj = {
        함수 : function() {
            console.log(this)
        }
    }

    obj.함수(); //객체 함수 호출방법 
    ```
    - 객체 안에 객체를 넣었을 때
    ```
    let obj = {
        data : {
            함수: function(){
                console.log(this)
            }
        }
    }

    obj.data.함수(); // data 객체 자체를 반환한다. 
    ```

    - 객체 안에서 함수를 쓸 때는 
    ```
    let obj = {
        data : 함수명(){

        }
    }

    function 키워드를 안써줘도 된다. 그냥 함수 이름만 지어도 됨.
    ```

    - Arrow function 안에서의 this 는 window를 가리킴.
    - Arrow function은 바로 직전 상위코드에서 사용된 this(어디에 붙어있는 this던 간에)를 불러오게 된다. 상위 코드에서 this가 없을 경우에는 최상위인 window를 가리키게 된다.

3. Constructor ( 오브젝트 생성 기계)
    - 함수로 만드는 오브젝트 생성 기계 
    ```
    function test(){
        this.이름 = "kim",
    }

    함수안에서 this 를 사용하면 새로 생성되는 객체를 뜻함. 그리고 이것을 instance 라고 한다.

    const obj = new test(); //이렇게 하면 오브젝트가 생성이됨.
    ```

4. 이벤트 리쓰너 
    - this = e.currentTarget 과 동일하다. 지금 이벤트가 동작하고 있는 요소를 지칭해준다.

5. 예외 케이스
    - 콜백 함수 -> 1번케이스가 나온다. window가 받는다. 
    ```
    button.addEventListener('click',function(){
        var arr = [1,2,3];

        arr.forEach(function(item){
            console.log(this); //window {~~~}
        })
    })
    ```
    <br><br>
    
    - 객체내부의 콜백함수에서 this = window{~~~} 가 된다.
    - 객체내부의 콜백말고 함수에서 this = obj 출력
    - 객체내부의 콜백자리에 에로우 펑션을 쓰게 된다면 바로 직전에 사용된 this를 출력한다. 아래의 구조에서 에로우 펑션에 this 를 사용하게 되면, 그 위의 콘솔로그에 있는 this를 뽑아오게 되고 //obj 를 출력하게 된다. 
    - 객체내부 함수의 콜백함수를 화살표 함수로 쓰게 된다면, 그안에서의 this 는 객체를 가르키게 된다. 
    ```
    let obj = {
        name : "kim",
        age : 34,
        gender : ['male', 'female'],
        ft : function() {
            console.log(this) //obj 출력
            obj.gender.forEach(function(item){
                console.log(this); //window 출력
            })

            obj.gender.forEach((item) => {
                console.log(this); //obj 출력
            })
        }
    }

    obj.ft();
    ```




## 'use strict'

- 스크립트 파일 최상단에 'use strict'를 적어두면 아주 엄격한 스크립트만 사용해야한다.

<br><br>

## Arrow Function

1. 함수를 만드는 방법
    - function() {} //기본
    - const something = function(){} //변수에 담아서
    - () => {} //에로우 펑션
2. 에로우 펑션의 장점 
    - 입출력용 펑션을 만들때 보기 쉬움
    - 파라미터가 1개밖에 없을 때는 소괄호를 생략할 수 있다.
    ```
    a = > {return a + 10}
    ```
    - 리턴도 한줄이면 중괄호도 생략 가능
    ```
    a = >  a + 10
    ```
3. 사용 예시 
    - 배열 each문에서의 콜백함수
    ```
    const arr =[1,2,3,4,5]

    arr.forEach((a) => {

    })
    ```
    - 이벤트 리스너에서으 콜백함수
    - 객체내 메소드에서
    - 객체내 메소드의 콜백함수로 

<br><br>

## 변수

- 변수는 자료를 임시 저장하기 위해 사용하는 것임
- var, let, const 3가지 키워드가 있다.
- 변수는 선언,할당,범위 등의 특성이 있다.
    ```
    let 변수 //선언 = 키워드를 사용해서 변수를 만들어준다.
    let 변수 = "저장할자료내용" //할당
    변수 = "바꿀 자료 내용" //재할당 
    ```
- var 는 재선언, 재할당 이 가능하다. 
- let 은 변수에 할당된 값을 변경할 수 있다. 재선언은 불가.
- const 는 변수에 할당된 값을 변경할 수 없다. 재선언도 불가.
    - const로 객체나 배열은 내부 자료의 값을 변경하는것은 괜찮다. 다만 오브젝트를 배열로, 배열을 오브젝트로 등 큰 틀을 바꾸진 못한다.
    - 아에 변경이 불가능한 오브젝트를 만들고 싶으면
    ```
    const obj = {
        이름 : "전성수"
    }

    Object.freeze(obj) //obj의 값들을 변경할 수 없음.
    ```
- 모든 변수는 활용이 가능한 범위가 존재한다.
    - 함수,if문 기타 등등의 내부에서 선언한 변수는 함수 내부에서만 사용할 수 있다.
    ```
    function 함수(){
        var 이름 = "전성수"
    }

    console.log(이름) // 에러남. 함수 밖에서 함수 내부의 변수를 호출해서.
    ```
    - let,const 의 범위는 모든 중괄호 내이다.
- 변수 Hoisting (호이스팅) 현상
    - 변수의 선언을 변수 범위 맨 위로 끌고오는현상(페이지의 제일 하단에 선언하더라도, 제일 상단에서 선언한것처럼 나타내준다)
    - 단, 선언만 호이스팅되지, 할당된 값들이 호이스팅되지는 않는다.
    - 원래 자바스크립트는 제일 위에서 아래로 쭉 읽어나간다. 그래서 아래쪽에 선언한 변수를 위에서 사용하려면 에러가 나는게 정상이다.
    ```
    console.log(변수) //에러

    let 변수 = "Hi"
    ```
    - 하지만 var 키워드를 사용해서 변수를 선언하면, 위의 상황에서도 console.log 가 잘 출력된다. 이게 호이스팅 현상이다. 

- 변수를 여러개 만들기
    - var 나이 = 20, 이름 = '전성수', 성별; (var,let,const 다됨)

- 전역변수
    - 모든곳에서 쓸 수 있는 변수. 
    - 스크립트 파일 제일 바깥에 선언된 변수임.
    - 전역변수의 반대말은 지역변수이다. 지역변수는 함수든 뭐든 {}안에 선언된 변수이다. 
    - 전역변수를 만들때 window.변수명 = "값"; 이렇게 많이 사용한다. 

- for 문에서 var 키워드로 setTimeout을 여러번 돌릴때 동작안하는 이유
    ```
    for(var i = 1; i < 5; i++){
        setTimeout(function(){
            console.log(i);
        },i * 1000);
    }

    let 으로 바꾸면 잘 동작함.
    var 가 안되는 이유는, setTimeout은 코드가 실행되고 몇초 후에 진행이 되는데, for문은 코드가 돌자마자 0.몇초반에 정해진 횟수를 다 돌아버린다. 이후에 우리 눈에는 따로 보이지 않지만, var i = 5; 라는 형태로 for문 외부에 전역변수의 형태로 따로 저장되어진다. 그래서 setTimeout 에 있는 i 는 외부에 전역변수로 선언된것처럼 된 i 를 가져와서 계속해서 5만 반복해서 출력하게 된다. 
    let 은 중괄호 밖으로 나가지 않음으로 잘됨 솔직히 잘 이해가 안가긴 하는데 그냥 그런가보다 함.
    ```


## template literal
- 문자열
- 백틱을 사용하는 ES6문법중 하나임. 
- 장점은 백틱안에서 문자를 작성할때는 엔터키를 적용시킬 수 있고, ${}를 통해 변수같은것을 집어넣기 편해짐. 
- 원래 스크립트에서 변수나 문자를 합치려면 + 기호를 사용해서 문자사용했었음
```
const 문자 = '안녕하세요' + 변수 + '입니다'; //기존
const 문자 = `안녕하세요 ${변수}입니다.`;  //백틱사용

const html = '<div>' +
                '<span>' +
                '</span>' +
            '</div>'
//기존

const html = `<div>
                <span>
                </span>
            </div>`
//백틱사용
```
- tagged Literal (별로 사용되진않고, 중요하진않음. 이런게 있다~)
    - 함수를 호출할때, 소괄호 대신 백틱을 넣어서 사용해도 된다.
    ```
    let 변수 = "전성수"
    let 문자 = `하이 ${변수}입니다.`
    function 해체분석기(문자들,변수들){
        console.log(문자들);
        console.log(변수들);
    }

    해체분석기`하이 ${변수}입니다.`
    //["하이","입니다"]
    //전성수 
    ```
    - 문자를 해체해서 나눌 수 있음.
    - 함수호출할때 백틱을 사용해서 위의 내용을 넣으면, 첫번째 파라미터로 백틱내용중 문자들을 배열에 담아서 반환하고, 두번쨰 파라미터에서 해당 백틱안 내용중 변수가 있으면 그걸 뽑아서 보여준다. 

## Spread Operator
- ... 쩜 세개를 사용하는 연산자이다. 뭔가를 쭉 늘어놓고싶을때 사용하는 연산자이다.
- 용도
    1. Array에 붙이면 대괄호를 제거해준다.
        ```
        const arr = [1,2,3,4,5]

        console.log(...arr) // 1,2,3,4,5 
        ```
    2. 문자를 나눠준다
        ```
        const 문자 = "hello"

        console.log(...문자) //h e l l o
        => console.log('h','e','l','l','o');
        ```
        - 참고로 문자는 배열처럼 인덱싱이 가능함
        ```
        console.log(문자[1]) //e
        ```

- 어디에다 쓸수있냐 (배열,객체를 합치거나 복사할때 쓴다.)
```
const a = [1,2,3];
const b = [4,5];

const c = [...a]; 
const d = [...a, ...b];
console.log(c) // [1,2,3] //어레이 복사
console.log(d) // [1,2,3,4,5] //어레이 합치기
```

- 배열을 Deep copy 할때 굉장히 유용하고 많이 사용되어진다. 
- Deep copy 란? (배열,객체 합치기)
    - 일반적으로 배열을 복사할때
    ```
    const a = [1,2,3];
    const b = a; 

    이렇게 사용하는데, 만약 이렇게 했을때 만약 a 의 값을 변경하면 b도 같이 변경되어버린다.
    b 를 다른용도로 사용하려고 했는데 이러면 문제가 되는거지.

    그래서

    const b = [...a];

    로 spread operator 를 사용해야 된다. 

    //합치기
    const obj1 = {a : 1, b : 2,};
    const obj2 = {...obj1, c : 3};

    console.log(obj2)// {a : 1, b : 2, c : 3};

    //복사하기
    const obj2 = {...obj1};

    ```
    - 만약 오브젝트를 합칠때, 오브젝트내에 같은 값이 있으면 같은 값 중 뒤에있는것만 남기고 앞에있는건 삭제해버림
    ```
    const obj1 = {a : 1, b : 2,};
    const obj2 = {...obj1, a : 3};

    console.log(obj2)// {a : 3, b : 2};
    ```

- spread operator 는 항상 중괄호, 대괄호 안에서만 사용가능하다. 밖에다 그냥 사용하면 적용 안된다.

- spread operator 함수의 파라미터에 사용할때
```
const obj1 = {a : 1, b : 2,};
const obj2 = {...obj1, c : 3};

function 더하기(a,b,c){
    return a+b+c;
}

const arr = [1,2,3]
더하기(arr[0],arr[1],arr[2])

일반적으로 위 처럼 사용해야되는게 일반적이다. 
그래서 예전에는

더하기.apply(undefined, arr);
이렇게 사용했었다. 

다만 ... 을 사용하게 되면 
더하기(...arr);
이렇게만 사용해주면 된다. ...을 사용하면 대괄호를 벗기니 출력하게되면 1,2,3 이 남게되기 떄문에 자동으로 파라미터에 알맞게 들어감.

```

- apply함수 (중요하진 않지만 알고있으면 된다)
    - 옛날 스크립트 메서드이다.
    - 

## 함수 업그레이드 
- JS 특징이 함수에 파라미터를 두개 넣어놔도 호출할떄 파라미터 1개만 넣어도 에러가 나지 않음. 
- 함수의 default 파라미터
    - 함수에 파라미터를 2개넣어놔도, 호출할때 1개만 넣는다면 기본적으로 나머지 1개를 자동으로 채워줄 수 있는 방식
    - 파라미터 자리에 = 으로 구분해서 값을 넣어두면, 호출시 두번째 파라미터를 입력안하면 자동으로 10을 b에 넣어주게 된다.
        - 연산자 사용 가능
        - 또다른 함수를 넣을 수 도 있음
    ```
    function sum(a,b = 10){
        console.log(a + b)
    }

    sum(1) // 11

    디폴트 파라미터에는 연산자를 써서 넣을 수 도 있음.

    function sum(a,b = 2 * a){
        console.log(a + b)
    }

    sum(1) // 3 

    함수도 넣을 수 있다. 

    function test() {
        return 10
    }

    function sum(a,b = test()){
        console.log(a + b)
    }

    sum(1) // 11;
    ```
<br><br>

- 함수의 arguments (파라미터,인자,아규먼트 엄밀히 따지면 다른데, 같은말임..)
- 함수내부에 사용하는 arguments 키워드는, 모든 파라미터를 배열에 담아주는 변수이다.(스크립트 기본기능? 그런거임)
```
function 함수 (a,b,c){
    console.log(arguments)
}

함수(1,2,3) // array[1,2,3]

이게 무슨 뜻이냐면 결국

function 함수 (a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)
}

이것과 동일한거다. 
```
- argument 는 근데 옛날 문법이다. arguments 는 모든 파라미터를 다 받기 때문에, 내가 만약 뭐 하나 빼고 특정 파라미터들만 사용하고 싶을때 이걸 나누기가 힘들다. 그래서 나온게 rest 사용법

<br><br>

- ...rest 
- 파라미터자리에 들어온 모든 값들을 배열로 묶어서 사용하겠다. 
- argument와 다른점은, 보관할것들을 특정할 수 있다. 
- 사용법은 함수를 선언할 때 파라미터 자리에 spread operator 를 넣어주면 되는데, 실제 spread operator 와는 다른것이니까 주의해야 한다. 함수에서 파라미터 자리에 ... 쓸때만 rest 임 
- rest 는 함수를 선언할 때 모든 파라미터의 가장 뒤에 넣어줘야 한다.
- 그리고 2번이상 못넣는다. 
```
function 함수2(...파라미터들) {
    console.log(파라미터들)
}

함수2(1,2,3,4,5,6,7,8,10) //array[1,2,3,4,5,6,7,8,10]


function 함수2(a,b, ...파라미터들) {
    console.log(파라미터들)
}

함수2(1,2,3,4,5) // array[3,4,5]

앞의 a 와 b 는 따로, 그 뒤에 오는 나머지는 묶어서 사용한다.
```

```
function 함수2(...파라미터들) {
    for(let i = 0; i < 파라미터들.length; i++){
        console.log(파라미터들[i]);
    }
}

함수2(34,2,542,524,5)
```

## Object, Array 검색하기
- 객체에서 특정 key값이 존재하는지
```
Object.keys(result).includes('찾고자 하는 키') //true or false
```
- 객체 키값에 변수를 넣기 위해서는 object[변수] = 블라블라 와 같이 반드시 대괄호 안에 해야된다.

- 배열에서 특정 '문자'열이 존재하는지
```
const newArr = arr.indexOf('문자열');
//true => 인덱스번호
//false => -1 
```

<br><br>

## 데이터 타입
- Primitive data type 
    - 그냥 문자와 숫자와 같은 데이터들을 의미한다.
    - 특징
        - 변수에 값이 그대로 저장됨
        - Arr, Obj 등은 변수에 값이 그냥 저장되는게 아니고, reference가 저장이 된다. 

<br><br>

- Reference data type
    - 배열, 객체와 같은 데이터들을 의미한다. 
    ```
    const arr = [1,2,3]
    console.log(arr) //arr 이라는 변수가 저기에 있다~
    ```
    - 실제로 저장된 데이터를 출력하는게 아니고, 메모리에 저장되어있는 데이터 위치를 보여주는거지, 실제 데이터를 보여주는게 아니다. 우리 눈에는 실제 데이터가 보이는것처럼 나올뿐이다.

<br><br>

- Primitive 와 Reference 타입 데이터의 차이는 어떻게 복사하느냐의 차이다. 아래의 상황처럼, 배열과 객체를 저런 방식으로 사용하게 되면, 하나를 수정하면 복사된 다른것도 값이 다 바뀌기 때문에 배열,객체는 아래의 방식으로 복사를 하면 안된다.
```
var 이름1 = {name : "김"};
var 이름2 = 이름1;
이름1.name = '박';

console.log(이름1.name) //"박"
console.log(이름2.name) //"박"

var 이름1 = "김"; 
var 이름2 = 이름1;
이름1.name = '박';

console.log(이름1.name) //"박"
console.log(이름2.name) //"김"

var 이름1 = {name : "김"};
var 이름2 = {name : "김"};

console.log(이름1 == 이름2) //false 
왜냐하면 레퍼런스 데이터는 데이터가 저장된 위치를 나타낸다고 했고, 위의 두 변수는 저장된 위치가 다르기때문에 false 가 뜬다. 
```

- 함수를 통해서 객체를 재할당해주려고 하면 실패함 
```
var 이름1 = {name : "김"};

function 변경(obj){
    obj = {name : "park"}
}

변경(이름1); // {name : "김"};
```
- 왜냐하면 파라미터는 변수 생성&할당 과 동일한 역할을 하기 때문이다. 
- 실제로는 이름1의 객체를 재할당한게 아니고, var obj = {name:"park"} 이라는 새로운 객체를 하나 더 생성한것과 동일한 현상이 생긴다. 


## Constructor (오브젝트 생성 기계)
- 비슷한 용도의 Object를 막 찍어내고 싶을 때 사용하는 문법이다. 
- 펑션 키워드를 사용해서 만든다. 단 함수 이름의 첫글자는 대문자로 만들어 준다. 
- Constructor 에서의 this 는 새로 생성되는 object 자체를 의미한다. 

```
function Student(){
    this.name = "kim"; //새로 생성되는 오브젝트에 name을 넣어줘
    this.age = 15; //새로 생성되는 오브젝트에 age를 넣어줘
    this.sayHi : function(){
        console.log('안녕하세요' + this.name + '입니다.')
    }
}

new Student(); //{} object 만 뽑힘.

const Student1 = new Student(); //{name: "kim", age: 15,} 변수에 담아서 이렇게 호출해야된다.
const Student2 = new Student();

Student2.sayHi();

반복문을 통해서 여러개 생성도 가능함.
```
- 컨스트럭터를 여러개 사용하면, 모두 값들이 동일한데 이걸 사용하는데마다 다르게 변경하고싶으면, 컨스트럭터 생성시 함수의 파라미터를 넣어서 원하는 데이터 값을 넣도록 해준다.

```
function Student(name , age){
    this.name = name;
    this.age = 15;
    this.sayHi : function(){
        console.log('안녕하세요' + this.name + '입니다.')
    }
}

const Student1 = new Student("kim", 16);
const Student2 = new Student("park", 13);

Student2.sayHi();
```

- Constructor 에서 사용되는 this 는 instance (인스턴스) 라고 칭한다.
- Constructor 는 생성자 라고 칭한다.
- 저렇게 Constructor 를 정의해둔 함수를 부모라고 하고, 이를 호출해서 새로 담는 변수를 자식관계라 부르며 호출하는 행위(새로운 객체를 만드는 행위) 를 상속이라고 표현한다. 


<br><br>

## Prototype (유전자..?)
- Constructor에서 상속이 일어날때 사용하는 문법이다.
- 이는 자바스크립트에만 있는 개념이다. 
- 상속이라는 행위를 구현하기위해 나타나게 된 문법이다. 
- 컨스트럭터를 만들면, prototype 이라는 공간이 자동으로 생긴다.
- prototype에 값을 추가하면, 모든 자식들이 모두 값을 물려받을 수 있다.

```
function Student(name , age){
    this.name = name;
    this.age = 15;
    this.sayHi : function(){
        console.log('안녕하세요' + this.name + '입니다.')
    }
}

const Student1 = new Student("kim", 16);
const Student2 = new Student("park", 13);

Student.prototype 을 콘솔에 입력해보면 나타난다. 

Student.prototype.gender = "남";
이렇게 추가해주면 Student1, Student2 모두에 해당 값이 추가된다. 
```
- 만약 Student1 을 검색한다고 치면, 처음에는 Student1의 부모인 Student를 검색해보고, 그다음에 Student의 prototype 을 검색을 하게 되어있다. 
- Student 의 prototype 을 검색하고 거기서도 검색결과가 없으면, Student 의 부모의 prototype을 검색하게 되어있다. 즉 부모의 유전자 검색 > 없다 > 조부모의 유전자 검색 > 없다 > 시조의 유전자 검색
- 그래서 window 라는 객체에 저장되어있는 내장 함수들을 사용 할 수 있다. 
- 여튼 이것은 그냥 원리일 뿐임. 
<br><br>

- 실제로 배열이나 객체가 만들어지는 과정을 보면
```
const arr = [1,2,3] //내가 직접 만든것
const arr = new Array(1,2,3) //컴퓨터,브라우저가 받아들이는것 

```
- 이처럼 우리는 별도로 Constructor를 만들지 않았지만, 이미 내장되어있는 Constructor 를 통해 객체든 배열이든이 만들어진다는 것이다. 
- 그래서 구글에 예를들어 내장함수 sort() 를 검색해보면, MDN 사이트에서 제목이 Array.prototype.sort() 이런식으로 나오는데, 이건 내장되어있는, array 를 만들어주는 constructor에 sort() 라는 함수가 있어서, arr 의 prototype 에 자동으로 상속받기 때문에 이렇게 나오는것이다. 

<br><br>

- Prototype 은 부모가되는 함수에만 있다. 자식들은 가지고 있지 않음.
- 자식으로 부모의 프로토타입을 찾아보고싶으면
```
자식.__proto__ 를 출력해보면 확인 할 수 있다. 
```
- 이 언더바 proto 언더바 를 통해서 자식을 선택자로 부모에게 강제로 prototype을 지정해줄 수도 있음. 
- 또는 자식을 기준으로 부모의 프로토타입에 값을 집어넣을 수도 있음
```
const 부모 = {name : "kim"}
const 자식 = {}

자식.__proto__ = 부모; 

부모 객체를 자식의 프로토타입으로 삼아버림

function 부모(){
    this.name = "김씨"
}

const 자식() = new 부모();

자식.__proto__.name = "이씨";

해당 방법은 부모의 프로토타입에 name = 이씨 라는 값을 넣어버림
```
<br><br>

- 부모의 프로토타입을 알고싶으면 ```자식.__proto__```  검색하면 된다.


**_그래서 이걸 어디다 쓸 수 있느냐_** ... 모르겠네
- 특정 Constructor 의 자식들에게 모두 동일한 무언가를 사용할 수 있게 해주는것..? 내가 만든것 말고 이미 존재하는 배열이나 객체같은것들. 

<br><br>

## ES5 문법으로 상속기능 구현하기 

- Object.create(); //객체를 만드는 예전 문법

    1. 상속을 하고싶은 부모객체를 만든다. 
    2. 자식객체의 Prototype 을 만들고싶다. 그것도 따로 만들어둔 부모객체로. 


    ```
    const 부모 = {name : "JEON", age : 50};
    const 자식 = Object.create(부모);

    자식.name // "JEON"

    자식의 prototype 의 값을 바꾸고 싶다.

    자식.name = "Kim";
    자식.name // "Kim";
    부모.name // "JEON";

    이렇게 하더라도 부모 객체의 값은 바뀌지 않는다. 
    ```

<br><br>

## ES6 문법으로 상속기능 만들기

- Class 키워드 사용 
- Constructor 만드는 신문법이다. 
- 함수 추가방법은 기존것을 써도 되고 다른방법도 있음
- constructor 내부에 생성하는 함수는 그대로 상속받고 밖에다가 만드는 함수는 prototype 에 들어가는 함수가 되어버린다.
```
class 부모 {
    constructor(파라미터 넣는 자리){
        this.name = "Kim";
        this.fc = function(){
            console.log('Hi')
        }

        sayHi() {
            console.log('hellow')
        }
    }
}

const 자식 = new 부모();
```
- prototype 확인하는법
```
1. 부모.prototype;
2. 자식.__proto__;
3. Object.getPrototypeOf(자식);
```
<br><br>

**_Class를 호출하는것만으로 함수 실행하기_**

1. Class의 Constructor 밖에 바로 호출하고자하는 함수를 만든다.
2. Constructor 내부에 this.만든함수(); 를 넣어준다.
3. 해당 함수를 사용하고싶은 페이지에서 그냥 new 키워드를 사용해 클래스 호출만 해준다. 
```
class 부모 {
    constructor(파라미터 넣는 자리){
        this.name = "Kim";
        this.sayHi();
    }

    sayHi() {
            console.log('hellow')
    }
}

new 부모();

```

## 객체지향문법은 왜쓰냐
- Object 를 쉽고 간단하게 찍어내고싶을때 쓰는 문법.
- 

<br><br>

## extends, super
- 부모 class와 매우 유사한 class를 만들고 싶을때 사용하는 문법들
- 그냥 하나더 만들면 되지 않냐? 그런데 비슷한 내용들이 많고, 엄청~~ 긴것들을 또 작성해야할때 귀찮으니깐.

```
class 할아버지 {
    constructor(name){
        this.lastName = "Kim";
        this.firstName = name;
    }

    sayHi(){
        console.log('안녕');
    }
}

class 아버지 extends 할아버지 {
    constructor(){
        this.나이 = 50;
    }
}

이렇게 하면 오류남
```

- extends 로 만든 새로운 class에서는 this를 함부로 쓰지 못한다.
- 그래서 super(); 라는 내장함수를 컨스트럭터 제일 상단에 넣어주어야 한다.
- 또한 부모 class 의 파라미터를 super 의 인자로 넣어주어야 한다. 
- extends 에서 상속받는 함수 외에 본인의 함수를 사용하기 위해서는 반드시 return 값이 필요하다.
- 또는 부모 Class 에 instanceof 라는 키워드를 사용할 수 도 있다. 만약 지금 호출되는 클래스가 아버지라면 함수를 실행하고, 아니라면 false 값을 반환하게 되어 있다. 
```
class 할아버지 {
    constructor(name){
        this.lastName = "Kim";
        this.firstName = name;
    }

    sayHi(){
        if(this instanceof 아버지){
            this.나이++
        }
    }
}

class 아버지 extends 할아버지 {
    constructor(name){
        super(name);
        this.나이 = 50;
    }

}
```

<br><br>

## Getter, Setter 
- 함수를 만들어서 object 데이터를 다루는 이유
    1. object의 데이터가 무조건 키:value 딱딱 하나씩 맞게 있는게 아니다, 키 : [배열 {객체},{객체},{객체}] 이렇게 복잡한 데이터 구조가 있는 경우도 많다. 그래서 이러한 데이터를 다루기 위해 객체 내에 함수를 만들고, 꺼내서 사용하는 것이다.
    2. object 자료 수정시 실수를 줄일 수 있음
        - obj.age = 20 이런식으로 데이터를 변경하는거는 조금 초보적인것이라고 한다. 요즘 트렌드에도 맞지않고.
        - 굳이 이렇게 하는 이유는, 데이터를 실수로 입력했을때 차단을 시킬 수가 있음. if 문이나 뭐 기타 등등 함수를 통해서
    ```
    const obj = {
        name = "jeon",
        age = 34,

        nextAge(){
            return this.age + 1;
        }

        //데이터를 수정해주는 함수
        changeAge(a){
            if (a !== Number) {
                return //만약 파라미터가 숫자로 들어오지 않으면 함수 실행하지 말기
            }
            this.age = parseInt(a); //혹시나 문자를 넣더라도 숫자로 변경해줌
        }
    }

    obj.changeAge(24);
    console.log(obj.age) //24;
    ```
<br><br>

- 위와 같이 객체 내에 함수들에는 get 또는 set 키워드를 붙여서 만들 수 있는데, 함수를 사용할때 복잡한 소괄호와 파라미터 입력하는것을, 조금더 쉽고 직관적이게 사용하기 위해서 사용되어지는 키워드이다.
- get 은 데이터를 꺼내서 쓰는 함수, set 은 데이터를 변경하는 함수에 붙인다.
- 마치 객체내부의 함수들을, 데이터를 호출하고, 데이터 값을 변경하는것 처럼 사용할 수 있다. 

    ```
    const obj = {
        name = "jeon",
        age = 34,

        get nextAge(){
            return this.age + 1;
        }
        set changeAge(a){
            this.age = parseInt(a); //혹시나 문자를 넣더라도 숫자로 변경해줌
        }
    }

    obj.changeAge = '20';
    
    기존에 썼던 obj.changeAge(20) 대신에 사용 가능
    ```

- Getter 란?
    - 오브젝트의 함수를 꺼내서 사용할떄 쓰는 키워드이다.
    - get 함수를 사용할떄는 만드시 return 값이 있어야한다.
    - get 함수는 파라미터를 입력하면 안된다. 
<br><br>

- Setter 란? 
    - 오브젝트의 함수를 변경할때 사용한다.
    - 반드시 파라미터가 1개 필요하다. 2개이상 안됨. 
<br><br>

- Class 에서도 get/set 함수를 사용할 수 있다. 
```
Class 사람 {
    constructor(){
        this.name = "Park",
        this.age = 20;
    }

    get nextAge(){
        return this.age + 1;
    }

    set setAge(나이){
        this.age = 나이;
    }
}

let 사람1 = new 사람();

사람1.nextAge;
사람1.setAge = "34";
```

**_그래서 게터 세터는 왜쓰느냐_**
- 데이터 출력/수정 함수를 만들어서 쓰는이유는 데이터의 무결성을 위해서이다. (실수를 줄이기 위해서)
- 관리의 용이성 떄문이다. 굳이 안써도 되긴하다.
- 리액트/뷰/앵귤러도 이런식으로 모든 데이터를 다룬다. 

<br><br>

## Destructuring
- 디스트럭츄어링 문법 (패턴문법?)
- array,object 데이터를 변수에 담으려면?
```
let arr = [2,3,4];
let obj = {
    name : "kim",
    age : 30,
}

방법1. 변수명을 맞추고, 대입 값도 맞추기
const [a,b,c] = [2,3,4];
const {name,age} = {name : "kim", age: 30}; //변수명과 오브젝트의 키값을 동일하게 맞춰줘야함.
const {name : 이름 ,age} = {name : "kim", age: 30}; //변수명을 바꾸고싶으면, 이방법으로 변경가능.

방법2.
const [a,b,c] = arr;
const name = obj.name;

방법3.
const const [a,b,c = 10] = [1,2]; //디폴트 값 10으로 입력. 혹시나 데이터입력을 실수하면 대체할 값 넣기.
const {name : 이름 = "성수",age = 30} = {name : "kim"}; //디폴트값 입력 가능 
```
- 반대로 변수들을 오브젝트나 배열에 집어놓고싶다면
```
const name = "kim";
const age = 550;

방법1. 하드코딩으로 집어넣기 (엣날방식)
const obj = {
    name : name,
    age : age,
}

방법2. 오브젝트의 키값과, 변수명을 동일하게 하고자 하면 그냥 변수명만 집어넣어주면 된다. 자주쓰이는 문법임.
const obj = {
    name,
    age
}
```

- 함수 파라미터에 오브젝트나 변수를 집어넣고싶을 때
```
let obj = {
    name : "kim",
    age : 30,
}

function 함수(파라미터){
    console.log(파라미터)
}

방법1. obj 또는 obj 키값을 호출한다.
함수(obj);

방법2. 파라미터를 중괄호로 감싸서 키값을 그대로 넣어주고 호출할때도 파라미터를 객체처럼 써주어야 한다. 배열도 마찬가지임.
function 함수({name, age}){
    console.log(name);
    console.log(age);
}

함수({name : "kim", age: 30})

function 함수([name, age]){
    console.log(name);
    console.log(age);
}

함수([1,2]) // 1,2
```

- 만약 복잡한 구조의 데이터들을 변수에 담으려면, 변수의 구조를 데이터와 동일하게 맞춰놓고 데이터를 넣어주면 된다...
```
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
```

<br><br>

## import export 모듈화 개발 방법
- 파일 첨부방식이다. 
```
import a from '/가져오고싶은 파일명.js' //import 뒤에 a 는 그냥 내가 가져온 변수,함수등의 데이터를 a 라고 부르겠다. 변수명,파라미터명 만들듯이

```
- import 는 내가 가져오는 파일의 모든 내용을 다 가져오겠다가 아님. 특정 변수나, 함수등을 가져오겠다임. 
- 대신에 가져올 파일에 선언,정의 되어있는 변수나 함수에 export 를 넣어줘야됨
- export default 는 파일에서 단 한번만 사용할 수 있다.
```
//가지고 올 파일 

const a = 10;
export default a;
```
- 여러개의 변수나 함수를 가져오고 싶을떄는 default 키워드는 빼고 중괄호를 넣어준다. 방법은 여러개 있음.
```
cosnt a = 10;
const b = 20;

방법1
export {a};
export {b};

방법2
export {a,b}

export const a = 10;
export const b = 20;

```

- 이렇게 여러개 불러올떄는 import 하는 곳에서도 이름을 바꿔줘야한다.
- 그리고 defalut 를 임포트 하는것과 다르기, 이름을 가져올 변수,데이터 등의 이름과 동일하게 해줘야 한다. 
```
import {a,b} from 가져올파일경로
```

- export 와 export default 는 동시에 사용 가능하다. 
```
const a = 120;
const b = 2;
const c = 55;

export {a,b};
export default c;

//import
import 작명,{a,b} from 경로;
```

- export 로 가져오는 데이터는 이름을 동일하게 해줘야 한다고 했는데, as 키워드를 통해서 변경할 수 도 있따.
```
import {a as 짓고싶은이름} from '경로'

```

- export 된 모든 변수를 다 가져오고싶으면 * 키워드를 쓰면 된다.
```
import * as 짓고싶은이름 from 'src'

console.log(짓고싶은이름.a);
```

- 임포트 익스포트는 호환성이 별로 좋지 않다. 옛날 require 문법을 많이 쓰는듯 아직까지는.

<br><br>

## 브라우저 동작 원리 (Stack, Queue)
- 자바스크립트는 싱글스레드 랭귀지라고 부른다.
- Stack : 웹브라우저 내부의 공간인데, 여기서 우리가 짠 코드들을 실행시켜준다. 
- 근데 실행이 좀 걸리는 코들은 일종의 대기실에 보내고, 먼저 Stack 에 있는 코드들을 먼저 실행시켜 주늗데, 대기실로 이동시켜주는 특정 코드들이 있다. 대표적으로는 아래의 3개가 있음.
    1. setTImeout
    2. ajax
    3. eventListener
- Queue : 스택에서 처리하기 오래걸리는것을 잠시 보관하는 대기실의 이름. 
- 동작원리를 보면 Stack 에 코드들이 실행되는데, 실행에 오래걸리는것들은 먼저 Queue 로 빼둔다. 이후 Stack에 저장되어있단 코드들이 모두 실행되고, Stack이 텅 비었을때만 Queue 에서 다음 코드들을 하나씩하나씩 Stack 으로 올려준다. 
- 이걸 활용해서 코드를 짤 수 도 있다. 
    - 원래 자바스크립트는 굉장히 복잡한 연산을 처리하기 힘들다. 근데 피치못하게 써야할때, 예를들어 for 문을 천번을 돌려야된다. 
    - 그래서 어케 하는지는 모르겠음 안가르쳐줌.

- 자바스크립트는 동기적이다. 한번에 한줄씩 코드가 실행되기때문에.
- 자바스크립트는 가끔 비동기적이다. Queue 를 사용하는 코드들을을 쓸때.
- 몰라도된다 그냥 그러하다는 것만 알면 됨. ㅋㅋ

<br><br>

## 용어정리
- 동기식 처리 (Synchronous)
    - 한번에 한줄씩 차례대로 실행해준다. 

- 비동기식 처리(Asynchronous)
    - setTImeout 처럼 오래걸리는 작업을 실행할때, 다른곳에서 처리할 수 있도록 해줌 
    - 빠른거 먼저 처리할 수 있도록 해주는게 특징이다. 

- 원래 자바스크립트는 오래걸리는 연산을 만나면 멈추게 되어있는데, 비동기식 처리 덕분에 다른 코드들을 먼저 실행시켜주고, 오래걸리는걸 뒤에 처리할 수 있도록 음.. 융통성있는 언어? ㅋ 라고 할 수 있다. 
- 그러면, 자바스크립트에서 뭔가 순차적으로 실행시키고 싶으면 어떻게 해야하나? 
    - 보통 setTimeout 을 통해서 간격을 주고 하는데, 이렇게해버리면 비동기가 되버리기 때문에 할 수 없다. 
    - 그래서 콜백함수를 사용해서 코드를 만든다. 예를들어 이벤트리쓰너도 결국 무언가 동작이 일어났을 때 이걸 해주세요~ 처럼 순서대로 사용하는 코드이다. 
    - 여담으로 이벤트리쓰너에서 콜백함수를 사용할떄 소괄호를 넣지 않는데, 이유는 함수() 라는것 자체가 함수를 호출하는건데, 이벤트 리쓰너는 특정 동작이 일어나면 함수를 실행시켜야 하기 떄문에 소괄호를 넣어버리면, 특정동작이 일어나지도 않는데 함수를 호출하게 됨으로 소괄호를 넣지 않아야 한다. 

- 콜백함수의 원리 
    - 내가 1번함수를 실행시키고 난 뒤에 바로 2번함수를 실행하고 싶은 상황임. 
    - 함수 두개를 선언해두고, 먼저 실행시키고자 하는 함수에 파라미터를 넣어준다음, 호출할때 첫째함수의 파라미터로 두번쨰함수를 넣어준다. 
```
function test01(){

}

function test02(){

}

test01();
test02(); //이렇게 하면 안됨. 만약에 test01에 setTimeout이 있으면 어쩔것임;

test01(test02); //이런식으로 사용해야 하는데, 파라미터를 써야된다. 

function test01(콜백함수){
    console.log('첫번쨰함수의 수식')
    콜백함수();
}

test01(test02);
test01(function(){
    console.log(2)
}) //파라미터에서 바로 선언해도 된다. 
```

- 콜백함수의 문제점 
- 이렇게도 사용이 가능한데 그렇게 되면 너무 복잡하고 난해하게 될 수 도 있다...
```
1번함수(function(){
    2번함수(function(){
        3함수(function(){

        }
    })
})
```
- 콜백함수의 문제점을 극복하기 위해 사용되는 Promise 패턴이 있다.

<br><br>

## Promise 패턴 
- 자바스크립트에서, 코드를 순차적으로 실행시키기 위해서 사용되는 코드 디자인 패턴 

```
const 프로미스 = new Promise();

프로미스.then(function(){
    //프로미스가 성공일 경우 실행할 코드 입력
}).then(function(){

}).then(function(){

})


프로미스.catch(function(){
    //프로미스가 실패했을 때 실행할 코드
}).catch(function(){

}).catch(function(){
    
})
```
- 콜백함수와 비슷한데 더 많은 기능이 있다. 
- then 앞의 promise 가 성공하면 다음거 실행해주세요
- catch 앞의 promise 가 실패하면 다음거 실행해주세요. 
- finally 
- Promise 는 성공,실패를 판정하는 기계이다.
- Promise 의 콜백 함수에는 반드시 두개의 파라미터가 들어가야 한다. (성공,실패)
```
const 프로미스 = new Promise(function(reslove,reject) {
    const 어려운 연산 = 블라블라;

    if(어려운연산){
        resolve(데이터전달도가능);
    } else {
        reject(데이터전달도가능);
    }
}); //여기가 성공실패 판정부분이고, ~~일 경우 성공 ~~일경우 싪패를 내가 지정해줘야 한다.

프로미스.then(function(데이터전달도가능){
    console.log('성공함')
}).catch(function(){
    console.log('실패함')
})

여기서 위의 프로미스에서 뭐가 성공하면 then 이하의 코드가 실행되고 싪패하면 catch 이하의 코드가 실행된다.
```

- promise 를 언제 많이 쓰냐면, Queue 에 거쳐가는 것들, 셋타임아웃,이벤트리쓰너와 같은 녀석들을 순차적으로 실행하고 싶을 때 사용한다고 한다. 
- then, catch 의 콜백함수의 파라미터에 resolve,reject의 파라미터를 가져오게 된다.(넣든 말든은 자유)
- 프로미스는 잘 안쓰는데.. 아주 복잡한 연산을 해야할때 종종 쓴다. 
- 프로미스 특징
    - 프로미스는 일종의 오브젝트임
    - 프로미스의 3가지 상태 (콘솔에 찍었을 때)
        - 성공시 resolved
        - 실패히 rejected
        - 성공,실패를 지정해두지 않았을 떄 pending  
    - 프로미스는, 콜백함수대신에 사용하면서 보기 편하게 쓰기 위해서 하는것일 뿐. 뭔가 동기적처리를 비동기적으로 처리해주는 마법의 문장이 아니다. 그냥 코딩 스타일일 뿐이다. 

- Javascript에서 주로 사용되는 곳은 fetch().then().catch() 패치에서 사용됨. 

<br><br>

- ajax 연속 호출
- return 으로 두번쨰 promise 를 남겨줘야한다.
```
const 프로미스 = new Promise(resolve,reject){
    $.get('url').done(function(data){
        resolve(data);
    })
}

프로미스.then(function(data){
    console.log(data);

    const 프로미스2 = new Promise(resolve,reject){
        $.get('url2').done(function(data2){
            resolve(data2);
        })
    }

    return 프로미스2;

}).then(function(data2){
    console.log(data2)
})

```

<br><br>

## async/await 프로미스를 대체할 방법 (참고로 ES8 문법임...)
- async 키워드
    - 함수 앞에만 붙일 수 있는 키워드이다.
    - promise 를 대체해주는 키워드이다. 
    - 단 promise와 다른점은, 항상 성공만 확인할 수 있다.
```
async function 더하기(){
    console.log("첫번쨰함수요")
    return 1+1
}

더하기().then(function(결과){
    console.log(결과);
})
```
<br><br>

- await 키워드
    - async 와 함꼐 쓰여진다.
    - async 함수 안에 사용되어진다. 
    - promise 가 연산이 다 될때까지 다음 코드를 실행시키지 않고 기다리도록 해주는 키워드. 
    - then 키워드와 동일한 역할을 한다. 
    - 대신에 promise 에서 실패로 판정하면 에러가 뜬다. 그러고 그자리에서 함수를 종료시킴.
    - 그래서 실패시 사용할 키워드로 try 와 catch 가 있다. 
        - try 안에는 성공했을시 동작할 코드,
        - catch 안에는 실패했을 시 동작할 코드.

```
async function 더하기(){
    const 프로미스 = new Promise(function(resolve,reject){
        const 어려운연산 = 1 + 1;
        reject();
    })
    
    프로미스.then(function(){
        console.log('성공');
    }) //이거를 갖다가 await 을 써서 짧게 쓸 수 있음

    try {
        const 결과 = await 프로미스;
        console.log(결과) // 2
    } catch {
        console.log('연산이 실패했습니다.')
    }

}

```
<br><br>

**_이것들은 반드시 async 함수 내에서 사용되는것들이다._**

<br><br>

## for in , for of 반복문 
- 반복문은 주로 Array,object에서 자료를 꺼내 쓸 때 사용한다. 

- for in 반복문
    - 오브젝트 전용 
    - 오브젝트 안에 값을 전부 하나씩 꺼내서 사용할 때 쓴다.
    ```
    const 오브젝트 = {
        name : 'kim',
        age : 30,
    }

    //key는 그냥 작명임 
    for (let key in 오브젝트){
        console.log(오브젝트[키이름])
    }

    ```
    - for in 반복문 특징
        - enumerable 한 데이터만 반복해준다. (셀 수 있는 데이터.)
        - Object.getOwnPropertyDescriptor(오브젝트,'name') 
            - 오브젝트 데이터는 단순히 눈에보이는것만 저장된게 아니라 숨겨진 정보들도 같이 저장되어 있는데, 위의 겟온프로퍼티디스크립터를 사용하면 원하는 키값의 숨겨진 정보들을 확인할 수 있다. 
            - 숨겨진 정보는 3가지가 있는데, writable,enumerable,configurable 이다. true or false 로 나옴.
        - 부모의 prototype 도 반복해준다. (Class를 사용했을 때)
            - 요건 좀 쓸데없는 내용임.
            - 그래서 정확히 내가 가진것만 출력해야된다.
            - hasOwnProperty는 true or false 를 반환하기 떄문에, if 문 안에서 써야된다. 
            ```
            for (let key in 오브젝트){
                    if(오브젝트.hasOwnProperty(key)){
                        console.log(오브젝트[키이름])
                    } else {

                    }
                }
            ```
        - Object 자료형에만 쓴다. 

<br><br>

- for of 반복문
    - Array,문자,arguments,NodeList,Map,Set 등의 신자료들에 사용가능한 반복문
    ```
    const arr = [2,3,4,5];

    //작명은 하나하나의 데이터가 된다. 
    for (let 작명 of arr){
        console.log(작명);
    }

    //단순 string 을 넣으면, 하나하나 분리해서 출력해준다. 
    ```

    - 특징
        - iterable 전용 
        ```
        arr[Symbol.iterator]();
        ```
        - [Symbol.iterator](); 를 사용하면 해당 데이터가 이터러블한지 아닌지 알 수 있다.
        - 이터러블이 뭔지는 알 필요는 없다. 그냥 이런 유형이 맞는지 아닌지만 알 면 된다. 

<br><br>

## Symbol 자료형
- 별로 쓰이는데도 없고 사용성있는건 아닌데 이런게 있다정도만 알면 된다.
- 심볼 만드는 방법
    - 자료에 대한 설명은 그냥 아무말이나 해도 된다.
    - 심볼을 하나 만들고 obj[심볼이름] = "값입력" 이런식으로 값을 넣어준다.
    - 또는 객체 안에 키값을 그냥 대괄호로 감싸서 만들어도 된다.
    - 데이터를 뽑을때는 값이 안나오지만, 그냥 단순 출력할때는 다 보인다.(대신 키값에 심볼만들때 기재해둔 설명이 키값대신에 뜬다)
```
let 심볼 = Symbol('자료에대한 설명');

let weight = Symbol('비밀스러운 자료')
let height = Symbol('키')

const person = {
    name : "JEON",
    [height] : 177,
}

person[weight] = 85;

```
- 심볼 출력할때 는 
```
객체[심볼이름]; 이렇게 쓰면 된다.
```
- 사용처 
    - Object자료형의 비밀스러운 key 값으로 쓸 수 있다.
    - Symbol로 저장한거는 반복문을 돌려도 출력이 되지 않는다. 
    - Object 안에 주석을 다는거라고 봐도 무방한...
    - import 해온 파일/라이브러리를 쓸 때 거기 있던 object에 자료를 추가하고 싶을때
- Symbol 의 특징
    1. 심볼에 기재하는 설명이 동잃라다고 해서 같은 심볼이 아니다.
    2. 전역 변수 같은 전역Symbol 
        - for 를 붙여주면 된다.
        ```
        //전역 심볼 만드는 법
        const a = Symbol.for('설명');
        ```

<br><br>

## map,set 자료형
- Map
    - object와 비슷한 자료형으로 키:값 형태로 저장한다. 
    ```
    const person = new Map(); //맵 자료형 만드는 방법

    person.set('name','klm'); //맵 자료형에 데이터를 넣는 방법.

    ```
    - 자료간의 연관성을 표현하기 위해서 쓴다. 
    - 그래서 출력해보면 화살표형태로 나옴 "name" => "kim" 이렇게.
    - Object 자료는 키값으로 string만 가능하지만, Map은 다 된다.
    ```
    person.get('name'); //Map 데이터를 꺼내는 방법
    person.delete('name') //Map 데이터를 지우는 방법
    person.size //데이터에 개수를 세는 키워드.

    한번에 자료를 넣을 때는

    const person = new Map([
        ['name','kim'],
        ['age',34],
    ])

    ```
    - 반복문을 쓸 수 있다. 
    - 키값들을 뽑아냄
    ```
    for (let key of person.keys()){
        console.log(key);
    }
    ```

<br><br>

- Set 
    - Array와 유사하게 생김.
    - 일종의 집합? 비슷함
    - 중복 자료를 허용하지 않는 Array 비슷한녀석이다. 
    - 중복값이 있으면 알아서 제거해준다. 
    ```
    const 출석부 = [1,2,3,4,1];

    const 출석부2 = new Set([1,2,3,4,1]); //Set 자료 만들기

    ```
    - 출력해보면 오브젝트와 비슷하게 나오긴 함. 
    - Set 을 다룰때는 어려운 함수를 써야됨.
    - Set 자료에 사용되는 함수들
    ```
    출석부2.add('10'); //자료 추가하기 
    출석부2.delete('19'); //자료 지우기
    출석부2.has('있는지확인하고싶은값'); //자료가 있는지 확인 true false
    출석부2.size //자료 개수
    ```

    - Array 를 Set 으로 변환, Set을 Array로 변환
    ```
    const 출석부 = [1,2,3,4,1];
    const 출석부2 = new Set([1,2,3,4,1]);

    출석부 = [...출석부2]; //Set을 Array로 변환;
    ```
    - Set 도 반복문 가능하다. forEach, for Of 가능

<br><br>

## 커스텀 HTML 만들기 
- Web Components 문법
    - 자브스크립트 문법이 아님
    - 브라우저 기본 문법임 
    - 이거를 자바스크립트로 쓸 수 있음. 

    ```
    <내가 쓸 태그이름짓기 name="성수"></내가 쓸 태그이름짓기>

    class 클래스 extends HTMLElement {
        connectedCallback(){
            //내가 쓸 태그 이름을 만들고난 뒤 실행할 코드들

            let label = document.createElement('label');
            this.appendChild(_label)

            this.innerHTML = `<label>
                                <input/>
                            </label>`
        }

        //속성 변경 감지
        static get observedAttributes(){
            return ['name']
        }

        //속성이 변경 되면 콜백함수를 실행시켜주세요
        attributeChangedCallback(){
            console.log(this.getAttribute('name'));
        }
    }

    customElements.define('내가 쓸 태그이름짓기',클래스);
    ```
    - 커넥트 콜백에서 HTML 만드는 방법은 몇가지가 있음
        1. 변수에 태그를 담고 어펜드 하기 (태그생성속도가 빠름)
        2. this.innerHTML 로 태그 넣어주기. (한번에 다 넣을 수 있음)

    - 저런식으로 자주 사용하는 것들을 만들어서 예를들어 내가 <my-custom></my-custom> 이라는 태그 내에 다 집어 넣어 둔다면, 언제나 마이 커스텀만 불러와도 그안에 달려있는 모든게 같이 따라오기때문에 편리하다. 
    - 일종의 함수랑 비슷하다. 긴 코드를 단어 한줄로 사용할 수 있게 만들어주는것과 비슷함. 
    - 파라미터문법같은것도 구현 가능함. HTML 태그에 속성값을 넣어서, 그걸 불러와서 변수에 담고 html 출력할떄 변수를 집어넣어주면 됨... 
    - attribute 가 변경되면 변경을 감지해서 실행해줄수도있음. 

<br><br>

## shadow DOM - HTML을 모듈화 하기 
- 브라우저 > 개발자 도구 > 설정 > Preferences > Elements > show user agent shadow DOM 체크를 하면, 태그들에 숨겨진 셰도우 돔들을 확인 할 수 있다. 
- shadow DOM 만드는 방법
    - 딱히 활용도가 있는 방법은 아님 
    ```
    <div id="test"></div>

    document.querySelector('#test').attachShadow({mode : 'open'})
    document.querySelector('#test').shadowRoot.innerHTML = '<p></p>'
    ```

- shadow DOM 과 Web Components 를 같이 사용할때 완벽한 모듈화가 가능하다. 
- shadow DOM 은 이벤트리쓰너도 붙일 수 있다. 

```
<template id="testTemplate">
    <label></label>
    <style>
        label {
            color:red;
        }
    </style>
</template>

class 클래스 extends HTMLElement {
        connectedCallback(){
            this.attachShadow({mode : 'open'});
            this.shadowRoot.innerHTML = `<label>
                                            <input/>
                                        </label>
                                        <style>
                                            label {
                                                color:red;
                                            }
                                        </style>    
                                    `
            this.shadowRoot.append(testTemplate.content.cloneNode(true))

            let el = this.shadowRoot.querytSelector('label');
            el.addEventListner ('click',function(){
                console.log('이벤트리쓰너 부착');
            })
        }
    }
```
- template 태그 - 임시저장 태그? 
    - this.innerHTML 로 스타일태그부터 모든 태그를 집어넣기 복잡하니깐 template 라는 태그를 하나 만들어서 그안에다가 내가 만들고 싶은 태그들을 다 집어넣어두고, append 해주면 된다. 

- 근데 이걸 해주는 라이브러리도 많아서 직접 만드는 경우는 거의 없다. 
- 푸시 테스트