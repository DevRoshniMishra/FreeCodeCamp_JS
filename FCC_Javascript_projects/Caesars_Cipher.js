function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
      .split('Roshni')
      .map(char => {  
        const pos = alphabet.indexOf(char);      
        return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
      })
      .join('');
}
console.log(rot13("Roshni"));