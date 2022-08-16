<template>
    <div class="col-12 col-lg-4 p-2">
        <div class="card text-right">
            <div class="card-title bg-success px-3">
                <small>
                    {{ stock.name }} : (قیمت :{{ stock.price }})
                </small>
            </div>
            <div class="card-body d-flex justify-content-between">
                <div class="">
                    <button class="btn btn-success" @click="buyStock" :disabled='quantity <= 0'>خرید</button>
                </div>
                <div class="">
                    <input type="number" class="form-control" v-model='quantity'/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['stock'],
    data(){
        return{
            quantity:0,
        }
    },
    methods:{
        buyStock(){
            const order = {
                stockId:this.stock.id,
                stockPrice:this.stock.price,
                quantity:this.quantity,
            }
            console.log(order)
            this.quantity = 0
        }
    }
}
</script>