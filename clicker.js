let wallet = 0;

class Event {
	constructor(duration, price, amount_profits){
	
		this.duration = duration;
		this.price = price;
		this.amount_profits = amount_profits;
		this.num = 1;
		this.is_auto = false;

	}

	clicked(){
		wallet += this.amount_profits;
		document.getElementById("cash").innerHTML = "Current Balance: $" + wallet;
		
	}

	auto(){
		this.is_auto = true;
	}

	addOne(){
		wallet -= price;
		this.num++;
		this.price += 0.25 * price;
		this.amount_profits *= num;

	}


}

var taco = new Event(0, 0, 1);
var taquero = new Event(3, 40, 50);
var taco_stand = new Event(5, 200, 300);
var taco_truck = new Event(10, 1000, 1250);
var restaurant = new Event(25, 20000, 4000);



