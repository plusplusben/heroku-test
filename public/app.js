"use strict"

var app = new Vue({
	el: '#app',
	data: {
		isSurf: false,
		isSell: false,
		surfSpots: [],
	},
	created: function () {
		this.loadData();
	},
	methods: {
		toggleSurf: function() {
			this.isSurf = !this.isSurf;
			this.isSell = false;
		},
		toggleSell: function() {
			this.isSell = !this.isSell;
			this.isSurf = false;
		},
		allOff: function() {
			this.isSell = false;
			this.isSurf = false;
		},
		loadData: async function() {
			console.log("loading data...");
			const [spots, wind, swell] = await Promise.all([
				fetch("http://api.spitcast.com/api/county/spots/orange-county/").then(response => response.json()),
				fetch("http://api.spitcast.com/api/county/wind/orange-county/").then(response => response.json()),
				fetch("http://api.spitcast.com/api/county/swell/orange-county/").then(response => response.json()),
			]);
			this.surfSpots = spots.slice(0,4);
			console.log("spots");
			console.log(this.surfSpots);
			console.log("wind");
			console.log(wind);
			console.log("swell");
			console.log(swell);
		},
	}
});