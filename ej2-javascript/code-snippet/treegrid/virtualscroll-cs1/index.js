ej.treegrid.TreeGrid.Inject(ej.treegrid.VirtualScroll);
window.dataSource();
var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.virtualData,
        enableVirtualization: true,
        height: 317,
        treeColumnIndex: 1,
        childMapping: 'Crew',
        columns: [
        { field: 'TaskID', headerText: 'Player Jersey', width: 140, textAlign: 'right' },
        { field: 'FIELD1', headerText: 'Player Name', width: 140 },
        { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'right' },
        { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'right' },
        { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'right' }
    ]
    });
    treegrid.appendTo('#TreeGrid');

