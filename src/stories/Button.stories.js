import React from "react";
import { Button } from "components";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  text: "Submit",
  type: "button",
  onClick:()=>alert("You clicked me")
};
 
export const  Neutral = Template.bind({});
 Neutral.args = {
    variant: "neutral",
    text: "Button",
    type: "button",
    onClick:()=>alert("You clicked me")
  };

