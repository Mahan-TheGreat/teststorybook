import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';

// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

import { RegisterComponent } from 'src/app/components/Register/register/register.component';




// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Forms/RegisterForm',
  component: RegisterComponent,
  decorators: [
    moduleMetadata({
      declarations: [
      ],
      imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        DividerModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,

      ]
    })
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
  
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<RegisterComponent> = (args: RegisterComponent) => ({
  props: args,
});

export const ValidRegisterForm = Template.bind({});
ValidRegisterForm.args = {

};
export const InvalidRegisterForm = Template.bind({});
InvalidRegisterForm.args = {
    ErrorMessageFirstName:true,
    ErrorMessageLastName:true,
    ErrorMessageEmail:true,
    ErrorMessagePssword:true,
    ErrorMessageConfirmPassword:true,
    ErrorTextFirstName:'First Name is required!' ,
    ErrorTextLastName:'Last Name is required!' ,
    ErrorTextEmail:'Email is required!' ,
    ErrorTextPassword:'Password is required!',
    ErrorTextConfirmPassword:'Password must match!' 

};