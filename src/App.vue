<template>
<div id="app">
  <button @click="isHorizontal = !isHorizontal">
    {{ isHorizontal ? 'vertical' : 'horizontal' }}
  </button>
  <n-menu :options="menuOptions" :mode="mode" />
  <div class="route-info">
  route: <router-view/>
  </div>
  <pre>
    mode: {{ mode }}
    menuOptions: {{ menuOptions }}
  </pre>
</div>
</template>

<script>
import { h } from 'vue';
import { RouterLink } from 'vue-router';
import { NIcon, NMenu } from 'naive-ui';
import { List as MyIcon } from '@vicons/carbon';


export default {
  name: 'App',
  data() {
    return { isHorizontal: false };
  },
  computed: {
    mode() {
      return this.isHorizontal ? 'horizontal' : 'vertical';
    },
    menuOptions() {
      const options = ['foo', 'bar', 'baz'].map((id) => ({
        label: () => h(RouterLink, { to: { name: 'Example', params: { id } } }, () => id),
        key: `menu-option-${id}`,
        icon: () => h(NIcon, null, () => h(MyIcon)),
      }));
      return [{
        label: `Expand me for ${this.isHorizontal ? 'unclickable' : 'clickable'} icons!`,
        key: 'expand',
        icon: () => h(NIcon, null, () => h(MyIcon)),
        children: options,
      }];
    },
  },
  components: { NMenu },
};
</script>

<style>
.route-info {
  background-color: lightgray;
}
</style>
