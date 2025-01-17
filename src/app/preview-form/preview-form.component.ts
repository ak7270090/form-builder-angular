import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-preview-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-form.component.html',
  styleUrl: './preview-form.component.css'
})

export class PreviewFormComponent implements OnInit {
  preview: string | undefined;

  constructor() { }

  ngOnInit(): void {
    
    const rawMarkup = history.state.html;

  
    this.preview = rawMarkup;
    console.log('Received HTML Markup:', this.preview);
}

}
