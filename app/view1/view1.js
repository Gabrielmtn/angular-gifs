'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
     var _self = this;
     _self.isActive = false;
     _self.value = '';
     _self.selectedRange = 0;
     _self.showModal = false;
     _self.activeButton = activeButton;
     _self.launch = launch;
     


     function launch($event){
      console.log("modal is now", _self.showModal)
      _self.showModal = !_self.showModal;
     };
     
     function activeButton($event){
      $event && $event.preventDefault();
        _self.isActive   = !_self.isActive;
    }; 

}]);