---
title: "Expand or collapse by space key"
component: "TreeGrid"
description: "Learn how to customize the Essential JS 2 Tree Grid."
---

# Expand or Collapse by Space key

You can perform expand or collapse action by using the space bar key.

In the below demo, we have bound the keyDown event to the Tree Grid using the [`rowDataBound`](../../api/treegrid/#rowdatabound) event. We have also used the  [`collapseByKey`](../../api/treegrid/#collapsebykey) and  [`ExpandByKey`](../../api/treegrid/#expandbykey)methods are used to achieve this functionality. When the space key is clicked, the corresponding row is collapsed or expanded.

To perform expand or collapse actions using expandByKey or collapseByKey, a primary key column is required. The primary key can be defined by setting [`columns.isPrimaryKey`](../../api/treegrid/column/#isprimarykey) to `true` for a specific column.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/expand-collapse-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/expand-collapse-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treegrid/expand-collapse-cs1" %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.