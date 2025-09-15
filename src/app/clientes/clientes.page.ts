import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonAvatar, IonItem, IonListHeader, IonList, IonButton } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonListHeader, IonList, CommonModule, FormsModule, IonAvatar, IonItem, IonButton, HttpClientModule, RouterLink ]
})
export class ClientesPage implements OnInit {

  clientes: any = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.ObtenerClientes().subscribe(res => {
      console.log("Resultado", res);
      this.clientes = res;
    });
  }
  
  NavegarHome(){
    this.router.navigate(['/home'])
  }


  ObtenerClientes(){
    return this.http
    .get("assets/archivos/clientes.json")
    .pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

}
