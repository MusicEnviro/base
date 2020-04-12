import { MidiPitch, PitchClass, DiatonicStep, DiatonicStepType } from '../@types';

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
		case 6:
			return 'OtherChordNote';
		default:
			return 'NonChordNote';
	}
}
