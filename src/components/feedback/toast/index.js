import MToastComponent from './toast'

const MToast = {
  instances: [],
  rearrange () {
    let bottom = 10
    MToast.instances.forEach((vm, i) => {
      const prev = MToast.instances[i - 1]
      bottom += (prev ? 10 + prev.height : 0)
      vm.bottom = bottom
    })
  }
}

MToast.install = function (Vue) {
  const defaultConfig = {
    content: '默认提示',
    action: '',
    timeout: 2500,
    position: 'center'
  }
  Vue.prototype.$toast = function (option) {
    return new Promise((resolve, reject) => {
      let opts = {}
      if (typeof option === 'string') opts = Object.assign({}, defaultConfig, { content: option })
      else opts = Object.assign({}, defaultConfig, option)

      const ToastTemplate = Vue.extend(MToastComponent)
      let vm = new ToastTemplate({
        data: () => opts,
        methods: {
          actionClick () {
            vm.hide()
            resolve()
          },
          hide () {
            if (!vm) return
            vm.show = false
            setTimeout(() => {
              document.body.removeChild(vm.$el)
              MToast.instances.splice(MToast.instances.indexOf(vm), 1)
              vm.$destroy()
              vm = null
              MToast.rearrange()
            }, 200)
          }
        }
      })
      MToast.instances.push(vm)

      const ele = vm.$mount().$el
      document.body.appendChild(ele)
      vm.width = ele.clientWidth
      vm.height = ele.clientHeight
      ele.style.marginLeft = `-${vm.width / 2}px`
      MToast.rearrange()
      vm.show = true
      if (vm.timeout > 0) {
        setTimeout(vm.hide, vm.timeout)
      }
    })
  }
}

export default MToast
