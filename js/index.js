$('#reposHome').bind('pageinit', function(event) {
	loadRepos();
});

function loadRepos() {
    $.ajax("http://jhmc-r7zk.accessdomain.com/lindsay/stcharles_build.json").done(function(data) {
        var i, repo;
        $.each(data.moduleArr, function (i, story) {
            $("#allRepos").append("<li style = 'min-height:80px;'><a' href='https://github.com/'>"
            + "<div style = 'background-image:url(" + story.thumb + ");' class = 'thumb'></div>"
		    + "<div>" + story.headline + "</div>"
            + "<p>" + story.headline + "</p></a></li>");
        });
        $('#allRepos').listview('refresh');
    });
}