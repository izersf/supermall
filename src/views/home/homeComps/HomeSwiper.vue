!<template>
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" @load="imageLoad"/>
            </a>
        </swiper-item>
    </swiper>
</template>

<script type="text/ecmascript-6">
    import {Swiper, SwiperItem} from 'components/common/swiper';
    export default {
        name:'HomeSwiper',
        props:{
            banners:{
                type:Array,
                default:[]
            }
        },
		data(){
			return {
				isLoad:false
			}
		},
        components:{
            Swiper,
            SwiperItem
        },
		methods:{
			imageLoad(){
				if(!this.isLoad){
					this.$emit('swiperImageLoad')
					this.isLoad=true
				}
			}
		}
    }
</script>

<style scoped>
</style>
