// "use strict";

$(".calculator input").on("input change", function (event) {
    let parameterName = $(this).attr("id").split("calc-")[1];
    let centimeters = $(this).val()

    switch (parameterName) {
        case "größe":
            $("#calc-height_value").html("größe: " + centimeters + " cm");
            break;
        case "gewicht":
            let kg = $(this).val();
            $("#calc-weight_value").html("gewicht: " + kg + " kg");
            break;
        case "alter":
            $("#calc-age_value").html("alter: " + $(this).val());
            break;
        case "cardio":
            $("#calc-cardio_value").html("cardio: " + $(this).val() + " Stunden pro Woche");
            break;
        case "laufen":
            $("#calc-walking_value").html("laufen: " + $(this).val() + " Stunden pro Woche");
            break;
    }

    let height = parseInt($("#calc-height").val(), 10);
    let age = parseInt($("#calc-age").val(), 10);
    let height = parseInt($("#calc-weight").val(), 10);
    let walking = parseInt($("#calc-walking").val(), 10);
    let cardio = parseInt($("#calc-cardio").val(), 10);
    let geschlecht = $(".calculator input[name='geschlecht']:checked").val();

    //Harris Benedict Formel Scheißndreck
    let bmr = parseInt(10 * weight + 6.25 * height - 5 * age, 10) + (geschlecht === "männlich" ? 5 : -161);
    bmr = bmr * 1.2;
    bmr += laufen * 60 * (.03 * gewicht * 1 / 0.45) / 7;
    bmr += cardio * 60 * (.07 * gewicht * 1 / 0.45) / 7;
    bmr = Math.floor(bmr);

    let targetGainWeight = Math.round((bmr + 300) / 100) * 100;
    let targetMaintain = Math.round((bmr) / 100) * 100;
    let targetLoseWeight = Math.round((bmr - 500) / 100) * 100;

    $("#calc-target-gain span").html(targetGainWeight + " Kalorien");
    $("#calc-target-maintain span").html(targetMaintain + " Kalorien");
    $("#calc-target-lose span").html(targetLoseWeight + " Kalorien");
});