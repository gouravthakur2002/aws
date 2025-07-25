import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Terminal, FileText, ImageIcon, CheckCircle, ExternalLink, Code, Settings } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

const taskData = {
  1: {
    title: "EC2 Instance Creation",
    description: "Create an EC2 instance using Terraform with custom AMI and security configurations",
    status: "Completed",
    difficulty: "Beginner",
    color: "from-blue-500 to-blue-600",
    screenshots: [
      {
        src: "/screenshots/task1-init.png",
        title: "Terraform Init",
        description: "VS Code with Terraform configuration and initialization",
      },
      {
        src: "/screenshots/task1-plan.png",
        title: "Terraform Plan",
        description: "Detailed execution plan showing resources to be created",
      },
      {
        src: "/screenshots/task1-output.png",
        title: "AWS Console",
        description: "EC2 instances running in AWS console",
      },
    ],
    terraform_code: `provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "Sample_demo" {
  ami           = "ami-05ec1e5f7cfe5ef59"
  instance_type = "t2.micro"
  key_name      = "boo"

  tags = {
    Name = "Sample_demo"
  }

  user_data                   = file("user_data.sh")
  user_data_replace_on_change = true
}`,
    steps: [
      "Go to AWS EC2 console",
      "Ensure the AMI (ami-05ec1e5f7cfe5ef59) exists in the region",
      "Ensure Key Pair 'boo' exists in EC2 → Key Pairs section",
      "Create a file user_data.sh with shell script",
      "Run terraform init",
      "Run terraform plan",
      "Run terraform apply",
    ],
    observations: [
      "Successfully created EC2 instance with specified AMI",
      "Key pair authentication configured properly",
      "User data script executed on instance launch",
      "Tags applied correctly for resource identification",
    ],
    subtasks: [
      {
        title: "Terraform Plan Analysis",
        description: "Analyze Terraform plan output and understand resource dependencies",
        details:
          "The terraform plan command shows what resources will be created, modified, or destroyed before applying changes.",
      },
      {
        title: "Terraform Apply",
        description: "Apply Terraform configuration and provision AWS resources",
        details: "Execute the planned infrastructure changes and create actual AWS resources.",
      },
      {
        title: "Terraform Destroy",
        description: "Clean up and destroy all provisioned AWS resources",
        details: "Remove all created resources to avoid unnecessary costs and clean up the environment.",
      },
    ],
  },
  2: {
    title: "Secure Ubuntu EC2 Launch",
    description: "Launch a secure Ubuntu EC2 instance with SSH and HTTPS access using Terraform",
    status: "Completed",
    difficulty: "Intermediate",
    color: "from-green-500 to-green-600",
    screenshots: [
      {
        src: "/screenshots/task2-init.png",
        title: "Terraform Configuration",
        description: "VS Code showing Ubuntu EC2 Terraform setup",
      },
      {
        src: "/screenshots/task2-plan.png",
        title: "Terraform Plan",
        description: "Detailed plan output for secure Ubuntu instance",
      },
      {
        src: "/screenshots/task2-apply.png",
        title: "Terraform Apply",
        description: "Apply command execution and resource creation",
      },
    ],
    terraform_code: `provider "aws" {
  region     = "us-east-1"
  access_key = "YOUR_ACCESS_KEY"
  secret_key = "YOUR_SECRET_KEY"
}

data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
  owners = ["099720109477"] # Canonical's AWS Account ID
}

data "aws_vpc" "default" {
  default = true
}

resource "aws_security_group" "allow_tls" {
  name        = "allow_tls"
  description = "Allow TLS inbound traffic and all outbound traffic"
  vpc_id      = data.aws_vpc.default.id
  tags = {
    Name = "allow_tls"
  }
}

resource "aws_vpc_security_group_ingress_rule" "allow_tls_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 443
  to_port           = 443
  ip_protocol       = "tcp"
}

resource "aws_vpc_security_group_ingress_rule" "allow_ssh_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 22
  to_port           = 22
  ip_protocol       = "tcp"
}

variable "key_name" {
  description = "Name of the AWS key pair for SSH access"
  type        = string
  default     = "kp1"
}

resource "aws_instance" "ubuntu_server" {
  count                   = 1
  ami                     = data.aws_ami.ubuntu.id
  instance_type           = "t2.micro"
  key_name                = var.key_name
  vpc_security_group_ids  = [aws_security_group.allow_tls.id]
  associate_public_ip_address = true
  
  tags = {
    Name = "Secure_Ubuntu_Server"
  }
}`,
    steps: [
      "Configure AWS provider with proper credentials",
      "Fetch the latest Ubuntu 22.04 LTS AMI",
      "Get default VPC information",
      "Create security group with proper naming",
      "Add ingress rules for HTTPS (port 443)",
      "Add ingress rules for SSH (port 22)",
      "Define variable for SSH key name",
      "Launch EC2 instance with security group attached",
      "Verify instance is running and accessible",
    ],
    observations: [
      "Ubuntu 22.04 LTS AMI automatically selected",
      "Security group properly configured for web and SSH access",
      "Instance launched in default VPC with public IP",
      "SSH access secured with key pair authentication",
      "HTTPS ready for web application deployment",
      "All resources tagged for easy identification",
    ],
    subtasks: [
      {
        title: "Security Group Configuration",
        description: "Configure AWS security groups for secure access",
        details: "Set up inbound and outbound rules for SSH (port 22) and HTTPS (port 443) access.",
      },
      {
        title: "Ubuntu AMI Selection",
        description: "Automatically select the latest Ubuntu 22.04 LTS AMI",
        details: "Use data sources to fetch the most recent Ubuntu AMI for consistent deployments.",
      },
      {
        title: "SSH Key Management",
        description: "Implement secure SSH key-based authentication",
        details: "Configure EC2 instances to use SSH key pairs for secure remote access.",
      },
    ],
  },
  3: {
    title: "AWS Infrastructure Showcase",
    description: "Complete AWS infrastructure demonstration with multiple services and Vercel hosting",
    status: "Completed",
    difficulty: "Advanced",
    color: "from-purple-500 to-purple-600",
    screenshots: [
      {
        src: "/placeholder.svg?height=200&width=300",
        title: "Multi-Service Architecture",
        description: "Complete AWS infrastructure overview",
      },
      {
        src: "/placeholder.svg?height=200&width=300",
        title: "Service Integration",
        description: "Multiple AWS services working together",
      },
      {
        src: "/placeholder.svg?height=200&width=300",
        title: "Vercel Deployment",
        description: "Documentation hosted on Vercel",
      },
    ],
    terraform_code: `# Multi-Service AWS Infrastructure
provider "aws" {
  region = "us-east-1"
}

# EC2 Instance
resource "aws_instance" "linux2" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"
  key_name      = var.key_name
  tags = {
    Name = "EC2_Linux2"
  }
}

# Custom VPC
resource "aws_vpc" "custom" {
  cidr_block = "10.0.0.0/16"
  tags = { Name = "Custom_VPC" }
}

resource "aws_subnet" "public" {
  vpc_id            = aws_vpc.custom.id
  cidr_block        = "10.0.1.0/24"
  map_public_ip_on_launch = true
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.custom.id
}

# Lambda Function
resource "aws_lambda_function" "hello_world" {
  filename      = "lambda_function_payload.zip"
  function_name = "HelloWorld"
  role          = aws_iam_role.lambda_exec.arn
  handler       = "lambda_function.lambda_handler"
  runtime       = "python3.9"
}

resource "aws_iam_role" "lambda_exec" {
  name = "lambda_exec_role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Principal = { Service = "lambda.amazonaws.com" }
      Effect = "Allow"
    }]
  })
}

# S3 Bucket
resource "aws_s3_bucket" "secure_bucket" {
  bucket = "my-private-versioned-bucket"
}

resource "aws_s3_bucket_versioning" "versioning" {
  bucket = aws_s3_bucket.secure_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

# RDS MySQL Instance
resource "aws_db_instance" "mysql" {
  engine            = "mysql"
  instance_class    = "db.t2.micro"
  allocated_storage = 20
  username          = "admin"
  password          = "YourStrongPass123!"
  db_name           = "sampledb"
  skip_final_snapshot = true
}`,
    steps: [
      "Set up AWS provider configuration",
      "Create EC2 instance with Amazon Linux 2",
      "Build custom VPC with public subnet",
      "Configure Internet Gateway for public access",
      "Deploy Lambda function with Python runtime",
      "Set up IAM role for Lambda execution",
      "Create S3 bucket with versioning enabled",
      "Launch RDS MySQL instance",
      "Configure CloudWatch monitoring",
      "Enable CloudTrail for audit logging",
      "Take screenshots of all services",
      "Create showcase webpage on Vercel",
      "Deploy and test all components",
    ],
    observations: [
      "Successfully deployed 11 different AWS services",
      "All services integrated within custom VPC architecture",
      "Lambda function executing without errors",
      "S3 bucket properly configured with versioning",
      "RDS instance accessible and functional",
      "CloudWatch metrics collecting data properly",
      "CloudTrail logging all API activities",
      "Vercel deployment showcasing all screenshots",
      "Complete infrastructure documented and accessible",
      "All resources properly tagged and organized",
    ],
    subtasks: [
      {
        title: "Multi-Service Deployment",
        description: "Deploy and configure multiple AWS services",
        details:
          "Set up EC2, VPC, Lambda, S3, RDS, CloudWatch, CloudTrail, and other AWS services in a coordinated manner.",
      },
      {
        title: "Screenshot Documentation",
        description: "Document all deployed services with screenshots",
        details: "Capture visual proof of each service deployment and configuration for comprehensive documentation.",
      },
      {
        title: "Vercel Integration",
        description: "Host documentation website on Vercel platform",
        details:
          "Create and deploy a showcase website displaying all AWS infrastructure screenshots and documentation.",
      },
    ],
  },
  4: {
    title: "Static Website on S3",
    description: "Host ByteWave Solutions static website on AWS S3 with Terraform automation",
    status: "Completed",
    difficulty: "Beginner",
    color: "from-orange-500 to-orange-600",
    screenshots: [
      {
        src: "/placeholder.svg?height=200&width=300",
        title: "S3 Configuration",
        description: "S3 bucket setup for static website hosting",
      },
      {
        src: "/placeholder.svg?height=200&width=300",
        title: "Website Deployment",
        description: "ByteWave Solutions website live on S3",
      },
      {
        src: "/placeholder.svg?height=200&width=300",
        title: "Terraform Output",
        description: "Successful deployment confirmation",
      },
    ],
    terraform_code: `provider "aws" {
  region     = "us-east-1"
  access_key = "YOUR_ACCESS_KEY"
  secret_key = "YOUR_SECRET_KEY"
}

resource "aws_s3_bucket" "bytewave" {
  bucket = "bytewave-website-ad"
  force_destroy = true
  tags = {
    Name        = "ByteWave Website"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.bytewave.id
  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "block_public" {
  bucket                  = aws_s3_bucket.bytewave.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "allow_read_index" {
  bucket = aws_s3_bucket.bytewave.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "PublicReadGetObject",
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "\${aws_s3_bucket.bytewave.arn}/*"
      }
    ]
  })
}

output "website_endpoint" {
  description = "Static Website URL"
  value       = aws_s3_bucket_website_configuration.website.website_endpoint
}`,
    steps: [
      "Configure AWS provider with credentials",
      "Create S3 bucket with unique name",
      "Enable static website hosting configuration",
      "Configure public access block settings",
      "Create bucket policy for public read access",
      "Create index.html file for ByteWave Solutions",
      "Upload index.html to S3 bucket",
      "Test website accessibility via S3 endpoint",
      "Verify all resources created successfully",
    ],
    observations: [
      "S3 bucket created with static website hosting enabled",
      "Public access properly configured for website content",
      "ByteWave Solutions website accessible via S3 endpoint",
      "Terraform automation working correctly",
      "Website loads without errors",
      "All resources properly tagged and organized",
    ],
    subtasks: [
      {
        title: "S3 Bucket Configuration",
        description: "Set up S3 bucket for static website hosting",
        details:
          "Configure S3 bucket with proper settings for hosting static web content including public access policies.",
      },
      {
        title: "Static Website Hosting",
        description: "Enable and configure static website hosting features",
        details: "Set up index document configuration and enable S3 static website hosting functionality.",
      },
      {
        title: "Public Access Policy",
        description: "Configure public read access for website content",
        details:
          "Create and attach bucket policies to allow public read access to website files while maintaining security.",
      },
    ],
  },
}

