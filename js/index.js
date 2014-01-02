$('#reposHome').bind('pageinit', function(event) {
	loadRepos();
});


var itemNum = 0;

function loadRepos() {
    $.ajax("http://jhmc-r7zk.accessdomain.com/lindsay/stcharles_build.json").done(function(data) {
        var i, repo;
        $.each(data.moduleArr, function (i, story) {
										 
		  if(story.headline){						 
               $("#allRepos").append("<li style = 'min-height:80px;'><a href='page0.html' data-transition='slide' onclick = 'changeItemNum("+i+");'>"
               +"<div style = 'background-image:url(" + story.thumb + ");' class = 'thumb'></div>"
			   +"<div id = 'listText'>"
		       +"<div class = 'listHeadline'>" + story.headline + "</div>"
               +"<div class = 'listSummary'>" + story.summary + "</div></div></a></li>");
		  }
        });
        $('#allRepos').listview('refresh');
    }); 
}




$(document).delegate('#reposArticle', 'pagebeforeshow', function () {
 
 
   $.ajax("http://jhmc-r7zk.accessdomain.com/lindsay/stcharles_build.json").done(function(data) {
        var i, repo;
        $.each(data.moduleArr, function (i, story) {
										 
		  if(i == 0){						 
               $("#storyRepos").append("<li style = 'min-height:80px;'><a href='page"+i+".html?text="+ story.story +"' data-transition='slide' onclick='loadArticle();'>"
               +"<div style = 'background-image:url(" + story.thumb + ");' class = 'thumb'></div>"
			   +"<div id = 'listText'>"
		       +"<div class = 'listHeadline'>" + story.headline + "</div>"
               +"<div class = 'listSummary'>" + story.summary + "</div></div></a></li>");
		  }
        });
        $('#storyRepos').listview('refresh');
    }); 
 
 
});




function changeItemNum(k){
	
	itemNum = k;
	alert(itemNum);
	
}



