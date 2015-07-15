var $table;

beforeEach(function() {
	loadFixtures("form.html");
	$table = $("#edit-panel");
  $table.edittr();
});

describe("Table", function() {

	it("should exist in the fixture", function() {
		expect($table).toHaveId("edit-panel");
	});
	
	it("should have an 'edittr' class", function() {
		expect($table).toHaveClass("edittr");
	});
  
	it("should have an editing class when in editing mode", function() {
    $('a.edit').click();
		expect($table).toHaveClass("editing");
	});
		
});

describe("Options", function() {

	describe("I18n", function() {
	
		it("should accept an cancelText value", function() {
			$table.edittr({cancelText:"Fuggedit"});
		});
		
		it("should accept an editText value", function() {
			$table.edittr({editText:"Edito"});
		});
		
		it("should accept an saveText value", function() {
			$table.edittr({saveText:"Le save"});
		});

	});

	describe("Callbacks", function() {

		it("should execute the callback code", function() {
			var testVar = "foo"
			$table.edittr({
				onEdit: function() {
					testVar = "bar"
				}
			});
			expect(testVar).toEqual("bar");
		});
		
	});

});
