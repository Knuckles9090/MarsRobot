(function(){
  angular.module('marsRobotApp').factory('RobotFactory', function() {
    var robot = function() {
      this.x = null;
      this.y = null;
      this.orientation = null;
      this.compass = 'NESW';
      this.memory = [];

      this.turnLeft = function() {
        this.orientation = this.compass[this.compass.indexOf(this.orientation) - 1] || 'W';
      };

      this.turnRight = function() {
        this.orientation = this.compass[this.compass.indexOf(this.orientation) + 1] || 'N';
      };

      this.forward = function() {
        if (this.orientation === 'N') {
          if (this.moveIsSafe(this.x, this.y + 1)) {
            this.y = this.y + 1;
          }
        } else if (this.orientation === 'E') {
          if (this.moveIsSafe(this.x + 1, this.y)) {
            this.x = this.x + 1;
          }
        } else if (this.orientation === 'S') {
          if (this.moveIsSafe(this.x, this.y - 1)) {
            this.y = this.y - 1;
          }
        } else if (this.orientation === 'W') {
          if (this.moveIsSafe(this.x - 1, this.y)) {
            this.x = this.x - 1;
          }
        }
      };

      this.setLocationAndOrientation = function (locationAndOrientation) {
        this.x = parseInt(locationAndOrientation.split(',')[0]);
        this.y = parseInt(locationAndOrientation.split(',')[1].slice(0, -1));
        this.orientation = locationAndOrientation.slice(-1);
      };

      this.moveIsSafe = function (x, y) {
        var coordinates = [x, y];
        return !this.memory.some(function (c) {
          return c.every(function(element, index) {
            return element === coordinates[index];
          });
        });
      };

      this.hasSignal = function(grid) {
        if (this.x >= 0 && this.y >= 0 && this.x < grid.width && this.y < grid.height) {
          return true;
        } else {
          this.memory.push([this.x, this.y]);
          return false;
        }
      }
    };

    return robot;
  });
})();


(function(){
  angular.module('marsRobotApp').factory('IntergalacticConsoleFactory', function() {
    var console = function() {
      this.message = 'Welcome to InterGalactic Console!\n';

      this.output = function() {
        return this.message.replace(/\n$/, '');
      };

      this.anotherOneBitesTheDustMessage = function(x, y, orientation) {
        this.message += 'Another robot bites the dust at: '+ x + ',' + y + orientation + 'LOST\n';
      };

      this.safeAndSoundMessage = function(x, y, orientation) {
        this.message += 'Robot safely arrived to: '+ x + ',' + y + orientation + '\n';
      };
    };

    return console;
  });
})();
