'use strict';

MetronicApp.controller('UserProfileController', function($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function() {   
        Metronic.initAjax(); // initialize core components
        Layout.setSidebarMenuActiveLink('set', $('#sidebar_menu_link_profile')); // set profile link active in sidebar menu

        $rootScope.settings.layout.pageSidebarClosed = true; 
    });
}); 
