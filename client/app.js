Parties = new Mongo.Collection('parties');

angular.module('socially',['angular-meteor']);
//The parties list ctrl controller attaches the party data to the $scope that was injected into our controller fucntion
//$meteor tag to service the controller with dependency injection
angular.module('socially').controller('PartiesListCtrl', function($scope, $meteor){
    $scope.parties = $meteor.collection(Parties);

    $scope.remove = function(party){
        $scope.parties.remove(party);
    };
});
