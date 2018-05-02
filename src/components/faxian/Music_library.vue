<template>
  <div class="Mcliby"  ref="MclibyConent">
    <div class="Mcliby-conent">
      <ul class="Mcliby-conent_ul">
        <li class="Mcitem" v-for="item in Mc">
          <p class="genre">{{item.genre}} > </p>
          <p class="genreNumber">{{item.genreNumber}}</p>
          <p class="genreRest">{{item.genreRest}}</p>
        </li>
      </ul>
      <div class="Mc-conter">
        <div class="Mc_Recd">
          <p class="text_left text">为你推荐</p>
        </div>
        <div class="Mc_arr">
          <ul class="Mc_arrcc">
            <li class="Mc_arrcc_box" v-for="item in adb" @click="arrAdd(item)">
              <div class="Mc_arrcc_box_jhe">
                <img class="Mc_arrcc_box_jhe-img" :src= 'item.Ssrc'/>
              </div>
              <p class="Mc_arrcc_box_ert">{{item.Nname}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Scroll from 'better-scroll'
  import axios from 'axios'
  import {mapMutations, mapState} from 'vuex'
  export default {
    name: 'Mc',
    data () {
      return {
        Mc: [
          {
            genre: '曲风流派',
            genreNumber: '1000+',
            genreRest: '种以上'
          },
          {
            genre: '艺人',
            genreNumber: '70万+',
            genreRest: '在清音'
          },
          {
            genre: '场景·心情',
            genreNumber: '2000万+',
            genreRest: '随心'
          }
        ],
        Songarr: [],
        adb: [
          {Nname: '田馥甄', Ssrc: '../../../static/img/tianfuz.jpg'},
          {Nname: '周杰伦', Ssrc: '../../../static/img/zhoujielun.jpg'},
          {Nname: '林俊杰', Ssrc: '../../../static/img/jj.jpg'},
          {Nname: '冯提莫', Ssrc: '../../../static/img/ftm.jpg'},
          {Nname: '汪苏泷', Ssrc: '../../../static/img/wsl.jpg'},
          {Nname: '张艺兴', Ssrc: '../../../static/img/zyx.jpg'},
          {Nname: '萌萌哒天团', Ssrc: '../../../static/img/mmd.jpg'},
          {Nname: '薛之谦', Ssrc: '../../../static/img/xzq.jpg'},
          {Nname: '邓紫棋', Ssrc: '../../../static/img/dzq.jpg'}
        ],
        ttttt: ''
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
      scroll () {
        /* eslint-disable no-new */
        new Scroll(this.$refs['MclibyConent'], {
          click: true
        })
      },
      ...mapMutations([
        'arrShowinfo',
        'arrSongarrinfo',
        'itemarrinfo'
      ]),
      arrAdd (item) {
        this.arrShowinfo()
        this.itemarrinfo(item)
        axios.get('https://route.showapi.com/213-1?keyword=' + item.Nname + '&page=1&showapi_appid=53355&showapi_sign=131ae8144af04bb69eede810317c456a').then(res => {
          this.arrSongarrinfo(res.data.showapi_res_body.pagebean.contentlist)
        })
      }
    },
    computed: {
      ...mapState([
        'arrShow',
        'arrSongar'
      ])
    }
  }
</script>
