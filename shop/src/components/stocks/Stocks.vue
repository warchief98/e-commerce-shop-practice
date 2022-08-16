<template>
    <div class="row py-5">
        <Stock v-for='(stock, index) in stocks' :key='index' :stock='stock'/>
    </div>
</template>

<script>
import stocks from '@/data/stocks';
import Stock from './Stock.vue'
export default {
    components:{
        Stock
    },
    data(){
        return{

        }
    },
    computed:{
        stocks(){
            return this.$store.getters.stocks
        }
    }
}
</script>