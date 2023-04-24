ej.treegrid.TreeGrid.Inject(ej.treegrid.Page, ej.treegrid.ExcelExport, ej.treegrid.Toolbar);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowExcelExport: true,
    allowPaging: true,
    height: 220,
    pageSettings: {pageSize: 7},
    toolbar: ['ExcelExport'],
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', visible: false, width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');
treeGridObj.toolbarClick = function(args) {
    if (args['item'].text === 'Excel Export') {
        treeGridObj.grid.columns[2].visible = false;
        treeGridObj.grid.columns[3].visible = true;
        treeGridObj.excelExport();
    }
}

treeGridObj.excelExportComplete = function(args) {
    treeGridObj.grid.columns[3].visible = false;
    treeGridObj.grid.columns[2].visible = true;
}

