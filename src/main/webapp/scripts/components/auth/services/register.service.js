'use strict';

angular.module('smartportApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


