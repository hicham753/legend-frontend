import { Component, ElementRef } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

interface DropdownState {
  liga: boolean;
  serieA: boolean;
  premierLeague: boolean;
  bundesliga: boolean;
  ligue1: boolean;
  others: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropdown = false;
  dropdown2 = false;
  isMenuOpen = true;
  menuIcon = false;
  search = false;
  isClubsDropdownOpen = false;
  isDropdownOpen: DropdownState = {
    liga: false,
    serieA: false,
    premierLeague: false,
    bundesliga: false,
    ligue1: false,
    others: false
  };

  productCount: number = 0;

  constructor(private shoppingCartService: ShoppingCartService,
     private elementRef: ElementRef) {
    shoppingCartService.numOfItem.subscribe((res) => this.productCount = res)
  }

  toggleDropdown(league: keyof DropdownState) {
    // Close all dropdowns
    for (const key in this.isDropdownOpen) {
      if (this.isDropdownOpen.hasOwnProperty(key)) {
        this.isDropdownOpen[key as keyof DropdownState] = false;
      }
    }
    this.isDropdownOpen[league] = !this.isDropdownOpen[league];
  }

  hideDropdown(league: keyof DropdownState) {
    setTimeout(() => {
      this.isDropdownOpen[league] = false;
    }, 300); // Adjust the delay as needed (in milliseconds)
  }

  toggleDropdown1() {
    this.isClubsDropdownOpen = !this.isClubsDropdownOpen;
  }

  showClubsDropdown() {
    this.isClubsDropdownOpen = true;
    
  }

  hideClubsDropdown() {
    this.isClubsDropdownOpen = false;
    for (const key in this.isDropdownOpen) {
      if (this.isDropdownOpen.hasOwnProperty(key)) {
        this.isDropdownOpen[key as keyof DropdownState] = false;
      }
    }
  }


  
  toggleDropdown2() {
    this.dropdown2 = !this.dropdown2;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSearch() {
    this.search = !this.search;
  }
}

