var madLibs = angular.module("madLibs", ["ngRoute"]);

madLibs.config(function($routeProvider){
  $routeProvider
    .when("/",
      {
        controller: "madLibsFormController",
        templateUrl: "partials/form.html"
      })
    .when("/form",
      {
        controller: "madLibsFormController",
        templateUrl: "partials/form.html"
      })
    .when("/view",
      {
        controller: "madLibsViewController",
        templateUrl: "partials/view.html"
      })
    .when("/404",
      {
        controller: "madLibsViewController",
        templateUrl: "partials/404.html"
      })
    .otherwise({redirectTo:"/404"});
});
