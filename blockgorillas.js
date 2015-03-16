var processor = {
    matches: function(url) {
        return document.URL.match(this.host_name);
    },

    process: function() {
        console.log("Borrando comentarios de "+ this.name);
        $(this.comments_selector).hide();
    }
};


var infobaeProcessor = Object.create(processor, {
    name: { value: "Infobae" },
    host_name: { value: "infobae.com" },
    comments_selector: { value: '.comentarios' }
});

var clarinProcessor = Object.create(processor, {
    name: { value: "Clarín" },
    host_name: { value: "clarin.com" },
    comments_selector: { value: '.cometarios-pase' }
});


var lnolProcessor = Object.create(processor, {
    name: { value: "La Nación" },
    host_name: { value: "lanacion.com" },
    comments_selector: { value: '#livefyre' }
});



processors = [infobaeProcessor, clarinProcessor, lnolProcessor];


$(function() {
    $.each(processors, function(index, processor) {
        if (processor.matches(document.URL)) {
            processor.process();
        }
    });

    $('#show_comments').on('click', function() { alert("PUTO"); });
});

