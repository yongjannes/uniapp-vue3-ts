<script setup lang="ts">
import type { BannerItem } from '@/types/home.d'
import {getHomeBannerAPI, getHomeCategoryAPI} from '@/services/home';
import {ref} from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue';

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
 
}
onLoad(() => { 
    getHomeBannerData()
    getHomeCategoryData()
})


</script>

<template>
    <CustomNavbar />
    <XtxSwiper  :list="bannerList"/>
    <CategoryPanel />
    
</template>

<style lang="scss">
page{
  background-color: #F7F7F7;
}
</style>
