const ESTADO_INICIAL = {
  aparelho:{},
  feed: [
    {
      id: 1,
      produto: 'Fone',
      cor: 'Preto',
      preco: '2.551,00'
    },
    {
      id: 2,
      produto: 'Relogio',
      cor: 'Prata',
      preco: '3.552,00'
    },
    {
      id: 3,
      produto: 'Camera',
      cor: 'Perola',
      preco: '4.553,00'
    },
    {
      id: 4,
      produto: 'Celular',
      cor: 'Pink',
      preco: '5.554,00'
    },
  ]
}

export default function aparelhos(state = ESTADO_INICIAL, action) {
  console.log(action);
  if (action.type==='ADD_CAR') {
    return{
      ...state,
      aparelho: action.aparelhos,
    }
  }
  return state
}