import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";
import { ButtonModule } from "primeng/button";
import { CardComponent } from "src/app/components/card/card.component";
import { ImageModule } from 'primeng/image';

export default{
    title: 'Cards/Card',
    component: CardComponent,
    decorators:[
        moduleMetadata({
            imports: [
                ButtonModule,
                ImageModule
            ]
        })
    ],
    argTypes:{

    },
} as Meta

const Template: Story<CardComponent> = (args: CardComponent) => ({
    props:args
})

export const pricingCard = Template.bind({});
pricingCard.args = {
  pricingCard:true,
  pricingCardTitle:'P Card Title',
  showPricingCardButton:false
}
export const normalCard = Template.bind({});
normalCard.args = {
    pricingCard:false,
    showCardTitle:true,
    cardTitle:'Title',
    showCardImage:true,
    showImageCardText:true,
    showMainCardText:false,
    imageCardText:'This is a card text',
    mainCardText:'',
    showCardButton:true

}