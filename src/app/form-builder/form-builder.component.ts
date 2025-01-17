import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
  imports:[FormsModule]
})
export class FormBuilderComponent {

  dynamicTable: any[] = []; 
  inputName: string = '';
  inputType: string = 'text';
  required: string = 'true';
  inputLabel: string = '';
  
  generatedHtml = '';

  addElement(){
    if (!this.inputName || !this.inputLabel) {
      alert('Name and Label are required.');
      return;
    }
    
    console.log(this.required);

    this.dynamicTable.push({
      name: this.inputName,
      type: this.inputType,
      required: this.required === 'true',
      label: this.inputLabel,
    });
    
    
    this.inputName = '';
    this.inputType = 'text';
    this.required = '';
    this.inputLabel = '';


  }

  generateHtml(): void {
    let formHtml = '<form>\n';

    this.dynamicTable.forEach(row => {
      console.log(row);
      formHtml += `  <label for="${row.name}">${row.label}</label>\n`;

      if (row.type === 'dropdown') {
        formHtml += `  <select name="${row.name}" id="${row.name}"${row.required ? ' required' : ''}>\n`;
        formHtml += `    <option value="Option 1">Option 1</option>\n`;
        formHtml += `    <option value="Option 2">Option 2</option>\n`;
        formHtml += `    <option value="Option 3">Option 3</option>\n`;
        formHtml += '  </select>\n';
      } else if (row.type === 'checkbox' || row.type === 'radio') {
        ['Option 1', 'Option 2', 'Option 3'].forEach(option => {
          formHtml += `  <input type="${row.type}" name="${row.name}" value="${option}"${row.required ? ' required' : ''}> ${option}\n`;
        });
      } else {
        formHtml += `  <input type="${row.type}" name="${row.name}" id="${row.name}"${row.required ? ' required' : ''}>\n`;
      }

      formHtml += '  <br>\n';
    });

    formHtml += '</form>';
    this.generatedHtml = formHtml;
  }


  
}