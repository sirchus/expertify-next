// src/app/api/forms/expert/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, data, submittedAt } = body;

    // Validate required fields
    const requiredFields = [
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

    const missingFields = requiredFields.filter(field => !data[field]?.trim());
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', fields: missingFields },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data['Email-Address'])) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify internal team
    // 4. Integrate with CRM/ATS

    // For now, we'll just log the data
    console.log('Expert Application Received:', {
      formType,
      submittedAt,
      applicant: {
        name: `${data['First-Name']} ${data['Last-Name']}`,
        email: data['Email-Address'],
        function: data['Function'],
        seniority: data['Seniority'],
        rate: data['Rate']
      },
      data
    });

    // Simulate API processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Example: Send to webhook, database, or email service
    // await saveToDatabase('expert_applications', data);
    // await sendToSlack('New expert application received', data);
    // await addToAirtable('Expert Pipeline', data);

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