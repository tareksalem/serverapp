$(document).ready(function() {
	
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
		if ($(this).is(":checked")) {
			$(dataEnable).removeAttr('disabled').attr("enabled", "");
		} else {
			$(dataEnable).removeAttr('enabled').attr("disabled", "");
		}
	});
});






