$('#reposHome').bind('pageinit', function(event) {
	loadRepos();
});

function loadRepos() {
    $.ajax("http://jhmc-r7zk.accessdomain.com/lindsay/stcharles_build.json").done(function(data) {
        var i, repo;
        $.each(data.moduleArr, function (i, story) {
            $("#allRepos").append("<li><a href='https://github.com/" + story.headline + "/" + story.headline + "'>"
            + "<img src = '" + story.thumb + "'></img>"
		    + "<h4>" + story.headline + "</h4>"
            + "<p>" + story.headline + "</p></a></li>");
        });
        $('#allRepos').listview('refresh');
    });
}