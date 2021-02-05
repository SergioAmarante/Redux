import React from 'react'
import {connect} from "react-redux";

const CarShop = ({aparelho}) => {
  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <strong>{aparelho.produto} | {aparelho.cor} |{aparelho.preco} |</strong>
    </div>
  )
}

export default connect((state)=>({
  aparelho: state.aparelhos.aparelho 
}))(CarShop);
