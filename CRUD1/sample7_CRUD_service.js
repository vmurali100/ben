app.service("crudService",function ($http){
    return {
        addUser:function (user){
            return $http.post("http://localhost:3000/users",user)
        },
        getUsers:function (){
            return $http.get("http://localhost:3000/users")
        },
        deleteUser:function (user){
            return $http.delete("http://localhost:3000/users/"+user.id)
        },
        updateUser:function (user){
            return $http.put("http://localhost:3000/users/"+user.id,user)
        }
    }
})