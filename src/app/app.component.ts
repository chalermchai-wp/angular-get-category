import { Component, OnInit, VERSION } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MyApiService } from './my-api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  input: string = '';
  data: String[] = [];
  dataFilter: String[] = [];
  constructor(private service: MyApiService) {}

  ngOnInit(): void {
    this.service
      .getCategories()
      .pipe(
        tap((res) => {
          this.data = res.categories;
          this.dataFilter = res.categories;
        })
      )
      .subscribe();
  }

  onInput(event) {
    this.dataFilter = this.data.filter(
      (res: String) => !res.toLowerCase().indexOf(event.toLowerCase())
    );
  }
}
