import './style.css'

import "q5";



/**
 * Made with q5!
 * https://q5js.org
 */

await Canvas();
background(color('silver'));

q5.draw = function () {
  circle(mouseX, mouseY, random(55));
}
