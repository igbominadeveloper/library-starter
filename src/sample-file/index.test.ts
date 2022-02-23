import { toLowerCase } from '.';

describe('Lower case', () => {
  it('converts word to lower case', () => {
    const phrase = 'I should be in LOWER CAse';
    const phraseInLowerCase = 'i should be in lower case';

    const lowerCaseWord = toLowerCase(phrase);

    expect(lowerCaseWord).toBe(phraseInLowerCase);
  });
});
