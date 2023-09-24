class ArrayBufferConverter {
	load(buffer) {
		let bufferView = new Uint16Array(buffer);
		return bufferView;
	}

	toString(buffer) {
		let bufferView = new Uint16Array(buffer);
		let bufferString = '';
		for (let i = 0; i < bufferView.length; i++) {
			bufferString += bufferView[i];
		  }
		return bufferString;
	}
}