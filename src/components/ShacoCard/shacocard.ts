import { PropType } from 'vue'

export type ShacoColumn = {
  column?: number,
  gap?: number,
}

export type ShacoList = {
  title?: string,
  icon?: string,
  tipText?: string,
  coreData: string,//核心数据
  dataType?: string,//数据类型 可选 percent（百分比）， thousandth（千分位分割加逗号），custom（用户自定义） 
  formatData?: Function,//当dataType为自定义时必须传
  compareText?: string,
  compareData?: string,
  linkTo?: Function,
  genStyle?: Object,
}

export type IShacoCard = {
  layout?: ShacoColumn,
  list?: ShacoList,
}
//接口约束加个I
export default {
  schema: Object as PropType<IShacoCard>,
}