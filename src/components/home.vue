<template>
<head-top></head-top>

<router-view></router-view>
</template>

<script>
import head from './header.vue';
export default {

 components:{
 	'head-top':head
 }

}
</script>