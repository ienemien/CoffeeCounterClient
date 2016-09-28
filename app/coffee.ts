export class Coffee {
	id: number;
	name: string;
	type: string;
	amount: number;
	rating: number;

	constructor(
		name: string,
		type: string,
		amount: number,
		rating: number
	) {
		this.name = name;
		this.type = type;
		this.amount = amount;
		this.rating = rating;
	}
}