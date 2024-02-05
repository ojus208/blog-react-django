import {configureStore} from '@reduxjs/toolkit'
import searchfilter from './sclices/searchfilter';


export default configureStore({reducer: {
    filter: searchfilter,
  },});