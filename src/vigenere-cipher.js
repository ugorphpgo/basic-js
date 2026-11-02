/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.process(message, key, 1);
  }

  decrypt(message, key) {
    return this.process(message, key, -1);
  }

  process(message, key, direction) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const codeA = 'A'.charCodeAt(0);
    const upperKey = key.toUpperCase();
    let keyIndex = 0;

    const chars = [...message.toUpperCase()].map((char) => {
      if (char < 'A' || char > 'Z') return char;

      const shift = upperKey.charCodeAt(keyIndex % upperKey.length) - codeA;
      keyIndex += 1;
      return String.fromCharCode(codeA + (char.charCodeAt(0) - codeA + direction * shift + 26) % 26);
    });

    return (this.isDirect ? chars : chars.reverse()).join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
