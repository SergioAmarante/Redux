import {combineReducers} from 'redux';

import course from './course'
import aparelhos from './carShop'


export default combineReducers(
  {
    course,
    aparelhos,
  }
)