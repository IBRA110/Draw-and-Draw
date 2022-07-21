import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
	public colorBrush: string = 'rgb(0,0,0)'
	
	public name: string
	private picName: any

	private spray: boolean = false
	private rect: boolean = false

	constructor(
		@Inject(DOCUMENT) private document: Document
	){
		this.picName = this.document.getElementsByClassName('pic-name')
	}

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
				this.spray = false
				this.rect = false
				s.stroke('rgb(101, 101, 102)')
				s.strokeWeight(1)
			}
			
			s.brush = (size) => {
				this.paintTools = true
				this.eraserTool = true
				this.spray = false
				this.rect = false
				s.stroke(this.colorBrush)	
				s.strokeWeight(size.value)
				this.sw = size.value
			}
			
			s.spray = (size) => {
				this.paintTools = true
				this.eraserTool = true
				this.spray = true
				this.rect = false
				s.stroke(this.colorBrush)	
				s.strokeWeight(size.value)
				this.sw = size.value
			}
			s.rectang = (size) => {
				this.paintTools = true
				this.eraserTool = true
				this.spray = false
				this.rect = true
				console.log('s')
				s.stroke(this.colorBrush)	
				s.strokeWeight(size.value)
				this.sw = size.value
			}
			
			s.eraser = (size) => {
				this.paintTools = false
				this.eraserTool = true
				this.spray = false
				this.rect = false
				s.stroke('rgb(255, 255, 255)')
				s.strokeWeight(size.value)
				this.sw = size.value
			}

			s.changeColor = (color) => {
				this.colorBrush = color
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
							if (this.spray){
								s.fill(0)
								s.strokeWeight(1)
								for (let i = 0; i < +this.sw; i++){
									let paintX = s.mouseX + (Math.random() * -+this.sw + Math.random() * +this.sw)
									let paintY = s.mouseY + (Math.random() * -+this.sw + Math.random() * +this.sw)
									s.point(paintX, paintY)
								}
							}else if(this.rect){
								s.rect(s.mouseX - +this.sw / 2, s.mouseY - +this.sw / 2, this.sw, this.sw);	
							}else{
								s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY)
							}
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
				if (this.name != null && this.name != ''){
					s.save(this.name + '.png')
				}else{
					this.picName[0].classList.add('req')
					setTimeout(() => {
						this.picName[0].classList.remove('req')
					}, 5000);
				}
			}
			s.upload = () => {
				console.log(this.restoreArray[this.index])
				console.log(typeof(this.restoreArray[this.index]))
				let obj = JSON.parse('{ "myString": "string", "myNumber": 4 }');
				console.log(typeof(obj))
			}
		}
    this.canvas = new p5(sketch)
  }
}
