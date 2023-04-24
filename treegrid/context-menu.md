---
layout: post
title: Context menu in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Context menu in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Context menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in ##Platform_Name## Treegrid control

The TreeGrid has options to show the context menu when right clicked on it. To enable this feature, you need to define either default or custom item in the [`contextMenuItems`](../api/treegrid/#contextmenuitems).

To use the context menu, inject the `ContextMenu` module in the treegrid.

The default items are in the following table.

Items| Description
----|----
`AutoFit`|  Auto fit the current column.
`AutoFitAll` | Auto fit all columns.
`Edit`|  Edit the current record.
`Delete` | Delete the current record.
`Save` | Save the edited record.
`Cancel` | Cancel the edited state.
`PdfExport` | Export the treegrid data as Pdf document.
`ExcelExport` | Export the treegrid data as Excel document.
`CsvExport` | Export the treegrid data as CSV document.
`SortAscending` | Sort the current column in ascending order.
`SortDescending` | Sort the current column in descending order.
`FirstPage` | Go to the first page.
`PrevPage` | Go to the previous page.
`LastPage` | Go to the last page.
`NextPage` | Go to the next page.
`AddRow` | Add new row to the treegrid.
`Indent` | Indents the record to one level of hierarchy.|
`Outdent` | Outdents the record to one level of hierarchy.|

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/contextmenu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/contextmenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/contextmenu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/contextmenu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/contextmenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/contextmenu-cs1" %}
{% endif %}

## Custom context menu items

The custom context menu items can be added by defining the [`contextMenuItems`](../api/treegrid/#contextmenuitems) as a collection of
[`contextMenuItemModel`](../api/grid/contextMenuItemModel/).
Actions for this customized items can be defined in the [`contextMenuClick`](../api/treegrid/#contextmenuclick) event.

In the below sample, we have shown context menu item for parent rows to expand or collapse child rows.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/contextmenu-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/contextmenu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/contextmenu-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/contextmenu-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/contextmenu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/contextmenu-cs2" %}
{% endif %}

## Enable and disable context menu items dynamically

You can enable and disable the context menu items using the [`enableItems`](https://ej2.syncfusion.com/documentation/api/menu/#enableitems) method in [`contextMenuOpen`](https://ej2.syncfusion.com/documentation/api/treegrid/#contextmenuopen) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/contextmenu-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/contextmenu-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/contextmenu-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/contextmenu-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/contextmenu-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/contextmenu-cs3" %}
{% endif %}

> You can hide or show an item in context menu for specific area inside of treegrid by defining the [`target`](../api/grid/contextMenuItemModel/#target) property.
> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.