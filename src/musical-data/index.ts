import { MidiPitch, PitchClass, DiatonicStep, DiatonicStepType, Mode } from '../@types';

export function pitchClass(note: MidiPitch): PitchClass {
	return note % 12;
}

export function stepType(step: DiatonicStep): DiatonicStepType {
	switch (step % 7) {
		case 0:
			return 'Root';
		case 4:
			return 'Fifth';
		case 2:
			return 'OtherChordNote';
		default:
			return 'NonChordNote';
	}
}

// these are just rotations, could generate them, but this is easier
const modes = { 
	Ionian: [0, 2, 4, 5, 7, 9, 11],
	Dorian: [0, 2, 3, 5, 7, 9, 10],
	Phrygian: [0, 1, 3, 5, 7, 8, 10],
	Lydian: [0, 2, 4, 6, 7, 9, 11],
	Mixolydian: [0, 2, 4, 5, 7, 9, 10],
	Aeolian: [0, 2, 3, 5, 7, 8, 10],
	Lochrian: [0, 1, 3, 5, 6, 8, 10],
}

export function pitchFromStep(step: DiatonicStep, zeroPitch: MidiPitch, mode: Mode) {
	const octave = Math.floor(step / 7)
	const scaleStep = step - octave * 7
	
	return zeroPitch + octave * 12 + modes[mode][scaleStep]
}
