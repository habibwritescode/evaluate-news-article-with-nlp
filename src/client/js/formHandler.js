function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formUrl = document.getElementById('url').value;
    // Client.checkForName(formUrl)

    console.log("::: Form Submitted :::")

    // Call postdata passing in the input url
    postData(formUrl)
        .then(function(data) {
            // Call uiUpdate once data has been sent back from server
            updateUI(data);
        })
}

// Async POST
const postData = async(url = '') => {

    const response = await fetch('http://localhost:8080/article', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "url": url }), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        console.log(newData)
        return newData
    } catch (error) {
        console.log("error", error);
    }
}


function updateUI(data) {
    console.log(data)
    document.getElementById('polarity').innerHTML = `Polarity: ${data.polarity}`;
    document.getElementById('pol-confidence').innerHTML = `Polarity Confidence: ${data.polarity_confidence}`;
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
    document.getElementById('sub-confidence').innerHTML = `Subjectivity Confidence: ${data.subjectivity_confidence}`;
}

export { handleSubmit, postData, updateUI }