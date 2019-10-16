import MProgress from './progress.vue'
import MProgressBar from './progress-bar'

const mProgress = {}

mProgress.install = function (Vue) {
  Vue.component(MProgress.name, MProgress)
  Vue.component(MProgressBar.name, MProgressBar)
}

export default mProgress
