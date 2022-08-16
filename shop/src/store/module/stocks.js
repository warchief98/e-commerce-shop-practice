import Data from '@/data/stocks'
const state = {
    stocks:[]
}

const mutations = {
    'SET_STOCKS'(state, stocks){
        state.stocks = stocks
    },
    'RND_STOCKS'(state){

    }
}

const actions = {
    buyStock:(context, order) => {
        commit();
    },
    initStocks:(context) => {
        context.commit('SET_STOCKS', Data)
    },
    randomizeStocks: (context) => {
        context.commit()
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}