<template>
  <div  class="mMusic" ref="mMusic">
    <div class="imgplay"></div>
    <div class="mMusiclistscroll">
      <div class="userMusic" @click="">
        <div class="userMusic-header">
          <p class="userMusic-header_text">Quer Music</p>
        </div>
        <div class="userMusic-conter">
          <div class="userMusic-conter_img"></div>
          <div class="userMusic-conter_name">简约不失优雅</div>
          <p class="userMusic-conter_signature">时间像海绵里的水，想挤总是能挤出来的</p>
          <div class="userMusic-floor">
            <div class="userMusic-floor-box">
              <div class="userMusic-floor_img crimson">{{playNum}}</div>
              <p class="userMusic-floor-name">累计播放</p>
            </div>
            <div class="userMusic-floor-box">
              <div class="userMusic-floor_img">0</div>
              <p class="userMusic-floor-name">关注</p>
            </div>
            <div class="userMusic-floor-box">
              <div class="userMusic-floor_img">0</div>
              <p class="userMusic-floor-name">粉丝</p>
            </div>
          </div>
        </div>
      </div>
      <div class="musicCon">
        <div class="musicContxt">音乐列表</div>
      </div>
      <div class="musicList" ref="musicList">
        <ul class="musicList-ul">
          <li class="musicList-ul_player" v-for="(key, index) in music" @click="pndplayer(index)">
            <p class="musicList-ul_player-arrName">{{key.arrName}}</p>
            <p class="musicList-ul_player-songName">{{key.songName}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Scroll from 'better-scroll'
  import {mapMutations, mapState} from 'vuex'
  export default {
    name: 'mMusic',
    data () {
      return {
        indexNum: ''
      }
    },
//    实时监听
    mounted () {
      this.$nextTick(() => {
        this.scroll()
      })
    },
    methods: {
      ...mapMutations([
        'playerShow',
        'playerMusic',
        'indexstate'
      ]),
      yoo () {
        this.yo = !this.yo
      },
      pndplayer (index) {
        this.indexstate(index)
        this.tifo()
        this.playerShow()
      },
      scroll () {
        /* eslint-disable no-new */
        new Scroll(this.$refs['musicList'], {
          click: true
        })
      }
    },
    computed: {
      ...mapState([
        'music',
        'tifo',
        'currentState',
        'playNum'
      ])
    }
  }
</script>
