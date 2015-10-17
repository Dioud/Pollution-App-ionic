angular.module('starter.controllers', [])
    .controller('DashCtrl', function ($scope, Iqns, $ionicLoading) {
        $scope.date = new Date();


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


