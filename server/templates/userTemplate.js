export const userTemplate = ({ name, message }) => `
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
          background-color: #3498db;
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
          <h2>Thank You for Reaching Out!</h2>
        </div>
        <div class="content">
          <p>Hi ${name},</p>
          <p>Thank you for getting in touch with us. We’ve received your message:</p>
          <blockquote style="font-style: italic; color: #2c3e50; border-left: 4px solid #3498db; padding-left: 10px;">${message}</blockquote>
          <p>We’ll get back to you as soon as possible. In the meantime, feel free to explore more of our services!</p>
        </div>
        <div class="footer">
          <p>Best regards,<br> DK Sons</p>
        </div>
      </div>
    </body>
  </html>
`;
