import React from "react";
import { Modal } from "components";

export default {
  title: "Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} >
    Hello there
</Modal>;

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  title: "Default Modal",
  type: "button",
  shown:true,
  setShown: () => alert("You clicked me"),
};
