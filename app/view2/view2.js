'use strict';

angular.module('myApp.view2', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', ['$http', '$sce', function ($http, $sce) {
    var _self = this;
    _self.subRedditSelect = [
      {
        value: 'CombinedGifs',
        label: 'CombinedGifs'
      },
      {
        value: 'EducationalGifs',
        label: 'EducationalGifs'
      },
      {
        value: 'GifExtra',
        label: 'GifExtra'
      },
      {
        value: 'HighQualityGifs',
        label: 'HighQualityGifs'
      },
      {
        value: 'InterestingGifs',
        label: 'InterestingGifs'
      },
      {
        value: 'Mechanical_Gifs',
        label: 'Mechanical_Gifs'
      },
      {
        value: 'MichaelBayGifs',
        label: 'MichaelBayGifs'
      },
      {
        value: 'NatureGifs',
        label: 'NatureGifs'
      },
      {
        value: 'PerfectLoops',
        label: 'PerfectLoops'
      },
      {
        value: 'PhysicsGifs',
        label: 'PhysicsGifs'
      },
      {
        value: 'ReactionGifs',
        label: 'ReactionGifs'
      },
      {
        value: 'RealLifeDoodles',
        label: 'RealLifeDoodles'
      },
      {
        value: 'SpaceGifs',
        label: 'SpaceGifs'
      },
      {
        value: 'SuperAthleteGifs',
        label: 'SuperAthleteGifs'
      },
      {
        value: 'SurrealGifs',
        label: 'SurrealGifs'
      },
      {
        value: 'WastedGifs',
        label: 'WastedGifs'
      },
      {
        value: 'WeatherGifs',
        label: 'WeatherGifs'
      },
      {
        value: 'WholesomeGifs',
        label: 'WholesomeGifs'
      }];

    _self.imgObj = [];
    _self.subRedditVal = { value: 'perfectloops' };
    var url = 'https://www.reddit.com/r/' + _self.subRedditVal.value + '.json?jsonp=JSON_CALLBACK';
    _self.url = url;

    _self.selectChange = function () {
      url = 'https://www.reddit.com/r/' + _self.subRedditVal.value + '.json?jsonp=JSON_CALLBACK';
      _self.url = url;
      activate()
    };

    activate();
    function activate() {
      $http.jsonp(url)
        .success(function (data) {
          _self.imgObj =
            _.map(data.data.children, function (item) {
              // If the url is a gifv, strip it to become a gif
              if (item.data.url.charAt(item.data.url.length - 1) == 'v') {
                item.data.url = item.data.url.substr(0, item.data.url.length - 1);
              }
              return item.data.url
            })
              // sometimes people post galleries or other sites, if the url isn't a .gif, remove it          
              .filter(function (item) {
                var endsWith = "gif",
                  regx = new RegExp(endsWith + "$");

                return regx.test(item);
              });
        });
    }

  }]);