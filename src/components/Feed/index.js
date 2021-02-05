import React from 'react'
import { connect } from "react-redux";

import {bindActionCreators} from "redux";
// nossas actions
import * as CarAction from "../../store/actions/actions";

const Feed = ({aparelhos, addCarShop }) => {
  return (
    <section>
      <h3>Feed de Produtos</h3>
      {/* {console.log(aparelhos)}       */}
      {aparelhos.map(item =>(
        <li key={item.id}>
          {item.produto} | {item.cor} | {item.preco} 
          <button onClick = {() => addCarShop(item)}>Comprar</button>
          </li>
      ))}

    </section>
  );
};

const mapStateToProps = (state) => ({
  aparelhos : state.aparelhos.feed,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(CarAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps )(Feed);
