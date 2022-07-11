import { Component, OnInit } from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit {
  

	public canvas: any;
  public sw: string = '1';

  public restoreArray: any = []
	public index: number = -1
	public paintTools: boolean = false
	public eraserTool: boolean = false

	constructor(){}

  ngOnInit() {
    const sketch = s => {
      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowWidth - 200, s.windowHeight - 150)
        canvas2.parent('sketch-canvas')
				s.background(255)
        s.strokeWeight(this.sw)
        s.stroke('rgb(101, 101, 102)')
      };
			
			s.pencil = () => {
				this.paintTools = false
				this.eraserTool = false
				s.col = 'rgb(101, 101, 102)'
				s.stroke(s.col)
				s.strokeWeight(1)
			}
			s.brush = (color, size) => {
				this.paintTools = true
				this.eraserTool = true
				s.col = color.value 
				s.stroke(s.col)	
				s.strokeWeight(size.value)
				this.sw = size.value
			}
			s.eraser = (size) => {
				this.paintTools = false
				this.eraserTool = true
				s.stroke('rgb(255, 255, 255)')
				s.strokeWeight(size.value)
				this.sw = size.value
			}

			s.changeColor = (color) => {
				s.stroke(color)	
			}
			
			s.changeSize = (size) => {
				if (size.value == ''){
					size.value = '1'
				}
				s.strokeWeight(size.value)
				this.sw = size.value
			}			
			
			s.drawStart = () => {
				s.loop()
				s.draw = () => {
					if (s.mouseIsPressed) {
						if (s.mouseButton === s.LEFT) {
							s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
						}
					}
				}
			}
			s.drawStop = () => {
				s.noLoop()
				this.restoreArray.push(s.get(0, 0, s.width, s.height))
				this.index += 1
			}	
			
			s.clearSketch = () => {
				s.background(255)
				this.restoreArray = []
				this.index = -1
			}
			
			s.undo = () => {
				if (this.index <= 0){
					s.background(255)
					this.restoreArray = []
					this.index = -1
				} else {
					this.index -= 1
					this.restoreArray.pop()
					s.image(this.restoreArray[this.index], 0, 0)
				}
			}
			s.download = () => {
				let name = prompt('Type name');
				if (name != null){
					s.save(name + '.png')
				}
			}
		}
    this.canvas = new p5(sketch)
  }
}
