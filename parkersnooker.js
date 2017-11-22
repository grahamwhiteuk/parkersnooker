var parkersnooker = angular.module('parkersnooker', ['ui.bootstrap', 'ngAnimate']);

/*
 * Controls the Navbar collapse state (below 768px via media query)
 */
parkersnooker.controller('NavbarCtrl', function($scope) {
  $scope.isNavCollapsed = true;
});

/*
 * Controls the Drop Down menu in the toolbar at the top of the page
 */
parkersnooker.controller('DropdownCtrl', function($scope,$rootScope,dataService) {
  $scope.tournaments = dataService.getTournaments();

  $scope.dropdownItemSelected = function(item) {
    $rootScope.$broadcast('update',item);
  }
});

/*
 * Controls the collapsible panels
 */
parkersnooker.controller('CollapseCtrl', function($scope) {
  $scope.isCollapsed = false;
});

/*
 * Controls the group stages panel
 */
parkersnooker.controller('leagueTablesCtrl', function($scope,dataService) {

  $scope.load = function(tournament) {
    // grab the current data as CSV
    dataService.getCSVArray(tournament).then(function(response) {
      $scope.leagueTables = {};
      $scope.groups = [];

      var csvData = response;

      // template for the information required in the league table
      var playerTemplate = {
        name:        "",
        group:       "A",
        matchesPlayed:0,
        matchesWon:   0,
        matchesLost:  0,
        framesWon:    0,
        framesLost:   0,
        highBreak:    0,
        results:      []
      };

      // process the CSV
      for (var i = 1; i < csvData.length; i++) {
        var group   = csvData[i][0];
        var time    = csvData[i][1];
        var date    = csvData[i][2];
        var player1 = csvData[i][3];
        var p1score = parseInt(csvData[i][4]) || 0;
        var p2score = parseInt(csvData[i][5]) || 0;
        var player2 = csvData[i][6];
        var p1high  = parseInt(csvData[i][7]) || 0;
        var p2high  = parseInt(csvData[i][8]) || 0;

        // initialise player 1 to the blank template if required
        if (!$scope.leagueTables.hasOwnProperty(player1)) {
          $scope.leagueTables[player1] = {};
          angular.copy(playerTemplate, $scope.leagueTables[player1]);
        }

        // keep a unique and alpha sorted list of the groups
        if ($scope.groups.indexOf(group) === -1) {
          $scope.groups.push(group);
          $scope.groups.sort();
        }

        // set or update the values for player 1
        $scope.leagueTables[player1].name = player1;
        $scope.leagueTables[player1].group = group;
        $scope.leagueTables[player1].matchesPlayed += 1;
        if (p1score > p2score) {
          $scope.leagueTables[player1].matchesWon += 1;
        } else if (p2score > p1score) {
          $scope.leagueTables[player1].matchesLost += 1;
        }
        $scope.leagueTables[player1].framesWon += p1score;
        $scope.leagueTables[player1].framesLost += p2score;
        if (p1high > $scope.leagueTables[player1].highBreak)
          $scope.leagueTables[player1].highBreak = p1high;
        $scope.leagueTables[player1].results.push(csvData[i]);


        // initialise player 2 to the blank template if required
        if (!$scope.leagueTables.hasOwnProperty(player2)) {
          $scope.leagueTables[player2] = {};
          angular.copy(playerTemplate, $scope.leagueTables[player2]);
        }

        // keep a unique and alpha sorted list of the groups
        if ($scope.groups.indexOf(group) === -1) {
          $scope.groups.push(group);
          $scope.groups.sort();
        }

        // set or update the values for player 1
        $scope.leagueTables[player2].name = player2;
        $scope.leagueTables[player2].group = group;
        $scope.leagueTables[player2].matchesPlayed += 1;
        if (p1score > p2score) {
          $scope.leagueTables[player2].matchesLost += 1;
        } else if (p2score > p1score) {
          $scope.leagueTables[player2].matchesWon += 1;
        }
        $scope.leagueTables[player2].framesLost += p1score;
        $scope.leagueTables[player2].framesWon += p2score;
        if (p2high > $scope.leagueTables[player2].highBreak)
          $scope.leagueTables[player2].highBreak = p2high;
        $scope.leagueTables[player2].results.push(csvData[i]);
      }

      // sort the results into order (matches won -> frames won -> highest break -> head to head)
      var sortable = [];
      for (player in $scope.leagueTables)
        sortable.push($scope.leagueTables[player]);

      // do the sort also with a customised function to sort on head to head result
      $scope.leagueTables = dataService.multisort(sortable, ['matchesWon','framesWon','highBreak'], ['DESC','DESC','DESC'], dataService.tie_breaker(player1,player2));
    }, function(err) {
      console.log(err);
    });
  }

  $scope.$on('update', function (event,tournament) {
    $scope.load(tournament);
  });

  $scope.load(dataService.getCurrentTournament());

});

