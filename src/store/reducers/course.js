const ESTADO_INICIAL = {
  activeLesson: {title:''},
  activeModule: {title:''},
  modules: 
  [
    {
      id: 1, title: "Opções de Pagamento", lessons: [
        { id: 1, title: "Cartão de Debito " },
        { id: 2, title: "Cartão de Credito " },
      ]
    },
    {
      id: 2, title: "Opções de Pagamento", lessons: [
        { id: 3, title: "A Vista " },
        { id: 4, title: "Parcelado" },
      ]
    },
  ]
}
export default function course(state = ESTADO_INICIAL, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return { ...state, activeLesson: action.lesson, activeModule: action.module
    };
  }
  return state;
}


