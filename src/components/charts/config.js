const options = {
  title: {
    text: '标题文本',
    show: true, // 是否展示标题
    textAlign: 'left',
    left: '50%'
  },
  toolbox: {
      orient: 'horizontal',
      show: true,
      itemSize: 14,
      right: 30,
      feature: {
        saveAsImage: {},
        magicType: {
          type: ['line', 'bar']
        }
      }
  },
}

export default options
