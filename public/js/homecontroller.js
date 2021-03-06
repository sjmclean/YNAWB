angular.module('YNAWB') 
    .controller('HomeController', ['$scope', '$routeParams', '$location', 'BudgetDataService', function($scope, $routeParams, $location, budgetDataService) {

        budgetDataService.getBudgetData()
            .then(function(b) {

                $scope.accounts = _.sortBy(b.accounts, function(a) { return a.accountName; });
                $scope.defaultAccount = _.first(b.accounts);
                $scope.budgetFile = "budgetfilehere";

            });
      
    }]);