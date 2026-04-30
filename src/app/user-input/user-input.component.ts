import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  entredInitialInvestment = '0';
  entredAnnualInvestment = '0';
  entredExpectedReturn = '5';
  entredDuration = '10';

  onSubmit() {
    console.log(this.entredInitialInvestment);
    console.log(this.entredAnnualInvestment);
    console.log(this.entredExpectedReturn);
    console.log(this.entredDuration);
  }
}
