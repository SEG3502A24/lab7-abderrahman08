import { Component } from '@angular/core';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/author';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-authors',
    standalone: true,
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css'],
    imports: [FormsModule, CommonModule]
})
export class AuthorsComponent {
    authorId!: number;
    author: Author | null = null;
    allAuthors: Author[] = [];
    message: string = '';

    constructor(private booksService: BooksService) {}

    // Méthode pour rechercher un auteur par ID
    getAuthor(): void {
        this.booksService.getAuthorById(this.authorId).subscribe({
            next: (data: Author) => {
                this.author = data;
                this.message = '';
            },
            error: () => {
                this.author = null;
                this.message = 'Author not found';
            }
        });
    }

    // Méthode pour obtenir tous les auteurs
    getAllAuthors(): void {
        this.booksService.getAllAuthors().subscribe({
            next: (data: Author[]) => {
                this.allAuthors = data;
                this.message = '';
            },
            error: () => {
                this.message = 'Could not retrieve authors';
            }
        });
    }
}
