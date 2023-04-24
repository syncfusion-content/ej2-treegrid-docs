

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 270,
    treeColumnIndex: 1,
    selectionSettings: {enableToggle: true},
    columns: [
            { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'progress', headerText: 'progress', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



