<script setup lang="ts">
import type { BannerItem, CategoryItem } from '@/types/home.d'
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

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
onLoad(() => { 
    getHomeBannerData()
    getHomeCategoryData()
})


</script>

<template>
    <CustomNavbar />
    <XtxSwiper  :list="bannerList"/>
    <CategoryPanel :list="categoryList" />
    
</template>

<style lang="scss">
page{
  background-color: #F7F7F7;
}
</style>
