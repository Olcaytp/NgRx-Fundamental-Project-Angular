import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountService } from '../../services/count.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  @Input() number: number = 0;
  ngrxNumber$: Observable<number>;

  constructor(public _count: CountService, private store: Store<any>) {
    this.ngrxNumber$ = this.store.select('ngrxNumber');
  }

}
