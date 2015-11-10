"use strict";

var Solution = function () {
	// private attributes and methods
	var value;
	var photoList;
	var sol;

	var initPhotoList = function () {
		var i;
		for (i=0; i<55; ++i){
			photoList[i] = i;
		}
	};

	var init = function () {
		value     = 0;
		sol       = [];
		photoList = [];
		initPhotoList();
	};

	// public methods
	this.setRandomSolution = function () {
		var i;

		photoList.sort(function(){
			return Math.floor(Math.random() * 3) - 1;
		});

		for (i=0; i<photoList.length; i++){
			sol[i] = photoList[i];
		}
	};

	this.getNeighbor = function () {
		var index1 = Math.floor(Math.random() * 55);
		var index2 = Math.floor(Math.random() * 55);

		var tmp = sol[index1];

		sol[index1] = sol[index2];
		sol[index2] = tmp;
	};

	this.display = function () {
		console.log(sol);
	};

	init();
}