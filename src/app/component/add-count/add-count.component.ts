import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountService } from '../../services/count.service';
import { countIncrement } from 'src/app/state/counter.action';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css']
})
export class AddCountComponent {

  constructor( private _count: CountService,
                private store: Store<any>
                ) { }

  number: number = 0;
  @Output() myEvent = new EventEmitter();

  addCount() {
    this.number++;
    this.myEvent.emit(this.number);
  }

  addServiceCount() {
    this._count.serviceNumber++;
  }

  addNgRxCount() {
    this.store.dispatch(countIncrement());
  }

}
