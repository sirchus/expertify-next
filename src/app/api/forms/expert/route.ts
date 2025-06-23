import { NextRequest, NextResponse } from 'next/server';
import { sendAdminNotification, type ExpertFormData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, data, submittedAt } = body;

    // Type the data properly
    const expertData = data as ExpertFormData;

    // Validate required fields
    const requiredFields: (keyof ExpertFormData)[] = [
      'First-Name',
      'Last-Name', 
      'Email-Address',
      'LinkedIn',
      'Experience',
      'Function',
      'Seniority',
      'Availability',
      'Rate',
      'Referral'
    ];

    const missingFields = requiredFields.filter(field => !expertData[field]?.trim());
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', fields: missingFields },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(expertData['Email-Address'])) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the application
    console.log('Expert Application Received:', {
      formType,
      submittedAt,
      applicant: {
        name: `${expertData['First-Name']} ${expertData['Last-Name']}`,
        email: expertData['Email-Address'],
        function: expertData['Function'],
        seniority: expertData['Seniority'],
        rate: expertData['Rate']
      },
      data: expertData
    });

    // Send admin notification email
    try {
      const emailSent = await sendAdminNotification('expert', expertData);
      if (emailSent) {
        console.log('Admin notification email sent successfully');
      } else {
        console.error('Failed to send admin notification email');
      }
    } catch (emailError) {
      console.error('Email notification error:', emailError);
      // Don't fail the request if email fails
    }

    // Simulate API processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Here you would typically also:
    // - Save to database
    // - Send confirmation email to applicant
    // - Add to ATS/CRM
    // - Trigger Slack notification

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: `EXP-${Date.now()}` // Generate unique ID
    });

  } catch (error) {
    console.error('Expert form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}