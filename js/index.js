$('#reposHome').bind('pageinit', function(event) {
	loadRepos();
});

function loadRepos() {
    $.ajax("http://jhmc-r7zk.accessdomain.com/lindsay/stcharles_build.json").done(function(data) {
        var i, repo;
        $.each(data.moduleArr, function (i, story) {
            $("#allRepos").append("<li><div style = 'white-space:normal;'><a' href='https://github.com/" + story.headline + "/" + story.headline + "'></div>"
            + "<div style = 'background-image:url(" + story.thumb + ");' class = 'thumb'></div>"
		    + "<h4>" + story.headline + "</h4>"
            + "<p>" + story.headline + "</p></a></li>");
        });
        $('#allRepos').listview('refresh');
    });
}