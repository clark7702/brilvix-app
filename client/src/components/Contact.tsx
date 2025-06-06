import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: (response: any) => {
      // Check if email was sent successfully
      if (response && response.emailSent) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
      } else {
        // Email saved but not sent
        toast({
          title: "Message received",
          description: "Your message was saved but there was an issue sending an email notification. We'll still process your request.",
          variant: "default",
        });
        
        // If there's a specific email error, show it in a separate toast
        if (response && response.emailError) {
          setTimeout(() => {
            toast({
              title: "Email delivery status",
              description: `Note: ${response.emailError}`,
              variant: "default",
            });
          }, 1000);
        }
      }
      reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "There was an error submitting your message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    // Show toast for immediate feedback
    toast({
      title: "Sending message...",
      description: "Your message is being processed.",
    });
    
    // Send the data to the server
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Let's Work Together</h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Ready to transform your brand's digital presence? Get in touch with our team to discuss your project.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Our Location</h3>
                  <p className="text-gray-600">123 Creative Street, Toronto, ON M5V 2K6</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600">hello@brilvix.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600">(416) 555-0123</p>
                </div>
              </div>
            </div>

          </motion.div>
          
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-heading font-semibold text-2xl mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        {...register("name")} 
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        {...register("email")} 
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Subject line" 
                      {...register("subject")} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      placeholder="Your message" 
                      {...register("message")} 
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}