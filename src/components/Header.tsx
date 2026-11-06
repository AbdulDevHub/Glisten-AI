import NavBar from "@/components/NavBar";
import { site } from "@/content/site";

export default function Header() {
  return (
    <header>
      <NavBar navigation={site.navigation} />
    </header>
  );
}
