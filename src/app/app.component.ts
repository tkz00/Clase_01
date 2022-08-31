import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clase_01';

  input_1 : number | null = null;
  input_2 : number | null = null;

  avg : number | null = null;
  sum : number | null = null;

  emptyInputs() : void {
    this.input_1 = 0;
    this.input_2 = 0;
    this.avg = 0;
    this.sum = 0;
  }

  getResults() : void {
    if(this.input_1 != null && this.input_2 != null)
    {
      this.sum = (this.input_1 + this.input_2);
      this.avg = (this.input_1 + this.input_2) / 2;
    }
  }

}
