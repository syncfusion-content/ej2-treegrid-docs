var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: window.sampleData,
    childMapping: 'subtasks',
    allowSelection: true,
    selectionSettings: { type: 'Multiple', mode: 'Row' },
    treeColumnIndex: 1,
    allowPaging: true,
    pageSettings: { pageSize: 10 },
    columns: [
        { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 70 },
        { field: 'taskName', headerText: 'Task Name', width: 200, textAlign:'Left' },
        { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 100, format: { skeleton: 'yMd', type: 'date' } },
        { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 90 }
    ],
    height: 260
});
treeGridObj.appendTo('#TreeGrid');


