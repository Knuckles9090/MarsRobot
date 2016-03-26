(function(){
  'use strict';

  describe('RobotFactory', function() {

    beforeEach(module('marsRobotApp'));

    it('should set robot location and orientation', inject(function(RobotFactory) {
      var robot = new RobotFactory();
      robot.setLocationAndOrientation('9,9N');
      expect(robot.x).toEqual(9);
      expect(robot.y).toEqual(9);
      expect(robot.orientation).toEqual('N');
    }));

    it('should return false when robot is not within grid and should insert bad coordinates to memory', inject(function(RobotFactory) {
      var grid = {width: 5, height:5};
      var robot = new RobotFactory();
      robot.setLocationAndOrientation('9,9N');
      expect(robot.hasSignal(grid)).toBeFalsy();
      expect(robot.memory[0]).toEqual([9,9]);
    }));

    it('should return true when robot is within grid', inject(function(RobotFactory) {
      var grid = {width: 5, height:5};
      var robot = new RobotFactory();
      robot.setLocationAndOrientation('3,3N');
      expect(robot.hasSignal(grid)).toBeTruthy();
    }));

    it('should increase y by 1 when orientation is N and moving forward', inject(function(RobotFactory) {
      var robot = new RobotFactory();
      robot.setLocationAndOrientation('3,3N');
      robot.forward();
      expect(robot.y).toEqual(4);
    }));

    it('should decrease y by 1 when orientation is S and moving forward', inject(function(RobotFactory) {
      var robot = new RobotFactory();
      robot.setLocationAndOrientation('3,3S');
      robot.forward();
      expect(robot.y).toEqual(2);
    }));

    it('should increase x by 1 when orientation is E and moving forward', inject(function(RobotFactory) {
      var robot = new RobotFactory();
      robot.setLocationAndOrientation('3,3E');
      robot.forward();
      expect(robot.x).toEqual(4);
    }));

    it('should decrease x by 1 when orientation is W and moving forward', inject(function(RobotFactory) {
      var robot = new RobotFactory();
      robot.setLocationAndOrientation('3,3W');
      robot.forward();
      expect(robot.x).toEqual(2);
    }));

    it('should change orientation correctly when turning right', inject(function(RobotFactory) {
      var robot = new RobotFactory();
      robot.setLocationAndOrientation('3,3N');
      expect(robot.orientation).toEqual('N');
      robot.turnRight();
      expect(robot.orientation).toEqual('E');
      robot.turnRight();
      expect(robot.orientation).toEqual('S');
      robot.turnRight();
      expect(robot.orientation).toEqual('W');
      robot.turnRight();
      expect(robot.orientation).toEqual('N');
    }));

    it('should change orientation correctly when turning left', inject(function(RobotFactory) {
      var robot = new RobotFactory();
      robot.setLocationAndOrientation('3,3N');
      expect(robot.orientation).toEqual('N');
      robot.turnLeft();
      expect(robot.orientation).toEqual('W');
      robot.turnLeft();
      expect(robot.orientation).toEqual('S');
      robot.turnLeft();
      expect(robot.orientation).toEqual('E');
      robot.turnLeft();
      expect(robot.orientation).toEqual('N');
    }));

    it('should return true when bad coordinates are not in memory', inject(function(RobotFactory) {
      var robot = new RobotFactory();
      expect(robot.moveIsSafe(6, 5)).toBeTruthy();
      expect(robot.moveIsSafe()).toBeTruthy();
    }));

    it('should return false when bad coordinates are in memory', inject(function(RobotFactory) {
      var robot = new RobotFactory();
      robot.memory = [[6,5]];
      expect(robot.moveIsSafe(6, 5)).toBeFalsy();
    }));

  });
})();