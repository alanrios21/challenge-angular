import { Component} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
    localData =  [
        { Name:'John', Age: 29 },
        { Name:'Alice', Age: 27 },
        { Name:'Jessica', Age: 31 },
      ];
}
