var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.userId = 123;
});

function flotChart(userId) {
  alert('passed: ' + userId);
}

app.directive('myFlotChart', function(){
  return {
    restrict: 'E',
    require: 'ngModel',
    link: function(scope, elem, attr, ctrl) {
      var scr = document.createElement('script');
      var text = document.createTextNode('flotChart(' + scope.userId + ')');
      scr.appendChild(text);
      elem.append(scr);
    }
  }
})