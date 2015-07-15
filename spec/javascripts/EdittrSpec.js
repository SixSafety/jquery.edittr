var $table;

describe("Table", function() {

  beforeEach(function() {
    loadFixtures("form.html");
    $table = $("#edit-panel");
    $table.edittr();
  });

	it("should exist in the fixture", function() {
		expect($table).toHaveId("edit-panel");
	});
	
	it("should have an 'edittr' class", function() {
		expect($table).toHaveClass("edittr");
	});
  
	it("should have an 'editing' class when in editing mode", function() {
    $('a.edit').click();
		expect($table).toHaveClass("editing");
	});
		
	it("should have text content that is converted to an input", function() {
    expect($("td.name")).toHaveText("Stephen");
    $('a.edit').click();
    expect($("td.name input").val()).toBe("Stephen");
	});

  it("should show the Save and Cancel buttons only when in editing mode", function() {
    expect($("a.edit")).toBeVisible();
    $('a.edit').click();
    expect($("a.edit")).toBeHidden();
    expect($("a.cancel")).toBeVisible();
    expect($("a.save")).toBeVisible();
  });

});

describe("Options", function() {

	describe("I18n", function() {
	
    beforeEach(function() {
      loadFixtures("form.html");
      $table = $("#edit-panel");
      $table.edittr({cancelText:"Fuggedit",editText:"Edito",saveText:"Le save"});
    });

		it("should custom values for cancelText, editText and saveText", function() {
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
