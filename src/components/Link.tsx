import { Link } from "@nextui-org/react"

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
