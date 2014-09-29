angular.module('starter.controllers', [])
    .controller('DashCtrl', function ($scope, Iqns, $ionicLoading) {
        $scope.date = new Date();

        $scope.setColor = function (value) {
            if (value <= 50) {
                color = "#66cc33";
            }
            else if (value <= 100) {
                color = "#f0b840";
            }
            else if (value <= 150) {
                color = "#ef4e3a";
            }
            else if (value <= 200) {
                color = "#8a6de9";
            }
            else if (value <= 300) {
                color = "#444444";
            }
            else {
                color = "#000000";
            }

            return "float: right;width: 30%;text-align: center;color: black;float: right; background-color: " + color;

        };

        $scope.reloadPage = function() {
            location.reload();
        };

        $ionicLoading.show({
            template: 'Loading...'
        });

        Iqns.all().then(function (results) {
            $scope.iqns = results.data;
            $ionicLoading.hide();
        });

    });


