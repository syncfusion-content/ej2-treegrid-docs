


import { TreeGrid, Page, Toolbar, PdfExport, ExcelExport } from "@syncfusion/ej2-treegrid";
import { projectData } from './datasource.ts';
import { ClickEventArgs } from "@syncfusion/ej2-navigations";

TreeGrid.Inject(Page, ExcelExport, Toolbar, PdfExport);

let treegrid: TreeGrid = new TreeGrid({
  dataSource: projectData,
  idMapping: "TaskID",
  parentIdMapping: "parentID",
  treeColumnIndex: 1,
  allowPaging: true,
  pageSettings: { pageSize: 5, pageCount: 5 },
  selectionSettings: { type: "Multiple" },
  allowExcelExport: true,
  allowPdfExport: true,
  toolbar: ["PdfExport", "ExcelExport"],
  toolbarClick: toolbarClick,
  columns: [
    { field: "TaskID", headerText: "Task ID", textAlign: "Right", width: 70 },
    { field: "TaskName", headerText: "Task Name", width: 100 },
    { field: "StartDate", headerText: "Start Date", textAlign: "Right", width: 100,
      format: { skeleton: "yMd", type: "date" } },
    { field: "EndDate", headerText: "End Date", textAlign: "Right", width: 100,
      format: { skeleton: "yMd", type: "date" } },
    { field: "Duration", headerText: "Duration", textAlign: "Right", width: 90 },
    { field: "Priority", headerText: "Priority", width: 90 }
  ]
});
treegrid.appendTo("#TreeGrid");
function toolbarClick(args: ClickEventArgs) {
  if (treegrid && args.item.text === "PDF Export") {
    const selectedRecords = treegrid.getSelectedRecords();
    const exportProperties = {
      dataSource: selectedRecords
    };
    treegrid.pdfExport(exportProperties);
  } else if (treegrid && args.item.text === "Excel Export") {
    const selectedRecords = treegrid.getSelectedRecords();
    const exportProperties = {
      dataSource: selectedRecords
    };
    treegrid.excelExport(exportProperties);
  }
}



