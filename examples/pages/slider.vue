<template lang="pug">
div
    c-slider(v-model="code0") 
    p {{code0}}

    c-slider(v-model="code1")
    p {{code1}}

    c-slider(v-model="code2", :step="20")
    p {{code2}}

    c-slider(v-model="code3", :disabled="true")
    p {{code3}}
</template>
<script>
export default {
  data() {
    return {
      code0: 0,
      code1: 30,
      code2: 100,
      code3: 60,
    };
  },
};
</script>
<style lang="less">
</style>
