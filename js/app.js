var app = angular.module('vasp', ['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
$routeProvider.
            when('/', {
                    templateUrl: 'pages/home.html',
                    controller: 'homeController',
                    activetab:'home'
                }).
                when('/about', {
                    templateUrl: 'pages/about.html',
                    controller: 'aboutController',
                    activetab:'about'
                }).
                when('/play', {
                    templateUrl: 'pages/play.html',
                    controller: 'playController',
                    activetab:'play'
                }).
                when('/join', {
                    templateUrl: 'pages/join.html',
                    controller: 'joinController',
                    activetab:'join'
                }).
                otherwise({
                    templateUrl: 'pages/home.html',
                    controller: 'errorController',


                });
}]);

app.controller('navController',function($scope,$location){


     $scope.isActive = function (myLocation) { 
       // 
        return myLocation === $location.path();
        //console.log(viewLocation);
        //return viewLocation;
    };



});
app.controller('homeController',['$scope',
		function($scope){

			
		}
	]);

app.controller('aboutController',['$scope',
		function($scope){

			
		}
	]);

app.controller('playController',['$scope',
		function(p){
                p.playList=[
                {name:'Suddi Idu Suddi',
                 direction:'Ganesh',
                 show:false
                 },
                 {name:'Panjro hali pishachigalu',
                 direction:'Seena',
                 show:false
                 },
                 {name:'Gajal Shahiri',
                 direction:'Vinay Shasthri',
                 show:false
                 },
                 {name:'Sahebaru Baruthare',
                 direction:'Vinay Shastri',
                 show:true
                 }
                ];
			
		}
	]);

app.controller('joinController',['$scope',
		function($scope){

			
		}
	]);
app.controller('errorController',['$scope',
		function($scope){

			
		}
	]);

app.controller('dirController', function($scope){
    $scope.msg="Users List";

});
app.controller('dirController2',function($scope){
    $scope.msg="List of users";
});

app.directive('helloWorld',function(){
    return{
       template:"<strong>{{msg}} --Search your Name here(Names are coming from third party API)</strong>"
    };
});

app.directive('loginDirectory',function(){
    return{
        templateUrl:"extTemplate.html"
    };
});

app.directive('playInformation',function(){
    return{
        templateUrl:'pages/playlistTemplate.html'
    };
});

app.controller('keyguysCotroller',function($scope,$http){
    $scope.msg = "Hello Mr. Rayapati";
    $http.get('http://reqres.in/api/users?page=2').success(function(response){
        $scope.keyguys=response.data;
    });
});





function employeeName(){
    this.fname="Vishu";
    this.lname="Chakravarthy";
    var fullname=function fulleName(){
        return this.fname+ "" +this.lname;
    }
}
