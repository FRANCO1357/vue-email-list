console.log('Vue ok');

Vue.config.devtools = true;

const app = new Vue({
    name: 'VueEmailList',
    el: '#root',
    data: {},
    method: {},
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
            console.log(res.data);
        })

    }

})