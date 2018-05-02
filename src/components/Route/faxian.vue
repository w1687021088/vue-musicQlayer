<template>
  <div class="faxian">
    <div class="faxian_box">
      <search></search>
      <div class="leke_conter">
        <ul class="ul_leke">
          <li class="leke" v-for="(item, index) in leku"  @click="lekefnc(item, index)">
            <span class="lekespan" :class="{'lekecolor': item.lekuif}">{{item.text}}</span>
          </li>
        </ul>
        <div class="line"></div>
        <div>
          <Musiclibrary v-show="index0 == add"></Musiclibrary>
          <Lyingbetween  v-show="index1 == add"></Lyingbetween>
          <Recommend  v-show="index2 == add"></Recommend>
          <Watch  v-show="index3 == add"></Watch>
        </div>
      </div>
    </div>
    <arrAdd></arrAdd>
  </div>
</template>
<script>
  import Musiclibrary from '../faxian/Music_library.vue'
  import Lyingbetween from '../faxian/Lying_between.vue'
  import Recommend from '../faxian/Recommend.vue'
  import Watch from '../faxian/Watch.vue'
  import arrAdd from '../faxian/arrAdd.vue'
  import search from '../faxian/search.vue'
  export default {
    data () {
      return {
        inp: '这就是街舞',
        showinput: false,
        leku: [
          {text: '乐库', lekuif: true},
          {text: '推荐', lekuif: false},
          {text: '趴间', lekuif: false},
          {text: '看点', lekuif: false}
        ],
        index0: 0,
        index1: 1,
        index2: 2,
        index3: 3,
        add: false
      }
    },
    mounthed () {
      this.$nextTick(() => {
        this.scroll()
      })
    },
    methods: {
      lekefnc (item, index) {
        this.leku.forEach(val => {
          val.lekuif = false
        })
        item.lekuif = true
        this.add = index
      }
    },
    components: {
      Musiclibrary,
      Lyingbetween,
      Recommend,
      Watch,
      arrAdd,
      search
    }
  }
</script>
