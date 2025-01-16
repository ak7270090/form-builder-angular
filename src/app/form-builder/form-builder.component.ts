import { Component } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  dynamicTable: any[] = [];  
  
  generatedHtml = '';

  addElement(name: string, type: string, required: string, label: string): void {
    if (!name.trim() || !label.trim()) {
      alert('Name and Label are required.');
      return;
    }

    this.dynamicTable.push({
      name: name.trim(),
      type,
      required: required === 'true',
      label: label.trim()
    });
  }

  generateHtml(): void {
    let formHtml = '<form>\n';

    this.dynamicTable.forEach(row => {
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

  getTableRows(): string {
    return this.dynamicTable.map((row, index) => {
      return `
        <tr>
          <td>${row.name}</td>
          <td>${row.type}</td>
          <td>${row.required}</td>
          <td>${row.label}</td>
        </tr>
      `;
    }).join('');
  }
  
}
