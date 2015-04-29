(function ($) {
  $(document).ready(function() {  	
  	//Add custom text on quiz results
	var score = $("#quiz_score_percent em.placeholder").text();
	
	if(score < 75){
		//$( "<p id='messageText'>You need 75% to complete this quiz. Please try again.<a href='http://stagefms.mx.sg/?q=content/quiz'>Click Here</a></p>" ).insertAfter( "#quiz_summary" );
	}
	
	if(score >= 75){
		$( "<p id='messageText'>Congratulations you have completed the quiz! This product is now avaliable in your profile.</p>" ).insertAfter( "#quiz_summary" );
	}
	
	
  	//ADD ACTIVITY POPUP ERROR MESSAGE
	$("form#comment-form").submit(function(){
		var errorMsg = [];
		var errorText = "";
		
		if($("#edit-field-account-und").val() == 1){
			if($("#edit-field-report-status-und").val() == "_none" || $("#edit-field-report-status-und").val() == null){
				errorMsg.push("Activity status field is required!");
			}
			
			/*if($("#edit-field-account-und").val() == ""){
				errorMsg.push("Account field is required!");
			}
			
			if($(".date-clear").val() == ""){
				errorMsg.push("Appointment date and time is required!");
			}*/
			
			if($("#edit-comment-body-und-0-value").val() == ""){
				errorMsg.push("Remarks field is required!");
			}
		}
		else{
			if($("#edit-field-report-status-und").val() == "_none" || $("#edit-field-report-status-und").val() == ""){
				errorMsg.push("Activity status field is required!");
			}
			
	/*		if($("#edit-field-account-und").val() == ""){
				errorMsg.push("Account field is required!");
			}
			
			if($(".date-clear").val() == ""){
				errorMsg.push("Appointment date and time is required!");
			}*/
			
			if($("#edit-comment-body-und-0-value").val() == ""){
				errorMsg.push("Remarks field is required!");
			}
			/*
			if($("#edit-field-cheque-no-und-0-value").val() == ""){
				errorMsg.push("Cheque No field is required!");
			}
			
			if($("#edit-field-bank-name-und-0-value").val() == ""){
				errorMsg.push("Bank Name field is required!");
			}
			
			if($("#edit-field-cheque-amount-und-0-value").val() == ""){
				errorMsg.push("Amount field is required!");
			}
			
			if($("#edit-field-product-und").val() == "_none" || $("#edit-field-product-und").val() == ""){
				errorMsg.push("Product Type field is required!");
			}
			
			if($("#edit-field-product-amount-und-0-value").val() == ""){
				errorMsg.push("Product Amount field is required!");
			}
			
			if($("#edit-field-attachments-und-0-upload").val() == ""){
				errorMsg.push("Please choose a file to upload!");
			}*/
		}
		
		if(errorMsg != ""){
			$.each( errorMsg, function(key, value ) {
			 errorText += value+"\n";
			});
			alert(errorText);
			return false; 
		}else{
			$("form#comment-form").submit();
			return true;
		}
	});
	
	
    // Handle toolbar collapse.
    $('.oa-navigation .btn-navbar-menu').click(function(e) {
      e.preventDefault();
      var navMenuCollapse = $('.oa-navigation .nav-menu-collapse');
      var height = (navMenuCollapse.height() == 0) ? 'auto' : 0;
      navMenuCollapse.height(height);
    });
    
    $('body.page-node-add-quiz #taking-fieldset div.form-type-checkbox input').change(function(){
       if (this.checked){
          $(this).addClass('checked');
          $(this).parent('div.form-type-checkbox').addClass('checked');
       } else {
          $(this).removeClass('checked');
          $(this).parent('div.form-type-checkbox').removeClass('checked');
       }
    });
    
    
    $('.page-courses-list .view-courses-list .views-row').each(function(){
        var value = $(this).find('.views-field-complete span.field-content').text();
        
        if(value == '1')
        {
            $(this).find('.views-field-nothing span a').text('Completed');
            $(this).find('.views-field-nothing').addClass('completed');
            $(this).find('.views-field-title span').addClass('completed');
        }
        else
        {
            $(this).find('.views-field-nothing span a').text('View course');
            $(this).find('.views-field-nothing').removeAttr('completed');
            $(this).find('.views-field-title span').removeAttr('completed');
        }
    });
    
    //Login fields placeholder
    $('#user-login-panel div.form-item input#edit-name').attr('placeholder','Username');
    $('#user-login-panel div.form-item input#edit-pass').attr('placeholder','Password');
    
    
    // adjust the position of the IPE buttons
    var $ipe = $('#panels-ipe-control-container');
    if ($ipe.length) {
      var $main = $('#main');
      var $element = $ipe.detach();
      $main.prepend($element);
    }
	
	// change pane title on report page
	$('.node-type-oa-space .bryant-flipped-sidebar h3.pane-title').html("SALES TEAM");
	$('.node-type-customer .moscone-flipped-sidebar-inner ul.links.inline li a').html("ADD ACTIVITY");
	$('.node-type-customer .pane-node-comment-form .field-name-comment-body label').html("REMARKS");
	
	$('.node-type-customer .moscone-flipped-sidebar-inner .pane-entity-field .field-label').each(function(){
		$(this).html("");
	});
	
	$('.node-type-customer .moscone-flipped-sidebar-inner .pane-entity-field .field-name-field-company-address .field-label').append("<img class='icon_img' src='/profiles/openatrium/themes/oa_radix/assets/images/icon_img/icon_address.png'/>");
	
	$('.node-type-customer .moscone-flipped-sidebar-inner .pane-entity-field .field-name-field-contacts .entity-field-collection-item .field-name-field-con-cus-name .field-label').append("<img class='icon_img' src='/profiles/openatrium/themes/oa_radix/assets/images/icon_img/icon_contacts.png'/>");

	$('.node-type-customer .moscone-flipped-sidebar-inner .pane-entity-field .field-name-field-contacts .entity-field-collection-item .field-label').each(function(){	
		$(this).append("<img class='icon_img1' src='/profiles/openatrium/themes/oa_radix/assets/images/icon_img/icon_space.png'/>");
	});
	// end of script for pane title on http://fms.mx.sg/jing-ding-technologies-pte-ltd side bar title
	
	// change OPEN/LOCK color in contact report page
	if($(".node-type-customer .moscone-flipped-sidebar-inner .pane-node-field-cus-status .field-name-field-cus-status .field-item").text() == "Lock"){
		$(".node-type-customer .moscone-flipped-sidebar-inner .pane-node-field-cus-status .field-name-field-cus-status .field-item").addClass("lock");
	}else{
		$(".node-type-customer .moscone-flipped-sidebar-inner .pane-node-field-cus-status .field-name-field-cus-status .field-item").addClass("open");
	}
	// end of script for OPEN/LOCK color in contact report page
	
	jQuery.fn.center = function ()
	{
	    this.css("position","fixed");
	    this.css("left", ($(window).width() / 2) - (this.outerWidth() / 2));
	    return this;
	}

	// script for popup report page 
	$('.node-type-customer .pane-node-comment-form').center();
	$(window).resize(function(){
	   $('.node-type-customer .pane-node-comment-form').center();
	});
	
	$(".node-type-customer .pane-node-comment-form").css({
		"background":"#FFFFFF",
		"display":"none",
		"position":"fixed",
		"top":"2%",
		"z-index":"9999999999999999999",
		"padding":"20px",
		"width":"60%",
		"height":"90%",
		"overflow-y":"scroll"
	});
	
	$(".node-type-customer div#cboxOverlay").css({
		"display":"none",
		"position":"fixed",
		"width":"100%",
		"height":"100%",
		"background":"#000",
		"opacity":".5",
		"z-index":"999999999",
		"top":"0"
	});

    $('.node-type-customer .moscone-flipped-sidebar-inner ul.links.inline li a').click(function(){
	    $('div.panel-pane.pane-node-comment-form').show();
        $('div#cboxOverlay').show();
    });

    $('div#cboxOverlay').click(function(){
        $('div.panel-pane.pane-node-comment-form').hide();
        $('div#cboxOverlay').hide();
    });
	
	$(".node-type-customer .moscone-flipped-sidebar-inner ul.links.inline li a").click(function(){return false});
	// end of script for popup report page 
	
	//change || add || insert text		
	$(".node-type-customer .pane-node-comment-form .comment-form #edit-actions input").attr("value","SAVE ACTIVITY");	
	$(".node-type-customer .pane-node-comment-form .comment-form .form-wrapper .form-item-field-report-status-und label").html("ADD ACTIVITY");	
	$(".node-type-customer .pane-node-comment-form .comment-form .form-wrapper .form-item-field-account-und label").html("");	
	$("<div id='addreport'>ADD ACTIVITY</div>").insertBefore(".node-type-customer .pane-node-comment-form .pane-content form");	
	
	$(".node-type-customer .pane-node-comment-form #edit-field-product-und option:first-child").html("Product Type");
	$(".node-type-customer .pane-node-comment-form #edit-field-product-und option:first-child").css({"color":"#808080"});
	var text = "Business Reg No.&nbsp;";
	$(".node-type-customer .moscone-flipped-column-content-region-inner .pane-node-field-brn .field-label").html(text);
	$(".node-type-customer .moscone-flipped-column-content-region-inner .pane-node-comments h3.pane-title").html("ACTIVITY FIELD");
	$('.node-type-customer .pane-node-comment-form #edit-field-report-status-und option:contains("- Select a value -")').text('Select Status *');
	$('.node-type-customer .pane-node-comment-form #edit-field-attachments-und-0-upload').text('Attachment');
	$('.node-type-customer .pane-node-comment-form #edit-field-report-status-und').css("color","#808080");
	$('.node-type-customer .pane-node-comment-form #edit-field-account-und').css("color","#808080");
	$('.node-type-customer .pane-node-comment-form #edit-field-product-und').css("color","#808080");
	$('.node-type-customer .pane-node-comment-form #edit-field-product-amount-und-0-value').css("color","#808080");
	$('.node-type-customer .pane-node-comment-form #edit-comment-body-und-0-value').css("color","#808080");
	//$('.node-type-course h1.title').html("Website Marketing");
	$('.node-type-course .brenham-flipped-column-content-region-inner .panel-pane h3').html("LESSON PLAN");
	$('.node-type-quiz h1.title').html("Website Marketing Quiz");
	
	//add label to stylize the radio boxes in page website marketing quiz
	$(".node-type-quiz .region-content form .form-item-tries-answer .form-radio").each(function(){
		$(this).after("<label></label>");
	});
	
	var ficon = $(".node-type-course .brenham-flipped-column-content-region.span9 .pane-course-outline .item-list ul li.ppt-slides-course-content a").length;
	var sicon = $(".node-type-course .brenham-flipped-column-content-region.span9 .pane-course-outline .item-list ul li.course-documents-course-content a").length;
	var ticon = $(".node-type-course .brenham-flipped-column-content-region.span9 .pane-course-outline .item-list ul li.video-materials-course-content a").length;
	
	if(ficon != 0){
		$(".node-type-course .brenham-flipped-column-content-region.span9 .pane-course-outline .item-list ul li.ppt-slides-course-content a").html("<img class='show_icon' src='/profiles/openatrium/themes/oa_radix/assets/images/icon_img/view_slides.png' alt='' title='' />");
	}else{
		$(".node-type-course .brenham-flipped-column-content-region.span9 .pane-course-outline .item-list ul li.ppt-slides-course-content").html("<img class='show_icon' src='/profiles/openatrium/themes/oa_radix/assets/images/icon_img/view_slides.png' alt='' title='' />");
	}
	
	if(sicon != 0){
		$(".node-type-course .brenham-flipped-column-content-region.span9 .pane-course-outline .item-list ul li.course-documents-course-content a").html("<img class='show_icon' src='/profiles/openatrium/themes/oa_radix/assets/images/icon_img/view_documents.png' alt='' title='' />");
	}else{
		$(".node-type-course .brenham-flipped-column-content-region.span9 .pane-course-outline .item-list ul li.course-documents-course-content").html("<img class='show_icon' src='/profiles/openatrium/themes/oa_radix/assets/images/icon_img/view_documents.png' alt='' title='' />");
	}
	
	if(ticon != 0){
		$(".node-type-course .brenham-flipped-column-content-region.span9 .pane-course-outline .item-list ul li.video-materials-course-content a").html("<img class='show_icon' src='/profiles/openatrium/themes/oa_radix/assets/images/icon_img/view_videos.png' alt='' title='' />");
	}else{
		$(".node-type-course .brenham-flipped-column-content-region.span9 .pane-course-outline .item-list ul li.video-materials-course-content").html("<img class='show_icon' src='/profiles/openatrium/themes/oa_radix/assets/images/icon_img/view_videos.png' alt='' title='' />");
	}
	
  });
})(jQuery)
