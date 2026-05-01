import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  entredInitialInvestment = '0';
  entredAnnualInvestment = '0';
  entredExpectedReturn = '5';
  entredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.entredInitialInvestment,
      duration: +this.entredDuration,
      expectedReturn: +this.entredExpectedReturn,
      annualInvestment: +this.entredAnnualInvestment,
    });
  }
}
