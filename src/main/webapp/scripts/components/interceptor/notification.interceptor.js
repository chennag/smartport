 'use strict';

angular.module('smartportApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-smartportApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-smartportApp-params')});
                }
                return response;
            }
        };
    });
