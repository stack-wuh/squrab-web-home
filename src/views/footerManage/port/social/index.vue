<template>
  <section class='my-page'>
    <section class="my-wrap">
      <nav class="my-wrap__lf">
        <ul class="lf-list">
          <li @click="handleClick(1)" :class="[{'is-item-active': currIndex == 1}]" class="lf-list__item">
            <span>招聘流程</span>
            <!-- <router-link :to="{path: '/footer/port/school#art1'}">招聘流程</router-link> -->
          </li>
          <li @click="handleClick(2)" :class="[{'is-item-active': currIndex == 2}]" class="lf-list__item">
            <span>校招动态</span>
            <!-- <router-link :to="{path: '/footer/port/school#art2'}">校招动态</router-link> -->
          </li>
          <li @click="handleClick(3)" :class="[{'is-item-active': currIndex == 3}]" class="lf-list__item">
            <span>F&Q</span>
            <!-- <router-link :to="{path: '/footer/port/school#art3'}">F&Q</router-link> -->
          </li>
        </ul>
        <router-link class="lf-link" :to="{path: '/footer/port/social'}">查看社会招聘</router-link>
      </nav>
      <section class="my-wrap__rg">
        <transition-group name="scroll" mode="in-out">
          <section v-if="currIndex == 1" class="rg__item" key="art1" id="art1">
              <div class="img-box">
                <img src="../../../../assets/imgs/footer/port/bg_school_header.png" alt="header">
              </div>
              <ul class="fs__list">
                <li>
                  <p class="fs__list--title">网申/内推</p>
                  <p class="fs__list--tips">6月11日-6月27日</p>
                </li>
                <li>
                  <p class="fs__list--title">笔试</p>
                  <p class="fs__list--tips">6月29日-6月30日</p>
                </li>
                <li>
                  <p class="fs__list--title">面试</p>
                  <p class="fs__list--tips">7月初开始</p>
                </li>
                <li>
                  <p class="fs__list--title">Offter发放</p>
                  <p class="fs__list--tips">7月中旬开始</p>
                </li>
              </ul>
          </section>
          <section v-else-if="currIndex == 2" class="rg__item" key="art2" id="art2">
            <el-table :data="data" border stripe>
              <el-table-column align="center" label="城市" prop="city"></el-table-column>
              <el-table-column align="center" label="学校" prop="school"></el-table-column>
              <el-table-column align="center" label="地点" prop="posi"></el-table-column>
              <el-table-column align="center" label="宣讲日期" prop="date"></el-table-column>
            </el-table>
          </section>
          <section v-else class="rg__item" key="art3" id="art3">
            <ul class="fq__list">
              <li>
                <p>2019春季校园招聘的招聘对象是？</p>
                <p>2019春季校园招聘分为两个部分   暑期实习：针对次年毕业生（毕业时间为2020.1.1-2020.12.31） 全职春招：针对应届毕业生（毕业时间为2018.8.1-2019.12.31），最高学历毕业后无全职工作经验的同学，都可以参加此次校园招聘。</p>
              </li>
              <li>
                <p>简历投递时间是？最多可以申请多少个职位？</p>
                <p>同学们注意啦，简历投递开放时间为2月25日至5月31日！每人只可投递1个职位，但可额外再选择一个调剂岗位。没有通过投递岗位的面试也不要灰心，如果调剂职位仍有空缺，且你的简历符合相应职位要求，可再次进入校招流程。贴不贴心？周不周到！夸我！（但还是希望同学们谨慎填报志愿，毕竟竞争还是hin激烈的呀</p>
              </li>
              <li>
                <p>职位投递成功后，还可以更改简历内容或投递职位吗？</p>
                <p>在简历筛选阶段，大家仍有机会修改完善简历信息或调整投递职位，其它阶段均不可以哦。还请同学们尽量在创建投递时填写完整的简历信息并选择最想要投递的职位，毕竟方兔网络HR小姐姐们的工作效率，你们懂的。</p>
              </li>
              <li>
                <p>招聘对所学专业和学历有限制嘛？非相关专业可以投递嘛？</p>
                <p>不同的岗位对人才的需求也会有所不同，有关专业和学历的需求都会在具体的职位描述中呈现，符合要求的同学都可以投递相应职位哒。</p>
              </li>
              <li>
                <p>可以用手机投递简历吗？</p>
                <p>用手机浏览器打开方兔网络招聘移动端选择职位投递，只需要填写个人信息即可，之后务必根据邮件提示在PC端完善简历哦，完善的简历可以提高简历筛选通过率。</p>
              </li>
              <li>
                <p>秋招投递没能被录用的同学，春招还有机会吗？</p>
                <p>
                  秋招结果不会影响春招的选拔与录用，还犹豫啥，简历投起来！
                </p>
              </li>
              <li>
                <p>
                  如何知道我的招聘进展？
                </p>
                <p>我们会通过邮件、短信等方式同步笔试及面试安排，请确保投递时填写的手机号和邮箱正确哦。</p>
              </li>
              <li>
                <p>笔试安排在什么时候？</p>
                <p>部分职位会有笔试环节，统一笔试共3次，3月16日、4月13日、4月27日，届时同学们都会提前收到通知哒～</p>
              </li>
              <li>
                <p>我可以参加视频面试吗？</p>
                <p>虽然你我距离很远，但我们招聘的诚意不减～同学们可以远程视频参与面试，面试前会提前进行短信、邮件等形式沟通，请注意查收哟！</p>
              </li>
              <li>
                <p>方兔网络是一家怎样的公司？选择加入方兔网络的理由是什么？</p>
                <p>
                 方兔网络成立于2018年9月。公司旗下运营有有专送Pro、鸡冻头条、查盛金融等产品。截止2019年6月，方兔网络融资规模达1.5亿。 在这里，80%的一线leader是90后，相信年轻的力量；公司聚集来自一流学校和公司的顶尖人才，我们的队伍还在壮大，为你提供广阔稳定的发展平台！
                </p>
              </li>
              <li>
                <p>方兔网络有哪些新员工培训计划？在方兔网络能收获哪些成长？</p>
                <p>为了助力员工成长，公司内部为同学们准备了丰富的培训项目。除了针对新入职小伙伴的校招新员工培训计划。花式学习培训计划让你充分感受到知识的力量。在更大的平台做更大的事，在方兔网络收获到的不仅仅是一份工作经验，更是一种个人能力的全面提升。</p>
              </li>
              <li>
                <p>实习之后是否可以获得转正机会，在毕业之后加入方兔网络？</p>
                <p>实习表现优秀的同学有机会获得校招正式offer，我们的队伍还在壮大，只要你本质优秀，我们随时愿意为你提供广阔的发展平台。</p>
              </li>
            </ul>
            <p class="fq__tips">以上问题都没有解答你的疑惑？请写明问题发送邮件至<strong>HR@squrab.com </strong>（注意：投递简历请通过校招官网渠道，此邮箱不作为简历筛选使用）,会有HR小姐姐在三个工作日内回复~</p>
          </section>
        </transition-group>
      </section>
    </section>
  </section>
