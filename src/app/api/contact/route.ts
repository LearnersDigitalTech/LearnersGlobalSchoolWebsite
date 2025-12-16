import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Get the Google Apps Script URL from environment variable
        const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

        if (!scriptUrl) {
            return NextResponse.json(
                { success: false, message: 'Google Script URL not configured' },
                { status: 500 }
            );
        }

        // Forward the request to Google Apps Script
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            redirect: 'follow'
        });

        // Google Apps Script returns text, not JSON
        const text = await response.text();

        // Try to parse as JSON, if it fails, return the text
        let result;
        try {
            result = JSON.parse(text);
        } catch {
            result = { success: true, message: 'Form submitted successfully' };
        }

        return NextResponse.json(result);

    } catch (error) {
        console.error('Error submitting form:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to submit form' },
            { status: 500 }
        );
    }
}
