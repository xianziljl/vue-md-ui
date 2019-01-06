import MAvatar from './avatar.vue'
import MAvatarGroup from './avatar-group.vue'

const avatar = {}

avatar.install = function (Vue) {
  Vue.component(MAvatar.name, MAvatar)
  Vue.component(MAvatarGroup.name, MAvatarGroup)
}

export default avatar
