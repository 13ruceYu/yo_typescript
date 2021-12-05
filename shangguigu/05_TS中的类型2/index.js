// object
var a;
a = {};
a = [];
a = function () { };
// 关注的是对象内部数据的类型
var b;
// b = {}
// b = {id: 11}
b = { id: '11' };
var c;
/**
 * 设置函数结构的类型声明
 */
var d;
d = function (a, b) { return a + b; };
/**
 * 数组
 * 原生 JS 中同一数组内的元素可以为任意类型（[1, 'lala', fn]），这样的存储效率不是很高。
 * 在开发中，我们一般在一个数组内存储的都是相同的元素。
 */
// 字符串数组: string[], Array<string>
var f;
f = ['a', 'b', 'c'];
// f = ['a', 'b', 'c', 1];
var g;
g = ['a', 'b', 'c'];
/**
 * 元祖 tuple
 * 数组内元素数量且类型固定的数组
 */
var h;
h = ['s', 1];
/**
 * 枚举 enum
 * 用于常量 map
 */
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'whh',
    gender: Gender.FEMALE
};
