


import { TreeGrid, Edit, Toolbar } from "@syncfusion/ej2-treegrid";
import { projectData } from './datasource.ts';
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DataUtil } from "@syncfusion/ej2-data";
import { DialogEditEventArgs } from "@syncfusion/ej2-grids";
import { NumericTextBox } from "@syncfusion/ej2-inputs";

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
treegrid.appendTo("#TreeGrid");
function actionComplete(args) {
  if (args.requestType === "beginEdit" || args.requestType === "add") {
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
    initializeWizard();
  }
}

function initializeWizard() {
  let currentTab = 0;

  document.getElementById("nextBtn").onclick = function() {
    if (validate()) {
      if (this.innerHTML !== "SUBMIT") {
        currentTab++;
        nextpre(currentTab);
      } else {
        treegrid.endEdit();
      }
    }
  };
  function validate(tab) {
    let valid: boolean = true;
    [].slice
      .call(
        document.getElementById("tab" + currentTab).querySelectorAll("[name]")
      )
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
  document.getElementById("prevBtn").onclick = function() {
    if (validate()) {
      currentTab--;
      nextpre(currentTab);
    }
  };
}

function nextpre(current) {
  let tabs: HTMLElement[] = [].slice.call(
    document.getElementsByClassName("tab")
  );
  tabs.forEach(element => (element.style.display = "none"));
  tabs[current].style.display = "";
  if (current) {
    document.getElementById("prevBtn").style.display = "";
    document.getElementById("nextBtn").innerHTML = "SUBMIT";
  } else {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").innerHTML = "NEXT";
  }
}



