import React from "react";
import GridColumns from "../DataGridColumns/DataGridColumns";
import "./DataGrid.css";

function DataGrid(prop) {
  const groupedItems = prop.tickets.reduce((acc, element) => {
    const groupingKey = element[prop.group];

    if (!acc[groupingKey]) {
      acc[groupingKey] = [];
    }

    acc[groupingKey].push(element);

    return acc;
  }, {});

  for (const i in groupedItems) {
    if (prop.order === "title") {
      groupedItems[i].sort((x, y) =>
        x[prop.order].localeCompare(y[prop.order])
      );
    } else {
      groupedItems[i].sort((x, y) => y[prop.order] - x[prop.order]);
    }
  }

  return (
    <div className="datagridbox-container">
      {Object.entries(groupedItems).map(([groupName, groupValues]) => (
        <div>
          <GridColumns
            name={groupName}
            values={groupValues}
            key={groupName}
            users={prop.users}
            group={prop.group}
          />
        </div>
      ))}
    </div>
  );
}

export default DataGrid;
