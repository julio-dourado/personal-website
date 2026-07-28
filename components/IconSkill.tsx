"use client";

import * as icons from "simple-icons";
import {
  Database,
  Cloud,
  Code2,
  Terminal,
  BarChart3,
  Layers,
  Box,
  Workflow,
  HardDrive,
  Boxes,
} from "lucide-react";

interface IconSkillProps {
  name: string;
  iconKey?: string;
  className?: string;
}

const fallbackMap: Record<string, React.ReactNode> = {
  SQL: <Database className="h-6 w-6" />,
  "Delta Lake": <Layers className="h-6 w-6" />,
  "Unity Catalog": <Box className="h-6 w-6" />,
  "Apache Airflow": <Workflow className="h-6 w-6" />,
  Pandas: <BarChart3 className="h-6 w-6" />,
  Streamlit: <Terminal className="h-6 w-6" />,
  FastAPI: <Cloud className="h-6 w-6" />,
  "AWS S3": <HardDrive className="h-6 w-6" />,
  "AWS Glue": <Workflow className="h-6 w-6" />,
  "Amazon Redshift": <Database className="h-6 w-6" />,
  "Amazon MWAA": <Boxes className="h-6 w-6" />,
  Azure: <Cloud className="h-6 w-6" />,
  "Power BI": <BarChart3 className="h-6 w-6" />,
};

export function IconSkill({ name, iconKey, className = "" }: IconSkillProps) {
  const key = iconKey || name.toLowerCase().replace(/\s+/g, "").replace(/\./g, "");
  const simpleIconKey = `si${key.charAt(0).toUpperCase()}${key.slice(1)}` as keyof typeof icons;
  const icon = icons[simpleIconKey];

  if (icon) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
      >
        <path d={icon.path} />
      </svg>
    );
  }

  return (
    <span className={className}>
      {fallbackMap[name] || <Code2 className="h-6 w-6" />}
    </span>
  );
}
