class Store<T> implements IStore<T> {
	private storage: (T | null)[] = [];

	getSize(): number {
		return this.getAll().length;
	}
	setByIndex(index: number, item: T): void {
		this.storage[index] = item;
	}
	getByIndex(index: number): T | null {
		return this.storage[index] ?? null;
	}
	getAll(): T[] {
		return this.storage.filter((item) => item !== null) as T[];
	}
	removeByIndex(index: number): boolean {
		if (this.storage[index]) {
			this.storage[index] = null;
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
	getSize: () => number;
}
