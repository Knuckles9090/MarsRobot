/* Controller for the awesome Mars Robot */
(function(){
  'use strict';

  var robotController = function ($scope, RobotFactory, IntergalacticConsoleFactory) {

    $scope.initWorld = initWorld;
    $scope.runRobot = runRobot;
    $scope.getCellClass = getCellClass;
    $scope.range = range;
    $scope.robot = new RobotFactory();
    $scope.intergalacticConsole = new IntergalacticConsoleFactory();

    function initWorld (form, worldSize) {
      if (form.$valid) {
        $scope.directions = '';
        $scope.startLocation = '';
        $scope.robot = new RobotFactory();
        $scope.intergalacticConsole = new IntergalacticConsoleFactory();
        $scope.grid = parseGridSize(worldSize);
      }
    }

    function parseGridSize(worldSize) {
      return {
        width: parseInt(worldSize.split(',')[0]) + 1,
        height: parseInt(worldSize.split(',')[1]) + 1
      };
    }

    function runRobot(form, startLocation, directions) {
      var safeRobotJourney = true;
      if (startLocation && form.$valid) {
        $scope.robot.setLocationAndOrientation(startLocation);
        if ($scope.robot.hasSignal($scope.grid)) {
          for (var i = 0; i < directions.length; i++) {
            moveRobot(directions[i]);
            if (!$scope.robot.hasSignal($scope.grid)) {
              safeRobotJourney = false;
              break;
            }
          }
          if (safeRobotJourney) {
            $scope.intergalacticConsole.safeAndSoundMessage(
                $scope.robot.x,
                $scope.robot.y,
                $scope.robot.orientation
            );
          } else {
            $scope.intergalacticConsole.anotherOneBitesTheDustMessage(
                $scope.robot.previousLocation.x,
                $scope.robot.previousLocation.y,
                $scope.robot.previousLocation.orientation
            );
          }
        } else {
          $scope.intergalacticConsole.missPlacedRobot();
        }
      }
    }

    function moveRobot(direction) {
      if (direction === 'F') {
        $scope.robot.forward();
      } else if (direction === 'L') {
        $scope.robot.turnLeft();
      } else if (direction === 'R') {
        $scope.robot.turnRight();
      }
    }

    function getCellClass(row, column) {
      if ($scope.robot) {
        if ($scope.robot.x === row && $scope.robot.y === ($scope.grid.height - 1) - column) {
          return 'robot'
        }
      }
    }

    function range(count) {
      var values = [];
      for (var i = 0; i < count; i++) {
        values.push(i)
      }
      return values;
    }

  };

  robotController.$inject = ['$scope', 'RobotFactory', 'IntergalacticConsoleFactory'];
  angular.module('marsRobotApp').controller('robotController', robotController);

}());