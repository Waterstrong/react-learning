export default class User {
	constructor(userId, userName) {
        this.id = userId;
        this.name = userName;
        this.favor = [];
    }
    hello(target) {
    	return 'Hello '+ target +', I am ' + this.name;
    }
    report() {
    	let {id, name, favor} = this;
    	return {id, name, favor};
    }
    addFavor(favor) {
    	this.favor.push(favor);
    }
}