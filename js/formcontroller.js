"use strict";

var madLibs = angular.module("madLibs");

madLibs.controller("madLibsFormController",["$scope", function($scope, madLibService, $location){
  $scope.madLibFun = function (){
    madLibService.lastname = $scope.lastname;
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
