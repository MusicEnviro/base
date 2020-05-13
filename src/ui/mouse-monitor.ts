import { IPoint } from "../@types";

// see how many of these get created
console.log('instantiating mouse monitor');

export let mouseDown = false;
export let clientMousePosition: IPoint = null;

typeof window !== 'undefined' && window.addEventListener('mousedown', handleMouseDown);
typeof window !== 'undefined' && window.addEventListener('mouseup', handleMouseUp);
// window.addEventListener('mousemove', handleMouseMove);

export function dispose() {
	typeof window !== 'undefined' && window.removeEventListener('mousedown', handleMouseDown);
	typeof window !== 'undefined' && window.removeEventListener('mouseup', handleMouseUp);
	typeof window !== 'undefined' && window.removeEventListener('mousemove', handleMouseMove);
}

function handleMouseDown() {
	mouseDown = true;
}

function handleMouseUp() {
	mouseDown = false;
}

function handleMouseMove(e: MouseEvent) {
	clientMousePosition = { x: e.clientX, y: e.clientY };
}
