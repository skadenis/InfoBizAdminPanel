<template>
  <div class="module">
    <div class="module-item" @click="open_module(courseId, data.id)">
      <div class="drag"></div>

      <img
        class="module-img"
        :src="config.basicImageURL + data.image"
        alt="module-img"
        height="80"
      />
      <div>
        <p class="module-name">{{ data.name }}</p>
      </div>
      <div>
        <p class="module-desc">{{ data.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../../../config";

export default {
  name: "module",
  props: ["data", "courseId"],
  data() {
    return {
      config,
    };
  },
  methods: {
    open_module: function(courseId, id) {
      this.goTo("/courses/" + courseId + "/modules/" + id);
    },
  },
};
</script>

<style scoped lang="scss">
.drag{
  cursor: move;
  background: url("data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2214px%22%20height%3D%2215px%22%20viewBox%3D%220%200%2014%2015%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C%21--%20Generator%3A%20Sketch%2052.4%20%2867378%29%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%202%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Desktop-HD-Copy%22%20transform%3D%22translate%28-910.000000%2C%20-288.000000%29%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-2%22%20transform%3D%22translate%28910.000000%2C%20288.000000%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22noun_Upload_1515287%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3.5%2C10.8931429%20C3.85145393%2C10.8931429%204.13636364%2C10.6117218%204.13636364%2C10.2645714%20L4.13636364%2C2.40742857%20L5.60636364%2C3.79657143%20C5.76836914%2C3.96330109%206.00993286%2C4.02877631%206.23539996%2C3.96707007%20C6.46086706%2C3.90536384%206.63387145%2C3.72642889%206.68590654%2C3.50112022%20C6.73794163%2C3.27581154%206.66061456%2C3.04046968%206.48454545%2C2.88828571%20L3.93909091%2C0.484%20C3.69326472%2C0.252525946%203.30673528%2C0.252525946%203.06090909%2C0.484%20L0.515454545%2C2.88828571%20C0.339385437%2C3.04046968%200.262058372%2C3.27581154%200.314093462%2C3.50112022%20C0.366128553%2C3.72642889%200.539132944%2C3.90536384%200.764600043%2C3.96707007%20C0.990067142%2C4.02877631%201.23163086%2C3.96330109%201.39363636%2C3.79657143%20L2.86363636%2C2.41371429%20L2.86363636%2C10.2708571%20C2.8671262%2C10.6155503%203.1510163%2C10.8931601%203.5%2C10.8931429%20Z%22%20id%3D%22Path%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22noun_Upload_1515287-Copy%22%20transform%3D%22translate%2810.500000%2C%209.500000%29%20scale%281%2C%20-1%29%20translate%28-10.500000%2C%20-9.500000%29%20translate%287.000000%2C%204.000000%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3.5%2C10.8931429%20C3.85145393%2C10.8931429%204.13636364%2C10.6117218%204.13636364%2C10.2645714%20L4.13636364%2C2.40742857%20L5.60636364%2C3.79657143%20C5.76836914%2C3.96330109%206.00993286%2C4.02877631%206.23539996%2C3.96707007%20C6.46086706%2C3.90536384%206.63387145%2C3.72642889%206.68590654%2C3.50112022%20C6.73794163%2C3.27581154%206.66061456%2C3.04046968%206.48454545%2C2.88828571%20L3.93909091%2C0.484%20C3.69326472%2C0.252525946%203.30673528%2C0.252525946%203.06090909%2C0.484%20L0.515454545%2C2.88828571%20C0.339385437%2C3.04046968%200.262058372%2C3.27581154%200.314093462%2C3.50112022%20C0.366128553%2C3.72642889%200.539132944%2C3.90536384%200.764600043%2C3.96707007%20C0.990067142%2C4.02877631%201.23163086%2C3.96330109%201.39363636%2C3.79657143%20L2.86363636%2C2.41371429%20L2.86363636%2C10.2708571%20C2.8671262%2C10.6155503%203.1510163%2C10.8931601%203.5%2C10.8931429%20Z%22%20id%3D%22Path%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E") no-repeat 50% 50%;
  user-select: none;
  width: 20px;
  height: 22px;
  flex: none;
  background-position-x: right;
  position: absolute;
  top: 12px;
  right: 10px;
}

.module {
  margin: 20px 0;
  position: relative;
  .module-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
    min-height: 100px;
    padding: 10px;

    &:hover {
      background-color: rgb(223, 239, 255);
    }

    &:hover p {
      color: #000;
    }

    .module-img {
      display: block;
      border-radius: 10px;
      border: 1px solid rgb(221, 221, 221);
    }

    .module-name {
      color: #000;
      font-size: 1.2em;
      font-weight: 600;
      margin-left: 20px;
    }

    .module-desc {
      margin-left: 20px;
    }
  }
}
</style>
