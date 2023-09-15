---
layout: post
title: Exporting tree grid in server in ##Platform_Name## Tree Grid control | Syncfusion
description: Learn here all about Exporting tree grid in server in Syncfusion ##Platform_Name## Tree Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Exporting tree grid in server 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Exporting tree grid in server in ##Platform_Name## Tree Grid control

The Tree Grid have an option to export the data to Excel in server side using Tree Grid server export library.

## Server dependencies

The Server side export functionality is shipped in the Syncfusion.EJ2.TreeGridExport package, which is available in Essential Studio and [nuget.org](https://www.nuget.org/).The following list of dependencies is required for Tree Grid server side Excel exporting action.

* Syncfusion.EJ2
* Syncfusion.EJ2.TreeGridExport
* Syncfusion.Compression.Base
* Syncfusion.XlsIO.Base

## Server configuration

The following code snippets shows server configuration using ASP.NET MVC Controller Action.

To Export the Tree Grid in server side, You need to call the [`serverExcelExport`](../../api/treegrid/#serverexcelexport) method for passing the Tree Grid properties to server exporting action.

```ts
public IActionResult ServerSideExporting()
{
    var order = TreeData.GetDefaultData();
    ViewBag.dataSource = order;
    return View();
}

public IActionResult ExcelExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    return exp.ExportToExcel<TreeData>(gridProperty, TreeData.GetDefaultData());
}
private Syncfusion.EJ2.TreeGrid.TreeGrid ConvertTreeGridObject(string gridProperty)
{
    Syncfusion.EJ2.TreeGrid.TreeGrid TreeGridModel = (Syncfusion.EJ2.TreeGrid.TreeGrid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Syncfusion.EJ2.TreeGrid.TreeGrid));
    TreeGridColumnModel cols = (TreeGridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(TreeGridColumnModel));
    TreeGridModel.Columns = cols.columns;
    return TreeGridModel;
}

public class TreeGridColumnModel
{
    public List<TreeGridColumn> columns { get; set; }
}
```

```typescript
import { TreeGrid, Toolbar } from '@syncfusion/ej2-treegrid';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
TreeGrid.Inject(Toolbar);

let data: DataManager = new DataManager({
    url: "Home/DataSource",
    adaptor: new UrlAdaptor
});

let treegrid: TreeGrid = new TreeGrid({
    dataSource: data,
    parentIdMapping: 'ParentItem',
    hasChildMapping: 'isParent',
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 90, format: { skeleton: 'yMd', type: 'date' } },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    height: 265
});
treegrid.appendTo('#TreeGrid');

treegrid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'TreeGrid_gridcontrol_excelexport') {
        treegrid.serverExcelExport("Home/ExcelExport");
    }
}

```

## CSV export in server side

You can export the Tree Grid to CSV format by using the [`serverCsvExport`](../../api/treegrid/#servercsvexport) method which will pass the Grid properties to server.

In the below demo, we have invoked the above method inside the [`toolbarClick`](../../api/treegrid/#toolbarclick) event. In server side, we have deserialized the Tree Grid properties and passed to the `CsvExport` method which will export the properties to CSV format.

```ts
public IActionResult ServerSideExporting()
{
    var order = TreeData.GetDefaultData();
    ViewBag.dataSource = order;
    return View();
}

public IActionResult CsvExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    return exp.ExportToCsv<TreeData>(gridProperty, TreeData.GetDefaultData());
}

private Syncfusion.EJ2.TreeGrid.TreeGrid ConvertTreeGridObject(string gridProperty)
{
    Syncfusion.EJ2.TreeGrid.TreeGrid TreeGridModel = (Syncfusion.EJ2.TreeGrid.TreeGrid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Syncfusion.EJ2.TreeGrid.TreeGrid));
    TreeGridColumnModel cols = (TreeGridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(TreeGridColumnModel));
    TreeGridModel.Columns = cols.columns;
    return TreeGridModel;
}

public class TreeGridColumnModel
{
    public List<TreeGridColumn> columns { get; set; }
}

```

```ts
import { TreeGrid, Toolbar } from '@syncfusion/ej2-treegrid';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
TreeGrid.Inject(Toolbar);

let data: DataManager = new DataManager({
    url: "Home/DataSource",
    adaptor: new UrlAdaptor
});

let treegrid: TreeGrid = new TreeGrid({
    dataSource: data,
    parentIdMapping: 'ParentItem',
    hasChildMapping: 'isParent',
    toolbar: ['CsvExport'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 90, format: { skeleton: 'yMd', type: 'date' } },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    height: 265
});
treegrid.appendTo('#TreeGrid');

treegrid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'TreeGrid_gridcontrol_csvexport') {
        treegrid.serverCsvExport("Home/CsvExport");
    }
}

```

## Rotate a header text to a certain degree in the exported tree grid on the server side

The Tree Grid has support to customize the column header styles such as changing text orientation, the font color, and so on in the exported Excel file. To achieve this requirement, use the `ServerExcelHeaderQueryCellInfo` event of the Tree Grid.

The `ServerExcelHeaderQueryCellInfo` will be triggered when creating a column header for the excel document to be exported in the server side. Customize the column header in this event.

In the following demo, using the `HeaderCellRotate` method of the `GridExcelExport` class in the `ServerExcelHeaderQueryCellInfo` event, you can rotate the header text of the column header in the excel exported document.

```ts
public IActionResult ExcelExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    gridProperty.ServerExcelHeaderQueryCellInfo = ExcelHeaderQueryCellInfo;
    return (IActionResult)exp.ExcelExport<TreeGridItems>(gridProperty, TreeGridItems.GetDefaultData());
}

private void ExcelHeaderQueryCellInfo(object excel)
{
    Syncfusion.EJ2.TreeGridExport.ServerExcelHeaderQueryCellInfoEventArgs name = (Syncfusion.EJ2.TreeGridExport.ServerExcelHeaderQueryCellInfoEventArgs)excel;
    List<string> headerValues = new List<string>();
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    TreeGridExcelExport exp = new TreeGridExcelExport();
    var size = exp.ExcelTextSize(name.Style.Font.FontName, (float)name.Style.Font.Size, longestString);
    name.Cell.RowHeight = size.Width;
    exp.HeaderCellRotate(name, 45); // Give the rotate degree value by the user.  
    name.Style.Borders.LineStyle = Syncfusion.XlsIO.ExcelLineStyle.None;
}

```