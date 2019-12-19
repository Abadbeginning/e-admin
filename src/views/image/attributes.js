export default [
  {
    prop: 'src',
    desc: '图片src',
    type: 'String',
    enum: '-',
    default: '',
  },
  {
    prop: 'icon',
    desc: '图标class',
    type: 'String',
    enum: '-',
    default: '',
  },
  {
    prop: 'border',
    desc: '是否显示边框，支持传入字符串自定义边框样式',
    type: 'Boolean / String',
    enum: '-',
    default: 'false',
  },
  {
    prop: 'disabled',
    desc: '是否禁用状态',
    type: 'Boolean',
    enum: '-',
    default: 'false',
  },
  {
    prop: 'hover',
    desc: '是否启用鼠标移入效果，此配置会启用border',
    type: 'Boolean',
    enum: '-',
    default: 'false',
  },
  {
    prop: 'error',
    desc: '是否显示为错误状态',
    type: 'Boolean',
    enum: '-',
    default: 'false',
  },
  {
    prop: 'size',
    desc: '大小尺寸，支持自定义尺寸 数值类型以px为单位',
    type: 'String / Number',
    enum: 'large / medium / small / mini',
    default: 'medium',
  },
  {
    prop: 'width',
    desc: '图片宽度',
    type: 'String / Number',
    enum: '-',
    default: '',
  },
  {
    prop: 'height',
    desc: '图片高度',
    type: 'String / Number',
    enum: '-',
    default: '',
  },
  {
    prop: 'preview-src-list',
    desc: '开启图片预览功能',
    type: 'Array',
    enum: '-',
    default: '[]',
  },
  {
    prop: 'z-index',
    desc: '设置图片预览的 z-index',
    type: 'Number',
    enum: '-',
    default: '2000',
  },
  {
    prop: 'fit',
    desc: '确定图片如何适应容器框，同原生 object-fit',
    type: 'String',
    enum: 'fill / contain / cover / none / scale-down',
    default: '',
  },
  {
    prop: 'shape',
    desc: '设置图片的形状',
    type: 'String',
    enum: 'square / circle / \'\'',
    default: 'square',
  },
];