jQuery(document).ready(function($) {

    var all_genre = ["Microservice", "Security", "Openshift"];
    var genre_template = Mustache.compile($.trim($("#genre_template").html()))
        ,$genre_container = $('#genre_criteria')

    $.each(all_genre, function(i, g){
        $genre_container.append(genre_template({genre: g}));
    });

    $("#rating_slider").slider({
        min: 8,
        max: 10,
        values:[8, 10],
        step: 0.1,
        range:true,
        slide: function( event, ui ) {
            $("#rating_range_label" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
            $('#rating_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
        }
    });

    $("#runtime_slider").slider({
        min: 50,
        max: 250,
        values:[0, 250],
        step: 10,
        range:true,
        slide: function( event, ui ) {
            $("#runtime_range_label" ).html(ui.values[ 0 ] + ' mins. - ' + ui.values[ 1 ] + ' mins.');
            $('#runtime_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
        }
    });

    $.each(guides, function(i, m){ m.id = i+1; });
    window.mf = guideFilter(guides);

    $('#genre_criteria :checkbox').prop('checked', true);
    $('#all_genre').on('click', function(e){
        $('#genre_criteria :checkbox:gt(0)').prop('checked', $(this).is(':checked'));
        mf.filter();
    });

});

var guideFilter = function(data){
    var template = Mustache.compile($.trim($("#template").html()));

    var view = function(guide){
        guide.stars = guide.stars.join(', ');
        return template(guide);
    };
    var callbacks = {
        after_filter: function(result){
            $('#total_guides').text(result.length);
        },
        before_add: function(data){
            var offset = this.data.length;

            if (offset == 450) this.clearStreamingTimer();

            for(var i = 0, l = data.length; i < l; i++)
                data[i].id = offset + i + 1;
        },
        after_add: function(data){
            var percent = (this.data.length - 250)*100/250;
            $('#stream_progress').text(percent + '%').attr('style', 'width: '+ percent +'%;');
            if (percent == 100) $('#stream_progress').parent().fadeOut(1000);
        }
    };

    options = {
        filter_criteria: {
            rating:  ['#rating_filter .TYPE.range', 'rating'],
            year:    ['#year_filter .TYPE.range', 'year'],
            runtime: ['#runtime_filter .TYPE.range', 'runtime'],
            genre:   ['#genre_criteria input:checkbox:gt(0)', 'genre']
        },
        and_filter_on: true,
        callbacks: callbacks,
        search: {input: '#searchbox'},
        streaming: {
            data_url: 'data/top_guides_data.json',
            stream_after: 1,
            batch_size: 50
        }
    }

    return FilterJS(data, "#guides", view, options);
}
