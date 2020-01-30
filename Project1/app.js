var app = angular.module("app",[])
       
app.controller('navController',function ($scope){
    $scope.navItems=["Text Link1","Text Link2","Text Link3","Text Link4","Text Link5"]
})
app.controller('contentController',function ($scope){
    $scope.services =[{title:"Indonectetus facilis",desc:"Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.",img:"images/demo/290x180.gif"},
    {title:"Indonectetus facilis",desc:"Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.",img:"images/demo/290x180.gif"},
    {title:"Indonectetus facilis",desc:"Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.",img:"images/demo/290x180.gif"}]
})

app.controller('footerController',function ($scope){
    $scope.footerLinks=[{title:"Link Block",links:["Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit"]},
    {title:"Link Block",links:["Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit"]},
    {title:"Link Block",links:["Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit"]},
    {title:"Link Block",links:["Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit","Lorem ipsum dolor sit"]}]
})

app.controller('copyrightController',function ($scope){
    
})

app.directive('myheader',function () {
    return {
        templateUrl:'directives/header.html'
    }
})

app.directive("mycontent",function (){
    return {
        templateUrl:'directives/mycontent.html'
    }
})

app.directive("footerlinks",function (){
    return {
        templateUrl:'directives/footerlinks.html',
        scope:{
            some:'@helo'
        }
    }
})