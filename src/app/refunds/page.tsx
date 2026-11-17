import LegalPage, { legalMetadata } from "@/components/LegalPage";

export const metadata = legalMetadata("refunds");

export default function RefundsPage() {
  return <LegalPage slug="refunds" />;
}
