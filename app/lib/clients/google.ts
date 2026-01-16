"use server"

import { BetaAnalyticsDataClient } from "@google-analytics/data";

export async function analyticsClient() {
    const clientCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (
        !clientCredentials || 
        clientCredentials === undefined || 
        !clientEmail || 
        clientEmail === undefined || 
        !privateKey || 
        privateKey === undefined
    ) {
        throw new Error("google application credentials missing");
    }

    const client = new BetaAnalyticsDataClient({
        credentials: {
            client_email: clientEmail,
            private_key: privateKey
        }
    });
    
    return client;
}