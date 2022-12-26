var project_list = [
    {
        title: "Running Tracker",
        url: "https://cscsonka.github.io/running-tracker",
        description: "A static website that can connect to your bluetooth chest strap, process your phone's location and accelerometer data. It displays heart rate, distance and step count on your phone during your running session."
    },
    {
        title: "GAS MS Excel Parser",
        url: "https://cscsonka.github.io/parsing-ms-excel-file-with-google-apps-script",
        description: "Google Apps Script method that can process MS Excel files and return values in JSON format. It processes the xml structure of an Excel file and gets the necessery data without converting it into Google Spreadsheet."
    },
    {
        title: "Comment Generator",
        url: "https://cscsonka.github.io/comment-generator",
        description: "This tool creates a multiline javascript comment from a character of your choice. You can set the desired size, spacing, and ink character that outlines the comment, and helps to structure your code with attention-grabbing words."
    }
];

document.getElementById("list-cont").innerHTML = project_list.map(project => `
<div class="proj-cont">
    <a class="proj-title" target="_blank" href="${project.url}">${project.title}</a>
    <div class="proj-desc">${project.description}</div>
</div>
`).join("");

document.getElementById("app").style.opacity = 1;


