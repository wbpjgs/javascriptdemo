var car = {
    make: "BWM",
    color: "red",
    passengers: 5,
    mileage: 23456,
    pro_year: 1996,
    model: "private",
    started: false,
    fuel: 0,
    //加油
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    },
    //停止
    stop: function () {
        this.started = false;
    },
    //启动
    start: function () {
        this.started = true;
    },
    //驾驶
    drive: function () {

        if (this.started) {
            // alert("drive function...");
            if (this.fuel > 0) {
                console.log("start zoom zoom...");
                this.fuel--;
            } else {
                console.log("out of fuel,you should add fuel..");
                this.stop();
            }
        } else {
            console.log("you should started this cat.")
        }
    }
};

console.log(car["drive"]());
// car.start();
// car.addFuel(3);
// car.drive();
// car.drive();
// car.drive();
// car.drive();
// car.drive();


function prequal(value) {
    if (value.pro_year < 2000) {
        return false;
    } else if (value.mileage > 1000000) {
        return false;
    }
    return true;
}

function objinfo(obj) {
    for (var pro in obj) {
        console.log("property:" + obj[pro]);
    }
}

// var result = prequal(car);
// console.log("result:" + result);
// car.start();amount
// car.drive();
// car.stop();
// objinfo(car);
//句点表示法
// console.log(car.color);
//[] 表示法
// console.log(car["co" + "lor"]);
// console.log(car["color"]);
