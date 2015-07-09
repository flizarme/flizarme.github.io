
app.factory('usersDataFactory', ['$http', function ($http) {

    var userPromise;
    var usersDataFactory = {
        addUser: function (user, mail, name, lastname, image, password) {
            var newUser = {}
            newUser.user = user;
            newUser.mail = mail;
            newUser.name = name;
            newUser.lastname = lastname;
            newUser.image = image;
            newUser.password = password;
        },
        
        asyncDataRetrieval: function () {
            if (!userPromise) {
                userPromise = $http.get('../sample_files/sample.json'); /*.
                then(function (response) {
                    console.log(response);
                    return response.data;
                }); */
            }
            return userPromise;
        }
    };

    return usersDataFactory;

}]);
