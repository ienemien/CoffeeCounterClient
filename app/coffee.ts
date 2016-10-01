export class Coffee {
	id: number;
	name: string;
	type: string;
	amount: number;
	rating: number;

	constructor(
        id: int,
		name: string,
		type: string,
		amount: number,
		rating: number
	) {
        this.id = id;
		this.name = name;
		this.type = type;
		this.amount = amount;
		this.rating = rating;
	}
}