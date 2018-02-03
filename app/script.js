var app = angular.module('email', ['ui.bootstrap']);
app.controller('MessagesListCtrl', function ($http) {
    var vm = this;
    $http.get('messages.json')
        .then(function (res) {
            vm.messages = res.data;
        });
})