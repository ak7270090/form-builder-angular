import { Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PreviewFormComponent } from './preview-form/preview-form.component';

export const routes: Routes = [
  {
    path: '',
    component: FormBuilderComponent, 
  },
  {
    path: 'preview',
    component: PreviewFormComponent, 
 },
];