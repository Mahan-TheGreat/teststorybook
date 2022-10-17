// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular'
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import LoginComponent, { ILoginForm } from 'src/app/components/login/login.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';



// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Forms/LoginForm',
  component: LoginComponent,
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
const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  props: args,
});

// export const Default = Template.bind({});
// Default.args = {
//   loginForm: new FormGroup<ILoginForm>({
//     Username: new FormControl(''),
//     Password: new FormControl('')
//   })
// };

// export const Invalid = Template.bind({});
// Invalid.args = {
//   loginForm: new FormGroup<ILoginForm>({
//     Username: new FormControl('abc'),
//     Password: new FormControl('')
//   })
// };

export const ValidLoginForm = Template.bind({});
ValidLoginForm.args = {

};
export const InvalidLoginForm = Template.bind({});
InvalidLoginForm.args = {
    ErrorMessage:true,
    ErrorTextUsername:'Username is required!' ,
    ErrorTextPassword:'Password is required!' 

};