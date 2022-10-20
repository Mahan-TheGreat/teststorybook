import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";

import { ButtonModule } from "primeng/button";
import { ImageModule } from 'primeng/image';

import { CardComponent } from "src/app/components/card/card.component";
import { CardModule } from 'primeng/card';


export default{
    title: 'Cards/Card',
    component: CardComponent,
    decorators:[
        moduleMetadata({
            imports: [
                ButtonModule,
                ImageModule,
                CardModule
            ]
        })
    ]
} as Meta

const Template: Story<CardComponent> = (args: CardComponent) => ({
    props:args
})

export const pricingCard = Template.bind({});
pricingCard.args = {
  pricingCard:true,
  pricingCardTitle:'Pricing Card Title',
  showPricingCardButton:false,
  
}

export const imageCard = Template.bind({})
imageCard.args = {
    pricingCard:false,
    showCardImage:true,
    cardTitle:'Image Card Title',
    showImageCardText:true,
    imageCardText:'This is image card text',
    showMainCardText:false,
    showCardButton:false

}
export const textCard = Template.bind({});
textCard.args = {
    pricingCard:false,
    showCardTitle:true,
    showCardImage:false,
    cardTitle:'Text Card',
    showMainCardText:true,
    mainCardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    showCardButton:false

}