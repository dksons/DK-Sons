export const adminTemplate = ({ name, email, message }) => `
  <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f6f9;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 20px auto;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #2c3e50;
          color: white;
          padding: 15px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        h2 {
          font-size: 24px;
          margin: 0;
        }
        .content {
          padding: 20px;
          color: #333;
          line-height: 1.6;
        }
        .content p {
          margin: 10px 0;
        }
        .footer {
          text-align: center;
          font-size: 14px;
          color: #7f8c8d;
          margin-top: 30px;
        }
        .footer a {
          color: #2980b9;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
        <div class="footer">
          <p>For any inquiries, you can reply to this email.</p>
        </div>
      </div>
    </body>
  </html>
`;
