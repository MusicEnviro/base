export function pitchClass(note: MidiPitch): PitchClass {
	return note % 12;
}
