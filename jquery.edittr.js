/*
 * jquery.edittr
 * a jQuery plugin for making table rows editable
 * Copyright (c) Six Safety Systems (http://www.sixsafetysystems.com)
 * Authored by Stephen Peasley (http://www.speasley.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 0.0.2
 * Made in Canada
 */
;(function ( $ ) {
	'use strict';
	$.fn.edittr = function() {
		
		var settings = $.extend({
			cancelText: 'Cancel',
			editText: 'Edit',
			saveText: 'Save',
			onCancel: function() {},
			onEdit: function() {},
			onSave: function() {}
		}, arguments[0] || {});
		
		var $this = $(this);
		
		// setup check
		if($this.is('table')){
			$this.addClass('edittr');
		}else{
			$this.find('table').addClass('edittr');
		}
		var $table = $(document).find('table.edittr');
		if( $table.length==0 ){
			console.log('jquery.edittr will not work without a table');
		}
		var editable = $table.find('td.editable').length>0;
		if( editable == false ){
			console.log('jquery.edittr requires at least one td element to have a class of "editable"');
		}
		
		// add edit cell to editable rows
		$table.find('td.editable').each(function() {
		  var edit_td = $(this).closest('tr').find('td.edit');
			if(edit_td.length==1){
				edit_td.html(
					'<a aria-label="'+settings.editText+'" class="edit"><span>'+settings.editText+'</span></a>'+
					'<a aria-label="'+settings.saveText+'" class="save"><span>'+settings.saveText+'</span></a>'+
					'<a aria-label="'+settings.cancelText+'" class="cancel"><span>'+settings.cancelText+'</span></a>'
				);
			}else{
				console.log('jquery.edittr requires each editable row to contain one td with a class of "edit"');
			}
		});
		
		// edit mode
		$('.edittr a.edit').on('click',function(e){
			$this.addClass('editing');
			// make cell editable
			$(this).closest('tr').find('td.editable').each(function(){
				$(this).data('original',$(this).text()).html('<input type="text" value="'+$(this).text()+'">');
			});
			// toggle the edit cell state
			var $edit_td = $(this).closest('tr').find('td.edit');
			$edit_td.find('a.cancel').css({'display':'inline'});
			$edit_td.find('a.edit').css({'display':'none'});
			$edit_td.find('a.save').css({'display':'inline'});
			settings.onEdit.call(this);
			e.preventDefault();
		});
		
		// cancel mode
		$('.edittr a.cancel').on('click',function(e){
			$this.removeClass('editing');
			// return cell to original state
			$(this).closest('tr').find('td.editable').each(function(){
				$(this).html($(this).data('original'));
			});
			// toggle the edit cell state
			var $edit_td = $(this).closest('tr').find('td.edit');
			$edit_td.find('a.cancel').css({'display':'none'});
			$edit_td.find('a.edit').css({'display':'inline'});
			$edit_td.find('a.save').css({'display':'none'});
			settings.onCancel.call(this);
			e.preventDefault();
		});
		
		// save mode
		$('.edittr a.save').on('click',function(e){
			$this.removeClass('editing');
			// take the cell out of edit mode with the new content
			$(this).closest('tr').find('td.editable').each(function(){
				$(this).html($(this).find('input').val());
			});
			// toggle the edit cell state
			var $edit_td = $(this).closest('tr').find('td.edit');
			$edit_td.find('a.cancel').css({'display':'none'});
			$edit_td.find('a.edit').css({'display':'inline'});
			$edit_td.find('a.save').css({'display':'none'});
			settings.onSave.call(this);
			e.preventDefault();
		});

		return this;

	};
}( jQuery ));
