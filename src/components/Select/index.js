import React from "react";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

import { sortByField } from "./helpers";

const SelectForm = ({ labelName, options }) => {
    const selectOptions = options.sort(sortByField("id")).map(select => {
        return {
            value: select.title,
            label: select.title
        };
    });

    return (
        <FormGroup>
            <Label for="select">{labelName}</Label>
            <Select id="select" options={selectOptions} />
        </FormGroup>
    );
};

SelectForm.defaultProps = {
    labelName: "Title",
    options: []
};

export default SelectForm;
