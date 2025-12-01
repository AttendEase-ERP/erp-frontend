import SettingsLayout from "@/components/settings/SettingsLayout";
import ProfileSection from "@/components/settings/ProfileSection";
import DangerZone from "@/components/settings/DangerZone";

export default function SettingsPage() {
  return (
    <SettingsLayout>
      <ProfileSection />
      <DangerZone />
    </SettingsLayout>
  );
}
