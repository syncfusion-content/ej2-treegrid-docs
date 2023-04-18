


import { TreeGrid, Edit, Toolbar } from "@syncfusion/ej2-treegrid";
import { projectData } from './datasource.ts';
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DataUtil } from "@syncfusion/ej2-data";
import { DialogEditEventArgs } from "@syncfusion/ej2-grids";
import { NumericTextBox } from "@syncfusion/ej2-inputs";
import { Tab } from "@syncfusion/ej2-navigations";

TreeGrid.Inject(Edit, Toolbar);
let PriorityData: {}[] = DataUtil.distinct(projectData, "Priority", true);

let treegrid: TreeGrid = new TreeGrid({
  dataSource: projectData,
  idMapping: "TaskID",
  parentIdMapping: "parentID",
  treeColumnIndex: 1,
  height: 273,
  toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: "Dialog",
    template: "#dialogtemplate"
  },
  actionComplete: actionComplete,
  columns: [
    { field: "TaskID", headerText: "Task ID", isPrimaryKey: true, textAlign: "Right", width: 70 },
    { field: "TaskName", headerText: "Task Name", width: 100 },
    { field: "StartDate", headerText: "Start Date", textAlign: "Right", width: 90, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" }, edit: { params: { format: "y/M/d" } } },
    { field: "EndDate", headerText: "End Date", textAlign: "Right", width: 90, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" }, edit: { params: { format: "y/M/d" } } },
    { field: "Duration", headerText: "Duration", textAlign: "Right", width: 90 },
    { field: "Priority", headerText: "Priority", width: 90 }
  ]
});
treegrid.appendTo("#TreeGrid");function actionComplete(args: DialogEditEventArgs) {
  if (args.requestType === "beginEdit" || args.requestType === "add") {
    let tabObj: Tab = new Tab({
      showCloseButton: false,
      selecting: e => {
        if (e.isSwiped) {
          e.cancel = true;
        }
        if (e.selectingIndex === 1) {
          e.cancel = !validate(1);
        }
      },
      items: [
        { header: { text: "Details" }, content: "#tab1" },
        { header: { text: "Verify" }, content: "#tab2" }
      ]
    });
    tabObj.appendTo("#edittab");

    new DropDownList(
      {
        value: args.rowData.Priority,
        popupHeight: "300px",
        floatLabelType: "Always",
        dataSource: PriorityData,
        fields: { text: "Priority", value: "Priority" },
        placeholder: "Priority"
      },
      args.form.elements.namedItem("Priority") as HTMLInputElement
    );

    new NumericTextBox(
      { value: args.rowData.Duration, placeholder: "Duration" },
      args.form.elements.namedItem("Duration")
    );
    // Set initail Focus
    if (args.requestType === "beginEdit") {
      (args.form.elements.namedItem("TaskName") as HTMLInputElement).focus();
    }

    document.getElementById("next").onclick = () => {
      moveNext();
    };

    function validate(tab) {
      let valid: boolean = true;
      [].slice
        .call(document.getElementById("tab" + tab).querySelectorAll("[name]"))
        .forEach(element => {
          element.form.ej2_instances[0].validate(element.name);
          if (element.getAttribute("aria-invalid") === "true") {
            valid = false;
          }
        });
      if (!valid) {
        return false;
      }
      return true;
    }

    function moveNext() {
      if (validate(1)) {
        tabObj.select(1);
      }
    }
    document.getElementById("submit").onclick = () => {
      if (validate(2)) {
        treegrid.endEdit();
      }
    };
  }
}



