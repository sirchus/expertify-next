import { Resend } from 'resend';

// Type definitions for form data
export interface ExpertFormData {
  'First-Name': string;
  'Last-Name': string;
  'Email-Address': string;
  'LinkedIn': string;
  'Website'?: string;
  'Experience': string;
  'Function': string;
  'Seniority': string;
  'Availability': string;
  'Rate': string;
  'Referral': string;
  'Notes-talent'?: string;
}

export interface TalentFormData {
  'Your-Name': string;
  'Job-Title': string;
  'Email-Address': string;
  'Business-Name': string;
  'Industry': string;
  'Annual-Revenue': string;
  'Business-Stage': string;
  'Fractional-Role': string;
  'Remote-Hybrid-Local': string;
  'Ideal-Start-Date': string;
  'Days-Per-Week': string;
  'Budget': string;
  'How-Did-You-Hear': string;
  'Specific-Skills'?: string;
}

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}

// Email service class for Resend
export class ResendEmailService {
  async sendEmail(options: EmailOptions): Promise<boolean> {
    try {
      const data = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'Expertify <noreply@getexpertify.com>',
        to: Array.isArray(options.to) ? options.to : [options.to],
        subject: options.subject,
        html: options.html,
        text: options.text,
      });

      console.log('Email sent successfully:', data);
      return true;
    } catch (error) {
      console.error('Resend email error:', error);
      return false;
    }
  }
}

// Initialize email service
export const emailService = new ResendEmailService();

