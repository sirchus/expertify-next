import { NextRequest, NextResponse } from 'next/server';
import { sendAdminNotification, type TalentFormData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, data, submittedAt } = body;

    // Type the data properly
    const talentData = data as TalentFormData;

    // Validate required fields
    const requiredFields: (keyof TalentFormData)[] = [
      'Your-Name',
      'Job-Title',
      'Email-Address',
      'Business-Name',
      'Industry',
      'Annual-Revenue',
      'Business-Stage',
      'Fractional-Role',
      'Remote-Hybrid-Local',
      'Ideal-Start-Date',
      'Days-Per-Week',
      'Budget',
      'How-Did-You-Hear'
    ];

    const missingFields = requiredFields.filter(field => !talentData[field]?.trim());
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', fields: missingFields },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(talentData['Email-Address'])) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the request
    console.log('Talent Request Received:', {
      formType,
      submittedAt,
      client: {
        name: talentData['Your-Name'],
        title: talentData['Job-Title'],
        company: talentData['Business-Name'],
        email: talentData['Email-Address'],
        role: talentData['Fractional-Role'],
        budget: talentData['Budget']
      },
      data: talentData
    });

    // Send admin notification email
    try {
      const emailSent = await sendAdminNotification('talent', talentData);
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
    // - Send confirmation email to client
    // - Trigger matching algorithm
    // - Notify internal team via Slack

    return NextResponse.json({
      success: true,
      message: 'Request submitted successfully',
      requestId: `TAL-${Date.now()}` // Generate unique ID
    });

  } catch (error) {
    console.error('Talent form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}