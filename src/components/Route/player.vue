<template>
  <div class="player" :class="{'playershow': ouve}">
    <img :src="imgBig" class="bue" ref="bue"/>
    <div class="bur">
      <div class="player_header marginauto">
        <div class="player_header_h-left posti" @click="playerShow"></div>
        <div class="player_header_h-right posti"></div>
      </div>
      <div class="player_Middle marginauto">
        <div class="player_Middle_McName">
          <span class="player_Middle_McName-name">{{arrName}}</span>
          <span class="player_Middle_McName-arr">- {{songName}} -</span>
        </div>
        <div class="player_Middle_list">
          <span class="player_Middle_list-Label">标准 ∨</span>
          <span class="player_Middle_list-Label">MV</span>
          <span class="player_Middle_list-Label">音效 o</span>
        </div>
        <div class="player_Middle_AlbumCover">
          <!--<div ref="AlbumCover" class="player_Middle_AlbumCover-R" :class="tranfram?'playanimation':'dontanimation'"></div>-->
          <img  :src="imgBig" class="player_Middle_AlbumCover-R" :class="tranfram?'playanimation':'dontanimation'"/>
        </div>
      </div>
      <div class="player_langer marginauto">
        <span class="player_langer-Time Ltime">{{initialTime || curser}}</span>
        <div class="player_langer-Progress" @click="auu">
          <span class="player_langer-Progress-Line" ref="ProgressLine"></span>
          <p class="player_langer-Progress-bar" ref="Progressbar"></p>
        </div>
        <span class="player_langer-Time Rtime">{{emdTime}}</span>
      </div>
      <div class="player_Playback marginauto">
        <div class="mucerty" :class="{
            'player_Playback-m1': playerPlayback === 1,
            'player_Playback-m2': playerPlayback === 2,
            'player_Playback-m3': playerPlayback === 3,
            'player_Playback-m4': playerPlayback === 4
        }" @click="Playbackmode"></div>
        <div  class="player_Playback-c player_Playback-cL" @click="PlaybackcL"></div>
        <div class="player_Playback_Switch">
          <div  class="player_Playback-z-lo lozT" v-show="zTlolo"  @click="play"></div>
          <div  class="player_Playback-z-zT lozT" v-show="zTlozT"  @click="pause"></div>
        </div>
        <div  class="player_Playback-c player_Playback-cR" @click="PlaybackcR"></div>
        <div class="player_Playback-List mucerty"></div>
      </div>
      <div class="plau marginauto">
        <ul  class="player_floor">
          <li class="player_floor-list" :class="loveif?'player_floor-love':'player_floor-loveR'" @click="loveif = !loveif"></li>
          <li class="player_floor-list download"></li>
          <li class="player_floor-list share"></li>
          <li class="player_floor-list comment"></li>
        </ul>
      </div>
    </div>
    <audio :src="songSrc" controls ref="audio" style="width: 1px; height: 1px; opacity: 0"></audio>
  </div>
