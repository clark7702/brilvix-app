import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { sendEmail, initEmailTransporter } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Initialize email transporter if credentials are available
  if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    initEmailTransporter({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertMessageSchema.parse(req.body);
      
      // Save the message
      const message = await storage.createMessage(validatedData);
      
      // Send email if transporter is initialized
      let emailSent = false;
      let emailError = null;
      
      if (process.env.EMAIL_HOST && process.env.EMAIL_USER) {
        const emailContent = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject || 'No subject'}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `;
        
        try {
          emailSent = await sendEmail({
            to: 'contact@brilix.com',
            subject: `Contact Form: ${validatedData.subject || 'New message'}`,
            text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nSubject: ${validatedData.subject || 'No subject'}\nMessage: ${validatedData.message}`,
            html: emailContent
          });
          
          if (!emailSent) {
            console.warn('Failed to send email notification');
            emailError = "Email delivery service couldn't process the request";
          }
        } catch (err) {
          console.error('Error sending email:', err);
          emailError = err instanceof Error ? err.message : "Unknown email error";
        }
      } else {
        emailError = "Email service not configured";
      }
      
      // Return success response with email status
      res.status(201).json({ 
        success: true, 
        message: "Message received successfully",
        emailSent: emailSent,
        emailError: emailError,
        data: message
      });
    } catch (error) {
      console.error("Error handling contact form submission:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Invalid input data" 
      });
    }
  });

  app.get("/api/messages", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getMessages();
      res.status(200).json({ 
        success: true, 
        data: messages 
      });
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
