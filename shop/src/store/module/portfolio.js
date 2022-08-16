const state = {
    funds:10000,
    stocks:[]
}

const mutations = {
    'BUY_STOCKS'(state, {stockId, stockPrice, quantity}){
         const record = state.stocks.find(e => {
            e.id == stockId
         })
         if(record){
            record.quantity += quantity
         }else{
            state.stocks.push({
                id:stockId,
                quantity:quantity,
            })
         }
         state.funds -= stockPrice * quantity
    },
    'SELL_STOCKS'(state, {stockId, stockPrice, quantity}){
        const record = state.stocks.find(e => {
            e.id == stockId
         })
         if(record.quantity > quantity){
            record.quantity -= quantity
         }else{
            state.stocks.splice(state.stocks.indexOf(record), 1)
         }
         state.funds += stockPrice * quantity
    }
}

const actions = {
    sellStock:(context, order) => {
        context.commit('SELL_STOKCS', order)
    }
}

const getters = {
    stockPortfolio(state, getters){
        return state.stocks.map(stock => {
            
        })
    }
}