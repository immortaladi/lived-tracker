document.getElementById('dob-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the date of birth from the input
    const dob = new Date(document.getElementById('dob').value);
    if (isNaN(dob)) {
        alert('Please enter a valid date!');
        return;
    }

    // Calculate the difference in days
    const today = new Date();
    const diffTime = Math.abs(today - dob);
    let daysLived = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Display the number of days lived
    document.getElementById('days-lived').innerText = daysLived;
    document.getElementById('output').style.display = 'block';

    // Add event listener to cut days
    document.getElementById('cut-days').addEventListener('click', function () {
        if (daysLived > 0) {
            daysLived--;
            document.getElementById('days-lived').innerText = daysLived;
        } else {
            alert('No more days to cut!');
        }
    });
});
