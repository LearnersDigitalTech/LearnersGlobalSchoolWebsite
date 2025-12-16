# Updated Google Apps Script - With Better Error Handling

## Replace your entire Google Apps Script with this improved version:

```javascript
// Configuration
const SHEET_NAME = 'Form Responses';
const ADMIN_EMAIL = 'capturerphotography10@gmail.com'; // Your actual email
const SCHOOL_NAME = 'Learners Global School';

function doPost(e) {
  try {
    Logger.log('Received POST request');
    Logger.log('Request data: ' + e.postData.contents);
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    Logger.log('Parsed data: ' + JSON.stringify(data));
    
    // Get the active spreadsheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      Logger.log('Creating new sheet: ' + SHEET_NAME);
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Phone', 'Child\'s Name', 'Grade', 'Message', 'Source']);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // Prepare row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.childName || '',
      data.grade || '',
      data.message || '',
      data.source || 'Unknown'
    ];
    
    Logger.log('Appending row: ' + JSON.stringify(rowData));
    
    // Append data to sheet
    sheet.appendRow(rowData);
    
    Logger.log('Row appended successfully');
    
    // Send email notifications
    try {
      sendEmailNotification(data, timestamp);
      Logger.log('Admin email sent');
    } catch (emailError) {
      Logger.log('Error sending admin email: ' + emailError.toString());
    }
    
    try {
      sendAutoReply(data);
      Logger.log('Auto-reply sent');
    } catch (emailError) {
      Logger.log('Error sending auto-reply: ' + emailError.toString());
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully!',
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('ERROR: ' + error.toString());
    Logger.log('Stack trace: ' + error.stack);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Error: ' + error.toString(),
        stack: error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data, timestamp) {
  const subject = `New Contact Form Submission - ${SCHOOL_NAME}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
      </div>
      
      <div style="padding: 30px; background: #f8f9fa;">
        <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: white;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; width: 40%;">Full Name:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${data.fullName}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${data.email}</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${data.phone}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Child's Name:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${data.childName || 'Not provided'}</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Grade Interested:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${data.grade}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Source:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${data.source || 'Contact Form'}</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Submitted:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'MMM dd, yyyy hh:mm a')}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 20px; background: white; border-left: 4px solid #3B82F6;">
          <h3 style="margin-top: 0; color: #1e293b;">Message:</h3>
          <p style="color: #64748b; line-height: 1.6; margin: 0;">${data.message || 'No message provided'}</p>
        </div>
      </div>
      
      <div style="padding: 20px; background: #1e293b; text-align: center; color: white;">
        <p style="margin: 0; font-size: 14px;">© 2025 ${SCHOOL_NAME}. All rights reserved.</p>
      </div>
    </div>
  `;
  
  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: subject,
    htmlBody: htmlBody
  });
}

function sendAutoReply(data) {
  const subject = `Thank you for contacting ${SCHOOL_NAME}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0;">${SCHOOL_NAME}</h1>
        <p style="color: white; margin: 10px 0 0 0;">Where Every Learner is a Leader!</p>
      </div>
      
      <div style="padding: 30px; background: #f8f9fa;">
        <h2 style="color: #1e293b;">Dear ${data.fullName},</h2>
        
        <p style="color: #64748b; line-height: 1.6;">
          Thank you for your interest in ${SCHOOL_NAME}. We have received your enquiry and our admissions team will get back to you within 24 hours.
        </p>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Your Submission Details:</h3>
          <ul style="color: #64748b; line-height: 1.8;">
            <li><strong>Grade Interested:</strong> ${data.grade}</li>
            ${data.childName ? `<li><strong>Child's Name:</strong> ${data.childName}</li>` : ''}
            <li><strong>Phone:</strong> ${data.phone}</li>
          </ul>
        </div>
        
        <p style="color: #64748b; line-height: 1.6;">
          In the meantime, feel free to explore our website to learn more about our programs, facilities, and the vibrant learning community at ${SCHOOL_NAME}.
        </p>
        
        <div style="margin: 30px 0; text-align: center;">
          <a href="https://learnersglobalschool.com" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #3B82F6, #2563EB); color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">Visit Our Website</a>
        </div>
        
        <div style="background: #e0e7ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3B82F6;">
          <h4 style="margin-top: 0; color: #1e40af;">Contact Information</h4>
          <p style="margin: 5px 0; color: #1e40af;"><strong>Phone:</strong> +91 9916933202</p>
          <p style="margin: 5px 0; color: #1e40af;"><strong>Email:</strong> admissions@learnersglobalschool.com</p>
          <p style="margin: 5px 0; color: #1e40af;"><strong>Address:</strong> CA Site #1, Hanchya Main Rd, Sathgalli, Mysuru, Karnataka 570029</p>
        </div>
      </div>
      
      <div style="padding: 20px; background: #1e293b; text-align: center; color: white;">
        <p style="margin: 0; font-size: 14px;">© 2025 ${SCHOOL_NAME}. All rights reserved.</p>
      </div>
    </div>
  `;
  
  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    htmlBody: htmlBody
  });
}

// Test function to verify everything works
function testSubmission() {
  const testData = {
    fullName: 'Test User',
    email: 'test@example.com',
    phone: '+91 9916933202',
    childName: 'Test Child',
    grade: 'Class 1-5',
    message: 'This is a test submission',
    source: 'Manual Test'
  };
  
  // Simulate the POST request
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log('Test result: ' + result.getContent());
  
  // Check the logs
  Logger.log('Check your Google Sheet and email!');
}
```

## How to Update:

1. **Open your Google Apps Script**
2. **Select all code** (Ctrl+A)
3. **Delete it**
4. **Paste the new code** above
5. **Click Save** (💾)
6. **Run the test function:**
   - Select `testSubmission` from the dropdown
   - Click **Run** (▶️)
   - Check your sheet for a new test row
   - Check your email

## Check Execution Logs:

1. Click **Executions** (clock icon) in the left sidebar
2. Look for recent executions
3. Click on any to see detailed logs
4. Look for errors or "Row appended successfully"

## Common Issues Fixed:

✅ Better error handling and logging
✅ Creates sheet if it doesn't exist
✅ Formats headers automatically
✅ Handles missing data gracefully
✅ Returns detailed error messages
✅ Logs every step for debugging

After updating, try submitting the form again and check the execution logs!
