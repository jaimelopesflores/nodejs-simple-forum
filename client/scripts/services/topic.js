'use strict';

angular.module('simpleforum')
  .factory('TopicServices', [
    '$http',
    'Static',
    function ($http, Static) {

      return {
        all: function (success, error) {
          $http.get(Static.serviceUrl + '/topic')
            .success(success)
            .error(error)
        },
        get: function (id, success, error) {
          $http.get(Static.serviceUrl + '/topic/' + id)
            .success(success)
            .error(error)
        },

        add: function (data, success, error) {
          $http.post(Static.serviceUrl + '/topic', data)
            .success(success)
            .error(error)
        },
        update: function (data, success, error) {
          $http.put(Static.serviceUrl + '/topic', data)
            .success(success)
            .error(error)
        },
        delete: function (id, success, error) {
          $http.delete(Static.serviceUrl + '/topic', {params: {id: id}})
            .success(success)
            .error(error)
        }
      };
    }
  ]);
