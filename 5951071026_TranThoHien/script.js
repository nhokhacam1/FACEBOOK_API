axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBADM4TuStJeGPs29JG87oWVC4ZBZCWvJD0rpeJoj0me2wX5qersg2Lrpb1uSiuuZBdHtRjgcWQKOc8eJour8ZCDaqkBU6rVrXfhKUZCvZCqZB6e3vmEn8Tla6B0M6ZBsw78rSaGuOxaskQ1IdeLgLC6qpkk9WZBVRFqwZDZD')
    .then(response => {
        var output = "";
        output += response.data.data[0].message + "<br><br>" + response.data.data[1].message + "<br><br>" + response.data.data[2].message;
        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error(error))