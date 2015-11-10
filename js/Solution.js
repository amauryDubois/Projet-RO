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
	}

	var init = function () {
		value     = 0;
		sol       = [];
		photoList = [];
		initPhotoList();
	}

	// public methods
	this.setRandSol = function () {
		var index;

		for (var i = 0; i < 55; i++) {
			index  = Math.floor(Math.random() * (55-i));
			sol[i] = photoList[index];
			photoList.splice(index, 1);
		};
	};

	this.display = function () {
		console.log(sol);
	};

	init();
}