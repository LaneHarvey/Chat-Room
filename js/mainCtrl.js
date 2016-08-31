angular.module('chatroom').controller('mainCtrl', function($scope, messageService){
  //In your controller you'll have a getMessages function and a postMessage function, but should be placed on $scope.
$scope.getMessage = function(){};
$scope.postMessage = function(){};

  //The getMessages function will call the getData method on the messageService object. You'll then save the result of that request to
  //your controllers $scope as messages ($scope.messages)

//{ placeholder

  var promise = $http.get('https://AnyUrlCanGoHere.com/api/dogs');

  promise.then(function(results){
      var status = results.status;
      var dogs = results.data;
  })


  var promise = $http({
      url: 'https://AnyUrlCanGoHere.com/api/Dogs',
      method: "GET",
      data: {name: 'Mee sir'}
  });
  promise.then(function(response){
      var status = response.status;
      var data = response.data;
  })

// } placeholder end 

  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will then post it to the backend.



  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  // setInterval(function(){
  //   $scope.getMessages();
  // }, 1500)
})