/*
 * Controls the results and fixtures panel
 */
parkersnooker.controller('fixturesResultsCtrl', function($scope,dataService) {
  $scope.load = function(tournament) {
    dataService.getCSVArray(tournament)
    .then(function(response) {
      $scope.csvData = response;
      for (var i = 1; i < $scope.csvData.length; i++) {
        if ($scope.csvData[i][3] === "") {
          // result is TBC
          $scope.csvData[i][4] = "TBC"
        } else {
          // merge cells
          $scope.csvData[i][4] += "-" + $scope.csvData[i][5];
        }
      }
    }, function(err) {
      console.log(err);
      $scope.csvData = [];
    });
  }

  $scope.$on('update', function (event,tournament) {
    $scope.load(tournament);
  });

  $scope.load(dataService.getCurrentTournament());
});

/*
 * Controls the results and fixtures panel
 */
parkersnooker.controller('tournamentCtrl', function($scope,dataService) {
  $scope.tournament = dataService.getCurrentTournament();

  $scope.$on('update', function (event,tournament) {
    $scope.tournament = tournament;
  });
});


parkersnooker.service('dataService', function($http) {
  /**
  * Function to sort multidimensional array
  * https://coderwall.com/p/5fu9xw/how-to-sort-multidimensional-array-using-javascript
  *
  * param {array} [arr] Source array
  * param {array} [columns] List of columns to sort
  * param {array} [order_by] List of directions (ASC, DESC)
  * returns {array}
  */
  function multisort(arr, columns, order_by, tie_breaker) {
    if(typeof columns == 'undefined') {
      columns = []
      for(x=0;x<arr[0].length;x++) {
        columns.push(x);
      }
    }

    if(typeof order_by == 'undefined') {
      order_by = []
      for(x=0;x<arr[0].length;x++) {
        order_by.push('ASC');
      }
    }

    function multisort_recursive(a,b,columns,order_by,index) {
      var direction = order_by[index] == 'DESC' ? 1 : 0;

      var is_numeric = !isNaN(+a[columns[index]] - +b[columns[index]]);

      var x = is_numeric ? +a[columns[index]] : a[columns[index]].toLowerCase();
      var y = is_numeric ? +b[columns[index]] : b[columns[index]].toLowerCase();

      if(x < y)
        return direction == 0 ? -1 : 1;

      if(x == y) {
        return columns.length-1 > index ? multisort_recursive(a,b,columns,order_by,index+1) : tie_breaker(a,b);
      }

      return direction == 0 ? 1 : -1;
    }

    return arr.sort(function (a,b) {
      return multisort_recursive(a,b,columns,order_by,0);
    });
  }

  /**
  * Helper function to tie break sort decisions in the multisort function specific to this site
  * https://coderwall.com/p/5fu9xw/how-to-sort-multidimensional-array-using-javascript
  *
  * param {object} [player1] The first player
  * param {object} [player2] The second player
  * returns {integer}
  */
  function tie_breaker(player1,player2) {
    // go through the results from the first player
    for (resultIndex in player1.results) {
      // locate the right result from the two players concerned
      if (player1.results[resultIndex][3] === player2.name || player1.results[resultIndex][6] === player2.name) {
        var player1Result = 0;
        var player2Result = 0;
        if (player1.results[resultIndex][3] === player2.name) {
          player1Result = player1.results[resultIndex][4];
          player2Result = player1.results[resultIndex][5];
        } else {
          player1Result = player1.results[resultIndex][5];
          player2Result = player1.results[resultIndex][4];
        }
        // return sort order based on if player1 beat player2 or vice versa
        return player1Result > player2Result ? 1 : -1;
      }
    }
    return 0; // default return value
  }

  /**
  * Function to parse CSV data from a multi-line string into an array of arrays
  * http://stackoverflow.com/a/1293163/2343
  * https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm
  *
  * param {string} [strData] multi-line string containing CSV data
  * param {string} [strDelimiter] optional CSV delimiter (default: comma)
  * returns {array}
  */
  function CSVToArray( strData, strDelimiter ){
    strDelimiter = (strDelimiter || ",");

    var objPattern = new RegExp(
      (
        // Delimiters.
        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
        // Quoted fields.
        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
        // Standard fields.
        "([^\"\\" + strDelimiter + "\\r\\n]*))"
      ),"gi"
    );

    var arrData = [[]];
    var arrMatches = null;

    while (arrMatches = objPattern.exec( strData )){
      var strMatchedDelimiter = arrMatches[ 1 ];

      if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter)
        arrData.push( [] );

      var strMatchedValue;

      if (arrMatches[ 2 ]) {
        strMatchedValue = arrMatches[ 2 ].replace(new RegExp( "\"\"", "g" ),"\"");
      } else {
        strMatchedValue = arrMatches[ 3 ];
      }

      arrData[ arrData.length - 1 ].push( strMatchedValue );

      if (arrData[arrData.length - 1].length === 1 && arrData[arrData.length - 1][0] === "")
        arrData.pop();
    }

    return( arrData );
  }

  /**
  * Does an HTTP get for a particular CSV file by tournament (or more accurately by tournament)
  *
  * param {string} [tournament] the name of the CSV file to get (minus the .csv extension)
  * returns {promise}
  */
  function getCSVArray(tournament) {

    // Get a CSV formatted file
    //var URL = year + '.csv';

    // Get from Google Sheets
    var API_KEY = 'AIzaSyAHVyyi0XRFC4voZXi2DtiEXQUw2V82Brg'; // https://console.developers.google.com
    var URL = 'https://content-sheets.googleapis.com/v4/spreadsheets/' + sheets[tournament] + '/values/A1%3AZ99?key=' + API_KEY;

    document.body.style.cursor='wait';
    return $http.get(URL, {
        cache: true
      }).then(function successCallback(response) {
        document.body.style.cursor='default';
        return response.data.values;
        //return CSVToArray(response.data);
      }, function errorCallback(response) {
        document.body.style.cursor='default';
        return response;
    });
  }

  /**
  * Returns a list of all tournaments
  *
  * returns {array}
  */
  function getTournaments() {
    return Object.keys(sheets).sort().reverse();
  }

  /**
  * Returns the current tournament string
  *
  * returns {string}
  */
  function getCurrentTournament() {
    return Object.keys(sheets).sort().reverse()[0];
  }

  var sheets = {
    '2014': null,
    '2016': '19ufPv05ULH9XemwCVMzX5wLogOJEHaFRlluYhXADGBs',
    '2017': '1B8I8QmSdHKtpNwMjWtmp1hB1OsRqexfho7sOAl5ACeY'
  }

  return {
    getCSVArray: getCSVArray,
    multisort: multisort,
    tie_breaker: tie_breaker,
    getCurrentTournament: getCurrentTournament,
    getTournaments: getTournaments
  }
});
