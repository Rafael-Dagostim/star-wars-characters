const romanNumerals: Record<number, string> = {
  1: 'i',
  4: 'iv',
  5: 'v',
  9: 'ix',
  10: 'x',
  40: 'xl',
  50: 'l',
  90: 'xc',
  100: 'c',
  400: 'cd',
  500: 'd',
  900: 'cm',
  1000: 'm',
};

export const toRoman = (num: number): string => {  
  let result = '';

  const keys = Object.keys(romanNumerals)
    .map((k) => parseInt(k))
    .sort((a, b) => b - a);

  for (const key of keys) {
    while (num >= key) {
      result += romanNumerals[key];
      num -= key;
    }
  }

  return result;
}
