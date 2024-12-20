import { Component, OnInit  } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { MaterialModule } from '../angular-material/material/material.module';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  imports: [MaterialModule,CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error al cargar los posts:', error);
      }
    );
  }
}
