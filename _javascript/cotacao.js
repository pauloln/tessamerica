    // DOLAR $ e EURO €
    $.getJSON( "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%3D%22EURBRL%2CUSDBRL%22&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function( data ) {

        var indices =   '<p class="active"><strong>USD</strong> - '+money(data.query.results.rate[1].Rate)+'<strong> / EUR</strong> - '+money(data.query.results.rate[0].Rate)+ '</p>';

        $('#moedas').html(indices);

    });

    // IBOVESPA
    // $.getJSON( "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20%28%22^BVSP%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function( data ) {
    //
    //    var change = data.query.results.quote.Change;
    //
    //    var color = ( change.indexOf('+')>-1 )? '#1f851a' : 'red';
    //
    //    var bovespa = '<p><strong>IBOVESPA</strong> '+money(data.query.results.quote.LastTradePriceOnly)+' <span style="color:'+color+'">'+data.query.results.quote.Change+'</span> </p>';
    //
    //    $('#info2').html( bovespa );
    //
    //});

money = function(n){
    var
        c = 4,
        d = ',',
        t = '.',
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};