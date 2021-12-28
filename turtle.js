function fillTable(data) {
    const results = data.results;
    console.log(results);
    const rows = results.map(r => '<td>' + r.dt_move + '</td><td>' + r.point.coordinates[1] + '</td><td>' + r.point.coordinates[0] + '</td><td><a href="https://www.google.fr/maps/@' + r.point.coordinates[1] + ',' + r.point.coordinates[0] +',15z" target="_blank">link</a></td>');
    $('table > tbody').html('<tr>' + rows.join('</tr><tr>') + '</tr>');
}

function loadCoordonates(id) {
    $.getJSON(
        'https://stc.mapotic.com/api/v1/poi/ext:' + $('input').val() +'/move/?page_size=2000',
        fillTable
    );
}