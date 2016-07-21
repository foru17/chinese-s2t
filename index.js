/**
 * Author:luolei
 * Module dependencies.
 * 简繁体转换
 */

'use strict';

var Zh_Data = require('./lang/zh.js');

/**
 * 简体字
 */
var S = Zh_Data.S;

/**
 * 繁体字
 */
var T = Zh_Data.T;


/**
 * 转换文本
 * @param {String} str - 待转换的文本
 * @param {Boolean} toT - 是否转换成繁体
 * @returns {String} - 转换结果
 */
function tranStr(str, toT) {
    var i;
    var letter;
    var code;
    var isChinese;
    var index;
    var src, des;
    var result = '';

    if (toT) {
        src = S;
        des = T;
    } else {
        src = T;
        des = S;
    }

    if (typeof str !== "string") {
        return str;
    }

    for (i = 0; i < str.length; i++) {
        letter = str.charAt(i);
        code = str.charCodeAt(i);
        // 根据字符的Unicode判断是否为汉字，以提高性能
        isChinese = (code > 0x3400 && code < 0x9FC3) || (code > 0xF900 && code < 0xFA6A);

        if (!isChinese) {
            result += letter;
            continue;
        }

        index = src.indexOf(letter);

        if (index !== -1) {
            result += des.charAt(index);
        } else {
            result += letter;
        }
    }

    return result;
}



var Chinese = {
	s2t:function(string){
        console.log('轉繁體');
		return tranStr(string,true)
	},
	t2s:function(string){
        console.log('转简体');
		return tranStr(string,false)
	}
}

module.exports = Chinese;