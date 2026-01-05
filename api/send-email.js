const sgMail = require('@sendgrid/mail');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fullName, companyName, portfolioSize, workEmail } = req.body;

    // Validate required fields
    if (!fullName || !companyName || !portfolioSize || !workEmail) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Initialize SendGrid with API key from environment variable
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Prepare email content
    const msg = {
      to: 'stevenescape@gmail.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@depositcloud.com', // Use verified sender
      replyTo: workEmail,
      subject: `Demo Request from ${fullName} - ${companyName}`,
      text: `
New Demo Request

Name: ${fullName}
Company: ${companyName}
Portfolio Size: ${portfolioSize}
Email: ${workEmail}

This request was submitted through the DepositCloud website contact form.
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #51b0ff; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; }
    .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Demo Request</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${fullName}</span>
      </div>
      <div class="field">
        <span class="label">Company:</span>
        <span class="value">${companyName}</span>
      </div>
      <div class="field">
        <span class="label">Portfolio Size:</span>
        <span class="value">${portfolioSize}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value"><a href="mailto:${workEmail}">${workEmail}</a></span>
      </div>
    </div>
    <div class="footer">
      <p>This request was submitted through the DepositCloud website contact form.</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email
    await sgMail.send(msg);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('SendGrid Error:', error);
    
    if (error.response) {
      console.error('SendGrid Response Error:', error.response.body);
    }

    return res.status(500).json({ 
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
