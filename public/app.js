var App = angular.module('App', []);

App.controller('Controller', function($scope, $http) {
  $scope.arrURL = {
    readDataFromDB: "http://localhost:3000/readDataFromDB",
    sendToHCCloud: "http://localhost:3000/sendToHCCloud",
    duplicateChart: "http://localhost:3000/duplicateChart",
    deleteChart: "http://localhost:3000/deleteChart"
  };
  var urlIndex, label;

  $scope.getRequest = function(urlIndex, label) {
    $scope.url = $scope.arrURL[urlIndex];

    $http.get($scope.url).then(function successCallback(response) {
      //Read the status from myServer
      $scope.response = response;
      //Display the status
      $scope[label] = $scope.response.data.status;
    }, function errorCallback(response) {
      //Read the status from myServer
      $scope.response = response;
      //Display the status
      $scope[label] = $scope.response.data.status;
    });
  }
});
