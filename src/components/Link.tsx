import { Link } from "@heroui/react"

interface LinkProps {
    href: string;
    content: string;
}

function CampusHubLink({ href, content }: LinkProps) {
  return (
    <Link className="text-linkPink" href={href}>
        {content}
    </Link>
  )
}

export default CampusHubLink
