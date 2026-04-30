export interface Friend {
	id: string;
	name: string;
}

export interface Item {
	id: string;
	name: string;
	price: number;
	quantity: number;
	assignedTo: string[]; // array of friend IDs
}

export interface ExtraCost {
	id: string;
	name: string;
	amount: number; // can be negative for discounts
}

export interface CalculationResult {
	friendId: string;
	friendName: string;
	itemsSubtotal: number;
	extraShare: number;
	total: number;
}

export function calculateSplitBill(
	items: Item[],
	friends: Friend[],
	extraCosts: ExtraCost[]
): {
	results: CalculationResult[];
	subtotal: number;
	totalExtra: number;
	grandTotal: number;
} {
	const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const totalExtra = extraCosts.reduce((acc, cost) => acc + cost.amount, 0);
	const grandTotal = subtotal + totalExtra;

	const results: CalculationResult[] = friends.map((friend) => {
		// Calculate subtotal for this specific friend
		const itemsSubtotal = items.reduce((acc, item) => {
			if (item.assignedTo.includes(friend.id)) {
				// Divide the item cost equally among assigned friends
				const sharePerPerson = (item.price * item.quantity) / item.assignedTo.length;
				return acc + sharePerPerson;
			}
			return acc;
		}, 0);

		// Proportional share of extra costs (discounts/fees)
		// If subtotal is 0, share is 0 to avoid division by zero
		const extraShare = subtotal > 0 ? (itemsSubtotal / subtotal) * totalExtra : 0;

		return {
			friendId: friend.id,
			friendName: friend.name,
			itemsSubtotal,
			extraShare,
			total: itemsSubtotal + extraShare
		};
	});

	return {
		results,
		subtotal,
		totalExtra,
		grandTotal
	};
}
