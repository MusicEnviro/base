import { IPoint, IRect } from '../@types';

export function pointInRect(point: IPoint, rect: IRect) {
	return (
		point.x >= rect.left &&
		point.x <= rect.right &&
		point.y >= rect.top &&
		point.y <= rect.bottom
	);
}

export function rectCenter(rect: IRect): IPoint {
	return {
		x: (rect.left + rect.right) / 2,
		y: (rect.top + rect.bottom) / 2
	}
}
