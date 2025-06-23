// Create this file at: app/api/subscribe/route.js

export async function POST(request) {
  const { email } = await request.json();
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 });
  }

  try {
    // Option 1: Store in database (replace with your database logic)
    // await saveEmailToDatabase(email);

    // Option 2: Send to email service (replace with your email service)
    // await addToMailingList(email);

    // Option 3: Simple logging (for testing)
    console.log('New email subscription:', email);

    // You can integrate with services like:
    // - Mailchimp
    // - ConvertKit
    // - SendGrid
    // - Resend
    // - Or your own database

    return Response.json({ 
      message: 'Email subscribed successfully',
      email: email 
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}