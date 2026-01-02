import React, { useState } from "react";
import { TreeItem, SimpleTreeView } from "@mui/x-tree-view";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SingleModel from "./SingleModel";
// import data from "../enums/paths.json";
const Panel = ({ treeData: data, setTreeData }) => {
  const [editModal, setEditModal] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedChildIndex, setSelectedChildIndex] = useState(-1);

  const handleDblClick = (label, child = "", childIndex) => {
    if (!child) {
      setEditValue(label);
      const labelIndex = data.findIndex((i) => i.label === String(label));
      setSelectedIndex(labelIndex);
      return;
    } else {
      setEditValue(label);
      setSelectedIndex(childIndex);
      const findChildIndex = data[childIndex].children.findIndex(
        (i) => i.label === String(label)
      );
      setSelectedChildIndex(findChildIndex);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setEditValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedChildIndex === -1) {
      data[selectedIndex].label = editValue;
      setTreeData(data);
      setEditModal(false);
    } else {
      data[selectedIndex].children[selectedChildIndex].label = editValue;
      console.log(data, "dat");
      setTreeData(data);
      setEditModal(false);
    }
  };
  return (
    <>
      <SimpleTreeView>
        <TreeItem itemId="1" label="application">
          {data.map((item, index) => (
            <>
              {item.children && item.children.length > 0 ? (
                <TreeItem
                  itemId={item.id}
                  label={item.label}
                  onDoubleClick={() => {
                    handleDblClick(item.label);
                    setEditModal(true);
                  }}
                >
                  {item.children.map((child) => (
                    <>
                      <TreeItem
                        itemId={child.id}
                        label={child.label}
                        onClick={() => {
                          handleDblClick(child.label, "child", index);
                          setEditModal(true);
                        }}
                      />
                    </>
                  ))}
                </TreeItem>
              ) : (
                <TreeItem
                  itemId={item.id}
                  label={item.label}
                  onDoubleClick={() => {
                    handleDblClick(item.label);
                    setEditModal(true);
                  }}
                />
              )}
            </>
          ))}
        </TreeItem>
      </SimpleTreeView>

      <SingleModel
        open={editModal}
        onclose={() => setEditModal((prev) => !prev)}
        onSubmit={handleSubmit}
        setEditValue={setEditValue}
        editValue={editValue}
        handleChange={handleChange}
      />
    </>
  );
};

export default Panel;
