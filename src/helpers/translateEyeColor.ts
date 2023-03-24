const eyeColors = {
  'blue': 'azul',
  'yellow': 'amarelo',
  'red': 'vermelho',
  'brown': 'castanho',
  'blue-gray': 'azul-cinzento',
  'black': 'preto',
  'orange': 'laranja',
  'hazel': 'avelã',
  'pink': 'rosa',
  'unknown': 'desconhecido',
  'red, blue': 'vermelho, azul',
  'gold': 'dourado',
  'green, yellow': 'verde, amarelo',
  'white': 'branco',
}

export const translateEyeCollor = (color: keyof typeof eyeColors) => {
  return eyeColors[color] || 'N/A'
}

export type EyeColor = keyof typeof eyeColors;