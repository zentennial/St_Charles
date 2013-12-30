$('#reposHome').bind('pageinit', function(event) {
	loadRepos0();
});

function loadRepos0() {
    $.ajax("http://jhmc-r7zk.accessdomain.com/lindsay/stcharles_build.json").done(function(data) {
        var i, repo;
        $.each(data.moduleArr, function (i, story) {
										 
		  if(i){						 
               $("#allRepos").append("<li style = 'min-height:80px;'>"
               +"<div style = 'background-image:url(" + story.thumb + ");' class = 'thumb'></div>"
			   +"<div id = 'listText'>"
		       +"<div class = 'listHeadline'>" + story.headline + "</div>"
               +"<div class = 'listSummary'>" + story.summary + "</div></div></li>");
		  }
        });
        $('#allRepos').listview('refresh');
    }); 
}

