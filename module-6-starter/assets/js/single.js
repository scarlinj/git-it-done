var getRepoIssues = function (repo) {
    var apiUrl = "https://api.github.com/repos/" +
        repo + "/issues?direction=asc";

    fetch(apiUrl).then(function (response) {
        // request was successful
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            });
        } else {
            console.log(response);
            alert("There was a problem with your request");
        }

    })

};

getRepoIssues("facebook/react");