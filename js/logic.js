var hideTakenSpots = function(donors) {
  
  for (var i = 0; i < donors.donors30.length; i++) {
    $(".donor30.p"+donors.donors30[i]).addClass("taken");
  }

  for (var i = 0; i < donors.donors25.length; i++) {
    $(".donor25.p"+donors.donors25[i]).addClass("taken");
  }

  for (var i = 0; i < donors.donors20.length; i++) {
    $(".donor20.p"+donors.donors20[i]).addClass("taken");
  }
}

$(function() {
  hideTakenSpots(donors);
})