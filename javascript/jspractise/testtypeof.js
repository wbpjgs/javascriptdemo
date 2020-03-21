//javascript typeof
var test1 = "abcdedf";
var test2 = 123;
var test3 = false;
var test4 = {name: "tom", age: 23};
var test5 = {};
var test6 = ["a", "b", "c"];
var test7 = [];
var test8 = function () {
    console.log("test function type.")
};
var test9 = null;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
test8();



//javascript NaN
var nan1 = 0 / 0;
var nan2 = "test" * 1000;
var nan3 = Math.sqrt(-9);
console.log(nan1);
console.log(nan2);
console.log(nan3);
if (NaN == NaN) {
    console.log("NaN equal NaN");
} else {
    console.log("NaN not equal NaN");
}
if (undefined == undefined) {
    console.log("undefined equal undefined");
} else {
    console.log("undefined not equal undefined");
}

if (isNaN(nan1)) {
    console.log("nan1 is NaN.");
}
console.log(typeof nan1);

if (isNaN("test")) {
    console.log("test is NaN");
}
if (!isNaN("55")) {
    console.log("55 is not nan");
}
//相等
if (99 == "99") {
    console.log("a number equal a string");
} else {
    console.log("not equal!!!");
}
console.log(typeof "99");
//空字符创转化为数字为0
var emptystr = "";
console.log(emptystr == 0);

if ("true" == true) {
    console.log("\"true\" == true");
} else {
    //answer
    console.log("\"true\" != true");
}

//严格相等
if (99 === "99") {
    console.log(" 99 === \"99\"")
} else {
    //answer
    console.log(" 99 !== \"99\"")
}

//严格不相等
if (55 !== "55") {
    //answer
    console.log("\"55\" !== 55");
} else {
    console.log("\"55\" === 55");
}
var dog = {
    name: "wawa",
    age: 3
};

var dog1 = dog;
if (dog === dog1) {
    console.log("dog  ===  dog1");
}

console.log(Infinity - "1");

console.log(typeof dog1);

//假值 undefined NaN 0 空字符串 null
if (NaN) {
    console.log("111111111111")
}
if ("") {
    console.log("222222222222")
}
if (null) {
    console.log("3333333333333")
}
var testValue;
if (testValue) {
    console.log("44444444444444444")
}

if (0) {
    console.log("555555555555555555")
}

//字符串操作
var emot = "XOXOxOxoxoxX";
var hugs = 0;
var kisses = 0;
var transform = emot.trim().toUpperCase();
for (let i = 0; i < transform.length; i++) {
    if (transform.charAt(i) == "X") {
        hugs++;
    } else {
        kisses++;
    }
}
//split()....
var name = "deng|wang|liu";
var arr = name.split("|");
console.log("split array is ",arr);
var delstr = name.slice(0,4);
console.log("delete deng :",delstr);

var  phoneNumber = "123-4567";
function validNumber(number) {
    return number.match(/^\d{3}-?\d{4}$/);
}

var matchRes = validNumber(phoneNumber);
console.log(matchRes);

function Duck(sound) {
    this.sound = sound;
    this.quark = function () {
        console.log(this.sound);
    }
}

var duck = new Duck("quark quark");
duck.quark();
console.log(typeof duck);
console.log(duck instanceof Duck);
console.log(typeof Infinity);
//true
console.log(null == undefined);