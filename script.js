function saveData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Create a Blob containing the data
    const blob = new Blob([data], { type: "text/plain" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a download link
    const a = document.createElement("a");
    a.href = url;
    a.download = "formData.txt";
    a.textContent = "Download Data";

    // Append the link to the page
    document.body.appendChild(a);
}
