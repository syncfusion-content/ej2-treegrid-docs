ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit,ej.treegrid.Toolbar);

var PriorityData = ej.data.DataUtil.distinct(projectData, "Priority", true);

var treegrid = new ej.treegrid.TreeGrid({
  dataSource: window.projectData,
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
    { field: "TaskID", headerText: "Task ID", textAlign: "Right", isPrimaryKey: true, width: 70 },
    { field: "TaskName", headerText: "Task Name", width: 100 },
    { field: "StartDate", headerText: "Start Date", textAlign: "Right", width: 100, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" } },
    { field: "EndDate", headerText: "End Date", textAlign: "Right", width: 90, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" } },
    { field: "Duration", headerText: "Duration", textAlign: "Right", width: 90 },
    { field: "Priority", headerText: "Priority", width: 90 }
  ]
});
treegrid.appendTo("#TreeGrid");
function actionComplete(args) {
  if (args.requestType === "beginEdit" || args.requestType === "add") {
    new ej.dropdowns.DropDownList(
      {
        value: args.rowData.Priority,
        popupHeight: "300px",
        floatLabelType: "Always",
        dataSource: PriorityData,
        fields: { text: "Priority", value: "Priority" },
        placeholder: "Priority"
      },
      args.form.elements.namedItem("Priority")
    );
    new ej.inputs.NumericTextBox(
      { value: args.rowData.Duration, placeholder: "Duration" },
      args.form.elements.namedItem("Duration")
    );
    // Set initail Focus
    if (args.requestType === "beginEdit") {
      args.form.elements.namedItem("TaskName").focus();
    }
    initializeWizard();
  }
}
function initializeWizard() {
  var currentTab = 0;

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
    var valid = true;
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
  var tabs = [].slice.call(document.getElementsByClassName("tab"));
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

