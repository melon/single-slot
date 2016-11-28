var Vue = require('vue');
new Vue({
    el: '#box',
    components: {
        "v-box": require('./box.vue')
    },
});
