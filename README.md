#jquery.edittr

jquery.edittr is a [jQuery](http://www.jquery.com/) plugin that adds editing functionality to table rows. A table row is given an additional cell with an "Edit" link. When clicked, "editable" cells in that row will change to form elements, allowing the content to be edited (saving changes needs to be handled separately).

In edit mode, table cell values can be converted into the following form element types: checkbox, radio button, select (drop-down) menu, and text input.

Minified version size: ~4kb

##Basic usage

1. Include `jquery.edittr.css` with your other CSS files.
2. Each table row must have a cell with an `edit` class. This will house the function links and can appear anywhere in the row.
3. Call jquery.edittr on the table (or the table's wrapper) that you want to be able to edit: `$('#my-table').edittr();`
4. Every cell within that table with a class of `editable` will now allow its contents to be edited.

While in editing mode, your table has an `editing` class.

The `name` value would be converted to a text input element:
```
<tr>
  <td class="name editable">Stephen</td>
  <td class="edit"></td>
</tr>
```

##Advanced usage

### Checkboxes

By adding a `data-checkbox` attribute, the `drinks` value would be converted to a set of checkboxes:
```
<tr>
  <td class="drinks editable" data-checkbox='{"coffee":0,"pop":1,"water":2}'>Water</td>
  <td class="edit"></td>
</tr>
```

### Radio buttons

By adding a `data-radio` attribute, the `gender` value would be converted to a set of radio buttons:
```
<tr>
  <td class="gender editable" data-radio='{"female":0,"male":1}'>Male</td>
  <td class="edit"></td>
</tr>
```

### Select menu

By adding a `data-select` attribute, the `handedness` value would be converted to a select menu:
```
<tr>
  <td class="handedness editable" data-select='{"left":0,"right":1}'>Left</td>
  <td class="edit"></td>
</tr>
```

###Restore original values

You can restore a table's original values by calling:
```
$.edittr.revert('#my-table');
```

##Options

###I18n

You can provide text for the Edit, Save and Cancel links by passing in those values as options during initialization:
```
$('#my-table').edittr({
  editText:'Éditer',
  saveText:'Accepter',
  cancelText:'Annuler'
});
```
Defaults are "Edit", "Save" and "Cancel".

###Silent mode

There are a few console messages to help ensure you're using the plugin properly. If you prefer, you can supress these messages:
```
$('#my-table').edittr({
  silent:true
});
```

###Callbacks

The Edit, Save and Cancel actions have their own callbacks: `onEdit`, `onSave` and `onCancel`.

```
$('#my-table').edittr({
  onSave: function() {
    //add your saving magic here
  }
});
```

## History

### Version 0.0.1: Umbrella

* Basic functionality
* Broken, FPO tests

### Version 0.0.2

* Fix and expand Jasmine tests

### Version 0.0.3

* Slight performance improvement

### Version 0.1.0

* Add silent option

### Version 0.1.1

* Use inline-block for buttons (was using just inline)

### Version 0.2.0

* Add a few element types for edit mode: checkbox, radio, select menu

### Version 0.2.1

* Bugfix: invert how key-value pairs are used to build form elements

### Version 0.2.2

* Bugfix: on save, show new value from all element types

### Version 0.3.2

* Add revert feature to restore table's original values

##Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
