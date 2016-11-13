console.log("a")

var myApp = angular.module('myApp', [])
myApp.factory('SharedData', function(){
    return {message: "共有されるメッセージ(初期値)"}
})

myApp.factory('UsersList', function(){
    var UsersList = {}
    UsersList = [
        {
            name: "TesterA",
            age: 16
        },
        {
            name: "TesterB",
            age: 19
        },
        {
            name: "TesterC",
            age: 11
        },
        {
            name: "TesterD",
            age: 29
        },
        {
            name: "TesterE",
            age: 41
        }
    ]
    return UsersList  
})

myApp.filter('reverseForSample5', function(){
    return function(message){
        console.log("reverse's parameter:" + message)
        return reverse(message)
    }
})

function FirstCtrl($scope){
    console.log("b")
    $scope.data = {message: "panel"}
}

function SecondCtrl($scope){
    console.log("c")
    $scope.data = {message: "alert-box"}
}


function SharedCtrl1($scope, SharedData){
    $scope.data = SharedData
}

function SharedCtrl2($scope, SharedData){
    $scope.data = SharedData
}

function CustomFunctionCtrl($scope){
    // $scope.data = {message: "初期値"}
    $scope.customFunction = reverse
    
}

function FilterCtrl($scope){
    // 初期化してない
}

function NgRepeatTestCtrl($scope, UsersList){
    $scope.usersList = UsersList
}

function NgRepeatAndFilterTestCtrl($scope, UsersList){
    $scope.usersList = UsersList
}



// private function
function reverse(message){
    if(message){
        return message.split("").reverse().join("");    
    }
    return "未入力"
}