// *notes
//	Needs timers that disable buttons   -->auto
//

class Event {
	constructor(duration, price, amount_profits, event_id, addOne_id, disabled){  //duration in milliseconds
	
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
		this.disabled = disabled;
		if (disabled){
			document.getElementById(event_id).innerHTML = "Unlock "+event_id+" for $"+price;
			document.getElementById(addOne_id).disabled = true; 
		} 
	}

	clicked(){
		if (this.disabled == false) {
			this.timer();
		} else if (wallet >= this.price) {
			this.disabled = false;
			wallet -= this.price;
			document.getElementById("cash").innerHTML = "Current Balance: $" + wallet.toFixed(2);
			document.getElementById(this.addOne_id).disabled = false; 
			document.getElementById(this.event_id).innerHTML = this.event_id;
		}

	}

	timer(){ //disables an event for duration in milli
		document.getElementById(this.event_id).disabled = true;
		setTimeout(enableButton, this.duration, this.amount_profits, this.event_id);
	}


	auto(){ 
		this.is_auto = true; 
		                                      

	}

	addOne(){
		if(wallet >= this.price) {
			wallet -= this.price;
			this.num++;
			this.price += 0.25 * this.price;
			this.price = parseFloat(this.price.toFixed(2));
			this.amount_profits = this.original_profits * this.num;
			document.getElementById(this.addOne_id).innerHTML = "Cost: $" + this.price;
			document.getElementById(this.event_id).innerHTML = "(" + this.num +") " + this.event_id;
			document.getElementById("cash").innerHTML = "Current Balance: $" + wallet.toFixed(2);

		}
	}

}

function enableButton(amount, id){	//enables button and pays out to wallet once setTimeout calls
	document.getElementById(id).removeAttribute('disabled');
	wallet += amount;
	wallet = parseFloat(wallet.toFixed(2));
	document.getElementById("cash").innerHTML = "Current Balance: $" + wallet.toFixed(2);
	
}

function autod(duration, click_func){
	if (duration === 0){
		duration = 1000;
	}
	setInterval(click_func, duration);
}




let wallet = 0.00;

var taco = new Event(0, 10, 1, "Taco", "taco1", false);
var taquero = new Event(3000, 40, 50, "Taquero", "taco2", true);
var taco_stand = new Event(5000, 200, 300, "Taco Stand", "taco3", true);
var taco_truck = new Event(10000, 1000, 1250, "Taco Truck", "taco4", true);
var restaurant = new Event(25000, 20000, 4000, "Restaurant", "taco5", true);



