<template>
  <div class="home">
    <shaco-card :schema="schema" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ShacoCard from "../components/ShacoCard/shaco-card.vue";

export default defineComponent({
  components: {
    ShacoCard,
  },
  setup() {
    const schema = {
      layout: {
        column:5,//最大一排7个
        gap: 40,
      },
      list: [
        {
          title: "商品访客记录",
          coreData: "22.1", //核心数据
          dataType: "custom", //数据类型 可选 percent（百分比）， thousandth（千分位分割加逗号），custom（用户自定义）
          formatData: (val: any) => {
            return val * 100;
          },
          compareText: "较上周",
          compareData: "30",
          tipText: "222",
        },
        {
          title: "商品访客记录",
          coreData: "22.1", //核心数据
          dataType: "custom", //数据类型 可选 percent（百分比）， thousandth（千分位分割加逗号），custom（用户自定义）
          formatData: (val: any) => {
            return val * 100;
          },
          compareText: "较前1日",
          compareData: "30",
          tipText: "222",
        },
        {
          title: "商品访客记录",
          coreData: "666662316", //核心数据
          dataType: "thousandth", //数据类型 可选 percent（百分比）， thousandth（千分位分割加逗号），custom（用户自定义）
          compareText: "较前1日",
          compareData: "0.055%",
        },
        {
          title: "商品访客记录",
          coreData: "1666666", //核心数据
          dataType: "thousandth", //数据类型 可选 percent（百分比）， thousandth（千分位分割加逗号），custom（用户自定义）
          compareText: "较前1日",
          compareData: "-20%",
        },
        {
          title: "商品访客记录",
          coreData: "666666", //核心数据
          dataType: "thousandth", //数据类型 可选 percent（百分比）， thousandth（千分位分割加逗号），custom（用户自定义）
          compareText: "较前1日",
          compareData: "-50",
        },
      ],
      genStyle: {
        header: {
          
        },
        data: {
          
        },
        footer: {
          
        },
      },
    };
    return {
      schema,
    };
  },
});
</script>