// Expert application email template
export const generateExpertApplicationEmail = (data: ExpertFormData): string => {
  const fullName = `${data['First-Name']} ${data['Last-Name']}`;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Expert Application - ${fullName}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            background-color: #f8fafc;
            padding: 20px;
        }
        .email-container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .content {
            padding: 30px;
        }
        .section {
            margin-bottom: 30px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        .section h2 {
            margin: 0 0 15px 0;
            color: #1f2937;
            font-size: 18px;
            font-weight: 600;
        }
        .field-group {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 15px;
        }
        .field {
            flex: 1;
            min-width: 200px;
        }
        .field label {
            display: block;
            font-weight: 600;
            color: #374151;
            margin-bottom: 5px;
            font-size: 14px;
        }
        .field .value {
            display: block;
            color: #1f2937;
            font-size: 16px;
            background: white;
            padding: 8px 12px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
        }
        .highlight {
            background: #fef3c7;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #f59e0b;
            margin: 20px 0;
        }
        .highlight strong {
            color: #92400e;
        }
        .actions {
            background: #f0f9ff;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-top: 30px;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            background: #3b82f6;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 0 10px;
        }
        .btn-secondary {
            background: #6b7280;
        }
        .footer {
            background: #f9fafb;
            padding: 20px;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
        }
        .experience-text {
            background: white;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
            white-space: pre-wrap;
            font-size: 15px;
            line-height: 1.5;
        }
        @media (max-width: 600px) {
            body { padding: 10px; }
            .content { padding: 20px; }
            .field-group { flex-direction: column; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>🎯 New Expert Application</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Expert Network Application Received</p>
        </div>
        
        <div class="content">
            <div class="highlight">
                <strong>Application Summary:</strong> ${fullName} applied for the ${data['Function']} function at ${data['Seniority']} level with availability of ${data['Availability']} and rate of ${data['Rate']}.
            </div>

            <div class="section">
                <h2>👤 Personal Information</h2>
                <div class="field-group">
                    <div class="field">
                        <label>Full Name</label>
                        <div class="value">${fullName}</div>
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <div class="value">${data['Email-Address']}</div>
                    </div>
                </div>
                <div class="field-group">
                    <div class="field">
                        <label>LinkedIn Profile</label>
                        <div class="value">${data['LinkedIn']}</div>
                    </div>
                    ${data['Website'] ? `
                    <div class="field">
                        <label>Website</label>
                        <div class="value">${data['Website']}</div>
                    </div>
                    ` : ''}
                </div>
            </div>

            <div class="section">
                <h2>💼 Professional Background</h2>
                <div class="field-group">
                    <div class="field">
                        <label>Function</label>
                        <div class="value">${data['Function']}</div>
                    </div>
                    <div class="field">
                        <label>Seniority Level</label>
                        <div class="value">${data['Seniority']}</div>
                    </div>
                </div>
                <div class="field">
                    <label>Experience & Background</label>
                    <div class="experience-text">${data['Experience']}</div>
                </div>
            </div>

            <div class="section">
                <h2>📅 Availability & Compensation</h2>
                <div class="field-group">
                    <div class="field">
                        <label>Availability</label>
                        <div class="value">${data['Availability']}</div>
                    </div>
                    <div class="field">
                        <label>Daily Rate</label>
                        <div class="value">${data['Rate']}</div>
                    </div>
                </div>
                <div class="field-group">
                    <div class="field">
                        <label>How they heard about us</label>
                        <div class="value">${data['Referral']}</div>
                    </div>
                </div>
                ${data['Notes-talent'] ? `
                <div class="field">
                    <label>Additional Notes</label>
                    <div class="experience-text">${data['Notes-talent']}</div>
                </div>
                ` : ''}
            </div>

            <div class="actions">
                <h3 style="margin: 0 0 15px 0; color: #1f2937;">Next Steps</h3>
                <a href="mailto:${data['Email-Address']}" class="btn">📧 Contact Expert</a>
                <a href="${data['LinkedIn']}" class="btn btn-secondary" target="_blank">👔 View LinkedIn</a>
            </div>
        </div>

        <div class="footer">
            <p>This application was submitted on ${new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}</p>
            <p>Expertify Admin Panel • <a href="mailto:hello@getexpertify.com">hello@getexpertify.com</a></p>
        </div>
    </div>
</body>
</html>
  `;
};

// Talent request email template
export const generateTalentRequestEmail = (data: TalentFormData): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Talent Request - ${data['Business-Name']}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            background-color: #f8fafc;
            padding: 20px;
        }
        .email-container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #8b5cf6, #ec4899);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .content {
            padding: 30px;
        }
        .section {
            margin-bottom: 30px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #8b5cf6;
        }
        .section h2 {
            margin: 0 0 15px 0;
            color: #1f2937;
            font-size: 18px;
            font-weight: 600;
        }
        .field-group {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 15px;
        }
        .field {
            flex: 1;
            min-width: 200px;
        }
        .field label {
            display: block;
            font-weight: 600;
            color: #374151;
            margin-bottom: 5px;
            font-size: 14px;
        }
        .field .value {
            display: block;
            color: #1f2937;
            font-size: 16px;
            background: white;
            padding: 8px 12px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
        }
        .highlight {
            background: #f0fdf4;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #10b981;
            margin: 20px 0;
        }
        .highlight strong {
            color: #059669;
        }
        .urgent {
            background: #fef2f2;
            border-left-color: #ef4444;
        }
        .urgent strong {
            color: #dc2626;
        }
        .actions {
            background: #f0f9ff;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-top: 30px;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            background: #8b5cf6;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 0 10px;
        }
        .btn-secondary {
            background: #6b7280;
        }
        .footer {
            background: #f9fafb;
            padding: 20px;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
        }
        .requirements-text {
            background: white;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
            white-space: pre-wrap;
            font-size: 15px;
            line-height: 1.5;
        }
        .priority-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .priority-high {
            background: #fef2f2;
            color: #dc2626;
        }
        .priority-medium {
            background: #fef3c7;
            color: #d97706;
        }
        .priority-low {
            background: #f0fdf4;
            color: #059669;
        }
        @media (max-width: 600px) {
            body { padding: 10px; }
            .content { padding: 20px; }
            .field-group { flex-direction: column; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>🎯 New Talent Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Client Looking for ${data['Fractional-Role']} Expert</p>
        </div>
        
        <div class="content">
            <div class="highlight ${data['Ideal-Start-Date'] === 'ASAP' ? 'urgent' : ''}">
                <strong>Request Summary:</strong> ${data['Business-Name']} (${data['Industry']}) is looking for a ${data['Fractional-Role']} expert. Budget: ${data['Budget']}, Start: ${data['Ideal-Start-Date']}, Commitment: ${data['Days-Per-Week']}.
                ${data['Ideal-Start-Date'] === 'ASAP' ? '<br><strong>⚡ URGENT REQUEST - ASAP Start Required</strong>' : ''}
            </div>

            <div style="text-align: center; margin: 20px 0;">
                <span class="priority-badge ${
                  data['Ideal-Start-Date'] === 'ASAP' ? 'priority-high' : 
                  data['Ideal-Start-Date'] === '< 1 month' ? 'priority-medium' : 'priority-low'
                }">
                    ${data['Ideal-Start-Date'] === 'ASAP' ? 'HIGH PRIORITY' : 
                      data['Ideal-Start-Date'] === '< 1 month' ? 'MEDIUM PRIORITY' : 'STANDARD PRIORITY'}
                </span>
            </div>

            <div class="section">
                <h2>👤 Contact Information</h2>
                <div class="field-group">
                    <div class="field">
                        <label>Contact Name</label>
                        <div class="value">${data['Your-Name']}</div>
                    </div>
                    <div class="field">
                        <label>Job Title</label>
                        <div class="value">${data['Job-Title']}</div>
                    </div>
                </div>
                <div class="field">
                    <label>Email Address</label>
                    <div class="value">${data['Email-Address']}</div>
                </div>
            </div>

            <div class="section">
                <h2>🏢 Company Information</h2>
                <div class="field-group">
                    <div class="field">
                        <label>Business Name</label>
                        <div class="value">${data['Business-Name']}</div>
                    </div>
                    <div class="field">
                        <label>Industry</label>
                        <div class="value">${data['Industry']}</div>
                    </div>
                </div>
                <div class="field-group">
                    <div class="field">
                        <label>Annual Revenue</label>
                        <div class="value">${data['Annual-Revenue']}</div>
                    </div>
                    <div class="field">
                        <label>Business Stage</label>
                        <div class="value">${data['Business-Stage']}</div>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>💼 Role Requirements</h2>
                <div class="field-group">
                    <div class="field">
                        <label>Fractional Role</label>
                        <div class="value">${data['Fractional-Role']}</div>
                    </div>
                    <div class="field">
                        <label>Work Arrangement</label>
                        <div class="value">${data['Remote-Hybrid-Local']}</div>
                    </div>
                </div>
                ${data['Specific-Skills'] ? `
                <div class="field">
                    <label>Specific Skills Required</label>
                    <div class="requirements-text">${data['Specific-Skills']}</div>
                </div>
                ` : ''}
            </div>

            <div class="section">
                <h2>📅 Engagement Details</h2>
                <div class="field-group">
                    <div class="field">
                        <label>Start Date</label>
                        <div class="value">${data['Ideal-Start-Date']}</div>
                    </div>
                    <div class="field">
                        <label>Time Commitment</label>
                        <div class="value">${data['Days-Per-Week']}</div>
                    </div>
                </div>
                <div class="field-group">
                    <div class="field">
                        <label>Budget Range</label>
                        <div class="value">${data['Budget']}</div>
                    </div>
                    <div class="field">
                        <label>How they heard about us</label>
                        <div class="value">${data['How-Did-You-Hear']}</div>
                    </div>
                </div>
            </div>

            <div class="actions">
                <h3 style="margin: 0 0 15px 0; color: #1f2937;">Action Required</h3>
                <p style="margin: 0 0 15px 0; color: #6b7280;">Review this request and identify potential matches from the expert network.</p>
                <a href="mailto:${data['Email-Address']}" class="btn">📧 Contact Client</a>
                <a href="#" class="btn btn-secondary">🔍 Search Experts</a>
            </div>
        </div>

        <div class="footer">
            <p>This request was submitted on ${new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}</p>
            <p>Expertify Admin Panel • <a href="mailto:hello@getexpertify.com">hello@getexpertify.com</a></p>
        </div>
    </div>
</body>
</html>
  `;
};

// Utility function to send admin notification using Resend (FIXED - No more 'any' types)
export const sendAdminNotification = async (
  formType: 'expert' | 'talent', 
  data: ExpertFormData | TalentFormData
): Promise<boolean> => {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@getexpertify.com';
  
  let subject: string;
  let html: string;
  
  if (formType === 'expert') {
    const expertData = data as ExpertFormData;
    subject = `🎯 New Expert Application - ${expertData['First-Name']} ${expertData['Last-Name']} (${expertData['Function']})`;
    html = generateExpertApplicationEmail(expertData);
  } else {
    const talentData = data as TalentFormData;
    subject = `💼 New Talent Request - ${talentData['Business-Name']} (${talentData['Fractional-Role']})`;
    html = generateTalentRequestEmail(talentData);
  }
  
  return await emailService.sendEmail({
    to: adminEmail,
    subject,
    html,
  });
};