var $element;

beforeEach(function() {
	loadFixtures("form.html");
	$element = $("#edit-panel");
});

describe("Table", function() {

	it("should exist in the fixture", function() {
		expect($element).toHaveId("edit-panel");
	});
	
	it("should call jquery.edittr()", function() {
		spyOn($element, 'edittr');
		$element.edittr();
		expect($element.edittr).toHaveBeenCalled();
	});
	
	it("should have an edittr class", function() {
		spyOn($element, 'edittr');
		$element.edittr();
		expect($element).toHaveClass("edittr");
	});
		
});

describe("Options", function() {

	describe("I18n", function() {
	
		it("should accept an cancelText value", function() {
			$element.edittr({cancelText:"Fuggedit"});
		});
		
		it("should accept an editText value", function() {
			$element.edittr({editText:"Edito"});
		});
		
		it("should accept an saveText value", function() {
			$element.edittr({saveText:"Le save"});
		});

	});

	describe("Callbacks", function() {

		it("should execute the callback code", function() {
			var testVar = "foo"
			$element.edittr({
				onEdit: function() {
					testVar = "bar"
				}
			});
			expect(testVar).toEqual("bar");
		});
		
	});

});