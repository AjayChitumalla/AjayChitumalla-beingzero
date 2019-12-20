

$.getJSON('/data', function(d){
//alert(JSON.stringify(d));
        
$('#h1').text(d.name);
$('#p').text(d.college);
$('#p2').text(d.regno);
})