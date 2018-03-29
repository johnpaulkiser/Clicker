// *notes
//	
//

class Event {
	constructor(duration, price, amount_profits, id){
	
		this.duration = duration; 					//how long user has to wait between clicks
		this.price = price;							//currently tracks the price of upgrade. 
		this.amount_profits = amount_profits;		//how much 1 click will profit
		this.original_profits = amount_profits;		//
		this.num = 1;
		this.is_auto = false;
		this.id = id;
		document.getElementById(this.id).innerHTML = "" +this.id + " Cost: $" + this.price;
	}

	clicked(){
		wallet += this.amount_profits;
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
			this.amount_profits = this.original_profits * this.num;
			document.getElementById(this.id).innerHTML = "(" + this.num +") "+this.id + "Cost: $" + this.price;
			document.getElementById("cash").innerHTML = "Current Balance: $" + wallet;

		}
	}


}

let wallet = 0.00;

var taco = new Event(0, 10, 1, "Taco");
var taquero = new Event(3, 40, 50, "Taquero");
var taco_stand = new Event(5, 200, 300, "Taco Stand");
var taco_truck = new Event(10, 1000, 1250, "Taco Truck");
var restaurant = new Event(25, 20000, 4000, "Restaurant");



