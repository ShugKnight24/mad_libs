"use strict";

var madLibs = angular.module("madLibs");

madLibs.controller("madLibsViewController",["$scope", function($scope, madLibService){
  $scope.lastname = madLibService.lastname ;
  $scope.verb = madLibService.verb;
  $scope.loveInterest = madLibService.loveInterest;
  $scope.bodyPart = madLibService.bodyPart;
  $scope.femaleName = madLibService.femaleName;
  $scope.verb2 = madLibService.verb2;
  $scope.noun = madLibService.noun;
  $scope.plural = madLibService.plural;
  $scope.verb3 = madLibService.verb3;
  $scope.noun2 = madLibService.noun2;
  $scope.occupation = madLibService.occupation;
  $scope.salary = madLibService.salary;
  $scope.verb4 = madLibService.verb4;
  $scope.firstName = madLibService.firstName;
  $scope.lastName2 = madLibService.lastName2;
}]);
