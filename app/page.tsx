import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, FileText, User, GraduationCap, Globe, Database, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ServiceLogo } from "@/components/service-logo"

export default function HomePage() {
  const tasks = [
    {
      id: 1,
      title: "EC2 Instance Creation",
      description: "Create an EC2 instance using Terraform with custom AMI and security configurations",
      icon: <Server className="h-6 w-6" />,
      status: "Completed",
      difficulty: "Beginner",
      color: "from-blue-500 to-blue-600",
      subtasks: ["Terraform Plan Analysis", "Terraform Apply", "Terraform Destroy"],
    },
    {
      id: 2,
      title: "Secure Ubuntu EC2 Launch",
      description: "Launch a secure Ubuntu EC2 instance with SSH and HTTPS access using Terraform",
      icon: <Shield className="h-6 w-6" />,
      status: "Completed",
      difficulty: "Intermediate",
      color: "from-green-500 to-green-600",
      subtasks: ["Security Group Configuration", "Ubuntu AMI Selection", "SSH Key Management"],
    },
    {
      id: 3,
      title: "AWS Infrastructure Showcase",
      description: "Complete AWS infrastructure demonstration with multiple services and Vercel hosting",
      icon: <Cloud className="h-6 w-6" />,
      status: "Completed",
      difficulty: "Advanced",
      color: "from-purple-500 to-purple-600",
      subtasks: ["Multi-Service Deployment", "Screenshot Documentation", "Vercel Integration"],
    },
    {
      id: 4,
      title: "Static Website on S3",
      description: "Host ByteWave Solutions static website on AWS S3 with Terraform automation",
      icon: <Globe className="h-6 w-6" />,
      status: "Completed",
      difficulty: "Beginner",
      color: "from-orange-500 to-orange-600",
      subtasks: ["S3 Bucket Configuration", "Static Website Hosting", "Public Access Policy"],
    },
  ]

  const stats = [
    { label: "Tasks Completed", value: "4", icon: <FileText className="h-5 w-5" />, color: "text-blue-600" },
    { label: "AWS Services", value: "15+", icon: <Cloud className="h-5 w-5" />, color: "text-green-600" },
    { label: "Resources Managed", value: "25+", icon: <Database className="h-5 w-5" />, color: "text-purple-600" },
    { label: "Success Rate", value: "100%", icon: <Zap className="h-5 w-5" />, color: "text-orange-600" },
  ]

  const technologies = [
    { name: "Amazon Web Services", color: "bg-orange-100 dark:bg-orange-900/20" },
    { name: "Terraform", color: "bg-purple-100 dark:bg-purple-900/20" },
    { name: "Amazon EC2", color: "bg-blue-100 dark:bg-blue-900/20" },
    { name: "Security Groups", color: "bg-green-100 dark:bg-green-900/20" },
    { name: "AWS Lambda", color: "bg-yellow-100 dark:bg-yellow-900/20" },
    { name: "Amazon S3", color: "bg-red-100 dark:bg-red-900/20" },
    { name: "Amazon VPC", color: "bg-indigo-100 dark:bg-indigo-900/20" },
    { name: "AWS RDS", color: "bg-pink-100 dark:bg-pink-900/20" },
    { name: "CloudWatch", color: "bg-teal-100 dark:bg-teal-900/20" },
    { name: "CloudTrail", color: "bg-cyan-100 dark:bg-cyan-900/20" },
    { name: "AWS CDK", color: "bg-violet-100 dark:bg-violet-900/20" },
    { name: "Vercel", color: "bg-gray-100 dark:bg-gray-900/20" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  AWS Terraform Documentation
                </h1>
                <p className="text-muted-foreground">Infrastructure as Code with Terraform on AWS</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="text-right">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span className="font-medium">Gourav Thakur</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                  <GraduationCap className="h-4 w-4" />
                  <span>Roll No: 60 | Section: 07</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200 text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Complete AWS Infrastructure Journey
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-orange-500 dark:from-white dark:via-orange-400 dark:to-orange-300 bg-clip-text text-transparent mb-6">
            Master Terraform on AWS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive documentation covering the complete lifecycle of AWS infrastructure management using
            Terraform, from basic EC2 instances to complex multi-service architectures with detailed analysis and
            real-world implementations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className={`${stat.color}`}>{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {tasks.map((task) => (
            <Card
              key={task.id}
              className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`bg-gradient-to-r ${task.color} p-3 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      {task.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{task.title}</CardTitle>
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                        >
                          {task.status}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-blue-600 border-blue-200 dark:text-blue-400 dark:border-blue-800"
                        >
                          {task.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {task.description}
                </CardDescription>

                {/* Subtasks */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Components:</h4>
                  <div className="space-y-1">
                    {task.subtasks.map((subtask, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span className="text-muted-foreground">{subtask}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={`/task/${task.id}`}>
                  <Button
                    className={`w-full bg-gradient-to-r ${task.color} hover:opacity-90 shadow-lg hover:shadow-xl transition-all`}
                  >
                    Explore Task Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-card to-muted/20 rounded-2xl p-8 shadow-lg border mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Technology Stack & AWS Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`${tech.color} p-4 rounded-xl mb-3 group-hover:scale-105 transition-transform`}>
                  <div className="mx-auto">
                    <ServiceLogo service={tech.name} className="h-10 w-10" />
                  </div>
                </div>
                <div className="font-medium text-sm text-center">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-900/10 dark:to-blue-900/10 rounded-2xl p-8 border">
          <h3 className="text-2xl font-bold text-center mb-6">Learning Journey</h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-1 text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2">Basic Infrastructure</h4>
              <p className="text-sm text-muted-foreground">
                EC2 instances, security groups, and basic Terraform operations
              </p>
            </div>
            <div className="hidden md:block text-2xl text-muted-foreground">→</div>
            <div className="flex-1 text-center">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2">Security & Networking</h4>
              <p className="text-sm text-muted-foreground">Advanced security configurations and network architecture</p>
            </div>
            <div className="hidden md:block text-2xl text-muted-foreground">→</div>
            <div className="flex-1 text-center">
              <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2">Multi-Service Architecture</h4>
              <p className="text-sm text-muted-foreground">
                Complex deployments with multiple AWS services integration
              </p>
            </div>
            <div className="hidden md:block text-2xl text-muted-foreground">→</div>
            <div className="flex-1 text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                4
              </div>
              <h4 className="font-semibold mb-2">Web Hosting & CDN</h4>
              <p className="text-sm text-muted-foreground">Static website hosting and content delivery optimization</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Cloud className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-semibold">AWS Terraform Documentation</span>
            </div>
            <p className="text-muted-foreground mb-4">
              &copy; 2024 AWS Terraform Documentation - Gourav Thakur| Roll No: 60 | Section: 07
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <span>Infrastructure as Code</span>
              <span>•</span>
              <span>Cloud Computing</span>
              <span>•</span>
              <span>DevOps Excellence</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
