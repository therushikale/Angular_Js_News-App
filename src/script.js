$(".nav-icn").on("click", function () {
    $(".navigation").addClass("navigation-show");
    $(".modal-shade").addClass("modal-shade-show");
  });
  $(".modal-shade").on("click", function () {
    $(".navigation").removeClass("navigation-show");
    $(".modal-shade").removeClass("modal-shade-show");
  });

  app.controller('ControllerName',
  ['$scope', '$route', function($scope, $route) {
$scope.reloadRoute = function() {

$route.reload();
};
}]);

