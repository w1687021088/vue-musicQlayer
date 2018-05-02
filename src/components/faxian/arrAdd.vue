<template>
    <div class="arrAdd" :class="{'arrAdd_show': arrShow}">
      <div class="arrAdd_TD">
        <div class="arrAdd-bj">
          <img :src="itemarr.Ssrc" class="arrAdd-bj-img"/>
        </div>
        <div class="arrAdd_pd">
          <div class="arrAdd-header-return" @click="arrShowinfo"></div>
          <h3 class="arrAdd-header_song">歌单</h3>
        </div>
        <div class="arrAdd-headerne">
          <img :src="itemarr.Ssrc" alt="" class="arrAdd-header_conent_img"/>
          <div class="arrAdd-header_conent_txt">
            <p class="arrAdd-header_conent_txt_in conent_txt">全是走心的歌，好听没话说</p>
            <p class="arrAdd-header_conent_txt_qupai conent_txt">流行</p>
            <p class="arrAdd-header_conent_txt_arr conent_txt">{{itemarr.Nname}}</p>
          </div>
        </div>
      </div>
      <div class="arrAdd_con">
        <div class="arrAdd_con-txt">全部音乐</div>
      </div>
      <div class="arrAddList" ref="arrAddList">
        <ul class="arrAddList-ul">
          <li class="arrAddList_palyer" v-for="item in arrSongarr" @click="arrAddListpalyer">
            <div class="arrAddList_palyer_left">
              <img :src="item.albumpic_small" class="arrAddList_palyer_left_img">
            </div>
            <div class="arrAddList_palyer_right">
              <p class="arrAddList_palyer_right_songName">{{item.songname}}</p>
              <p class="arrAddList_palyer_right_songArr">{{item.singername}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import {mapMutations, mapState} from 'vuex'
  import Scroll from 'better-scroll'
  export default {
    data () {
      return {
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll()
      })
      this.$nextTick(() => {
        this.playerPlayback = 1
      })
    },
    methods: {
      arrAddListpalyer () {
        alert('抱歉，目前API接口的音乐播放路径暂时无法使用！')
      },
      scroll () {
        /* eslint-disable no-new */
        this.$nextTick(() => {
          if (!this.cs) {
            this.cs = new Scroll(this.$refs['arrAddList'], {
              click: true
            })
          } else {
            this.cs.refresh()
          }
        })
      },
      ...mapMutations([
        'arrShowinfo'
      ])
    },
    computed: {
      ...mapState([
        'arrShow',
        'arrSongarr',
        'itemarr'
      ])
    }
  }
  //        genreClass: ['直接浏览', '流行', '摇滚', '民谣', '电子', '节奏布鲁斯', '爵士', '轻音乐', '嘻哈', '动漫', '布鲁斯', '金属', '新世纪', '乡村', '雷鬼', '古典', '唱作人', '拉丁', '中国特色', '实验', '儿童', '有声书'],
  //        genreMc: ['流行', '国语流行', '粤语流行', '欧美流行', '电音流行', '日本流行', '韩国流行', '成人流行', '艺术流行', '女子流行', '男孩流行', '青少年流行', '闽南语流行', '梦幻流行', '氛围流行', '阳光流行', '噪音流行', '噪响流行', '前卫流行', '传统流行', '童稚流行', 'C86', '巴洛克', '室内流行']
</script>
