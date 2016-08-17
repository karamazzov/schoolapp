var schoolApp = angular.module('schoolApp', []);

schoolApp.controller('clickToEdit', function($scope){

  $scope.predmet = "Matematika";
  $scope.profesor = "Živojin Život";
  $scope.editorEnabled = false;
  
  $scope.enableEditor = function() {
    $scope.editorEnabled = true;
    $scope.editableTitleSubject = $scope.predmet;
    $scope.editableTitleProfessor = $scope.profesor;
      
  };
  
  $scope.disableEditor = function() {
    $scope.editorEnabled = false;
      
  };
  
  $scope.save = function() {
      
    $scope.predmet = $scope.editableTitleSubject;
    $scope.profesor = $scope.editableTitleProfessor;
    $scope.disableEditor();
      
  };
    
  $scope.colorGreen = function(){
    
  }
});