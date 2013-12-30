$('#reposHome').bind('pageinit', function(event) {
	loadRepos();
});

function loadRepos() {
    $.ajax("http://jhmc-r7zk.accessdomain.com/lindsay/stcharles_build.json").done(function(data) {
        var i, repo;
        $.each(data.moduleArr, function (i, story) {
										 
		  if(story.headline){						 
               $("#allRepos").append("<li style = 'min-height:80px;'><a href='https://github.com/'>"
               + "<div style = 'background-image:url(" + story.thumb + ");' class = 'thumb'></div>"
		       + "<div class = 'listHeadline'>" + story.headline + "</div>"
                + "<div class = 'listSummary'>" + story.headline + "</div></a></li>");
		  }
        });
        $('#allRepos').listview('refresh');
    });
}