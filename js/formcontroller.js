"use strict";

var madLibs = angular.module("madLibs");

//controller for the form
madLibs.controller("madLibsFormController",["$scope","madLibService","$location", function($scope, madLibService, $location){
  //Link to form via madLibFun function on click
  $scope.madLibFun = function (){
    madLibService.lastName = $scope.lastName;
    madLibService.verb = $scope.verb;
    madLibService.loveInterest = $scope.loveInterest;
    madLibService.bodyPart = $scope.bodyPart;
    madLibService.femaleName = $scope.femaleName;
    madLibService.verb2 = $scope.verb2;
    madLibService.noun = $scope.noun;
    madLibService.plural = $scope.plural;
    madLibService.verb3 = $scope.verb3;
    madLibService.noun2 = $scope.noun2;
    madLibService.occupation = $scope.occupation;
    madLibService.salary = $scope.salary;
    madLibService.verb4 = $scope.verb4;
    madLibService.firstName = $scope.firstName;
    madLibService.lastName2 = $scope.lastName2;
    $location.path("/view");
  }
}]);
