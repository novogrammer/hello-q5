import './style.css'

import "q5";

const q = new Q5("namespace");

await q.Canvas();
q.background(q.color('silver'));
q.draw=function () {
  q.circle((q as any).mouseX, (q as any).mouseY, q.random(55));
}

