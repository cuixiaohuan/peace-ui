<template lang="pug">
    div
        p-datepicker(@confirm="confirm1", start="2015-04-06 09:00", end="2019-10-15 15:30", type="datetime", form-date="-", v-model="show1", :default-value="res.r1")
        p-datepicker(@confirm="confirm2", start="08:30", end="18:00", type="time", v-model="show2", :default-value="res.r2")
        p-datepicker(@confirm="confirm3", start="2015-03-19", end="2019-12-19", type="date", form-date="/", v-model="show3", :default-value="res.r3", :mask-closeable="false")
    </div>
</template>
<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      res: { r1: "2018-03-09 19:28", r2: "20:12", r3: "2018-03-02" },
    };
  },
  components: {},
  mounted() {},
  created() {},
  methods: {
    confirm1(val) {
      // confirm 方法和 default-value 变量，实现双向数据绑定
      this.res.r1 = val;
    },
    confirm2(val) {
      this.res.r2 = val;
    },
    confirm3(val) {
      this.res.r3 = val;
    },
    cancel() {
      alert("cancel");
    },
  },
};
</script>
<style lang="less"></style>
