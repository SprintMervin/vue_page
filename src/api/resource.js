/**
 * Created by HUI on 16/9/5.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
    loading.show = true
    next((response) => {
        loading.show = false
        return response
    });
});
