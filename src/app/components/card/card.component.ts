import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  imageSource = "assets/testImage.jpg";

  @Input()
  pricingCard = false;

  @Input()
  pricingCardTitle = 'Package1';

  @Input()
  showPricingCardButton = true;

  //normal card

  @Input()
  showCardTitle = true;

  @Input()
  cardTitle = 'Card Title';

  @Input()
  showCardImage = true;

  @Input()
  showImageCardText = true;

  @Input()
  imageCardText = 'This is Image card text.';

  @Input()
  showCardButton = true;

  @Input()
  showMainCardText = false;

  @Input()
  mainCardText = 'Main Card Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  ngOnInit(): void {
  }

}
