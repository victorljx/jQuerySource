/*
* 知识点001：匿名函数自执行
* 自执行函数最后只传递一个window，则第二个参数undefined的值就是undefined
* 传递window可以减少window对象的查找距离，而且传递参数有利于js压缩
*/

(function(window, undefined) {
var
	// jQuery(document)
	rootjQuery,

	// The deferred used on DOM ready
	readyList,

	// Support: IE9
	// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
	core_strundefined = typeof undefined,
	// Use the correct document accordingly with window argument (sandbox)
	// 使用变量代替一些常用对象，有利于减少对象的查找距离，还有利于文件压缩
	location = window.location,
	document = window.document,
	docElem = document.documentElement,

	// 防止变量冲突
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,
	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	// 用于类型判断
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	// 用于缓存删除的数据，但是已经不用了
	core_deletedIds = [],

	// 版本号
	core_version = "2.0.3",

	// 保存一些核心常用方法
	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,//Array.concat
	core_push = core_deletedIds.push,//Array.push
	core_slice = core_deletedIds.slice,//Array.slice
	core_indexOf = core_deletedIds.indexOf,//Array.indexOf
	core_toString = class2type.toString,//Object.toString
	core_hasOwn = class2type.hasOwnProperty,//Object.hasOwnProperty
	core_trim = core_version.trim,//String.trim


	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	};

	/*
	* 知识点002：匿名函数自执行向外暴露的使用接口
	*/
	if ( typeof window === "object" && typeof window.document === "object" ) {
		window.jQuery = window.$ = jQuery;
	}

//这里只传递一个window，则第二个参数undefined的值就是undefined
//这里传递window
})(window);