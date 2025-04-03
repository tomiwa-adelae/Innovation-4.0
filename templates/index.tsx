import {
	conferenceDate,
	conferenceLocation,
	conferenceTime,
	email,
	websiteURL,
} from "@/constants";
import { formatDate } from "@/lib/utils";

export const generateUserEmail = (user: any) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
        .container { background: #ffffff; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; }
        h2 { color: #2d89ef; }
        p { font-size: 16px; color: #333; }
        .button { background-color: #2d89ef; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
    </style>
</head>
<body>

<div class="container">
    <h2>🎉 Congratulations, ${user?.name}!</h2>
    <p>You have successfully registered for <strong>Innovation 4.0</strong>!</p>
    
    <p><strong>Event Details:</strong></p>
    <p>📅 <strong>Date:</strong> ${conferenceDate}</p>
    <p>📍 <strong>Venue:</strong> ${conferenceLocation}</p>
    <p>⏳ <strong>Time:</strong> ${conferenceTime}</p>

    <p>🎤 Get ready for an exciting experience filled with inspiring talks, networking, and unlocking the power of YOU!</p>

    <p>💡 Stay updated by following us on social media and using the hashtag <strong>#Innovation4.0</strong>.</p>

    <p>If you have any questions, feel free to reach out to us at <a href="mailto:${email}">${email}</a>.</p>

    <p>We can't wait to see you there!</p>

    <a href="${websiteURL}" class="button">Visit Event Page</a>

    <p>Best regards,</p>
    <p><strong>The Innovation 4.0 Team</strong></p>
</div>

</body>
</html>`;

export const generateUserContactEmail = (contact: any) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
        .container { background: #ffffff; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; }
        h2 { color: #2d89ef; }
        p { font-size: 16px; color: #333; }
        .button { background-color: #2d89ef; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
    </style>
</head>
<body>

<div class="container">
    <h2>✅ Thank You, ${contact.name}!</h2>
    <p>We have received your message and will get back to you as soon as possible.</p>

    <p><strong>Your Message:</strong></p>
    <p>📩 <strong>Subject:</strong> ${contact.subject}</p>
    <p>💬 <strong>Message:</strong> ${contact.message}</p>

    <p>📅 <strong>Sent On:</strong> ${formatDate(contact.createdAt)}</p>

    <p>Our team will review your inquiry and respond shortly. If your message is urgent, feel free to reach out to us directly at <a href="mailto:${email}">${email}</a>.</p>

    <p>Meanwhile, stay updated with the latest conference news:</p>
    <a href="${websiteURL}" class="button">Visit Innovation 4.0</a>

    <p>Best regards,</p>
    <p><strong>The Innovation 4.0 Team</strong></p>
</div>

</body>
</html>`;

export const generateAdminEmail = (user: any) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
        .container { background: #ffffff; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; }
        h2 { color: #d9534f; }
        p { font-size: 16px; color: #333; }
        .button { background-color: #d9534f; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
    </style>
</head>
<body>

<div class="container">
    <h2>New Registration Alert!</h2>
    <p>A new user has successfully registered for <strong>Innovation 4.0</strong>.</p>
    
    <p><strong>User Details:</strong></p>
    <p>👤 <strong>Name:</strong> ${user?.name}</p>
    <p>📧 <strong>Email:</strong> ${user?.email}</p>
    <p>📞 <strong>Phone:</strong> ${user?.phoneNumber}</p>
   <p>
				🏢 <strong>Organization:</strong> ${user?.organization}
			</p>
   <p>
				🏢 <strong>Institution:</strong> ${user?.institution}
			</p>

    <p>📅 <strong>Registration Date:</strong> ${formatDate(user?.createdAt)}</p>

    <p>🔍 View more details in the admin panel:</p>
    <a href="${websiteURL}" class="button">Go to Admin Dashboard</a>

    <p>Best regards,</p>
    <p><strong>The Innovation 4.0 Team</strong></p>
</div>

</body>
</html>`;

export const generateAdminContactEmail = (contact: any) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
        .container { background: #ffffff; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; }
        h2 { color: #d9534f; }
        p { font-size: 16px; color: #333; }
        .button { background-color: #d9534f; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
    </style>
</head>
<body>

<div class="container">
    <h2>New Contact Form Submission</h2>
    <p>A new inquiry has been received via the Innovation 4.0 contact form.</p>

    <p><strong>User Details:</strong></p>
    <p>👤 <strong>Name:</strong> ${contact.name}</p>
    <p>📧 <strong>Email:</strong> ${contact.email}</p>
    <p>📞 <strong>Phone:</strong> ${contact.phoneNumber}</p>

    <p><strong>Message Details:</strong></p>
    <p>📩 <strong>Subject:</strong> ${contact.subject}</p>
    <p>💬 <strong>Message:</strong> ${contact.message}</p>

    <p>📅 <strong>Received On:</strong> ${formatDate(contact.createdAt)}</p>

    <p>🔍 View more details in the admin panel:</p>
    <a href="${websiteURL}" class="button">View in Admin Panel</a>

    <p>Best regards,</p>
    <p><strong>The Innovation 4.0 Team</strong></p>
</div>

</body>
</html>`;
