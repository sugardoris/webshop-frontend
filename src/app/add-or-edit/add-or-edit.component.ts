import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.css'],
})
export class AddOrEditComponent {
  editMode: boolean = false;

  itemGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    materials: new FormControl('', Validators.required),
    height: new FormControl('', [Validators.required, Validators.min(0)]),
    width: new FormControl('', [Validators.required, Validators.min(0)]),
    depth: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  selected = 'Doilies';
}
