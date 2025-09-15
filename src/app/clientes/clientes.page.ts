import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonAvatar, IonItem, IonListHeader, IonList } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonListHeader, IonList, CommonModule, FormsModule, IonAvatar, IonItem]
})
export class ClientesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  NavegarHome(){
    this.router.navigate(['/home'])
  }

}
