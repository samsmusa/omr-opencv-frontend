import { Tabs } from "flowbite-react";
import React from "react";
import SettingsIntegration from "./SettingsIntegration";
import SettingsBilling from "./SettingsBilling";
import SettingsSecurity from "./SettingsSecurity";

export default function Settings() {
  return (
    <Tabs.Group aria-label="Full width tabs" style="fullWidth">
      <Tabs.Item title="Security">
        <SettingsSecurity />
      </Tabs.Item>
      <Tabs.Item active={true} title="Integrations">
        <SettingsIntegration />
      </Tabs.Item>
      <Tabs.Item title="Billing">
        <SettingsBilling />
      </Tabs.Item>
    </Tabs.Group>
  );
}
