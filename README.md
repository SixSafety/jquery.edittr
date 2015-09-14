#jquery.edittr

jquery.edittr is a [jQuery](http://www.jquery.com/) plugin that adds editing functionality to table rows. A table row is given an additional cell with an "Edit" link. When clicked, "editable" cells in that row will change to input fields, allowing the editing of the content.

Minified version size: ~2kb

##Basic usage

1. Include `jquery.edittr.css` with your other CSS files.
2. Each table row must have a cell with an `edit` class. This will house the function links and can appear anywhere in the row.
3. Call jquery.edittr on the table (or the table's wrapper) that you want to be able to edit: `$('#my-table').edittr();`
4. Every cell within that table with a class of `editable` will now allow its contents to be edited.

While in editing mode, your table has an `editing` class.

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

### Version 0.0.2: Patio 

* Fix and expand Jasmine tests

### Version 0.0.3: Raincoat

* Slight performance improvement

##Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
