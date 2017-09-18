// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//模块化加载
import Vue from 'vue'//ES6的模块化语法
import App from './App'


console.log(1,Vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data:{
  	msg : "lifecycle初始化数据"
  },
  methods:{
  	getLIsts(){
  		return "初始化方法被输出了"
  	}
  },
  beforeCreate(){
  	console.log("beforeCreate",this.msg,"读不到方法和初始化的数据")//
  },
  created(){
  	//用的多
  	// 
  	console.log("created",this.msg,this.getLIsts(),
  		"在created阶段,是可以调用实例的数据和方法")
  },
  beforeMount(){

  },
  mounted(){
  	// 用的多
  	// 
  },
  beforeUpdate(){

  },
  updated(){

  },
  beforeDestroy(){

  },
  destroyed(){

  },
  activated(){

  },
  deactivated(){

  }
})
