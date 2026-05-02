import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  entredInitialInvestment = signal('0');
  entredAnnualInvestment = signal('0');
  entredExpectedReturn = signal('5');
  entredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.entredInitialInvestment(),
      duration: +this.entredDuration(),
      expectedReturn: +this.entredExpectedReturn(),
      annualInvestment: +this.entredAnnualInvestment(),
    });

    this.entredInitialInvestment.set('0');
    this.entredExpectedReturn.set('5');
    this.entredAnnualInvestment.set('0');
    this.entredDuration.set('10');
  }
}
