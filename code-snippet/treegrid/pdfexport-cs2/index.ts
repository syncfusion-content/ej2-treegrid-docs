


import { TreeGrid, Page, Toolbar, PdfExport, PdfExportProperties, RowDataBoundEventArgs, PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Page, Toolbar, PdfExport);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowPdfExport: true,
    allowPaging: true,
    height: 220,
    pageSettings: {pageSize: 7},
    toolbar: ['PdfExport'],
    treeColumnIndex: 1,
    columns: [
            { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');
treeGridObj.toolbarClick = (args: Object) => {
if (args['item'].text === 'PDF Export') {
        treeGridObj.pdfExport();
    }
}
treeGridObj.pdfQueryCellInfo = (args: PdfQueryCellInfoEventArgs) => {
        if(args.column.field == 'duration'){
            if(+args.value === 0 || args.value === "") {
                args.style = {backgroundColor: '#336c12'};
            }
            else if(args.value < 3) {
                args.style = {backgroundColor: '#7b2b1d'};
            }
        }
    }
treeGridObj.queryCellInfo = (args: RowDataBoundEventArgs) => {
    if (args.data['duration'] == 0 && args.column.field === 'duration' ) {
        args.cell.style.background= '#336c12';
    } else if (args.data['duration'] < 3 && args.column.field === 'duration') {
        args.cell.style.background= '#7b2b1d';
    }
}



