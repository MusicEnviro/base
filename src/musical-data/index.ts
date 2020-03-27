import { MidiPitch, PitchClass } from "../@types";

export function pitchClass(note: MidiPitch): PitchClass {
	return note % 12;
}
