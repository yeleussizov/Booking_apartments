(function ($) {
Drupal.behaviors.order = {
  attach: function (context) {
		$( "#from" ).datepicker({
			dateFormat: 'yy-mm-dd',
			changeMonth: true,
			numberOfMonths: 1,
			showButtonPanel: true,
			onSelect: function( selectedDate ) {
				$( "#to" ).datepicker( "option", "minDate", selectedDate );
			}
		});
		$( "#to" ).datepicker({
			dateFormat: 'yy-mm-dd',
			changeMonth: true,
			numberOfMonths: 1,
			showButtonPanel: true,
			onSelect: function( selectedDate ) {
				$( "#from" ).datepicker( "option", "maxDate", selectedDate );
			}
		});  

$('#tenge').click(function (){
$(".kzt_value").show();
$(".usd_value").hide();
$(".rub_value").hide();
 $("#tenge").addClass("curent");
$("#dollar").removeClass("curent");
$("#ruble").removeClass("curent"); 
      });
	$('#dollar').click(function (){
$(".kzt_value").hide();
$(".usd_value").show();
$(".rub_value").hide();
 $("#dollar").addClass("curent");
$("#tenge").removeClass("curent");
$("#ruble").removeClass("curent"); 
      }); 
	  
$('#ruble').click(function (){
$(".kzt_value").hide();
$(".usd_value").hide();
$(".rub_value").show();
 $("#ruble").addClass("curent");
$("#tenge").removeClass("curent");
$("#dollar").removeClass("curent"); 
      }); 	  
	  
$('.switch_dol').click(function (){
if($('.kzt_value').css("display", "inline")) {
	$(".kzt_value").hide();
	$(".rub_value").hide();
	$(".usd_value").show();
	 $("#dollar").addClass("curent");
$("#tenge").removeClass("curent");
$("#ruble").removeClass("curent"); 
} 
});
$('.switch_rub').click(function (){
if($('.usd_value').css("display", "inline")) {
	$(".kzt_value").hide();
	$(".rub_value").show();
	$(".usd_value").hide();
	 $("#ruble").addClass("curent");
$("#tenge").removeClass("curent");
$("#dollar").removeClass("curent"); 
} 
});

$('.switch_kzt').click(function (){
if($('.rub_value').css("display", "inline")) {
	$(".kzt_value").show();
	$(".rub_value").hide();
	$(".usd_value").hide();
		$("#tenge").addClass("curent");
		$("#dollar").removeClass("curent");
		$("#ruble").removeClass("curent"); 
} 
});
		
}
};
})(jQuery);
