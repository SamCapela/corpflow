import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = false;

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      console.log('Message envoyé :', this.form.getRawValue());
      setTimeout(() => {
        alert('Merci ! Votre message a bien été envoyé.');
        this.form.reset();
        this.submitted = false;
      }, 1000);
    }
  }
}
