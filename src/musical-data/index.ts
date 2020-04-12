import { MidiPitch, PitchClass, DiatonicStep, DiatonicStepType } from '../@types';

export function pitchClass(note: MidiPitch): PitchClass {
	return note % 12;
}

export function stepType(step: DiatonicStep): DiatonicStepType {
	switch (step % 7) {
		case 0:
			return 'Root';
		case 5:
			return 'Fifth';
		case 3:
		case 7:
			return 'OtherChordNote';
		default:
			return 'NonChordNote';
	}
}
