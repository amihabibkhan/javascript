function loadMeAfterSuccess() {
    $("#sortable").load(location.href + " #sortable > *");
    // console.log(location.href + "#sortable")
}

// call this function and it will reload #sortable div or html element
