angular.module('starter.services', [])

    .factory('Iqns', function ($http) {
        return {
            all: function () {
                var promise = $http({method: 'GET', url: 'http://iqn.enventeici.fr/'})
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        return {"status": false};
                    });
                return promise;
            }

        }
    });
