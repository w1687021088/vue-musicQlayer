<template>
   <div>
     <div id="QerMc">
       <div class="qerMc">
         <div class="Qer_top">
           <div class="faxian bottom" @click="apiger(bvor[0])">
             <router-link to="/" :class="{'b2225': bvor[0].bac}">发现</router-link>
           </div>
           <div class="bofang">
             <div class="bofangnei" @click="pig">播放</div>
           </div>
           <div class="wodeyinyue bottom" @click="apiger(bvor[1])">
             <router-link to="/wodeyinyue" :class="{'b2225': bvor[1].bac}">我的音乐</router-link>
           </div>
           <!--<div class="dongtai bottom" @click="apiger(bvor[2])">-->
             <!--<router-link to="/dongtai" :class="{'b2225': bvor[2].bac}">动态</router-link>-->
           <!--</div>-->
           <!--<div class="gerenzhongxin bottom" @click="apiger(bvor[3])">-->
             <!--<router-link to="/gerenzhongxin" :class="{'b2225': bvor[3].bac}">个人</router-link>-->
           <!--</div>-->
         </div>
       </div>
       <bofang ref="player"></bofang>
       <router-view></router-view>
     </div>
   </div>
</template>
<script>
  import bofang from './components/Route/player.vue'
  import {mapMutations, mapState} from 'vuex'
  import axios from 'axios'
  export default {
    name: 'App',
    data () {
      return {
        datas: [],
        bvor: [
          {bac: true},
          {bac: false}
        ],
        musicKu: [],
        indexe: '11'
      }
    },
    methods: {
      ...mapMutations([
        'playerShow',
        'playerMusic',
        'ifsfoso',
        'ttn',
        'songCerfoin'
      ]),
      apiger (item) {
        this.bvor.forEach(val => {
          val.bac = false
        })
        item.bac = true
      },
      pig () {
        this.playerShow()
//        this.ttn(this.tnt)
        this.tifo()
      },
      tnt () {
        //        点击播放器 将 数据发送给bofang组件
        this.$refs.player.ert = this.music
        this.$refs.player.songnun = this.currentState
        this.$refs.player.replace(this.currentState)
      }
    },
    components: {
      bofang
    },
    computed: {
      ...mapState([
        'ouve',
        'music',
        'currentState',
        'tifo'
      ])
    },
    mounted () {
      axios.get('/static/music.json').then(res => {
        this.playerMusic(res.data.data.music)
      })
//      Dom加载后执行
      this.ttn(this.tnt)
    }
  }
</script>
<style>

</style>
