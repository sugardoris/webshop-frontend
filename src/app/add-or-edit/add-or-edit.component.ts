import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.css'],
})
export class AddOrEditComponent {
  itemGroup = new FormGroup({
    title: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    amount: new FormControl(''),
    imageUrl: new FormControl(''),
    description: new FormControl(''),
    materials: new FormControl(''),
    height: new FormControl(''),
    width: new FormControl(''),
    depth: new FormControl(''),
  });

  selected = 'Doilies';
}
