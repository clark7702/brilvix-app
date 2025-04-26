# Deploying Brilvix Website using Coolify on a VPS

This guide will walk you through deploying the Brilvix website using Coolify, an open-source, self-hostable Heroku/Netlify alternative that makes deploying websites and applications much simpler.

## Prerequisites

- A VPS (Virtual Private Server) with at least 2GB RAM and 1 CPU core
- A domain name pointing to your VPS
- Basic knowledge of SSH and command line operations

## Step 1: Set Up Your VPS

1. Connect to your VPS via SSH:
```bash
ssh root@your-server-ip
```

2. Update your server packages:
```bash
apt update && apt upgrade -y
```

3. Install Docker if it's not already installed:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

## Step 2: Install Coolify

1. Run the Coolify installation script:
```bash
wget -q https://get.coolify.io -O install.sh
bash ./install.sh
```

2. Follow the installation prompts:
   - Choose a domain for Coolify (e.g., coolify.yourdomain.com)
   - Set an admin email
   - Create an admin password

3. Make sure you've set up DNS records to point your chosen Coolify domain to your server's IP.

4. Once installation is complete, access the Coolify dashboard at your configured domain (e.g., https://coolify.yourdomain.com).

## Step 3: Export Your Brilvix Codebase

1. Push your Brilvix code to a Git repository:
   - Create a new repository on GitHub, GitLab, or any Git provider
   - Push your code from Replit to the repository:
     ```bash
     # From your local machine after downloading from Replit
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/yourusername/brilvix.git
     git push -u origin main
     ```

## Step 4: Set Up Your Project in Coolify

1. Log in to your Coolify dashboard.

2. Navigate to "Sources" and click "Add new":
   - Select your Git provider (GitHub, GitLab, etc.)
   - Authenticate and authorize Coolify to access your repositories
   - Select the Brilvix repository

3. Click "Create new resource" and select "Application".

4. Choose "NodeJS" as your application type.

5. Configure your application:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `NODE_ENV=production tsx server/index.ts`
   - **Port**: `5000` (or whatever port your app listens on)
   - **Application Root Directory**: `/` (root of your repository)

6. Set up your environment variables by clicking on "Environment":
   - Add all your email configuration variables:
     ```
     EMAIL_HOST=your-email-host
     EMAIL_USER=your-email-username
     EMAIL_PASS=your-email-password
     EMAIL_PORT=587
     EMAIL_SECURE=false
     ```

7. Configure a custom domain:
   - Go to the "Domains" tab
   - Add your domain (e.g., brilvix.com)
   - Set up SSL with automatic Let's Encrypt

8. Click "Save" and then "Deploy".

## Step 5: Monitor Your Deployment

1. Coolify will now build and deploy your application. You can monitor the progress in the "Deployments" tab.

2. Check the build logs to ensure everything is running correctly.

3. Once the deployment is successful, your site will be accessible at your configured domain.

## Step 6: Set Up Continuous Deployment

1. By default, Coolify will automatically deploy your application when you push to the main branch of your repository.

2. You can customize deployment triggers in the "Settings" tab:
   - Choose specific branches for deployment
   - Enable or disable automatic deployments
   - Configure webhook-based deployments

## Maintaining Your Deployment

### Updating Your Application

1. Make changes to your codebase locally.

2. Push the changes to your Git repository.

3. Coolify will automatically detect the changes and deploy the updated version.

### Scaling Your Application

If you need to scale your application:

1. Go to your application in the Coolify dashboard.

2. Navigate to the "Settings" tab.

3. Adjust resources as needed:
   - CPU allocation
   - Memory limits
   - Container instances

### Monitoring and Logs

1. Access application logs from the "Logs" tab in your application dashboard.

2. View system metrics in the "Metrics" section.

3. Set up integrations with external monitoring tools if needed.

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check build logs for specific errors
   - Verify your build command is correct
   - Make sure all dependencies are listed in package.json

2. **Runtime Errors**:
   - View application logs for error messages
   - Check environment variables are set correctly

3. **Connection Issues**:
   - Verify DNS configuration points to your server
   - Check that the correct port is exposed
   - Ensure SSL certificates are valid

### Getting Help

- Visit the [Coolify documentation](https://coolify.io/docs) for detailed guides
- Join the [Coolify Discord community](https://coolify.io/discord) for support
- Open issues on the [Coolify GitHub repository](https://github.com/coollabsio/coolify) for bugs

## Conclusion

You now have a fully deployed Brilvix website running on your own VPS using Coolify. This setup provides you with:

- Complete control over your hosting environment
- Automatic deployments from your Git repository
- SSL certificate management
- Built-in monitoring and logging

Your Brilvix website is now accessible to visitors globally through your custom domain with robust hosting infrastructure.