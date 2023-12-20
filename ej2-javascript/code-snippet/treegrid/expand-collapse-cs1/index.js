ej.treegrid.TreeGrid.Inject(ej.treegrid.Page);

var treeGridObj = new ej.treegrid.TreeGrid({
  dataSource: window.sampleData,
  childMapping: 'subtasks',
  height: 350,
  allowPaging: true,
  pageSettings: { pageSize: 10 },
  treeColumnIndex: 1,
  rowDataBound: function (args) {
    //get the element of the cell that contains expand/ collaspe icon
    const td = args.row.querySelector('.e-treerowcell');
    // bind the keydown event to the cell (which contains an expand/collapse icon)
    td?.addEventListener('keydown', keyDownHandler.bind(this));
  },
  columns: [
    {
      field: 'taskID', 
      headerText: 'Task ID',
      isPrimaryKey: true,
      width: 70,
      textAlign: 'Right',
    },
    { field: 'taskName',headerText: 'Task Name',width: 200,},
    { field: 'startDate',headerText: 'Start Date',type: 'date',format: 'yMd'},
    { field: 'endDate',headerText: 'End Date',type: 'date',format: 'yMd'},
    { field: 'duration', headerText: 'Duration'},
    { field: 'progress',headerText: 'Progress',width: 80},
    { field: 'priority', headerText: 'Priority', width: 90 },
  ],
});
treeGridObj.appendTo('#TreeGrid');

var keyDownHandler = (e) => {
  ///using spacebar key code
  if (e.keyCode === 32) {
    if (e.target.classList.contains('e-treerowcell')) {
      //check for the treeColumnIndex
      var record = treeGridObj.getRowInfo(e.target.parentElement); //get the record using getRowInfo method
      var rowData = record.rowData;
      var key = rowData['taskID'];
      // based on record status expand and collapse using expandByKey or collapseByKey method.
      if (rowData['expanded']) {
        treeGridObj.collapseByKey(key);
      } else {
        treeGridObj.expandByKey(key);
      }
    }
    e.preventDefault();
    e.stopPropagation();
  }
};

