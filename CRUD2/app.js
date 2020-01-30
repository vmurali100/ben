var app = angular.module("app",[])

app.controller("myController",function ($scope,crudService){
    $scope.init = true;
    $scope.currentUser={
        name:"",
        username:"",
        email:""
    }
    $scope.getUsers= function (){
        crudService.getUsers().then(function (res){
            console.log(res.data)
            $scope.users = res.data
            // if ($scope.init == true)
            // {
            //     $scope.currentUser.name = $scope.users[0].name
            //     $scope.currentUser.username = $scope.users[0].username
            //     $scope.currentUser.email = $scope.users[0].email
            //     $scope.init = false
            // }
        })       
    }

    $scope.editUser=function (user){
        console.log(user)
        $scope.currentUser= Object.assign({}, user)       
    }

    $scope.deleteUser=function (user){
        crudService.deleteUser(user).then(function(){
            $scope.getUsers()
        })
    }

    $scope.addUser = function (){
            crudService.addUser($scope.currentUser).then(function (res){
            console.log(res)
        })
    }

    $scope.updateUser = function (){
        console.log($scope.currentUser)
        crudService.updateUser($scope.currentUser).then(function (){
 
         $scope.getUsers()
     })
    }

    $scope.getUsers()
})