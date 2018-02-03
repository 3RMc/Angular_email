var app = angular.module('email', ['ui.bootstrap']);
app.controller('MessagesListCtrl', function ($http) {
    var vm = this;
    $http.get('messages.json')
        .then(function (res) {
            vm.messages = res.data;
        });

    vm.addToFavourite = function (messageId) {
        var currentIndex = _.findIndex(vm.messages, { 'id': messageId });
        vm.messages[currentIndex].favourite = (vm.messages[currentIndex].favourite === true) ? false : true;
    };

    vm.openFull = function (messageId) {
        var currentIndex = _.findIndex(vm.messages, { 'id': messageId });
        vm.modalId = currentIndex;
    };

    vm.modalHide = function () {
        vm.modalId = false;
    };
});

app.directive('modalWindow', function (){
    return {
        restrict: 'E',
        templateUrl: 'modal-window.html'
    };
});