import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
})
export class DonaComponent {
  //Datos 
  @Input() title: string = 'title';
  @Input() labels: Label[] = [''];
  @Input() data: MultiDataSet = [[34]]; 
  public colors: Color[] = [{backgroundColor: ['#6857E6', '#009FEE', '#F02059']}];

}
