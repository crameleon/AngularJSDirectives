monApp.controller('DirectivesCtrl', ['$scope', function ($scope) {

  // --- Pour ngRepeat
  $scope.friends = [
    {name:'John', age:25, gender:'boy'},
    {name:'Jessie', age:30, gender:'girl'},
    {name:'Johanna', age:28, gender:'girl'},
    {name:'Joy', age:15, gender:'girl'},
    {name:'Mary', age:28, gender:'girl'},
    {name:'Peter', age:95, gender:'boy'},
    {name:'Sebastian', age:50, gender:'boy'},
    {name:'Erika', age:27, gender:'girl'},
    {name:'Patrick', age:40, gender:'boy'},
    {name:'Samantha', age:60, gender:'girl'}
  ];

  // --- Pour ngShow & ngClick
  $scope.displayLogo = false;
  // Expose functions
  $scope.toggleLogo = toggleLogo;

  function toggleLogo() {
    $scope.displayLogo = !$scope.displayLogo;
  }

  // --- Pour ngOptions & ngSwitch
  $scope.tasks = ["Dormir", "Faire du sport", "Jouer aux Jeux Vidéo", "Travailler", "Manger", "Regarder la télévision"];
  $scope.selection = $scope.tasks[0];

  // --- Pour ngSubmit & ngMessages & ngDisabled & $dirty
  // Expose functions
  $scope.subscribe = subscribe;

  function subscribe() {
    var message = "L'utilisateur suivant a bien été inscrit : ";
    message += $scope.user.name;
    message += " ("+$scope.user.email+")";
    message += " - "+$scope.user.age+"ans";
    alert(message);
  }

}]);
