// Your code here
class PartyPlanner {
	constructor() {
		this.guestList = [];
	}

	addToGuestList = name => this.guestList.push(name);

	throwParty() {
		if (this.guestList.length == 0) {
			return "Gotta add people to the guest list";
		} else {
			
			let fullList = "Welcome to the party " + this.guestList.join(" and ");

			return fullList;
		}
	}

/* 	throwParty() - return a different string depending on the length of the guestList:
	If there are no guests, return 
	If there are guests in the guestList, return the guests' names. For example, if there are two guests, return "Welcome to the party $ and $". */
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}