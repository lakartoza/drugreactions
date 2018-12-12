
export default class ReminderService {
	constructor (supplyDays, daysAheadAlert){
		this.daysAhead = daysAheadAlert;
		this.supplyDays = supplyDays;

		this.UpgradeDatePrototype_AddDays();
		this.UpgradeDatePrototype_MonthNames();

	}

	get date() {
		
		var currentDate = new Date();

		// add supplyDays to current date and subtract reminder padding
		var reminderDate = currentDate.addDays(this.supplyDays - this.daysAhead);

		console.log(reminderDate);
		var Day = reminderDate.toString().split(" ")[2];
		var Month = reminderDate.toString().split(" ")[1];
		var Year = reminderDate.toString().split(" ")[3];

		console.log( {Day,Month,Year} )
		return {Day,Month,Year}
	}
		


	//Extend the javascript Date object 
	UpgradeDatePrototype_AddDays () {
		Date.prototype.addDays = function(days) {
		  this.setDate(this.getDate() + parseInt(days));
		  return this;
		};
	}
	
	//Extend to give month names
	UpgradeDatePrototype_MonthNames() {
		Date.prototype.monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
		];
	}

}

