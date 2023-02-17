
$(document).ready(function() {
    getTeamDataWithAjax();
});
  
//Function to retrieve team data
function getTeamData() {

    //Send a request to the server to get the team data
    $.getJSON('team.json', function(data) {

        $.each(data, function(index, element) {

            var name = '<h2>' + element.name + '</h2>';
            var position = '<h5>' + element.position + '</h5>';
            var bio = '<p>' + element.bio + '</p>';

            $('#team').append(name + position + bio);
        });
    });
}
  
//Function to retrieve team data using AJAX with a loading delay
function getTeamDataWithAjax() {

    //Display a loading message on the page
    $('#team').text('Loading...');
  
    //Send a request to the server
    $.ajax({
        url: 'team.json',
        type: 'get',
        dataType: 'json',
        success: function(data) {

            setTimeout(function() {

                //Clear the loading message from the page
                $('#team').empty();
                $.each(data, function(index, element) {

                    var name = '<h2>' + element.name + '</h2>';
                    var position = '<h5>' + element.position + '</h5>';
                    var bio = '<p>' + element.bio + '</p>';
            
                    $('#team').append(name + position + bio);
                });
            }, 3000);
        },

        error: function() {
            
            //Display an error message on the page
            $('#team').text('Content could not be retrieved.');
            console.error('Content could not be retrieved.');
        }
    });
} 