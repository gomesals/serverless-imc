'use strict'
const bmiOptions = [
  {
    classification: 'Magreza Grau III',
    range: '< 16 kg/m²',
    risk: null
  },
  {
    classification: 'Magreza Grau II',
    range: '16 a 16.9 kg/m²',
    risk: null
  },
  {
    classification: 'Magreza Grau I',
    range: '17 a 18.4 kg/m²',
    risk: null
  },
  {
    classification: 'Eutrofia (peso normal)',
    range: '18.5 a 24.9 kg/m²',
    risk: null
  },
  {
    classification: 'Sobrepeso',
    range: '25 a 29.9 kg/m²',
    risk: 'Aumentado'
  },
  {
    classification: 'Obesidade Grau I',
    range: '30 a 34.9 kg/m²',
    risk: 'Moderado'
  },
  {
    classification: 'Obesidade Grau II',
    range: '35 a 40 kg/m²',
    risk: 'Grave'
  },
  {
    classification: 'Obesidade Grau III',
    range: '> 40 kg/m²',
    risk: 'Muito grave'
  }
]

const calculate = (height, weight) => {
  return Math.round(weight / Math.pow(height / 100, 2) * 100) / 100
}
const result = (height, weight) => {
  const bmi = calculate(height, weight)
  let index = null
  if (bmi < 16) {
    index = 0
  } else if (bmi >= 16 && bmi < 16.9) {
    index = 1
  } else if (bmi >= 17 && bmi < 18.4) {
    index = 2
  } else if (bmi >= 18.5 && bmi < 24.9) {
    index = 3
  } else if (bmi >= 25 && bmi < 29.9) {
    index = 4
  } else if (bmi >= 30 && bmi < 34.9) {
    index = 5
  } else if (bmi >= 35 && bmi < 40) {
    index = 6
  } else if (bmi >= 40) {
    index = 7
  }
  return {
    bmi: bmiOptions[index]
  }
}

module.exports = {
  result
}
