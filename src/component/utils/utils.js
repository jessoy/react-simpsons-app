export function findCharacterIndex(characterData, data) {
  return data.findIndex((item) => {
    return (
      characterData.character === item.character &&
      characterData.quote === item.quote
    );
  });
}

export const removeDuplicates = (array) => {
  const uniqueElements = [];
  array.forEach((character) => {
    const index = uniqueElements.findIndex((item) => {
      return character.character === item.character;
    });

    if (index === -1) {
      uniqueElements.push(character);
    }
  });
  return uniqueElements;
};

export function compareCharacterName(a, b) {
  if (a.character.toLowerCase() < b.character.toLowerCase()) {
    return -1;
  }
  if (a.character.toLowerCase() > b.character.toLowerCase()) {
    return 1;
  }
  return 0;
}
