import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/app/environment/environment';
import { PaymentService } from 'src/app/payment.service';
import {loadStripe, Stripe} from '@stripe/stripe-js';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  stripe: Stripe | null = null;
  cardElement: any;
  cardError: string | null = null;
  charge: any = null;
  chargeError: any = null;

  constructor(private fb: FormBuilder, private paymentService: PaymentService) {
    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  async ngOnInit() {
    this.stripe = await loadStripe(environment.stripeKey);
    // @ts-ignore
    const elements = this.stripe.elements();
    this.cardElement = elements.create('card');
    this.cardElement.mount('#card-element');
  }

  async createToken() {
    // @ts-ignore
    const { token, error } = await this.stripe?.createToken(this.cardElement);
    if (error) {
      this.cardError = error.message;
    } else {
      this.processPayment(token.id);
    }
  }

  processPayment(token: string) {
    const paymentDetails = this.paymentForm.value;
    const chargeDetails = {
      stripeToken: token,
      amount: paymentDetails.amount,
      username: paymentDetails.name,
    };
    this.paymentService.chargePayment(chargeDetails).subscribe(
      (chargeResponse) => {
        this.charge = chargeResponse;
      },
      (error) => {
        this.chargeError = error;
      }
    );
  }

  onSubmit() {
    this.createToken();
  }
}
