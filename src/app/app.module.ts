import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PreviewFormComponent} from './preview-form/preview-form.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    PreviewFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}