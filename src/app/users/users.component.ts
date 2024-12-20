import { Component, OnInit  } from '@angular/core';
import { UsersService } from '../services/users.service';
import { MaterialModule } from '../angular-material/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [MaterialModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error al cargar los usuarios:', error);
      }
    );
  }
}
