
function deleteInfobaeComments() {
    console.log("Borrando comentarios de Infobae");
    $('.comentarios').hide();
}

function deleteClarinComments() {
    console.log("Borrando comentarios de Clarín");
    $('.cometarios-pase').hide();
}

handlers = {
    "infobae": deleteInfobaeComments,
    "clarin": deleteClarinComments
};

$(function() {
    for (var newspaperName in handlers) {
        if (document.URL.match(newspaperName)) {
            handlers[newspaperName]();
        }
    }
});