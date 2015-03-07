var infobaeProcessor = {
    name: "infobae",

    matches: function(url) {
        return document.URL.match(this.name);
    },

    process: function() {
        console.log("Borrando comentarios de Infobae");
        $('.comentarios').hide();
    }
};

var clarinProcessor = {
    name: "clarin",

    matches: function(url) {
        return document.URL.match(this.name);
    },

    process: function() {
        console.log("Borrando comentarios de Clarín");
        $('.cometarios-pase').hide();
    }
};


processors = [infobaeProcessor, clarinProcessor];


$(function() {
    $.each(processors, function(index, processor) {
        if (processor.matches(document.URL)) {
            processor.process();
        }
    });
});