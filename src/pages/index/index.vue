<script setup lang="ts">
import type { BannerItem, CategoryItem, HotItem } from '@/types/home.d'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home';
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue';
import PageSkeleton from './components/PageSkeleton.vue';
import { useGuessList } from '@/composables';


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

const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData()
  ])

  isLoading.value = false
})

const { guessRef, onScrolltolower } = useGuessList()

const isTriggered = ref(false)

// 自定义下拉刷新被触发
const onrefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData(),
  guessRef.value?.getMore()
  ]) // 关闭动画
  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar />
  <scroll-view refresher-enabled @refresherrefresh="onrefresherrefresh" :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower" class="scroll-view" scroll-y>
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="guessRef" />
    </template>

  </scroll-view>

</template>

<style lang="scss">
page {
  background-color: #F7F7F7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
