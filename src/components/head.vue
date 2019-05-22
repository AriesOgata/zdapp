<template>
    <header id='head_top'>
        <section class="head_goback" v-if="close" @click="$router.go(-1)">
            <img src="../images/close.png" />
        </section>
        <router-link :to="userInfo? '/profile':'/login'" v-if='signinUp' class="head_login">
            <svg class="user_avatar" v-if="userInfo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg>
            <span class="login_span" v-else>登录|注册</span>
        </router-link>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
    </header>
</template>

<script>
    export default {
    	data(){
            return{

            }
        },
        mounted(){

        },
        props: ['signinUp', 'headTitle', 'close'],
        computed: {

        },
        methods: {
        },

    }

</script>
