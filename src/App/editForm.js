import React, { useState } from "react";
import { Input, Modal, Button } from "components";
import { currencyFormatter } from "utils/helper";
import { data as companyData } from "./data";
import {isValid} from "./functions"
import { CheckIcon } from "assets/svg";
const Edit = ({ data, setShown, shown }) => {
  const [budget, setBudget] = useState(data.budget);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors]=useState({})


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = isValid({...data, budget});
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    const isCompany = (company) => company.id === data.id;
    const companyID = companyData.findIndex(isCompany);
    companyData[companyID].budget = budget;
    setIsSuccess(true);
  };

  return (
    <Modal
      title={data.name}
      shown={shown}
      setShown={setShown}
      hasFooter={!isSuccess}
      formId="edit-budget"
    >
      {!isSuccess ? (
        <form onSubmit={handleSubmit} id="edit-budget" data-testid="edit-budget">
          <Input
            label="Budget (€)"
            value={budget}
            placeholder="budget"
            error={errors.budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </form>
      ) : (
        <div className="columnCentered">
          <p>Budget updated to <strong>{currencyFormatter(data.budget)} €</strong></p>
          <CheckIcon />
          <Button
            variant="primary"
            type="button"
            onClick={() => setShown(false)}
          >
            Return to Dashboard{" "}
          </Button>
        </div>
      )}
    </Modal>
  );
};
export default Edit;
