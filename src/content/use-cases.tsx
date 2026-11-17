import Link from "next/link";
import { images } from "./images";
import type { ImageAsset, Rich } from "./types";

/**
 * Example workflows for the kinds of people Glisten is built for.
 * These are illustrations, not customer stories: never add names, logos or
 * results here unless they come from a real, consenting customer.
 */
export type UseCase = {
  slug: string;
  title: string;
  description: string;
  linkLabel: string;
  image: ImageAsset;
  metaDescription: string;
  body: Rich;
};

export const useCases: UseCase[] = [
  {
    slug: "indie-developers",
    title: "Indie developers",
    description:
      "You can ship features fast, but nobody reviews your UI. Glisten gives you a design pass before you launch.",
    linkLabel: "See the indie developer workflow",
    image: images.useCaseIndie,
    metaDescription:
      "How an indie developer can use Glisten AI to review and polish a UI before launch.",
    body: (
      <>
        <h2>The problem</h2>
        <p>
          Solo builders rarely have a designer on hand. Pages ship with uneven
          spacing, low-contrast text and buttons that compete for attention, and
          nobody points it out until users bounce.
        </p>
        <h2>The workflow</h2>
        <ol>
          <li>
            Paste the URL of your staging site. Glisten captures it at desktop
            and mobile widths.
          </li>
          <li>
            Read the critique: every issue is pinned to the spot where it
            happens, with a severity and a suggested fix, plus an overall score.
          </li>
          <li>
            Send the worst offenders to the generator with <em>Fix with AI</em>{" "}
            and get a revised React + Tailwind component to compare against
            yours.
          </li>
          <li>
            Ship, then run the critique again. The score history shows whether
            the changes helped.
          </li>
        </ol>
        <h2>Which plan fits</h2>
        <p>
          If you already pay for a Claude or OpenAI API key, the{" "}
          <Link href="/pricing">BYOK plan</Link> is free. Otherwise Pro will
          include 200 credits a month (one critique costs one credit).
        </p>
      </>
    ),
  },
  {
    slug: "agencies",
    title: "Agencies",
    description:
      "Run a consistent design review on every client page before it goes out, and share the results with the team.",
    linkLabel: "See the agency workflow",
    image: images.useCaseAgency,
    metaDescription:
      "How a small agency can use Glisten AI for consistent design reviews across client projects.",
    body: (
      <>
        <h2>The problem</h2>
        <p>
          Design reviews at small agencies depend on who has time that week. The
          same issues (inconsistent spacing, unreadable contrast, weak
          hierarchy) slip through on one project and get caught on another.
        </p>
        <h2>The workflow</h2>
        <ol>
          <li>Create a project per client and upload each page or screen.</li>
          <li>
            Use the critique as a checklist in review: pins make it easy to
            point at the exact problem.
          </li>
          <li>
            Generate quick alternatives for a section when a client asks
            &ldquo;what would it look like if&hellip;&rdquo;, then hand the code
            to a developer to refine.
          </li>
          <li>
            Keep version history per project, so you can show a client how a
            page improved between rounds.
          </li>
        </ol>
        <h2>Which plan fits</h2>
        <p>
          The <Link href="/pricing">Team plan</Link> will pool credits across
          seats and share projects across your workspace.
        </p>
      </>
    ),
  },
  {
    slug: "design-students",
    title: "Design students",
    description:
      "Get specific, explained feedback on your work between critiques, and learn why a layout feels off.",
    linkLabel: "See the student workflow",
    image: images.useCaseStudent,
    metaDescription:
      "How a design student can use Glisten AI for explained feedback on UI work.",
    body: (
      <>
        <h2>The problem</h2>
        <p>
          Class critiques happen once a week. In between, it&rsquo;s hard to
          tell whether a layout feels off because of spacing, type scale or
          contrast, and generic feedback like &ldquo;make it pop&rdquo;
          doesn&rsquo;t help.
        </p>
        <h2>The workflow</h2>
        <ol>
          <li>Export a frame from your design tool and upload the image.</li>
          <li>
            Read each pinned issue: it names the principle involved (alignment,
            hierarchy, accessibility) and explains the fix, so you learn the
            reason as well as the change.
          </li>
          <li>Revise, upload again and compare the scores across versions.</li>
        </ol>
        <p>
          Glisten is a second opinion, not a replacement for your instructors or
          classmates. Treat its suggestions as prompts to think about, not
          rules.
        </p>
        <h2>Which plan fits</h2>
        <p>
          <Link href="/pricing">BYOK</Link> keeps costs to what you spend on
          your own API key.
        </p>
      </>
    ),
  },
];

export function getUseCase(slug: string) {
  return useCases.find((useCase) => useCase.slug === slug);
}
