import React from "react";
import { TreeItem, SimpleTreeView } from "@mui/x-tree-view";
// import data from "../enums/paths.json";
const Panel = ({ treeData: data }) => {
  console.log(data, "data");
  return (
    <>
      <SimpleTreeView>
        <TreeItem itemId="1" label="application">
          {data.map((item) => (
            <>
              {item.children && item.children.length > 0 ? (
                <TreeItem itemId={item.id} label={item.label}>
                  {item.children.map((child) => (
                    <TreeItem itemId={child.id} label={child.label} />
                  ))}
                </TreeItem>
              ) : (
                <TreeItem itemId={item.id} label={item.label} />
              )}
            </>
          ))}
        </TreeItem>
      </SimpleTreeView>
    </>
  );
};

export default Panel;
