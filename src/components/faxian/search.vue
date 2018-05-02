<template>
  <div class="shousuo" :class="{'shousuoz-index': searchShow}">
    <div class="search" :class="{'search_backgroud': searchShow}">
     <input
       type="text" class="shousuo_input"
       placeholder="搜索音乐"
       @focus="searchShow = true"
       :class="{'shousuo_input-width': searchShow}"
       v-model="searchvalue"
     />
     <div class="search_cancel" :class="{'search_cancel-show': searchShow}" @click="searchShow = false">取消</div>
   </div>
   <div class="searchList" :class="{'searchListshow': searchShow}" ref="searchList">
     <ul>
       <li class="searchListtodo" v-for="item in searchSongList" @click="len">
         <p class="itemtxt">{{item.songname}}</p>
       </li>
     </ul>
   </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import Scroll from 'better-scroll'
  export default {
    name: 'search',
    data () {
      return {
        searchvalue: '',
        searchShow: false,
        searchSongList: []
      }
    },
    watch: {
      searchvalue (val1, val2) {
        axios.get('https://route.showapi.com/213-1?keyword=' + val1 + '&page=1&showapi_appid=53355&showapi_sign=131ae8144af04bb69eede810317c456a').then(res => {
          console.log(res.data.showapi_res_body.pagebean.contentlist)
          this.searchSongList = res.data.showapi_res_body.pagebean.contentlist
          if (!this.cs) {
            this.cs = new Scroll(this.$refs['searchList'], {
              click: true
            })
          } else {
            this.cs.refresh()
          }
        })
      }
    },
    methods: {
      len () {
        alert('抱歉，目前API接口的音乐播放路径暂时无法使用！')
      }
    }
  }
</script>
