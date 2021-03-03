import getAvatarTextFromDisplayName from './getAvatarTextFromDisplayName';

const mock = {
  good: 'Some Man',
  spaces: 'Some     Man',
  multiple: 'Some Man for example from Spain',
  oneWord: 'Man',
};

const expectation = {
  good: 'SM',
  oneWord: 'Ma',
};

describe('getAvatarTextFromDisplayName', () => {
  test('Positive: Good', () => {
    expect(getAvatarTextFromDisplayName(mock.good)).toBe(expectation.good);
  });

  test('Positive: With multiple spaces', () => {
    expect(getAvatarTextFromDisplayName(mock.spaces)).toBe(expectation.good);
  });

  test('Positive: Multiple words', () => {
    expect(getAvatarTextFromDisplayName(mock.multiple)).toBe(expectation.good);
  });

  test('Positive: One words', () => {
    expect(getAvatarTextFromDisplayName(mock.oneWord)).toBe(expectation.oneWord);
  });
});
