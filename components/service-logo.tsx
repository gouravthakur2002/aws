import { Cloud, Database, Shield, Globe, Zap, Server, Code, Settings, Lock, Eye, FileText, Layers } from "lucide-react"

interface ServiceLogoProps {
  service: string
  className?: string
}

export function ServiceLogo({ service, className = "h-8 w-8" }: ServiceLogoProps) {
  const getServiceIcon = (serviceName: string) => {
    const name = serviceName.toLowerCase()

    if (name.includes("aws") || name.includes("amazon")) {
      return (
        <div className="bg-orange-500 text-white p-2 rounded-lg">
          <Cloud className={className} />
        </div>
      )
    }
    if (name.includes("terraform")) {
      return (
        <div className="bg-purple-600 text-white p-2 rounded-lg">
          <Code className={className} />
        </div>
      )
    }
    if (name.includes("ec2")) {
      return (
        <div className="bg-orange-600 text-white p-2 rounded-lg">
          <Server className={className} />
        </div>
      )
    }
    if (name.includes("s3")) {
      return (
        <div className="bg-green-600 text-white p-2 rounded-lg">
          <Database className={className} />
        </div>
      )
    }
    if (name.includes("lambda")) {
      return (
        <div className="bg-orange-500 text-white p-2 rounded-lg">
          <Zap className={className} />
        </div>
      )
    }
    if (name.includes("rds")) {
      return (
        <div className="bg-blue-600 text-white p-2 rounded-lg">
          <Database className={className} />
        </div>
      )
    }
    if (name.includes("vpc")) {
      return (
        <div className="bg-purple-500 text-white p-2 rounded-lg">
          <Shield className={className} />
        </div>
      )
    }
    if (name.includes("security")) {
      return (
        <div className="bg-red-600 text-white p-2 rounded-lg">
          <Lock className={className} />
        </div>
      )
    }
    if (name.includes("cloudwatch")) {
      return (
        <div className="bg-blue-500 text-white p-2 rounded-lg">
          <Eye className={className} />
        </div>
      )
    }
    if (name.includes("cloudtrail")) {
      return (
        <div className="bg-green-500 text-white p-2 rounded-lg">
          <FileText className={className} />
        </div>
      )
    }
    if (name.includes("vercel")) {
      return (
        <div className="bg-black text-white p-2 rounded-lg">
          <Globe className={className} />
        </div>
      )
    }
    if (name.includes("cdk")) {
      return (
        <div className="bg-orange-400 text-white p-2 rounded-lg">
          <Layers className={className} />
        </div>
      )
    }

    // Default fallback
    return (
      <div className="bg-gray-500 text-white p-2 rounded-lg">
        <Settings className={className} />
      </div>
    )
  }

  return getServiceIcon(service)
}
