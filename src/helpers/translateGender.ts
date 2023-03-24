const genders = {
  male: 'masculino',
  female: 'feminino',
  hermaphrodite: 'hermafrodita',
  none: 'nenhum'
}

export const translateGender = (gender: Gender) => {
  return genders[gender] || 'N/A'
}

export type Gender = keyof typeof genders