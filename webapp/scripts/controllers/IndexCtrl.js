angular.module('tutor').controller("IndexCtrl", function($scope, $location, $window) {
    if ($location.path() != '/home') {
        $window.location.href = '/maria/pre';
    }
});
