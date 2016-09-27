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

	it("should have text content that is converted to a select list", function() {
    expect($("td.handedness")).toHaveText("Left");
    $('a.edit').click();
    expect($("td.handedness select").find("option[selected=true]").text()).toBe("Left");
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
      expect($("a.cancel")).toHaveText("Fuggedit");
      expect($("a.edit")).toHaveText("Edito");
      expect($("a.save")).toHaveText("Le save");
		});
		
	});

	describe("Callbacks", function() {

    beforeEach(function() {
      loadFixtures("form.html");
      $table = $("#edit-panel");
    });

    it("should execute the onEdit callback", function() {
      var testVar = "before";
      $table.edittr({
        onEdit: function() {
          testVar = "after";
        }
      });
      $('a.edit').click();
			expect(testVar).toEqual("after");
		});

		it("should execute the onSave callback", function() {
      var testVar = "before";
      $table.edittr({
        onSave: function() {
          testVar = "after";
        }
      });
      $('a.edit').click();
      $('a.save').click();
			expect(testVar).toEqual("after");
		});

		it("should execute the onCancel callback", function() {
      var testVar = "before";
      $table.edittr({
        onCancel: function() {
          testVar = "after";
        }
      });
      $('a.edit').click();
      $('a.cancel').click();
			expect(testVar).toEqual("after");
		});

	});

});
