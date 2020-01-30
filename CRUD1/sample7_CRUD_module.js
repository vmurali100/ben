var app = angular.module("app",[])
app.controller("myController",function ($scope,crudService){
    $scope.mainUser={
        fname:"",
        lname:""
    }
    $scope.addUser = function (){
        // var user ={
        //     fname:$scope.fname,
        //     lname:$scope.lname,
        // }
        crudService.addUser($scope.mainUser).then(function (res){
            console.log(res)
        })
    }

    $scope.getUsers= function (){
        crudService.getUsers().then(function (res){
            console.log(res.data)
            $scope.users=res.data
        })
    }

    $scope.deleteUser = function (user){
        console.log(user)
        console.log(crudService.deleteUser(user))
        crudService.deleteUser(user).then(function (){
            $scope.getUsers()

        })
    }
    $scope.editUser=function (user){
       
        $scope.mainUser= Object.assign({},user)
       
    }

    $scope.updateUser = function (){
       console.log($scope.mainUser)
       crudService.updateUser($scope.mainUser).then(function (){

        $scope.getUsers()
    })
    }

    console.log(crudService)
    $scope.getUsers()
    

})