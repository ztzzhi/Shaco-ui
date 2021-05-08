<template>
  <div class="mainpart">
    <div
      v-for="(item, index) in list"
      class="part"
      :style="layoutPartCss"
      :key="item"
    >
      <div
        class="content"
        :style="layoutContentCss"
        @click="clickhandler(index)"
        :class="{ active: active === index }"
      >
        <slot name="header">
          <div :style="layoutHeaderCss">
            <span>{{ item.title }}</span>
            <el-tooltip
              effect="light"
              :content="item.tipText"
              placement="right"
              class="tooltip"
              v-if="item.tipText"
            >
              <i class="el-icon-warning-outline"></i>
            </el-tooltip>
          </div>
        </slot>
        <slot name="data">
          <div class="coredata" :style="dataCss">{{ item.coreData }}</div>
        </slot>
        <slot name="footer">
          <div class="footer" :style="footerCss">
            <span>{{ item.compareText }}</span>
            <i
              :class="{
                green: item.compareData.replace('%', '') * 1 >= 0,
                red: item.compareData.replace('%', '') * 1 < 0,
                'el-icon-caret-top': item.compareData.replace('%', '') * 1 >= 0,
                'el-icon-caret-bottom':
                  item.compareData.replace('%', '') * 1 < 0,
              }"
              >{{ item.showCompareData }}</i
            >
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
import ShacoCard from "./shacocard";
import { BASE_PARTCSS, BASE_CONTENTCSS } from "./config";
import { ElMessage } from "element-plus";
export default defineComponent({
  props: ShacoCard,
  setup(props, ctx) {
    const { layout = ref({}), list = ref([]), genStyle = ref({}) } = toRefs(
      props.schema as any
    );
    layout.value.column = layout.value.column>=7? 7 :layout.value.column
    const gapNumber = layout.value.gap/2 +'px'
    const colomnNumber = (100/layout.value.column-1.5) + '%'
    console.log(colomnNumber);
    console.log(gapNumber);
    
    const layoutPartCss = { ...BASE_PARTCSS ,width:colomnNumber,marginRight:gapNumber};
    const layoutHeaderCss = { ...genStyle.value.header };
    const layoutContentCss = { ...BASE_CONTENTCSS };
    const dataCss = { ...genStyle.value.data };
    const footerCss ={ ...genStyle.value.footer }
    //点击卡片背景颜色以及border发生变化
    const active = ref();
    const clickhandler = (index: any) => {
      active.value = index;
    };
    //coreData数据处理
    list.value = list.value.map((item: any) => {
      if (item.dataType === "percent") {
        item.coreData = item.coreData.includes("%")
          ? item.coreData
          : item.coreData * 100 + "%";
      } else if (item.dataType === "custom") {
        if (typeof item.formatData !== "function")
          ElMessage.warning("your formatData type is not a Function");
        item.formatData(item.coreData);
        item.coreData = item.formatData(item.coreData);
      } else {
        item.coreData =
          typeof item.coreData == "number"
            ? item.coreData.toString()
            : item.coreData;
        item.coreData = item.coreData.replace(/\d(?=(?:\d{3})+\b)/g, "$&,");
      }
      return item;
    });
    //compareData数据处理
    list.value = list.value.map((item: any) => {
      item.showCompareData = item.compareData;
      if (typeof item.showCompareData == "number") {
        item.showCompareData = item.showCompareData + "";
      }
      return item;
    });
    return {
      layout,
      list,
      colomnNumber,
      gapNumber,
      genStyle,
      layoutPartCss,
      layoutHeaderCss,
      dataCss,
      layoutContentCss,
      footerCss,
      clickhandler,
      active,
    };
  },
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.mainpart {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 140px;
  flex-wrap: wrap;
  color: #555;
}
.tooltip {
  margin-left: 2px;
}
.active {
  background-color: #fff;
  border: 1px solid#0f7debd0;
  border-radius: 10px;
}
.coredata {
  width: 100%;
  height: 70px;
  line-height: 70px;
  font-size: 20px;
  color: #000;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.red {
  padding-top: 10px;
  color: red;
}
.green {
  padding-top: 10px;
  color: green;
}
</style>
