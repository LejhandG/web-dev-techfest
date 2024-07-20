# Hospitality Process Digitalization

This project aims to digitalize the hospitality process for group accommodation by providing a web interface to upload CSV files containing group and hostel information, display the uploaded data, and download the displayed data as a CSV file.

## Features
- Upload CSV files for group and hostel information.
- Display the uploaded CSV file content in a table format.
- Download the displayed table content as a CSV file.

## Usage

### Prerequisites
Ensure you have the following:
- A web browser (e.g., Chrome, Firefox)

### Instructions
1. **Clone the Repository**
   ```sh
   git clone https://github.com/LejhandG/web-dev-techfest.git
   cd web-dev-techfest
   ```

2. **Open the HTML File**
   Open the `index.html` file in your preferred web browser.

3. **Upload CSV Files**
   - Click on the "Choose File" buttons to upload your group and hostel CSV files.
   - After selecting both files, click the "Upload" button.

4. **View Uploaded Data**
   - The uploaded CSV data will be displayed in a table format.

5. **Download CSV**
   - Click the "Download CSV" button to download the displayed data as a CSV file.

### Note
This project currently has only the working frontend for uploading, displaying, and downloading CSV files. The algorithm for room allocation based on the uploaded data is not implemented.

## File Structure

```plaintext
.
├── index.html
├── app.js
├── README.md
```

### index.html
Contains the HTML structure of the web application, including form inputs for file uploads, table for displaying data, and download button.

### app.js
Handles the logic for reading uploaded CSV files, displaying their content in a table, and downloading the table content as a CSV file.

## Logic Overview

1. **File Upload**
   - Users can upload two CSV files: one for group information and one for hostel information.
   - The uploaded files are read using the FileReader API.

2. **Display Content**
   - The content of the uploaded files is displayed in a table format on the web page.

3. **Download CSV**
   - The displayed table content can be downloaded as a CSV file.

## Future Improvements
- Implement the room allocation algorithm based on the uploaded group and hostel information.

## Contact
For any inquiries or feedback, please contact [dhruvbhanushali5621@gmail.com].
```

Feel free to modify the contact section and repository link with your actual information. This `README.md` provides an overview of the project, instructions on how to use it, and a note about the current limitation regarding the allocation algorithm.
