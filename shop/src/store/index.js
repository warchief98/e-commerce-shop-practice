import Vue from 'vue'
import Vuex from 'vuex'
import Stocks from '@/store/module/stocks'

Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
    Stocks,
   }
})
