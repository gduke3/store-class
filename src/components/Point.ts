class Point implements IPoint {
	private x: number;
	private y: number;

	constructor(x: number, y: number) {}

	setPosition(x: number, y: number): void {}
	getPosition(): { x: number; y: number } {}
	getDistance(point: IPoint): number {}
}

export default Point;
export interface IPoint {
	setPosition: (x: number, y: number) => void;
	getPosition: () => { x: number; y: number };
	getDistance: (point: IPoint) => number;
}
