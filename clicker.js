// *notes
//	Needs timers that disable buttons   -->auto
//

class Event {
	constructor(duration, price, amount_profits, event_id, addOne_id){
	
		this.duration = duration; 					//how long user has to wait between clicks
		this.price = price;							//currently tracks the price of upgrade. 
		this.amount_profits = amount_profits;		//how much 1 click will profit
		this.original_profits = amount_profits;		//
		this.num = 1;
		this.is_auto = false;
		this.event_id = event_id;
		this.addOne_id = addOne_id;
		document.getElementById(this.addOne_id).innerHTML = "Cost: $" + this.price;
		document.getElementById(this.event_id).innerHTML = this.event_id;
	}

	clicked(){
		wallet += this.amount_profits;
		wallet = parseInt(wallet.toFixed(2));
		document.getElementById("cash").innerHTML = "Current Balance: $" + wallet;
	}
 
	auto(){
		this.is_auto = true;
	}

	addOne(){
		if(wallet >= this.price) {
			wallet -= this.price;
			this.num++;
			this.price += 0.25 * this.price;
			this.price = parseInt(this.price.toFixed(2));
			this.amount_profits = this.original_profits * this.num;
			document.getElementById(this.addOne_id).innerHTML = "Cost: $" + this.price;
			document.getElementById(this.event_id).innerHTML = "(" + this.num +") " + this.event_id;
			document.getElementById("cash").innerHTML = "Current Balance: $" + wallet;

		}
	}


}

let wallet = 0.00;

var taco = new Event(0, 10, 1, "Taco", "taco1");
var taquero = new Event(3, 40, 50, "Taquero", "taco2");
var taco_stand = new Event(5, 200, 300, "Taco Stand", "taco3");
var taco_truck = new Event(10, 1000, 1250, "Taco Truck", "taco4");
var restaurant = new Event(25, 20000, 4000, "Restaurant", "taco5");



