ej.treegrid.TreeGrid.Inject(ej.treegrid.Resize);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowResizing: true,
    height: 315,
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'taskName', headerText: 'Task Name', minWidth: 170, maxWidth: 250, width: 180 },
        { field: 'duration', headerText: 'Duration', width: 80, minWidth: 50, maxWidth: 150,  textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