</template>

<script>
 export default{
  name: 'FooterPortSocial',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      currIndex: 1,
      data: Array(10).fill({city: '武汉', school: '武汉大学', posi: '6号楼学术报告厅', date: new Date().toLocaleDateString()})
    }
  },
  methods: {
    handleClick(index){
      this.currIndex = index
    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';

.scroll-enter-active, 
.scroll-leave-active {
  transition: opacity .5s ease, transform .5s linear;
}
.scroll-enter, 
.scroll-leave-active {
  opacity: 0;
  transform: translateX(-10%);
}

@include b(page) {

}
@include b(wrap) {
  @include flex($dir: row, $align: strech);
  @include e(lf) {
    @include flex($dir: column, $align: strech, $justify: space-between);
    width: 20%;
    padding: 20px 0;
    background-color: #f5f5f5;

    .lf-list {
      &__item {
        position: relative;
        height: 80px;
        padding-right: 70px;
        line-height: 80px;
        text-align: right;
        box-sizing: border-box;

        &::before {
          position: absolute;
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background-color: #ccc;
          opacity: 1;
          transform: translateX(-100%);
        }
        &:hover {
          cursor: pointer;
          background-color: #fff;
          &::before {
            opacity: 0;
            transform: translateX(0);
            transition: all .5s ease;
            display: none;
          }
        }
      }
    }
    .lf-link {
      align-self: flex-end;
      padding-right: 20px;
      color: #202020;
      text-decoration: underline;
    }
  }
  @include e(rg) {
    flex: 1;
    min-height: 200px;
    padding: 80px 150px;
    box-sizing: border-box;
    .rg__item {
      & > .img-box {
        img {
          width: auto;
          max-width: 100%;
        }
      }
    }
    .fs__list {
      margin-top: 50px;
      & > li {
        height: 2em;
        line-height: 2em;
        list-style-type: korean-hanja-informal;
        list-style-position: inside;

        & > p {
          display: inline;
          text-indent: 2em;
        }
      }
      &--title {
        padding-right: 15px;
        font-size: $--font-size--extra-large;
        font-weight: bold;
      }
      &--tips {
        font-size: $--font-size-large;
        &::before {
          content: '(';
        }
        &::after{
          content: ')';
        }
      }
    }
    .fq__list {
      & > li:not(:last-of-type) {
        margin-bottom: 15px;
      }
      & > li p:first-child {
        font-size: $--font-size--extra-large;
        font-weight: bold;
        line-height: 2;

        &::before {
          content: 'Q : ';
        }
      }

      & > li p:last-child {
        position: relative;
        text-indent: 2em;
        line-height: 2;

        &::before {
          position: absolute;
          left: -2em;
          content: 'S : ';
          font-weight: bold;
        }
      }
    }
    .fq__tips {
      margin-top: 20px;
      color: #ccc;
    }
  }
}
@include when(item-active) {
  background-color: #fff !important;
  border-right: 5px solid #1FA2FF;
}
</style>