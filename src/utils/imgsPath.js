const List = {
  dashBannerBg: 'index_banner.png',
  dashBannerPhone: 'index_phone.png',
  dashBannerText: 'index_text.png',
  dashConPerson1: 'dash_person1.png',
  dashConPerson2: 'dash_person2.png',
  dashConPhone: 'dash_phone.png',


  footerQrMiniapp: 'qr_miniapp.png',
  footerQrH5: 'qr_h5.png',

  enBannerBg: 'bg_enlist.png',
  enConPerson: 'en_7.png',
  enConStepOne: 'en_2.png',
  enConStepTwo: 'en_1.png',
  enConStepThree: 'en_3.png',
  enConStep1: 'en_6.png',
  enConStep2: 'en_5.png',
  enConStep3: 'en_4.png',

  abBannerBg: 'ab_banner.png'
}

const FormatList = {}
const imgBasePath = 'https://res.squrab.com/www/'
for(var k in List) {
  FormatList[k] = imgBasePath + List[k]
}

export default FormatList
