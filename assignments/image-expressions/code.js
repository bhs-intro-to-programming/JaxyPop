/*
   This code is running in an environment with five functions defined:

    drawLine(x1, y1, x2, y2, color, lineWidth)

      Draws a line from x1,y1 to x2,y2 using the give color. The fifth argument,
      lineWidth, is optional and defaults to 1.

    drawCircle(x, y, r, color, lineWidth=1)

      Draws a circle centered at x,y with radius r using the given color. The
      fith argument, lineWidth, is optional and defaults to 1.

    drawRect(x, y, width, height, color, lineWidth=1)

      Draws a rectangle starting at x,y with the given width, height, and color.
      Positive widths go to the right and negative to the left; positive heights
      go down and negative heights go up. The sixth argument, lineWidth, is
      optional and defaults to 1.

    drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth = 1)

      Draws a triangle connecting points x1,y1, x2,y2, and x3,y3 with lines of
      the given color. The last argument, lineWidth, is optional and defaults to
      1.

    drawFilledRect(x, y, width, height, color)

      Draws a filled rectangle starting at x,y with the given width, height, and
      color. Positive widths go to the right and negative to the left; positive
      heights go down and negative heights go up.

    drawFilledCircle(x, y, r, color)

      Draws a filled circle centered at x,y with radius r using the given color.

    drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)

      Draws a triangle connecting points x1,y1, x2,y2, and x3,y3 with filled
      with the given color.

   There are also a couple use variables.

    width - the width of the drawing area.

    height - the height of the drawing area.

   Note that the coordinate system goes from 0,0 at the top left corner to
   width,height at the bottom right corner.
 */

// Examples of calling those functions here. You should delete or comment out
// this code once you start writing your own code. (Comments are all lines
// starting with // like what you're reading right now. Or you can enclose code
// in a /* and then */ like the instruction above.)

drawLine(0, 0, width, height, 'red');

drawCircle(width / 2, height / 2, 10, 'blue');

drawRect(50, 50, 60, 40, 'black');

drawFilledCircle(width - 50, height - 50, 50, 'red');

drawFilledRect(5, height - 20, 45, 15, 'purple');

drawTriangle(width * 0.25, 10, width * 0.75, 20, width * 0.5, 80, 'blue');

// You can also put line breaks in if the line gets too long as shown
drawFilledTriangle(
  width * 0.25,
  height - 10,
  width * 0.75,
  height - 20,
  width * 0.5,
  height - 80,
  'blue');