</template>
<script>
  import {mapMutations, mapState} from 'vuex'
  export default {
    data () {
      return {
        playerPlayback: '1',
        songSrc: '',
        songTime: '',
        imgBig: '',
        arrName: '',
        songName: '',
        tranfram: false,
        zTlolo: true,
        zTlozT: false,
        loveif: true,
        timer: 'null',
        timernumdur: '0',
        timouer: '',
        curser: '00:00',
        tyropund: '',
        ert: [],
        songnun: '',
        dur: '0',
        Random: '',
        songid: ''
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.playerPlayback = 1
      })
    },
    computed: {
      ...mapState([
        'ouve',
        'music',
        'currentState',
        'playNum'
      ]),
      initialTime () {
        let t = 0
        let e = 0
        let s = 0
        if (this.curser < 10) {
          s = this.curser
          return `0${t}:${e}${s}`
        }
        if (this.curser < 60) {
          e = this.curser
          return `0${t}:${e}`
        }
        if (this.curser >= 60) {
          t = Math.floor(this.curser / 60)
          if ((this.curser % 60) < 10) {
            s = `0${this.curser % 60}`
          } else {
            s = this.curser % 60
          }
          return `0${t}:${s}`
        }
      },
      emdTime () {
        let hTime = Math.floor(this.songTime / 60)
        let eTime = (this.songTime % 60)
        if (eTime >= 10) {
          return `0${hTime}:${eTime}`
        } else {
          return `0${hTime}:0${eTime}`
        }
      }
    },
    methods: {
      ...mapMutations([
        'playerShow',
        'playNuminfo'
      ]),
//      点击暂停
      pause () {
        this.zTlolo = true
        this.zTlozT = false
        this.tranfram = false
        this.$refs.audio.pause()
        clearInterval(this.timouer)
        this.clear()
      },
//      点击播放
      play () {
        this.zTlolo = false
        this.zTlozT = true
        this.tranfram = true
        this.$refs.audio.play()
        this.timerSt()
        this.pange()
        if (this.zTlozT) {
          this.playNuminfo()
        }
      },
      auu (e) {
        let x = e.offsetX
        this.timernumdur = `${Math.round(x / 260 * 100)}`
        this.$refs.ProgressLine.style.width = `${this.timernumdur}%`
        this.$refs.audio.currentTime = (this.songTime / 100) * this.timernumdur
      },
      pange () {
        let This = this
        This.timouer = setInterval(function () {
          This.curser = Math.floor(This.$refs.audio.currentTime)
        }, 100)
      },
//      判断当前的播放模式
      istype () {
        if (this.playerPlayback === 1) {
          this.PlaybackcR()
        }
        if (this.playerPlayback === 4) {
          this.Randomplay()
        }
        this.clear()
        if (this.playerPlayback === 2) {
          this.play()
        } else if (this.playerPlayback === 3) {
          this.curser = `00:00`
          this.pause()
        }
        this.timernumdur = 0
      },
      replace (mun) {
        this.songSrc = this.ert[`${mun}`].songSrc
        this.songTime = this.ert[`${mun}`].songTime
        this.imgBig = this.ert[`${mun}`].imgBig
        this.arrName = this.ert[`${mun}`].arrName
        this.songName = this.ert[`${mun}`].songName
      },
      timerSt () {
        let This = this
        This.dur = Math.floor(This.$refs.audio.duration) / 100
        if (!isNaN(This.timernumdur)) {
          This.timer = setInterval(function () {
            This.timernumdur = Math.round(This.$refs.audio.currentTime / This.dur)
            if (This.curser === This.songTime) {
              This.istype()
            }
            This.$refs.ProgressLine.style.width = `${This.timernumdur}%`
          }, This.dur * 1000)
        } else {
          setTimeout(function () {
            This.timer = setInterval(function () {
              This.timernumdur = Math.round(This.$refs.audio.currentTime / This.dur)
              if (This.curser === This.songTime) {
                This.istype()
              }
              This.$refs.ProgressLine.style.width = `${This.timernumdur}%`
            }, This.dur * 1000)
          }, 100)
        }
      },
      PlaybackcR () {
        let This = this
        This.songnun++
        if (This.songnun > This.ert.length - 1) {
          This.songnun = 0
        }
//        清除timernumdur width，变为初始值 0
        This.replace(This.songnun)
        if (This.$refs.audio.src === This.songSrc) {
        } else {
//            必须重新刷新下，才能获取到当前的songUrl
          setTimeout(function () {
            This.clear()
            This.play()
            This.curser = `00:00`
            This.timernumdur = 0
            This.$refs.ProgressLine.style.width = `0%`
          }, 100)
        }
      },
      PlaybackcL () {
        let This = this
        This.songnun--
        if (This.songnun < 0) {
          This.songnun = This.ert.length - 1
        }
        This.clear()
//        清楚timernumdur width，变为初始值 0
        This.timernumdur = 0
        This.$refs.ProgressLine.style.width = `0%`
        This.replace(This.songnun)
        if (This.$refs.audio.src === This.songSrc) {
          This.play()
        } else {
//            必须重新刷新下，才能获取到当前的songUrl
          setTimeout(function () {
            This.play()
            This.curser = `00:00`
            This.timernumdur = 0
            This.$refs.ProgressLine.style.width = `0%`
          }, 100)
        }
      },
//      清楚定时器
      clear () {
        clearInterval(this.timer)
      },
//      点击更改播放模式 1列表循环 2单曲循环 3单曲 4随机
      Playbackmode () {
        this.playerPlayback++
        if (this.playerPlayback > this.ert.length) this.playerPlayback = 1
//        console.log(this.playerPlayback)
      },
      Randomplay () {
        let This = this
        let acet = Math.floor(Math.random() * 3)
        This.songnun = acet
//        清楚timernumdur width，变为初始值 0
        This.songSrc = this.ert[`${This.songnun}`].songUrl
        This.songTime = this.ert[`${This.songnun}`].songTime
        This.imgBig = this.ert[`${This.songnun}`].imgBig
        if (This.$refs.audio.src === This.songSrc) {
        } else {
//            必须重新刷新下，才能获取到当前的songUrl
          setTimeout(function () {
            This.clear()
            This.play()
            This.curser = `00:00`
            This.timernumdur = 0
            This.$refs.ProgressLine.style.width = `0%`
          }, 100)
        }
      }
    }
  }
</script>
