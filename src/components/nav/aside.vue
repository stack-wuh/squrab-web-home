<template>
  <section class="wrapper aside-wrapper">
      <div class="">
        aside
      </div>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {},
  name: 'LayoutAside',
  components: {},
  computed: {},
  data(){
    return {}
  },
  methods: {},
  created(){}
}
</script>
<style lang="scss" scoped>
.aside-wrapper{
  width: 220px;
  height: 100%;
  background-color: rgba(204,226,212,1);
}
</style>
