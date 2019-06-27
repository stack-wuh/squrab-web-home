import router from '../router.js'

export const _router = {
  methods: {
    $_push({path, name, query, params}){
      setTimeout(e => {
        router.push({path, name, query, params})
      }, 300)
    }
  }
}
