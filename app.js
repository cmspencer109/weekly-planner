angular.module('dashboard', ['ngRoute', 'firebase'])

.controller('MainController', function($scope, $filter, $window, $location) {

    // Day name lookup
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    $scope.week = []

    var nowMoment = moment()
    var weekLength = 7

    $scope.initWeek = function(moment, weekLength) {
        var startMoment = moment.startOf('week')
        if(weekLength == 5) {

        } else if(weekLength == 7) {
            for(var i = 0; $scope.week.length < weekLength; i++) {
                $scope.week.push({date: startMoment.format('dddd')+ ' ' + startMoment.format('MM/DD/YYYY'), content: 'You have no tasks for today!', moment: startMoment})
                startMoment.add(1, 'days').calendar()
            }
            startMoment.subtract(1, 'days').calendar()
        } else {
            console.log('Invalid week length: ' + weekLength)
        }
    }
    $scope.initWeek(nowMoment, weekLength)

    // Week nav functions
    $scope.nextWeek = function() {
        $scope.week = []
        nowMoment = nowMoment.add(7, 'days')
        $scope.initWeek(nowMoment, weekLength)
    }
    $scope.previousWeek = function() {
        $scope.week = []
        nowMoment = nowMoment.subtract(7, 'days')
        $scope.initWeek(nowMoment, weekLength)
    }

    $scope.checkDay = function() {

    }

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    // Firebase
    // var myFirebaseRef = new Firebase("https://weeklyplanner.firebaseio.com/")
    //
    // $scope.signUp = function(newEmail, newPassword) {
    //     myFirebaseRef.createUser({
    //         email : newEmail,
    //         password : newPassword
    //     }, function(error, userData) {
    //         if (error) {
    //             console.log("Error creating user:", error);
    //         } else {
    //             console.log("Successfully created user account with uid:", userData.uid);
    //         }
    //     });
    //     $scope.newEmail = ''
    //     $scope.newPassword = ''
    // }
    //
    // $scope.signIn = function(email, password) {
    //     myFirebaseRef.authWithPassword({
    //         email : $scope.email,
    //         password : $scope.password
    //     }, function(error, authData) {
    //         if (error) {
    //             console.log("Login Failed!", error);
    //         } else {
    //             console.log("Authenticated successfully with payload:", authData);
    //             $location.path('/').replace(); // path not hash
    //             $scope.$apply()
    //         }
    //     }, {remember: "sessionOnly"});
    // }
    //
    // // Save data
    // var usersRef = myFirebaseRef.child("users");
    // usersRef.set({
    //     cmspencer109: {
    //         date_of_birth: "November 11, 1999",
    //         full_name: "Christopher Spencer"
    // },
    //     sonrisesoftware: {
    //         date_of_birth: "February 16, 1997",
    //         full_name: "Michael Spencer"
    //     }
    // });
    //
    // // Update data
    // var sonrisesoftwareRef = usersRef.child("sonrisesoftware");
    // sonrisesoftwareRef.update({
    //     "favorite_sport": "Airsoft"
    // });
    //
    // // Get data
    // // Attach an asynchronous callback to read the data at our posts reference
    // myFirebaseRef.child('users').on("value", function(snapshot) {
    //     console.log(snapshot.val());
    // }, function (errorObject) {
    //     console.log("The read failed: " + errorObject.code);
    // });

})
