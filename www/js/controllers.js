angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) { })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });

// var db = null;

// var example = angular.module('starter', ['ionic', 'ngCordova'])
//   .run(function ($ionicPlatform, $cordovaSQLite) {
//     $ionicPlatform.ready(function () {
//       if (window.cordova && window.cordova.plugins.Keyboard) {
//         cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//       }
//       if (window.StatusBar) {
//         StatusBar.styleDefault();
//       }
//       db = $cordovaSQLite.openDB("my.db");
//       $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
//     });
//   });
// example.controller("DashCtrl", function ($scope, $cordovaSQLite) {
//   $scope.insert = function (firstname, lastname) {
//     var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
//     $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function (res) {
//       console.log("INSERT ID -> " + res.insertId);
//     }, function (err) {
//       console.error(err);
//     });
//   }

//   $scope.select = function (lastname) {
//     var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
//     $cordovaSQLite.execute(db, query, [lastname]).then(function (res) {
//       if (res.rows.length > 0) {
//         console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
//       } else {
//         console.log("No results found");
//       }
//     }, function (err) {
//       console.error(err);
//     });
//   }

// });