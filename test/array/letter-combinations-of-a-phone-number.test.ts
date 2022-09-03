import letterCombinations from '../../src/array/letter-combinations-of-a-phone-number'

test('letterCombinations', () => {
  expect(letterCombinations('')).toEqual([])
  expect(letterCombinations('4')).toEqual(['g', 'h', 'i'])
  expect(letterCombinations('8619')).toEqual(['tmw',
    'tmx',
    'tmy',
    'tmz',
    'tnw',
    'tnx',
    'tny',
    'tnz',
    'tow',
    'tox',
    'toy',
    'toz',
    'umw',
    'umx',
    'umy',
    'umz',
    'unw',
    'unx',
    'uny',
    'unz',
    'uow',
    'uox',
    'uoy',
    'uoz',
    'vmw',
    'vmx',
    'vmy',
    'vmz',
    'vnw',
    'vnx',
    'vny',
    'vnz',
    'vow',
    'vox',
    'voy',
    'voz'])
  expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})
