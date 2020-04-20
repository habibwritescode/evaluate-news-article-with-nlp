const error = document.getElementById('error');
const polarity = document.getElementById('polarity');
const polConfidence = document.getElementById('pol-confidence');
const subjectivity = document.getElementById('subjectivity');
const subConfidence = document.getElementById('sub-confidence');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formUrl = document.getElementById('url').value;

    console.log("::: Form Submitted :::")

    if (Client.validateUrl(formUrl)) {
        // Hide error message
        error.style.visibility = 'hidden';

        // Clear previous form results
        polarity.innerHTML = "";
        polConfidence.innerHTML = "";
        subjectivity.innerHTML = "";
        subConfidence.innerHTML = "";

        // Call postData passing in the entered url
        postData(formUrl)
            .then(function(data) {
                // Update Webpage with results
                updateUI(data);
            })
    }
}
// Async POST
const postData = async(url = '') => {

    const response = await fetch('http://localhost:3030/article', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
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
    polarity.innerHTML = `Polarity: ${data.polarity}`;
    polConfidence.innerHTML = `Polarity Confidence: ${data.polarity_confidence}`;
    subjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
    subConfidence.innerHTML = `Subjectivity Confidence: ${data.subjectivity_confidence}`;
}

export { handleSubmit }