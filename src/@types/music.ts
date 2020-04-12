export type MidiPitch = number;
export type DiatonicStep = number;
export type PitchClass = number;

export type Mode =
	| 'Ionian'
	| 'Dorian'
	| 'Phrygian'
	| 'Lydian'
	| 'Mixolydian'
	| 'Aeolian'
	| 'Lochrian';

export type DiatonicStepType = 'Root' | 'Fifth' | 'OtherChordNote' | 'NonChordNote'