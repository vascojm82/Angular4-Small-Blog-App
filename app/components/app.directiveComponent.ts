import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CounterDirective } from "./../directives/app.counter.directive";
import { ElementRef } from '@angular/core';

@Component({
    selector: 'app-directives',
    styleUrls: ['./app/CSS/app.List.style.css'],
    template: ` <div class="container">
                    <h2>Custom Directives View</h2>
                    <div counter-directive></div>
                    <div counter-directive></div>
                    <div counter-directive></div>
                </div>
               `,
})

export class DirectiveComponent implements AfterViewInit  {
    @ViewChild(CounterDirective) counterDirective : CounterDirective;

    constructor() {
        console.log('Directive Component constructor ran..');
     }
    
    ngOnInit() { 
        
    }

    ngAfterViewInit() {
    }
}