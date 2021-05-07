export const BASE_COLUMN = {
  coloumNumber: 4,//默认一行多少card
  gap: 10,//默认卡片与卡片之间的距离
}

export const DATA_TYPE_ALL = {
  percent: 'percent',
  thousandth: 'thousandth',
  custom: 'custom',
}

export const BASE_HEADER = {
  title: '商品访客记录',
  coreData: '666666',//核心数据
  dataType: DATA_TYPE_ALL.thousandth,//数据类型 可选 percent（百分比）， thousandth（千分位分割加逗号），custom（用户自定义） 
  compareText: '较前1日',
  compareData: '-50',
}

export const BASE_PARTCSS = {
  'width':'24%',
  'height':'100%',
  'marginRight':'10px',
  'marginTop':'10px',
  'borderRadius':'10px',
  'border':'1px solid #ccc',
  'cursor': 'pointer',
}

export const BASE_CONTENTCSS = {
  'width':'100%',
  'height':'100%',
  'padding':'10px',
}


