// Listen for the DOMContentLoaded event to ensure the document is fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to your form element
    const form = document.getElementById('FormId');

    // Add event listener for the form submit event
    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Create a new FormData object with the form data
        const formData = new FormData(form);

        // Convert FormData object to JavaScript object
        const formDataObject = {};
        for (const [key, value] of formData.entries()) {
            formDataObject[key] = value;
        }

        // Convert JavaScript object to JSON string
        const jsonData = JSON.stringify(formDataObject);

        // Make an AJAX call to the REST API
        fetch('http://localhost:8080/App/User', {
            method: 'POST', // Or 'PUT', 'GET', etc. depending on the API
            headers: {
                'Content-Type': 'application/json',
                // You may need additional headers based on your API requirements
            },
            body: jsonData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the response data here
            console.log(data);
        })
        .catch(error => {
            // Handle errors here
            console.error('There was a problem with the fetch operation:', error);
        });
    });
});
