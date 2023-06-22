---
layout: post
title: Local data in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Local data in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Local data 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Local data in ##Platform_Name## Treegrid control

In Local Data binding, data source for rendering the TreeGrid control is retrieved from the same application locally.

Two types of Data binding are possible with the TreeGrid control.

* Hierarchical Datasource binding
* Self-Referential Data binding (Flat Data)

To bind local data to the treegrid, you can assign a JavaScript object array to the [`dataSource`](../../api/treegrid#datasource) property. The local data source can also be provided as an instance of the `DataManager`.

> By default, `DataManager` uses `JsonAdaptor` for local data-binding.

## Hierarchy data source binding

The [`childMapping`](../../api/treegrid#childMapping) property is used to map the child records in hierarchy data source.

The following code example shows you how to bind the hierarchical local data into the TreeGrid control.

```typescript
import { TreeGrid, Page } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';
TreeGrid.Inject(Page);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowPaging: true,
    pageSettings: {pageSize: 7},
    treeColumnIndex: 1,
    columns: [
                { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 180 },
                {
                    field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

```

> * Remote data binding is not supported for Hierarchy Data.

### Self-Referential data binding (Flat data)

TreeGrid is rendered from Self-Referential data structures by providing two fields, ID field and parent ID field.

* **ID Field**: This field contains unique values used to identify nodes. Its name is assigned to the [`idMapping`](../../api/treegrid#idMapping) property.
* **Parent ID Field**: This field contains values that indicate parent nodes. Its name is assigned to the [`parentIdMapping`](../../api/treegrid#parentIdMapping) property.

```typescript
import { TreeGrid, Page } from '@syncfusion/ej2-treegrid';
import { projectData } from './datasource.ts';
TreeGrid.Inject(Page);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: projectData,
    idMapping: 'TaskID',
    parentIdMapping: 'parentID',
    allowPaging: true,
    treeColumnIndex: 1,
    pageSettings: {pageSize: 7},
    columns: [
                { field: 'TaskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'TaskName', headerText: 'Task Name', width: 180 },
                {
                    field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

```

> Herewith we have provided list of reserved properties and the purpose we used internally in TreeGrid. We recommend to avoid these reserved properties in your dataSource(To get rid of conflicts).

Reserved keywords | Purpose
-----|-----
childRecords | Specifies the childRecords of a parentData
hasChildRecords | Specifies whether the record contains child records
hasFilteredChildRecords | Specifies whether the record contains filtered child records
expanded | Specifies whether the child records are expanded
parentItem | Specifies the parentItem of childRecords
index | Specifies the index of current record
level | Specifies the hierarchy level of record
filterLevel | Specifies the hierarchy level of filtered record
parentIdMapping | Specifies the parentID
uniqueID | Specifies the unique ID of a record
parentUniqueID | Specifies the parent Unique ID of a record
checkboxState | Specifies the checkbox state of a record
isSummaryRow | Specifies the summary of a record
taskData | Specifies the main data
primaryParent | Specifies the Primary data
