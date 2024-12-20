import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
