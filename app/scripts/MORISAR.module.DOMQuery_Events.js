'use strict';

MORISAR.namespace('MORISAR.common.DOMQuery_Events');

MORISAR.common.DOMQuery_Events = (function () {
	
	return {
		addEvent: function (el, type, fn) {
			if (typeof addEventListener !== "undefined") {
				el.addEventListener(type, fn, false);
			} else if (typeof attachEvent !== "undefined") {
				el.attachEvent('on' + type, fn);
			} else {
				el['on' + type] = fn;
			}
		},

		removeEvent: function (el, type, fn) {
			if (typeof removeEventListener !== "undefined") {
				el.removeEventListener(type, fn, false);
			} else if (typeof attachEvent !== "undefined") {
				el.detachEvent('on' + type, fn);
			} else {
				el['on' + type] = null;
			}
		},

		getTarget: function (event) {
			if (typeof event.target !== "undefined") {
				return event.target; 
			} else {
				return event.srcElement;
			};
		},

		preventDefault: function (event) {
			if (typeof event.preventDefault !== "undefined") {
				event.preventDefault();
			} else {
				event.returnValue = false;
			};
		},

		getId: function(id) {
			return document.getElementById(id)
		},

		getTag: function(tag) {
			return document.getElementsByTagName(tag)
		},

		getAttr: function(event, attr) {
			const target = this.getTarget(event);
			const data = target.getAttribute(attr);

			return data;
		},

		getName: function(name) {
			return document.getElementsByName(name);
		},

		getClass: function(className) {
			return document.getElementsByClassName(className)
		},

		getStyle: function(id) {
			this.getId(id);
			return window.getComputedStyle(this.getId(id))
		},

		addClass: function(id, className) {
			const e = this.getId(id);
			return e.classList.add(className);
		},

		removeClass: function(id, className) {
			const e = this.getId(id);
			return e.classList.remove(className);
		}
	}
}());
