document.getElementById('uploadForm').addEventListener('submit', function(event) {
    //Fetch the element uploadForm using ID and add event listener
	event.preventDefault();
	//Prevent the default form submit function

    const groupFile = document.getElementById('groupFile').files[0];
	//Access the first file uploaded
   const hostelFile = document.getElementById('hostelFile').files[0];
   //Access the first file uploaded in the second file input

    if (groupFile && hostelFile) { //If both are uploaded then only should work
        const groupReader = new FileReader(); //Read file
        const hostelReader = new FileReader(); //Read file

        groupReader.onload = function(e) { //When it completes loading execute function
            const groupData = e.target.result; //Target the result and store it
            displayFileContent('Group Information', groupData); //Display the content
        };

        hostelReader.onload = function(e) { //Same as above
            const hostelData = e.target.result;
            displayFileContent('Hostel Information', hostelData);
        };

        groupReader.readAsText(groupFile);
        hostelReader.readAsText(hostelFile);
    }
});

function displayFileContent(title, data) {
    const outputTable = document.getElementById('outputTable'); //Fetch data and display
    outputTable.innerHTML += `
        <tr>
            <td colspan="4" class="border px-4 py-2 font-bold">${title}</td>
        </tr>
    `;
    const lines = data.trim().split('\n'); //Loop through the data
    lines.forEach(line => {
        const cells = line.split(',').map(cell => `<td class="border px-4 py-2">${cell.trim()}</td>`).join('');
        outputTable.innerHTML += `<tr>${cells}</tr>`;
    });

    document.getElementById('output').classList.remove('hidden');
}

document.getElementById('downloadBtn').addEventListener('click', function() { //Download functionality
    const table = document.getElementById('outputTable');
    let csvContent = '';
    for (let i = 0; i < table.rows.length; i++) {
        const row = [];
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            row.push(table.rows[i].cells[j].innerText);
        }
        csvContent += row.join(',') + '\n'; //Loop and join all the data using commas as it is CSV
    }

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'output.csv');
    a.click();
});
