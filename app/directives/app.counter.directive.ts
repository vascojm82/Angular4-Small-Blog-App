import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({ 
    selector: "[counter-directive]"
})
export class CounterDirective {
    count = 0;
    inputElement: any;
    button1_element: any;
    button2_element: any;
    

    private nativeElement : Node;
    
    constructor( private renderer : Renderer, private element : ElementRef ) {
      
        this.nativeElement = element.nativeElement;
    
    }

    inc = () => {
        this.count = this.count + 1;
        this.renderer.setElementAttribute(this.inputElement,"placeholder", this.count.toString());

    }

    dec = () => {
        if(this.count > 0){
            this.count = this.count - 1;
            this.renderer.setElementAttribute(this.inputElement,"placeholder", this.count.toString());
        }
    }

    ngOnInit() {
        //text box
        this.inputElement = this.renderer.createElement(this.nativeElement, "input");
        this.renderer.setElementAttribute(this.inputElement,"placeholder", this.count.toString());

        //Add Button for Incrementing count
        this.button1_element = this.renderer.createElement(this.nativeElement, "button");
        this.renderer.createText(this.button1_element, "+");
        this.renderer.listen(this.button1_element, "click", this.inc);
        this.renderer.setElementClass(this.button1_element, "btnAddDec", true);

        //Add Button for decrementing count
        this.button2_element = this.renderer.createElement(this.nativeElement, "button");
        this.renderer.createText(this.button2_element, "-");
        this.renderer.listen(this.button2_element, "click", this.dec);
        this.renderer.setElementClass(this.button2_element, "btnAddDec", true);
    }
}