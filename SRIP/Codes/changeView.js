function showStartView() {
    $(".controlDiv").hide();
    $("#startControls").show();
    $("#backButton").hide();
    $("#runButton").addClass('hide-back');
}

function showAffineView() {
    $(".controlDiv").hide();
    $("#affineControls").show();
    $("#backButton").show();
    $("#runButton").removeClass('hide-back');
}

function showPointView(type) {
    $(".controlDiv").hide();
    $("#pointControls").show();
    $("#backButton").show();
    $("#runButton").removeClass('hide-back');
    switch (type) {
        case 'linear':
            $('#linearControls').show();
            $('#nonLinearControls').hide();
            $('#clippingControls').hide();
            $('#windowControls').hide();
            $('#linearButtonPtCtrls').addClass('active');
            $('#nonLinearButtonPtCtrls').removeClass('active');
            $('#clippingButtonPtCtrls').removeClass('active');
            $('#windowButtonPtCtrls').removeClass('active');
            // $('#pointControls').
            break;
        case 'nonLinear':
            $('#linearControls').hide();
            $('#nonLinearControls').show();
            $('#clippingControls').hide();
            $('#windowControls').hide();
            $('#linearButtonPtCtrls').removeClass('active');
            $('#nonLinearButtonPtCtrls').addClass('active');
            $('#clippingButtonPtCtrls').removeClass('active');
            $('#windowButtonPtCtrls').removeClass('active');
            break;
        case 'clipping':
            $('#linearControls').hide();
            $('#nonLinearControls').hide();
            $('#clippingControls').show();
            $('#windowControls').hide();
            $('#linearButtonPtCtrls').removeClass('active');
            $('#nonLinearButtonPtCtrls').removeClass('active');
            $('#clippingButtonPtCtrls').addClass('active');
            $('#windowButtonPtCtrls').removeClass('active');
            break;
        case 'window':
            $('#linearControls').hide();
            $('#nonLinearControls').hide();
            $('#clippingControls').hide();
            $('#windowControls').show();
            $('#linearButtonPtCtrls').removeClass('active');
            $('#nonLinearButtonPtCtrls').removeClass('active');
            $('#clippingButtonPtCtrls').removeClass('active');
            $('#windowButtonPtCtrls').addClass('active');
            break;

        default:
            break;
    }
}

function showMorphView() {
    $(".controlDiv").hide();
    $("#morphControls").show();
    $("#backButton").show();
    $("#runButton").removeClass('hide-back');
}

function showHistogramView() {
    $(".controlDiv").hide();
    $("#histogramControls").show();
    $("#backButton").show();
    $("#runButton").removeClass('hide-back');
}

function showNeighbourhoodView() {
    $(".controlDiv").hide();
    $("#neighbourhoodControls").show();
    $("#backButton").show();
    $("#runButton").removeClass('hide-back');
}

function showFourierView() {
    $(".controlDiv").hide();
    $("#fourierControls").show();
    $("#backButton").show();
    $("#runButton").removeClass('hide-back');
}

function showSegmentationView() {
    $(".controlDiv").hide();
    $("#segmentationControls").show();
    $("#backButton").show();
    $("#runButton").removeClass('hide-back');
}
