function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");

    // If the user has left a recommendation, add it to the list
    if (recommendation.value.trim() !== "") {
        console.log("New recommendation added");

        // Create a new 'recommendation' element
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

        // Add this element to the end of the list of recommendations
        var recommendationList = document.getElementById("all_recommendations");
        recommendationList.appendChild(element);

        showPopup(true);

        recommendation.value = "";
    } else {
        alert("Please enter a recommendation before submitting.");
    }
}

// Function to show or hide the popup
function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible';
    } else {
        document.getElementById('popup').style.visibility = 'hidden';
    }
}

// Event listener for the submit button
document.getElementById("recommend_btn").addEventListener("click", addRecommendation);
