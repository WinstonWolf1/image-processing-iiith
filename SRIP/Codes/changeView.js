document.getElementById("backButton").addEventListener("click", showStartView);

function showStartView() {
    $(".controlDiv").hide();
    $("#startControls").show();
    $("#backButton").hide();
    $("#runButton").addClass("hide-back");
}

document
    .getElementById("affineRadio")
    .addEventListener("click", showAffineView);

function showAffineView() {
    $(".controlDiv").hide();
    $("#affineControls").show();
    $("#backButton").show();
    $("#runButton").removeClass("hide-back");
}

document.getElementById("pointRadio").addEventListener("click", function() {
    showPointView("linear");
});

document
    .getElementById("linearButtonPtCtrls")
    .addEventListener("click", function() {
        showPointView("linear");
    });

document
    .getElementById("nonLinearButtonPtCtrls")
    .addEventListener("click", function() {
        showPointView("nonLinear");
    });

document
    .getElementById("clippingButtonPtCtrls")
    .addEventListener("click", function() {
        showPointView("clipping");
    });

document
    .getElementById("windowButtonPtCtrls")
    .addEventListener("click", function() {
        showPointView("window");
    });

function showPointView(type) {
    $(".controlDiv").hide();
    $("#pointControls").show();
    $("#backButton").show();
    $("#runButton").removeClass("hide-back");
    switch (type) {
        case "nonLinear":
            $("#linearControls").hide();
            $("#nonLinearControls").show();
            $("#clippingControls").hide();
            $("#windowControls").hide();
            $("#linearButtonPtCtrls").removeClass("active");
            $("#nonLinearButtonPtCtrls").addClass("active");
            $("#clippingButtonPtCtrls").removeClass("active");
            $("#windowButtonPtCtrls").removeClass("active");
            break;
        case "clipping":
            $("#linearControls").hide();
            $("#nonLinearControls").hide();
            $("#clippingControls").show();
            $("#windowControls").hide();
            $("#linearButtonPtCtrls").removeClass("active");
            $("#nonLinearButtonPtCtrls").removeClass("active");
            $("#clippingButtonPtCtrls").addClass("active");
            $("#windowButtonPtCtrls").removeClass("active");
            break;
        case "window":
            $("#linearControls").hide();
            $("#nonLinearControls").hide();
            $("#clippingControls").hide();
            $("#windowControls").show();
            $("#linearButtonPtCtrls").removeClass("active");
            $("#nonLinearButtonPtCtrls").removeClass("active");
            $("#clippingButtonPtCtrls").removeClass("active");
            $("#windowButtonPtCtrls").addClass("active");
            break;

        case "linear":
        default:
            $("#linearControls").show();
            $("#nonLinearControls").hide();
            $("#clippingControls").hide();
            $("#windowControls").hide();
            $("#linearButtonPtCtrls").addClass("active");
            $("#nonLinearButtonPtCtrls").removeClass("active");
            $("#clippingButtonPtCtrls").removeClass("active");
            $("#windowButtonPtCtrls").removeClass("active");
            // $('#pointControls').
            break;
    }
}

document.getElementById("morphRadio").addEventListener("click", showMorphView);

function showMorphView() {
    $(".controlDiv").hide();
    $("#morphControls").show();
    $("#backButton").show();
    $("#runButton").removeClass("hide-back");
}

document
    .getElementById("histogramRadio")
    .addEventListener("click", showHistogramView);

function showHistogramView() {
    $(".controlDiv").hide();
    $("#histogramControls").show();
    $("#backButton").show();
    $("#runButton").removeClass("hide-back");
}

document
    .getElementById("neighbourRadio")
    .addEventListener("click", showNeighbourhoodView);

function showNeighbourhoodView() {
    $(".controlDiv").hide();
    $("#neighbourhoodControls").show();
    $("#backButton").show();
    $("#runButton").removeClass("hide-back");
}

document
    .getElementById("fourierRadio")
    .addEventListener("click", showFourierView);

function showFourierView() {
    $(".controlDiv").hide();
    $("#fourierControls").show();
    $("#backButton").show();
    $("#runButton").removeClass("hide-back");
}

document
    .getElementById("segmentRadio")
    .addEventListener("click", showSegmentationView);

function showSegmentationView() {
    $(".controlDiv").hide();
    $("#segmentationControls").show();
    $("#backButton").show();
    $("#runButton").removeClass("hide-back");
}
