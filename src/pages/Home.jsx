import React, { useState } from "react";
import Panel from "../component/panel";
import { Add } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Model from "../component/Model";
import Data from "../enums/paths.json";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [optionValue, setOptionValue] = useState("");
  const [treeData, setTreeData] = useState(Data);
  const [objValue, setObjValue] = useState({
    parent: "",
    child: "",
  });
  const [inputField, setInputField] = useState({
    child: "",
    parent: "",
  });
  const editRoutes = (e, status) => {
    if (status === "child") {
      setInputField({ ...inputField, child: e.target.value });
    } else if (status === "parent") {
      setInputField({ ...inputField, parent: e.target.value });
    }
  };
  const handleChange = (e) => {
    setOptionValue(e.target.value);
  };

  const optionsHandleChange = (e, status) => {
    if (status === "parent") {
      setObjValue({ ...objValue, parent: e.target.value });
    } else if (status === "child") {
      setObjValue({ ...objValue, child: e.target.value });
    }
  };
  const handleSubmit = (e, childValue, inputFieldValue, parentValue) => {
    e.preventDefault();
    if (!parentValue) {
      const indexValue = treeData.findIndex((i) => i.id == childValue);
      if (indexValue !== -1) {
        treeData[indexValue].children.push({
          label: inputFieldValue,
          id: inputFieldValue,
          path: `/${inputField}`,
        });
      }
      setTreeData(treeData);
      setModal(false);
      setObjValue({
        parent: "",
        child: "",
      });
      setInputField({
        parent: "",
        child: "",
      });
      setOptionValue("");
    } else {
      const indexValue = Data.findIndex((i) => i.id == childValue);
      const parentObj = {
        id: parentValue,
        label: parentValue,
        path: `/${parentValue}`,
        children: [],
      };
      const updatedData = [...Data, parentObj];
      setTreeData(updatedData);
      setModal(false);
      setObjValue({
        parent: "",
        child: "",
      });
      setInputField({
        parent: "",
        child: "",
      });
      setOptionValue("");
    }
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => setModal(true)}
      >
        Add
      </Button>
      <Model
        open={modal}
        onClose={() => setModal(false)}
        handleChange={handleChange}
        value={optionValue}
        optionsHandleChange={optionsHandleChange}
        optionsValue={objValue}
        editRoutes={editRoutes}
        inputField={inputField}
        handleSubmit={handleSubmit}
        treeData={treeData}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <Panel treeData={treeData} />
        </div>
      </div>
    </>
  );
};

export default Home;
