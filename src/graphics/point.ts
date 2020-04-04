import { IPoint } from '../@types';

export function addPoints(...points: IPoint[]): IPoint {
	return points.reduce((sum, point) => ({ x: sum.x + point.x, y: sum.y + point.y }), {
		x: 0,
		y: 0,
	});
}

export function subtractPoints(point1: IPoint, point2: IPoint): IPoint {
    return {
        x: point1.x - point2.x,
        y: point1.y - point2.y
    }
}
