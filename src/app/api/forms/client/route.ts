// src/app/api/forms/client/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, data, submittedAt } = body;

    // Validate required fields
    const requiredFields = [
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
    // 4. Integrate with CRM
    // 5. Trigger matching algorithm

    // For now, we'll just log the data
    console.log('Talent Request Received:', {
      formType,
      submittedAt,
      client: {
        name: data['Your-Name'],
        title: data['Job-Title'],
        company: data['Business-Name'],
        email: data['Email-Address'],
        role: data['Fractional-Role'],
        budget: data['Budget']
      },
      data
    });

    // Simulate API processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Example: Send to webhook, database, or email service
    // await saveToDatabase('talent_requests', data);
    // await sendToSlack('New talent request received', data);
    // await triggerMatching(data);

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