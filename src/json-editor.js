var oObject = {
  "priorityLevel": 1,
  "queue": {
    "prefix": "R",
    "remarks": "Room",
    "creationTimestamp": 1406814806344,
    "site": {
      "status": 0,
      "address": "Tower C - Level 3 - 0",
      "version": 2,
      "id": 3,
      "name": "General Surgery",
      "code": "C30"
    },
    "version": 8,
    "number": 1,
    "startingNumber": 1000,
    "type": "CSO",
    "id": 13,
    "nextNumber": 1007,
    "maxDepth": -1,
    "managed": true
  },
  "state": {
    "label": "Waiting",
    "creationTimestamp": 1406601800415,
    "version": 1,
    "id": 1,
    "stateId": 1
  },
  "ticketNumber": "13-1006",
  "stateEntryTimestamp": 1411618708201,
  "userId": "admin",
  "creationTimestamp": 1409213952140,
  "version": 37,
  "images": "a33bd0ee-93e6-4d51-97a2-29b5f02e8f16_0,a33bd0ee-93e6-4d51-97a2-29b5f02e8f16_1,a33bd0ee-93e6-4d51-97a2-29b5f02e8f16_2",
  "customerId": "S8860144J",
  "transactionName": "C30",
  "id": 119,
  "array": ["haha", "hh", 1, 2, [1, 2, 3]]
};

var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope) {
  $scope.sTableName = "RootTable";
  $scope.obj = oObject;

  $scope.isObject = function(value) {
    return angular.isObject(value);
  };

  $scope.isArray = function(value) {
    return angular.isArray(value);
  };

  $scope.show = function() {
    console.log($scope.obj);
    alert(JSON.stringify($scope.obj));
  };
}]);

app.controller('MyNestedController', ['$scope', function($scope) {
  $scope.additionalKeyValue = {};

  $scope.delete = function(key) {
    if (angular.isArray($scope.obj)) {
      $scope.obj.splice(key, 1);
    } else {
      delete $scope.obj[key];
    }
  };

  $scope.change = function(key, sValue) {
    $scope.obj[key] = sValue;
  };

  $scope.add = function() {
    var sValue = $scope.additionalKeyValue.value;
    if (angular.isArray($scope.obj)) {
      if (!(angular.isUndefined(sValue) || sValue === '')) {
        $scope.obj.push(sValue);
        $scope.additionalKeyValue.value = '';
      }
    } else {
      var sKey = $scope.additionalKeyValue.key;
      if (!(angular.isUndefined(sKey) ||
            sKey === '' ||
            angular.isUndefined(sValue) ||
            sValue === '')) {
        $scope.obj[sKey] = sValue;
        $scope.additionalKeyValue.key = '';
        $scope.additionalKeyValue.value = '';
      }
    }
  };

  $scope.valueKeyPressed = function($event) {
    if ($event.keyCode === 13) {
      // enter key is pressed
      $scope.add();
    }
  };
}]);
