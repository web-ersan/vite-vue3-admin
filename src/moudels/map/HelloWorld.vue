<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";
import { onMounted, ref } from "vue";
let map = ref(null);
const initMap = () => {
  AMapLoader.load({
    key: "d59ea993d2d4533d2a2707f1eeb1d00e", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Scale", "AMap.ToolBar", "AMap.MouseTool"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    Loca: {
      version: "2.0.0",
    },
  })
    .then((res) => {
      AMap.value = res;
      // 上来就显示的中心点  北京 116.397, 39.918
      var lnglat = new res.LngLat(105, 38);
      map.value = new res.Map("container", {
        //设置地图容器id
        viewMode: "3D", //是否为3D地图模式
        pitch:45,
        zoom: 10, //初始化地图级别
        center: lnglat, //初始化地图中心点位置
      });
      map.value.clearMap(); // 清除地图覆盖物
      // 地图是否可拖拽和缩放
      map.value.setStatus({
        dragEnable: false, // 是否可拖拽
        zoomEnable: true, // 是否可缩放
      });

      // initWindow();
      // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
      coordData.forEach(function (marker) {
        setMarker(marker);
      });

      let renderLine = setLine(coordData);
      // 设置线
      let polyline = renderLine.reduce((prev, item, index) => {
        let weight = item.type === 1 ? 5 : 3;
        let color = item.type === 1 ? headColors[0] : headColors[1];
        prev.push(setLines(item.current, color, weight));
        return prev;
      }, []);
      map.value.add([...polyline]); // 绘制线
      //创建右键菜单
      menuInstance.value = new ContextMenu(map.value);
      let loca = new Loca.Container({
        map: map.value,
      });
      window._loca = loca;

      // 图例, 图例可以实例化多个，使用定位来设置位置
      let lengend = new Loca.Legend({
        loca: loca,
        title: {
          label: "管道类型",
          fontColor: "rgba(255,255,255,1)",
          fontSize: "16px",
        },
        style: {
          backgroundColor: "rgba(255,255,255,0.2)",
          left: "20px",
          bottom: "40px",
          fontSize: "12px",
        },
        dataMap: [
          { label: "省级管道", color: headColors[1] },
          { label: "县级管道", color: headColors[0] },
        ],
      });

      //修改图例排列方式
      document
        .getElementsByClassName("amap-loca loca-controls")[0]
        .setAttribute("id", "testid");
      var lis = document.querySelectorAll("#testid li");
      for (var i = 0; i < lis.length; i++) {
        console.log(lis[i]);
        lis[i].setAttribute("class", "test");
      }
    })
    .catch((e) => {
      console.log("error", e);
    });
};
onMounted(() => {
  initMap();
});
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>