export default function TaskPage({ params }: { params: { id: string } }) {
  const taskId = Number.parseInt(params.id)
  const task = taskData[taskId as keyof typeof taskData]

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Task not found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2 hover:bg-muted">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Tasks</span>
              </Button>
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="text-right text-sm text-muted-foreground">
                <div> Arjun Dixit | Roll No: 59 | Section: 06</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Task Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className={`bg-gradient-to-r ${task.color} p-4 rounded-xl shadow-lg`}>
              <Terminal className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {task.title}
              </h1>
              <p className="text-xl text-muted-foreground mt-2">{task.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
              <CheckCircle className="h-3 w-3 mr-1" />
              {task.status}
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-200 dark:text-blue-400 dark:border-blue-800">
              {task.difficulty}
            </Badge>
          </div>
        </div>

        {/* Subtasks Overview */}
        {task.subtasks && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Task Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {task.subtasks.map((subtask, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <div className="bg-orange-100 dark:bg-orange-900/20 p-2 rounded-lg">
                        <Settings className="h-4 w-4 text-orange-600" />
                      </div>
                      <span>{subtask.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{subtask.description}</p>
                    <p className="text-xs text-muted-foreground">{subtask.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Screenshots Column */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ImageIcon className="h-5 w-5" />
                  <span>Screenshots & Visuals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {task.screenshots?.map((screenshot, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="relative w-full h-48 mb-2">
                      <Image
                        src={screenshot.src || "/placeholder.svg"}
                        alt={screenshot.title}
                        fill
                        className="object-cover rounded border"
                      />
                    </div>
                    <h4 className="font-medium text-sm mb-1">{screenshot.title}</h4>
                    <p className="text-xs text-muted-foreground">{screenshot.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Documentation Column */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="code" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="code" className="flex items-center space-x-2">
                  <Code className="h-4 w-4" />
                  <span>Terraform Code</span>
                </TabsTrigger>
                <TabsTrigger value="steps" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Steps</span>
                </TabsTrigger>
                <TabsTrigger value="observations" className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Observations</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="code" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Terminal className="h-5 w-5" />
                      <span>Terraform Configuration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{task.terraform_code}</code>
                    </pre>
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center space-x-2 text-blue-800 dark:text-blue-200">
                        <ExternalLink className="h-4 w-4" />
                        <span className="font-medium">Pro Tip</span>
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        Always run <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">terraform plan</code>{" "}
                        before applying changes to review what will be created or modified.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="steps" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5" />
                      <span>Execution Steps</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4">
                      {task.steps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-4">
                          <div
                            className={`bg-gradient-to-r ${task.color} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0`}
                          >
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <span className="text-foreground">{step}</span>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="observations" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5" />
                      <span>Key Observations & Results</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {task.observations.map((observation, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="bg-green-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                          <span className="text-foreground">{observation}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <div>
            {taskId > 1 && (
              <Link href={`/task/${taskId - 1}`}>
                <Button variant="outline" className="flex items-center space-x-2 bg-background hover:bg-muted">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous Task</span>
                </Button>
              </Link>
            )}
          </div>
          <div>
            {taskId < 4 && (
              <Link href={`/task/${taskId + 1}`}>
                <Button
                  className={`bg-gradient-to-r ${task.color} hover:opacity-90 flex items-center space-x-2 shadow-lg`}
                >
                  <span>Next Task</span>
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
