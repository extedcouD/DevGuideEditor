import React, { useContext } from "react";
import { Editable } from "../file-structure";
import AddInComponent from "./add-component";
import AddInAttributes, { AddRowForm, AddSheet } from "./add-attribute";
import {
  AttributeFileID,
  AttributeFolderID,
  CompFolderID,
} from "../../pages/home-page";

const FormFactory = ({
  data,
  setIsOpen,
}: {
  data: Editable;
  setIsOpen: any;
}) => {
  const renderForm = () => {
    switch (data.registerID) {
      case CompFolderID:
        return <AddInComponent data={data} setIsOpen={setIsOpen} />;
      case AttributeFolderID:
        return <AddInAttributes data={data} setIsOpen={setIsOpen} />;
      case AttributeFileID:
        if (data.query?.type === "addRow") {
          return <AddRowForm data={data} setIsOpen={setIsOpen} />;
        } else {
          return <AddSheet data={data} setIsOpen={setIsOpen} />;
        }
      default:
        return <div>No form available for this type.</div>;
    }
  };
  return <>{renderForm()}</>;
};

export default FormFactory;
