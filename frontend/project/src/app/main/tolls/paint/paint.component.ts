import { Component, OnInit } from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})

export class PaintComponent implements OnInit {
  

	public canvas: any;
  public sw: string = '1'
	
	private angle: number = 0

  public restoreArray: any = []
	public index: number = -1
	public paintToll: boolean = false
	public eraserToll: boolean = false
		
	public flowerBrush: boolean = false
	public gressBrush: boolean = false

	constructor() { }

  ngOnInit() {
    const sketch = s => {
      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowWidth - 200, s.windowHeight - 200)

        canvas2.parent('sketch-canvas')
				s.background(255)
        s.strokeWeight(this.sw)
        s.stroke('rgb(101, 101, 102)')
      };
			
			s.pencil = () => {
				this.paintToll = false
				this.eraserToll = false
				this.flowerBrush = false
				this.gressBrush = false
				s.col = 'rgb(101, 101, 102)'
				s.stroke(s.col)
				s.strokeWeight(1)
			}
			s.brush = (color, size) => {
				this.paintToll = true
				this.eraserToll = true
				this.flowerBrush = false
				this.gressBrush = false
				s.col = color.value 
				s.stroke(s.col)	
				s.strokeWeight(size.value)
				this.sw = size.value
			}
			s.eraser = (size) => {
				this.paintToll = false
				this.flowerBrush = false
				this.gressBrush = false
				this.eraserToll = true
				s.stroke('rgb(255, 255, 255)')
				s.strokeWeight(size.value)
				this.sw = size.value
			}
			s.flowerBrush = () => {
				this.flowerBrush = true					
			}

			s.gressBrush = () => {
				this.flowerBrush = false
				this.gressBrush = true
			}

			s.changeColor = (color) => {
				s.stroke(color.value )	
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
							if (!this.flowerBrush && !this.gressBrush){
								s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
							}else if (this.flowerBrush){
								this.angle += 5;
								let val = Math.cos(this.angle * (Math.PI / 180)) * 12.0;
								for (let a = 0; a < 360; a += 75){
									let xoff = Math.cos(a * (Math.PI / 180)) * val;
									let yoff = Math.sin(a * (Math.PI / 180)) * val;
									s.fill(0);
									s.strokeWeight(0)
									s.ellipse(s.mouseX + xoff, s.mouseY + yoff, val, val);
								}
								s.fill(255);
								s.ellipse(s.mouseX, s.mouseY, 5, 5);	
							}else{
								s.stroke(0)
								s.line(s.mouseX, s.mouseY, s.mouseX - 30, s.mouseY - 50);
							}
						}
					}
				}
			}
			s.drawStop = () => {
				s.noLoop()
				console.log(1)
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
