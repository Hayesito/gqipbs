import { Component, OnInit } from '@angular/core';
import { ControlappService } from 'src/services/controlapp.service';
import { Observable }from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
   private server: ControlappService
  ){
  }

  public observableFunc(): Observable<boolean>{
    return this.server.loading.asObservable();
  }

  isLoading = this.observableFunc()

  ngOnInit(): void {
      /*emite un nuevo valor*/
      this.server.changeValue(true);
      setTimeout(() => {
        this.server.changeValue(false);
      }, 9000);
      
      
      /*y se suscribe*/
      this.observableFunc().subscribe(res => {console.log(res)})
  }
  

  
  
}
