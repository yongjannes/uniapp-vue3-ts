<template name="skeleton">
    <view is="components/XtxSwiper">
        <view class="carousel XtxSwiper--carousel">
            <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                <swiper-item
                    style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                        <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                    </navigator>
                </swiper-item>
            </swiper>
            <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
            </view>
        </view>
    </view>
    <view is="pages/index/components/CategoryPanel">
        <view class="category CategoryPanel--category">
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-464 sk-text">居家</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-516 sk-text">锦鲤</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-719 sk-text">服饰</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-915 sk-text">母婴</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-837 sk-text">个护</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-315 sk-text">严选</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-70 sk-text">数码</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-442 sk-text">运动</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-344 sk-text">杂项</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-671 sk-text">品牌</text>
            </navigator>
        </view>
    </view>
    <view is="pages/index/components/HotPanel">
        <view class="panel HotPanel--panel hot HotPanel--hot">
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-829 sk-text">特惠推荐</text>
                    <text
                        class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-485 sk-text">精选全攻略</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-294 sk-text">爆款推荐</text>
                    <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-940 sk-text">最受欢迎</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-822 sk-text">一站买全</text>
                    <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-329 sk-text">精心优选</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-123 sk-text">新鲜好物</text>
                    <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-82 sk-text">生活加分项</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
        </view>
    </view>
</template>
 
<style lang="scss">
/* #ifdef H5 || APP-PLUS */
@import '@/components/styles/XtxSwiper.scss';
@import './styles/CategoryPanel.scss';
@import "./styles/HotPanel.scss";
/* #endif */
// H5端默认开启了scoped，导致组件基础样式无效

.sk-transparent {
    color: transparent !important;
}

.sk-text-0-0000-719 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-371 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-464 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-516 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-719 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-915 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-837 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-315 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-70 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-442 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-344 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-671 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-829 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 42.6563rpx;
    position: relative !important;
}

.sk-text-14-2857-485 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
}

.sk-text-14-2857-294 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 42.6563rpx;
    position: relative !important;
}

.sk-text-14-2857-940 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
}

.sk-text-14-2857-822 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 42.6563rpx;
    position: relative !important;
}

.sk-text-14-2857-329 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
}

.sk-text-14-2857-123 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 42.6563rpx;
    position: relative !important;
}

.sk-text-14-2857-82 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>