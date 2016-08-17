var schoolApp = angular.module('schoolApp', []);

schoolApp.controller('clickToEdit', function($scope){

  $scope.predmet = "Matematika";
  $scope.ocene1 = "3, 4, 4, 5";
  $scope.ocene2 = "4, 4, 3, 2";
  $scope.editorEnabled = false;
  
  $scope.enableEditor = function() {
    $scope.editorEnabled = true;
    $scope.editableTitleSubject = $scope.predmet;
    $scope.editableTitleOcene1 = $scope.ocene1;
    $scope.editableTitleOcene2 = $scope.ocene2;
      
  };
  
  $scope.disableEditor = function() {
    $scope.editorEnabled = false;
      
  };
  
  $scope.save = function() {
      
    $scope.predmet = $scope.editableTitleSubject;
    $scope.ocene1 = $scope.editableTitleOcene1;
    $scope.ocene2 = $scope.editableTitleOcene2;
    $scope.disableEditor();
      
  };
    

});