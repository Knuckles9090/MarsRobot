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

  });
})();