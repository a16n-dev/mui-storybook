import { ThemeProvider } from "@mui/system";
import Button, { ButtonProps } from "../../components/Button";
import theme from "../../theme/theme";

export default {
  component: Button,
  title: "Form/Buttons/1",
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story: any) => (
      // <ThemeProvider theme={theme}>
        <Story />
      // </ThemeProvider>
    ),
  ],
};

const Template = (args: ButtonProps) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary: {args: ButtonProps} = Template.bind({}) as any;
Primary.args = { text: 'Primary button!' };

export const Secondary: {args: ButtonProps} = Template.bind({}) as any;
Secondary.args = { text: 'Secondary button!' };
