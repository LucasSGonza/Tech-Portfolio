import emailIcon from "@/assets/icons/social/email.svg";
import linkedinIcon from "@/assets/icons/social/linkedin.svg";
import githubIcon from "@/assets/icons/tech/github.svg";
import type { SocialLink } from "@/types";

/**
 * Dados públicos do autor, exibidos na Home. O e-mail e o LinkedIn são publicados
 * a pedido do autor. A idade é fixa e precisa ser atualizada a cada aniversário.
 */
export const PROFILE = {
  name: "Lucas Silva Gonçalves",
  age: 23,
  linkedinUrl: "https://www.linkedin.com/in/lucas-silvagoncalves/",
  githubUrl: "https://github.com/LucasSGonza",
  email: "lucassilva.goncalves@hotmail.com",
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  { id: "linkedin", href: PROFILE.linkedinUrl, icon: linkedinIcon, isExternal: true },
  { id: "github", href: PROFILE.githubUrl, icon: githubIcon, isExternal: true },
  { id: "email", href: `mailto:${PROFILE.email}`, icon: emailIcon, isExternal: false },
];
