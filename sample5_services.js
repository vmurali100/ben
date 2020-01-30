var app = angular.module("myApp",[])

app.controller("myController",function($scope,myService){
    $scope.hello="Hello world"
    $scope.users = myService.getusers()
    console.log($scope.users)
} )


app.controller("myContoller2",function ($scope,myService){
    // $scope.users = myService.getusers()
    // console.log($scope.users)
    myService.getusers().then(function (res){
        console.log(res)
        $scope.users=res.data
    })
})

app.service("myService",function ($http){
    console.log($http)
    return {
        sayHello:function (){
            console.log("Hellow World from Services")
        },
        getusers:function (){
            return $http.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true")
        }
    }
})