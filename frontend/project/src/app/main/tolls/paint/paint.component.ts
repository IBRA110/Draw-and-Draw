import { Component, OnInit } from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit {
  

	canvas: any;
  sw = 1;
  c = [];
  strokeColor = 0;
  

	constructor() { }

  ngOnInit() {
    const sketch = s => {
      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowWidth - 200, s.windowHeight - 200);

        canvas2.parent('sketch-holder');


        s.strokeWeight(this.sw);
        this.c[0] = s.color(0, 0, 0);
        s.stroke(this.c[this.strokeColor]);
      };
			
			s.changeColor = (color, trans) => {
				s.col = this.hexToRgb(color.value)
				if (trans.value == 100){
					s.col = s.col.slice(0, s.col.length - 2) + '1' + ')'
				} else {
					s.col = s.col.slice(0, s.col.length - 2) + '.' + `${trans.value}` + ')'
				}
				s.stroke(s.col)	
			}
			s.changeSize = (size) => {
				if (size.value < 1){
					s.strokeWeight(1)
					return
				}
				s.strokeWeight(size.value)
			}
			s.clearSketch = () => {
				s.background(255)
			}

      s.draw = () => {
        if (s.mouseIsPressed) {
          if (s.mouseButton === s.LEFT) {
            s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
          }
        }
      };
    };

    this.canvas = new p5(sketch);
  }
	
	hexToRgb(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}
}
