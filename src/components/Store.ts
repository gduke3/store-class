class Store<T> implements IStore<T> {
	private storage: { [key: number]: T } = [];

	getCount(): number {
		return Object.keys(this.getAll()).length;
	}

	setByIndex(index: number, item: T): void {
		this.storage[index] = item;
	}

	getByIndex(index: number): T | null {
		return this.storage[index] || null;
	}

	getAll(): T[] {
		const entriesStorage = Object.entries(this.storage);
		const formattedStorage = entriesStorage.map(([key, value]) => value);

		return formattedStorage;
	}

	removeByIndex(index: number): boolean {
		if (this.storage[index]) {
			const entriesStorage = Object.entries(this.storage).map(([key, value]) => [
				Number(key),
				value,
			]);
			const filteredStorage = entriesStorage.filter(([key]) => key !== index);

			this.storage = Object.fromEntries(filteredStorage);

			return true;
		}
		return false;
	}
}

export default Store;
export interface IStore<T> {
	setByIndex: (index: number, item: T) => void;
	getByIndex: (index: number) => T | null;
	removeByIndex: (index: number) => boolean;
	getAll: () => T[];
	getCount: () => number;
}
