<template>
  <section class='my-page'>
    <section class="art-wrapper">
      <h3 class="art-wrapper__title">法律公告</h3>
      
      <h4 class="art-wrapper__sub">一、权利归属</h4>
      <p class="art-wrapper__section">1.1.方兔网站的Logo、“方兔”、“squrab”等文字、图形及其组合，以及方兔网站的其他标识、徽记、方兔服务的名称等为方兔及其关联公司在中国和其他国家的注册商标。未经方兔书面授权，任何人不得以任何方式展示、使用或做其他处理（包括但不限于复制、传播、展示、镜像、上传、下载），也不得向他人表明您有权展示、使用或做其他处理。</p>
      <p class="art-wrapper__section">1.2.方兔所有的产品、服务、技术与所有程序（以下或简称“技术服务”）的知识产权均归属于方兔或归其权利人所有。</p>
      <p class="art-wrapper__section">1.3.除非方兔另行声明，方兔拥有方兔在网站内发布文档等信息（包括但不限于文字、图形、图片、照片、音频、视频、图标、色彩、版面设计、电子文档）的所有权利（包括但不限于版权、商标权、专利权、商业秘密和其他所有相关权利）。未经方兔许可，任何人不得擅自使用如上内容（包括但不限于通过程序或设备监视、复制、转播、展示、镜像、上传、下载方兔网站内的任何内容）。被授权浏览、复制、打印和传播属于方兔网站内信息内容的，该等内容都不得用于商业目的且所有信息内容及其任何部分的使用都必须包括此权利声明。</p>

      <h4 class="art-wrapper__sub">二、责任限制</h4>
      <p class="art-wrapper__section">2.1.方兔用户在方兔网站的论坛、社区以及市场上，自行上传、提供、发布相关信息，包括但不限于用户名称、公司名称、 联系人及联络信息，相关图片、资讯等，该等信息均由用户自行提供，方兔的用户须对其提供的任何信息依法承担全部责任。</p>
      <p class="art-wrapper__section">2.2.方兔网站上转载作品（包括论坛内容）出于传递更多信息之目的，并不意味方兔赞同其观点或证实其内容的真实性。</p>
      <p class="art-wrapper__section">2.3.方兔在此提示，您在使用方兔服务期间应当遵守中华人民共和国的法律，不得危害网络安全，不得利用方兔的服务从事他人侵犯名誉、隐私、知识产权和其他合法权益的活动。尽管有前述提示，方兔不对您使用方兔服务的用途和目的承担任何责任。</p>

      <h4 class="art-wrapper__sub">三、知识产权保护</h4>
      <p class="art-wrapper__section">我们尊重知识产权，反对并打击侵犯知识产权的行为。任何组织或个人认为方兔的网页（含www.squrab.com网页内容以及客户端页面）内容可能侵犯其合法权益的，可以通过向方兔客服致电（4008-588-855）提出权利通知，方兔将在收到知识产权权利人合格通知后依法尽快处理。</p>
    </section>
  </section>
</template>

<script>
 export default{
  name: 'FooterLaw',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
@include b(page) {
  padding: 70px 0 50px;
  .art-wrapper {
    width: 1200px;
    margin: 0 auto;

    &__title {
      text-align: center;
      font-size: $--font-size--extra-large * 2;
      font-weight: $--font-weight-bold;
      line-height: $--line-default;
    }

    &__sub {
      font-size: $--font-size--extra-large;
      font-weight: $--font-weight-bold;
      line-height: $--line-default;
    } 
    &__section {
      font-size: $--font-size-middle;
      line-height: $--line-default;
      text-indent: $--text-indent-default;
    }
  }
}
</style>