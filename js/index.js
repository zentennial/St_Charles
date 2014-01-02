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
										 
		  if(i == itemNum){						 
               $("#storyRepos").append("<img src = '"+story.thumb+"' class = 'storyImg'></img>"
	
		       +"<div class = 'storyHeadline'>" + story.headline + "</div>"
               +"<div class = 'storyText'>" + story.story + "</div>");
			   
			   $("#storyPageHeader").text(story.headline);
			   
		  }
        });
        $('#storyRepos').listview('refresh');
    }); 
 
 
});




function changeItemNum(k){
	
	itemNum = k;
	
	
}



