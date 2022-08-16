<template>
<div class='main-head container'>
    <div class="row">
        <div class="logo-container col-2">

        </div>
        <div class="col-6 d-flex justify-content-start">
            <v-tabs>
                <v-tab>
                    <router-link to="/stocks">
                        محصولات
                    </router-link>
                </v-tab>
                <v-tab>
                    سبد خرید
                </v-tab>
            </v-tabs>
        </div>
        <div class="ballance col-4">
            <span>موجودی: </span>
            <span>100000</span>
        </div>
    </div>
</div>
</template>

<script>

export default{
    name:'MainHead',
    data(){
        return{
            // value:1,
        }
    }
}
</script>
<style lang="scss">
    .main-head{
        padding: 20px 0;
        border-bottom: 1px solid gray;
        .ballance{
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
        }
        .active{
            border: 1px solid #000;
        }
        a{
            text-decoration: none !important;
        }
    }
</style>