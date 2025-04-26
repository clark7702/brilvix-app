import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertMessageSchema.parse(req.body);
      
      // Save the message
      const message = await storage.createMessage(validatedData);
      
      // Return success response
      res.status(201).json({ 
        success: true, 
        message: "Message received successfully",
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
