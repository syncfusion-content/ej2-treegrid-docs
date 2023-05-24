

import { TreeGrid, Page, Edit } from '@syncfusion/ej2-treegrid';
import { sampleData2, dataSource1, sampleData } from './datasource.ts';

TreeGrid.Inject(Page, Edit);

let immutableStart: any;
let normalStart: any;
let immutableInit = true;
let init = true;
if(sampleData2.length == 0){
  dataSource1();
}

    let immutableGrid: TreeGrid = new TreeGrid(
        {
            dataSource: sampleData2,
            childMapping: 'subtasks',
            height: 350,
            allowPaging: true,
            pageSettings: {pageSize: 50},
            treeColumnIndex: 1,
            enableImmutableMode: true,
            selectionSettings: { type: "Multiple" },
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' },
            beforeDataBound: () => {
                immutableStart = new Date().getTime();
            },
            dataBound: ()=> {
            let val = immutableInit ? '' : new Date().getTime() - immutableStart;
            document.getElementById('immutableDelete').innerHTML = 'Immutable rendering Time: ' + "<b>" + val + "</b>" + '<b>ms</b>';
            immutableStart = 0; immutableInit = false;
            },
            columns: [
                { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 70, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
                { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
                { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
                { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
                { field: 'priority', headerText: 'Priority', width: 90 }
            ]
        });
    immutableGrid.appendTo('#immutable');
document.getElementById('delete').addEventListener('click', function(e) {
  normalGrid.selectRows([0, 2, 4]);
  immutableGrid.selectRows([0, 2, 4]);
  normalGrid.deleteRecord();
  immutableGrid.deleteRecord();
});
document.getElementById('addtop').addEventListener('click', function(e) {
  normalGrid.addRecord(sampleData[0], 0, "Top");
  immutableGrid.addRecord(sampleData[0], 0, "Top");
});
document.getElementById('addbottom').addEventListener('click', function(e) {
  normalGrid.addRecord(sampleData[0], 0, "Bottom");
  immutableGrid.addRecord(sampleData[0], 0, "Bottom");
});
document.getElementById('reverse').addEventListener('click', function(e) {
  let aData = (immutableGrid.dataSource as any).reverse();
  normalGrid.setProperties({ dataSource: aData });
  immutableGrid.setProperties({ dataSource: aData });
});
document.getElementById('paging').addEventListener('click', function(e) {
  let page = normalGrid.pageSettings.currentPage + 1;
  normalGrid.goToPage(page);
  immutableGrid.goToPage(page);
});
let normalGrid: TreeGrid = new TreeGrid({
    dataSource: sampleData2,
    childMapping: 'subtasks',
    height: 350,
    allowPaging: true,
    selectionSettings: { type: "Multiple" },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' },
    pageSettings: {pageSize: 50},
    treeColumnIndex: 1,
    beforeDataBound: () => {
        normalStart = new Date().getTime();
    },
    dataBound: ()=> {
        let val = init ? '' : new Date().getTime() - normalStart;
        document.getElementById('normalDelete').innerHTML = 'Normal rendering Time: ' + "<b>" + val + "</b>" + '<b>ms</b>';
        normalStart = 0; init = false;
    },
    columns: [
                { field: 'taskID', headerText: 'Task ID',  isPrimaryKey: true, width: 70, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
                { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
                { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
                { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
                { field: 'priority', headerText: 'Priority', width: 90 }
    ]
});
normalGrid.appendTo('#normal');



