

$(document).ready(function() {
	$(".chosen-select").chosen({
		width: "100%",
		rtl: true
	});	
	var closeSidebar = $(".close-sidebar");
	closeSidebar.on("click", function () {
		var hidden;
		if($(this).hasClass('fa-times')) {
			$(this).parent().find(".container-sidebar").fadeOut(200, function () {
			closeSidebar.removeClass('fa-times').addClass('fa-bars');
			
		});
		}
		if ($(this).hasClass('fa-bars')) {
			$(this).parent().find(".container-sidebar").fadeIn(200, function () {
			closeSidebar.removeClass('fa-bars').addClass('fa-times');

		});
		}
	});
	$("#enter-new-user p").on("click", function () {
		var dataToggle = $(this).data("toggle");
		$(dataToggle).show(500).siblings(".container-user-options").hide(500);
	});
	//function to make adding and removing textareas
	function addTextAreas(addBtn, removeBtn, mainContainer, removedContainer, content) {
		$(addBtn).on("click", function () {
			$(this).parents(mainContainer).append(content());
			$(removeBtn).on("click", function () {
				$(this).parents(removedContainer).remove();
			});
		});
		$(removeBtn).on("click", function () {
			$(this).parents(removedContainer).remove();
		});
	}
	addTextAreas(".btn-add-public-message", ".btn-remove-public-message", ".container-user-options", ".container-add-textarea", function () {
		return (`
				<div class="container-add-textarea col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <p class="btn btn-danger btn-remove-textarea btn-remove-public-message">_</p>
                                                    <label>رسالة ترحيب</label>
                                                    <textarea class="form-control" name="msgwelc{{msg['id']}}"></textarea>
                                                </div>
                                            </div>
			`)
	});
	addTextAreas(".btn-add-private-message", ".btn-remove-private-message", ".container-user-options", ".container-add-textarea", function () {
		return (`
				<div class="container-add-textarea col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <p class="btn btn-danger btn-remove-textarea btn-remove-private-message">_</p>
                                                    <label>رسالة ترحيب</label>
                                                    <textarea class="form-control" name="msgpm{{msg['id']}}"></textarea>
                                                </div>
                                            </div>
			`)
	});
	//check if the check box is checked or not

	$(".enable-disable-btn").on("click", function () {
		var dataEnable = $(this).parents(".container-image-inputs").find("fieldset");
		if ($(this).is(":checked")) {
			$(dataEnable).removeAttr('disabled').attr("enabled", "");
		} else {
			$(dataEnable).removeAttr('enabled').attr("disabled", "");
		}
	});

	$(".panel-heading").on("click", function () {
		$(this).css({"background-color": "#2196F3", "color": "white"});
		var panelHeading = this;
		var panelBody = $(this).parent().find(".panel-body");
		$(panelBody).slideToggle(500);
		$(this).parent().siblings().children('.panel-body').slideUp(500);
		$(this).parent().siblings().children('.panel-heading').css({"background-color": "#f5f5f5", "color": "#2196F3"});
		//css({"background-color": "#ddd", "color": "#2196F3"});
	});
	$(".enable-disable-btn").on("click", function () {
		var dataEnable = $(this).parent(".form-group").find(".enable-disabled-inputs");
		var selectBox = $(this).parent(".form-group").find(".enable-disabled-inputs select");
		var chosenContainer = $(this).parent(".form-group").find(".chosen-container");
		if ($(this).is(":checked")) {
			$(dataEnable).removeAttr('disabled').attr("enabled", "");
			if ($(dataEnable).find("select").attr("multiple") !== undefined) {
				selectBox.addClass('chosen-select');
			selectBox.fadeOut();
			chosenContainer.fadeIn();
				$(".chosen-select").chosen({
					width: "100%",
					rtl: true
				});	
			}
			
		} else {
			$(dataEnable).removeAttr('enabled').attr("disabled", "");
			chosenContainer.fadeOut();
			selectBox.removeClass('chosen-select');
			selectBox.fadeIn();

		}
	});
	//function to add and remove auto replay
	function addRemoveAutoReplay() {
		$(".add-auto-replay").on("click", function () {
		var mainContainer = $(this).parents(".container-enter-user-options");
		var content = `
				<div class="container-auto-replay col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <p class="btn btn-danger remove-auto-replay fa fa-times"></p>
                                                </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <input class="form-control" placeholder="النص" type="text" name="resmain{{res['id']}}">
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <textarea class="form-control" name="reses{{res['id']}}"></textarea>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="">
                                                            <label>حذف رد الشخص</label>
                                                            <input type="checkbox" name="resdelete{{res['id']}}">
                                                        </div>
                                                        <div class="">
                                                            <label>للأدمن فقط</label>
                                                            <input type="checkbox" name="resdelete{{res['id']}}">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
			`
			mainContainer.append(content);
			$(".remove-auto-replay").on("click", function () {
			$(this).parents(".container-auto-replay").remove();
		});
	});
		$(".remove-auto-replay").on("click", function () {
			$(this).parents(".container-auto-replay").remove();
		});
	}
	addRemoveAutoReplay();
	//function for add and remove shorten edibility

	function addRemoveShort() {
		$(".add-short-edibility").on("click", function () {
			var mainContainer = $(this).parents(".container-add-edibility-short");
			var content = `
				<div class="container-short-edibility col-lg-4 col-sm-6 col-xs-12 col-xs-12">
                                                        <div class="form-group">
                                                            <p class="btn btn-danger remove-short-edibility fa fa-times"></p>
                                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <input class="form-control" type="text" name="shourtrole{{ff['id']}}">
                                                                <select class="form-control" name="idrole{{ff['id']}}">
                                                                    <option>خيار 1</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
			`
			mainContainer.append(content);
			$(".remove-short-edibility").on("click", function () {
				$(this).parents(".container-short-edibility").remove();
			});
		});
		$(".remove-short-edibility").on("click", function () {
			$(this).parents(".container-short-edibility").remove();
		});
	}
	addRemoveShort();
});






