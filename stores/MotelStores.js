import Reflux from 'reflux';
import $from 'jquery';
import MotelActions from '../Actions/MotelActions'

var MotelStore = Reflux.createStore({
	
	listenables: [MotelActions],
	motelList: [],

	init: function(){
		this.fetchList();
	},

	fetchList: function(){
		$.ajax({
			crossDomain: true,
			cache: false,
			context: this,
			url: 'https://infinite-atoll-7499.herokuapp.com/api/v1/motel',
			method: 'GET',
			sucess: function(data){
				console.log('TODO OK');
				this.motelList = data.slice();
				this.trigger(this.motelList);
			}
		});
	}
});

export default MotelStore;

