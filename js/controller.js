var app = angular.module("AmazingExplorerModule", []);

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

    $scope.users = {};
    $scope.editableUser = {};

    $http.get('../sample_files/sample.json').
    success(function(data, status, headers, config) {
        $scope.users = data;
    // this callback will be called asynchronously
    // when the response is available
    }).
    error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });

    $scope.getUserInfo = function(user)
    {
        $('#username').val(user.user);
        $('#name').val(user.name);
        $('#email').val(user.mail);
        $('#lastname').val(user.lastname);
        $('#password').val(user.password);
        $scope.editableUser.user = user.user;
        $scope.editableUser.name = user.name;
        $scope.editableUser.mail = user.mail;
        $scope.editableUser.lastname = user.lastname;
        $scope.editableUser.password = user.password;
        $scope.editableUser.image = user.image;
        jQuery("#amazing-user-img").attr('src',user.image );
        console.log(user);
    }

    $scope.updateUserInfo = function()
    {
       
        console.log($scope.editableUser);
        var updated = false;
        for(var userIndex in $scope.users)
        {
            if ($scope.users[userIndex].mail == $scope.editableUser.mail || $scope.users[userIndex].user == $scope.editableUser.user)
            {
                updated = true;
                $scope.users[userIndex] = $scope.editableUser;
                break;
            }
        }
        if(!updated)
        {
            $scope.users.push($scope.editableUser);
        }
        console.log($scope.users);
    }




}]);


