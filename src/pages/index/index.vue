<script setup lang="ts">
import type { BannerItem } from '@/types/home.d'
import {getHomeBannerAPI} from '@/services/home';
import {ref} from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'


const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
  bannerList.value = res.result
   
}

onLoad(() => { 
    getHomeBannerData()
})


</script>

<template>
    <CustomNavbar />
    <XtxSwiper  :list="bannerList"/>
    
</template>

<style lang="scss">
//
</style>
