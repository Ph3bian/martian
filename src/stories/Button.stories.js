import React from "react";
import { Button } from "components";

export default {
  title: "Button",
  component: Button,
  parameters: {
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  text: "Submit",
  type: "button",
};
Primary.argTypes = { onClick: { action: "clicked" } };
export const Neutral = Template.bind({});
Neutral.args = {
  variant: "neutral",
  text: "Button",
  type: "button",
  onClick: () => alert("You clicked me"),
};

export const Submit = Template.bind({});
Submit.args = {
  variant: "primary",
  text: "Button",
  type: "submit",
};
Submit.argTypes = { onClick: { action: 'submitted' } };
