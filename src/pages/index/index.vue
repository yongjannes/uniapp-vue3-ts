<script setup lang="ts">
import type { BannerItem, CategoryItem, HotItem } from '@/types/home.d'
import {getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI} from '@/services/home';
import {ref} from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue';
import type { XtxGuessInstance } from '@/types/component';

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

const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(() => { 
    getHomeBannerData()
    getHomeCategoryData()
    getHomeHotData()
})

const guessRef = ref<XtxGuessInstance>()
const onScrollToLower = () => {
  guessRef.value?.getMore()
}

</script>

<template>
    <CustomNavbar />
    <scroll-view  @scrolltolower="onScrollToLower " class="scroll-view" scroll-y>
      <XtxSwiper  :list="bannerList"/>
    <CategoryPanel :list="categoryList" />
    <HotPanel  :list="hotList" />
    <XtxGuess ref="guessRef" />
    </scroll-view>
    
</template>

<style lang="scss">
page{
  background-color: #F7F7F7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view{
  flex: 1;
}
</style>
