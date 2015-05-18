$(document).ready(function() {
	$("#alle").click(function() {
		$(".Menu-table").hide();
		$("#menu_alle").show();
		$(".CatItem").css("box-shadow","0 0 0px cyan");
	});

	$("#dyr").click(function() {
		$(".Menu-table").hide();
		$("#menu_dyr").show();
		$(".CatItem").css("box-shadow","0 0 0px cyan");
		$("#dyr").css("box-shadow","0 0 30px cyan");
		/*anvend evt. også -webkit-box-shadow:0 0 20px blue; 
    -moz-box-shadow: 0 0 20px blue;*/
	});

	$("#eventyr").click(function() {
		$(".Menu-table").hide();
		$("#menu_eventyr").show();
		$(".CatItem").css("box-shadow","0 0 0px cyan");
		$("#eventyr").css("box-shadow","0 0 30px cyan");
		/*FIND EN BEDRE MÅDE AT FJERNE HIGHLIGHT PÅ*/
	});

	$(".MockupCat").click(function() {
		$(".Menu-table").hide();
		$("#prototype").show();
		$(".CatItem").css("box-shadow","0 0 0px cyan");
		$(this).parent().css("box-shadow","0 0 30px cyan");
	});

	/*DOESN'T WORK?*/
	$("#soeg").click(function() {
		/*fjerner alle andre elementer end kategori-menuen og søgefeltet*/
		/*skriver noget med input-teksten - viser eksempel-søgeresultater i tabel*/
		var $phrase = $("input[name=searchPhrase]").val();
		$(".Menu-table").hide();
		$("#search-result").show();
		$("#result").remove();
		if($phrase != "Pippi") {
			$(".Result").append("<p id=\"result\">Du har søgt på <i>\"" + $phrase + "\"</i>. Mente du <i>\"Pippi\"</i>?</p>");
		}
		else {
			$(".Result").append("<p id=\"result\">Du har søgt på <i>\"" + $phrase + "\"</i>:</p>");
		}
		$("input[name=searchPhrase]").val("");
	});

	$(".MockupBook").click(function() {
		/*INDSÆT KODE TIL AT KOMME TIL ASTRIDS DEL MED AMUMU*/
	});
});
