class Point implements IPoint {
	private x: number;
	private y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	setPosition(x: number, y: number): void {
		this.x = x;
		this.y = y;
	}
	getPosition(): { x: number; y: number } {
		return { x: this.x, y: this.y };
	}
	getDistance(point: IPoint): number {
		const pointPosition = point.getPosition();
		return Math.sqrt(
			Math.pow(pointPosition.x - this.x, 2) + Math.pow(pointPosition.y - this.y, 2)
		);
	}
}

export default Point;
export interface IPoint {
	setPosition: (x: number, y: number) => void;
	getPosition: () => { x: number; y: number };
	getDistance: (point: IPoint) => number;
}
