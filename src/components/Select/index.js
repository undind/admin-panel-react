import React from "react";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

import { sortByField } from "./helpers";

const SelectForm = ({ labelName, options, value, onChange }) => {
    const selectOptions = options.sort(sortByField("id")).map(select => {
        return {
            value: select.title,
            label: select.title,
            id: select.id
        };
    });

    return (
        <FormGroup>
            <Label for="select">{labelName}</Label>
            <Select
                id="select"
                options={selectOptions}
                onChange={onChange}
                onBlur={(e) => console.log(e)}
                defaultValue={selectOptions[value] || selectOptions[0]}
            />
        </FormGroup>
    );
};

SelectForm.defaultProps = {
    labelName: "Title",
    options: []
};

export default SelectForm;
