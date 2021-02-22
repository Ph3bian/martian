import React, { useState } from "react";
import { Input, Modal } from "components";
import { data as companyData } from "./data";
const Edit = ({ data, setShown, shown }) => {
  const [budget, setBudget] = useState(data.budget);
  const handleSubmit = (e) => {
    e.preventDefault();
    const isCompany = (company) => company.id === data.id;
    const companyID = companyData.findIndex(isCompany);
    companyData[companyID].budget = budget;
    setShown(false);
  };
  return (
    <Modal
      title={data.name}
      shown={shown}
      handleSubmit={handleSubmit}
      setShown={setShown}
      hasFooter
    >
      <form>
        <Input
          label="Budget"
          value={budget}
          error
          onChange={(e) => setBudget(e.target.value)}
        />
      </form>
    </Modal>
  );
};
export default Edit;
