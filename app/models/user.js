var uniqid = require('uniqid');

var usersTable = global.usersTable
if ( usersTable == null )
	usersTable = [];

class User {

	async save() {
		let matchingUserId = -1;

		if (this.id == undefined) {
			this.id = uniqid();
		}
		else {
			matchingUserId = usersTable.findIndex(e => e.id === this.id)
		}

		// if no matches
		if (matchingUserId == -1)
			usersTable.push(this);
		// if at least one match, replace the first one at index 0 with this
		else
			usersTable[matchingUserId] = this;
		
		return this;
	}

	async delete() {
		let matchingUserId = usersTable.findIndex(e => e.id === this.id)
		if(matchingUserId!=-1) {
			usersTable.splice(matchingUserId, 1);
			return true;
		}
		return false; 
	}

	static remove(criterias) {
		let matchingUserId = usersTable.findIndex(e => e.id === criterias.id)
		if(matchingUserId!=-1) {
			usersTable.splice(matchingUserId, 1);
			return true;
		}
		return false; 
	}

	static async find(criterias) {
		//to be implemented filters users by criterias e.g. {name:pippo, id:1234}
		return usersTable;
	}

	static findByName(name) {
		let matchingUsers = usersTable.filter(u => u.name === name);
		
		// if no matches
		if (matchingUsers.length === 0) {
			return null;
		}

		// if at least one match, take the first one at index 0
		return matchingUsers[0];
	}

	static findOrCreate(user) {
		let matchingUsers = [];

		if (user.id == undefined) {
			user.id = uniqid();
		}
		else {
			matchingUsers = usersTable.filter(u => u.id === user.id);
		}

		// if no matches
		if (matchingUsers.length === 0) {
			usersTable.push(user);
			return user;
		}

		// if at least one match, take the first one at index 0
		return matchingUsers[0];
	}

};

module.exports = User;
