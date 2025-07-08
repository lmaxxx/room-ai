import {createAvatar} from "@dicebear/core";
import {botttsNeutral, initials} from "@dicebear/collection";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";

type Props = {
  seed: string
  className?: string
  variant: "botttsNeutral" | "initials"
}

export default function GeneratedAvatar({seed, className, variant}: Props) {
  let avatar;

  if (variant === "botttsNeutral") {
    avatar = createAvatar(botttsNeutral, {seed})
  } else {
    avatar = createAvatar(initials, {
      seed,
      fontWeight: 500,
      fontSize: 42
    })
  }

  return (
    <Avatar className={className}>
      <AvatarImage src={avatar.toDataUri()} alt={"avatar"}/>
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  )
}
