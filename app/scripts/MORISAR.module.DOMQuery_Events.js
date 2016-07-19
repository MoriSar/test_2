'use strict';

MORISAR.namespace('MORISAR.module.DOMQuery_Events');

MORISAR.module.DOMQuery_Events = (function () {
	
	return {
		dqeM__addEvent: function (el, type, fn) {
			if (typeof addEventListener !== "undefined") {
				el.addEventListener(type, fn, false);
			} else if (typeof attachEvent !== "undefined") {
				el.attachEvent('on' + type, fn);
			} else {
				el['on' + type] = fn;
			}
		},

		dqeM__removeEvent: function (el, type, fn) {
			if (typeof removeEventListener !== "undefined") {
				el.removeEventListener(type, fn, false);
			} else if (typeof attachEvent !== "undefined") {
				el.detachEvent('on' + type, fn);
			} else {
				el['on' + type] = null;
			}
		},

		dqeM__getTarget: function (event) {
			if (typeof event.target !== "undefined") {
				return event.target; 
			} else {
				return event.srcElement;
			};
		},

		dqeM__preventDefault: function (event) {
			if (typeof event.preventDefault !== "undefined") {
				event.preventDefault();
			} else {
				event.returnValue = false;
			};
		},

		dqeM__getId: function(id) {
			return document.getElementById(id)
		},

		dqeM__getTag: function(tag) {
			return document.getElementsByTagName(tag)
		},

		dqeM__getAttr: function(event, attr) {
			const target = this.dqeM__getTarget(event);
			const data = target.getAttribute(attr);

			return data;
		},

		dqeM__getName: function(name) {
			return document.getElementsByName(name);
		},

		dqeM__getClass: function(className) {
			return document.getElementsByClassName(className)
		},

		dqeM__getStyle: function(id) {
			this.dqeM__getId(id);
			return window.getComputedStyle(this.dqeM__getId(id))
		},

		dqeM__addClass: function(id, className) {
			const e = this.dqeM__getId(id);
			return e.classList.add(className);
		},

		dqeM__removeClass: function(id, className) {
			const e = this.dqeM__getId(id);
			return e.classList.remove(className);
		}
	}
})();
