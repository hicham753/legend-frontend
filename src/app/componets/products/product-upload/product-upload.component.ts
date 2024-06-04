import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ProductsService } from '../../products.service';


@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css']
})
export class ProductUploadComponent {
  productForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private productService: ProductsService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, this.currencyValidator()]],
      size: ['', Validators.required],
      image: ['', Validators.required],
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required]
    });
  }
  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }


  currencyValidator() {
    return (control: { value: string; }) => {
      const valid = /^\d{0,}(\.\d{1,2})?$/.test(control.value);
      return valid ? null : { invalidCurrency: true };
    };
  }


  get f() { return this.productForm.controls; }

  /*onSubmit(): void {
    const formData = new FormData();
    formData.append('name', this.productForm.get('name')?.value);
    formData.append('description', this.productForm.get('description')?.value);
    formData.append('price', this.productForm.get('price')?.value);
    formData.append('size', this.productForm.get('size')?.value);
    formData.append('categoryId', this.productForm.get('categoryId')?.value);
    formData.append('subCategoryId', this.productForm.get('subCategoryId')?.value);
    formData.append('file', this.productForm.get('image')?.value.files[0]);

    this.produitService.uploadProduct(formData).subscribe(response => {
      console.log('Product uploaded successfully', response);
    });
  }*/

  onSubmit(): void {
    console.log('Form Submitted', this.productForm);
    if (this.productForm.valid) {
      console.log('Form is valid');
      const formData = new FormData();
      formData.append('name', this.productForm.get('name')?.value);
      formData.append('description', this.productForm.get('description')?.value);
      formData.append('price', this.productForm.get('price')?.value);
      formData.append('size', this.productForm.get('size')?.value);
      formData.append('categoryId', this.productForm.get('categoryId')?.value);
      formData.append('subCategoryId', this.productForm.get('subCategoryId')?.value);

      if (this.selectedFile) {
        formData.append('file', this.selectedFile);
        console.log('File appended:', this.selectedFile);
      } else {
        console.error('No file selected');
        return;
      }

      this.productService.uploadProduct(formData).subscribe(
        response => {
          console.log('Product uploaded successfully', response);
        },
        error => {
          console.error('Error uploading product', error);
        }
      );
    } else {
      console.error('Form is invalid');
      Object.keys(this.productForm.controls).forEach(key => {
        const control = this.productForm.get(key);
        console.log(`${key} is ${control?.valid ? 'valid' : 'invalid'}`, control?.errors);
      });
    }
  }


}
