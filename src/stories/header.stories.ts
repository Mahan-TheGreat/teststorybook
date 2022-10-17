// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular'

import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/Header/header/header.component';
import { ButtonModule } from 'primeng/button';



// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Header/NavigationBar',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [
      ],
      imports: [
        CommonModule,
        ButtonModule
       

      ]
    })
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
  
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});



export const LoggedInHeader = Template.bind({});
LoggedInHeader.args = {
    isLoggedIn:true,
    user:'John Doe',
    notificationCount:1,
    showUserName:false

};
export const NotLoggedInHeader = Template.bind({});
NotLoggedInHeader.args = {
    isLoggedIn:false,


};