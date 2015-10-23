
var templateInitApp = angular.module("templateInitApp", []);

templateInitApp.controller("initDataCtrl", ["$scope", function($scope) {

	$scope.contentData = [
		{
			"title": "Javascript 私有变量、函数",
			"abstract": "JavaScript的函数作用域，在函数内定义的变量和函数如果不对外提供接口，那么外部将无法访问到，也就是变为私有变量和私有函数。",
			"code": "function Obj(){\n\tvar a=0; //私有变量\n" + 
					    "\tvar fn=function(){ //私有函数\n" + 
					   	"\t}\n" + 
					"}\n" + 
					"\n" + 
					"var o=new Obj();\n" + 
					"console.log(o.a); //undefined\n" + 
					"console.log(o.fn); //undefined\n",
			"conclusion": "这样在函数对象Obj外部无法访问变量a和函数fn，它们就变成私有的，只能在Obj内部使用，即使是函数Obj的实例仍然无法访问这些变量和函数",
			"pageNo": 1
		},{
			"title": "Javascript 静态变量、函数",
			"abstract": "当定义一个函数后通过 “.”为其添加的属性和函数，通过对象本身仍然可以访问得到，但是其实例却访问不到，这样的变量和函数分别被称为静态变量和静态函数。",
			"code": "function Obj(){}\nObj.a=0; //静态变量\nObj.fn=function(){ //静态函数   \n }\n\nconsole.log(Obj.a); //0\n" + 
					"console.log(typeof Obj.fn); //function\n\nvar o=new Obj();\nconsole.log(o.a); //undefined\nconsole.log(typeof o.fn); //undefined\n",
			"conclusion": "",
			"pageNo": 2
		},{
			"title": "实例变量、函数",
			"abstract": "在面向对象编程中除了一些库函数我们还是希望在对象定义的时候同时定义一些属性和方法，实例化后可以访问，JavaScript也能做到这样。",
			"code": "function Obj(){\n" + 
					    "\tthis.a=[]; //实例变量\n" + 
					    "\tthis.fn=function(){ //实例方法\n" + 
					    "\t}\n" + 
					"}\n" + 
					"console.log(typeof Obj.a); //undefined\n" + 
					"console.log(typeof Obj.fn); //undefined\n" + 
					"var o=new Obj();\n" + 
					"console.log(typeof o.a); //object\n" + 
					"console.log(typeof o.fn); //function\n",
			"conclusion": "",
			"pageNo": 3
		}
	];
	$scope.pageCount = $scope.contentData.length;

	
}]);
