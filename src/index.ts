import Point, { IPoint } from "./components/Point";
import Store from "./components/Store";
import { getRandomInt } from "./utils";

const STORAGE_SIZE = 20;
const POINT_POSITION_LIMIT = { x: 200, y: 200 };

const store = new Store<IPoint>();

for (let i = 0; i < STORAGE_SIZE; i++) {
	const pointPosition = {
		x: getRandomInt(0, POINT_POSITION_LIMIT.x),
		y: getRandomInt(0, POINT_POSITION_LIMIT.y),
	};
	store.setByIndex(i, new Point(pointPosition.x, pointPosition.y));
}

console.time("Get All");
for (const point of store.getAll()) {
	console.log(point.getPosition());
}
console.timeEnd("Get All");

console.time("Remove All");
for (let i = 0; i < STORAGE_SIZE; i++) {
	store.removeByIndex(i);
	console.log(store.getCount());
}
console.timeEnd("Remove All");
