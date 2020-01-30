app.service("crudService",function ($http){
    return {
        addUser:function (user){
            return $http.post("http://localhost:3000/newUsers",user)
        },
        getUsers:function (){
            return $http.get("http://localhost:3000/newUsers")
        },
        deleteUser:function (user){
            return $http.delete("http://localhost:3000/newUsers/"+user.id)
        },
        updateUser:function (user){
            return $http.put("http://localhost:3000/newUsers/"+user.id,user)
        }
    }
})