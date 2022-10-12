// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular'
import SignupForm from './login.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/SignupForm',
  component: SignupForm,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule, InputTextModule, PasswordModule, DividerModule]
    })
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    UserName: { control: '' },
    Password: { control: '' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SignupForm> = (args: SignupForm) => ({
  props: args,
});




export const UserName = Template.bind({});
UserName.args = {
  UserName: '',
};

export const Password = Template.bind({});
Password.args = {
  Password: '',
};
