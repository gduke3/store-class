class Store<T> implements IStore<T> {
	private storage: (T | null)[] = [];

	getSize(): number {}
	setByIndex(index: number, item: T): void {}
	getByIndex(index: number): T | null {}
	getAll(): T[] {}
	removeByIndex(index: number): boolean {}
}

export default Store;
export interface IStore<T> {
	setByIndex: (index: number, item: T) => void;
	getByIndex: (index: number) => T | null;
	removeByIndex: (index: number) => boolean;
	getAll: () => T[];
	getSize: () => number;
}
