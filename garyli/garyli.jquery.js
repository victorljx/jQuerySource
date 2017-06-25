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
		jQuery;

	/*
	* 知识点002：匿名函数自执行向外暴露的使用接口
	*/
	if ( typeof window === "object" && typeof window.document === "object" ) {
		window.jQuery = window.$ = jQuery;
	}

//这里只传递一个window，则第二个参数undefined的值就是undefined
//这里传递window
})(window);