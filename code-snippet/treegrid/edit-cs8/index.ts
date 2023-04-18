

import { TreeGrid, Edit } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Edit);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' },
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right'},
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        { field: 'priority', headerText: 'Priority', width: 90 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    height: 270
});
treeGridObj.appendTo('#TreeGrid');



