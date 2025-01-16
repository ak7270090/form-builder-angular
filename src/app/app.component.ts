import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';  // Import FormBuilderComponent if used


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // <-- Check the path here
  styleUrls: ['./app.component.css'],
  imports: [
      FormBuilderComponent  // Ensure your FormBuilderComponent is declared here if needed
    ],
})
export class AppComponent {
  title = 'my-app';
}
