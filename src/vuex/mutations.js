/**
 * Created by tim on 2018/4/20.
 */
export default {
  playerShow (state) {
    state.ouve = !state.ouve
  },
  playerMusic (state, musicKu) {
    state.music = musicKu
  },
  indexstate (state, indexe) {
    state.currentState = indexe
  },
  ttn (state, info) {
    state.tifo = info
  },
  playNuminfo (state) {
    state.playNum++
  },
  arrShowinfo (state) {
    state.arrShow = !state.arrShow
  },
  arrSongarrinfo (state, arrtodos) {
    state.arrSongarr = arrtodos
  },
  itemarrinfo (state, itemarrtodo) {
    state.itemarr = itemarrtodo
  }
}
