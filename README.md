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
```

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