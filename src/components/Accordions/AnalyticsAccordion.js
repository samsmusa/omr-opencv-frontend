import { Accordion, Tabs } from "flowbite-react";
import React from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Acquisition from "../Analytics/dashboard/Acquisition";
import Profile from "../Analytics/profile/Profile";
import Settings from "../Analytics/settings/Settings";

export default function AnalyticsAccordion() {
  return (
    <Tabs.Group
      className="bg-gray-100 rounded-lg"
      aria-label="Tabs with icons"
      style="underline"
    >
      <Tabs.Item
        active={true}
        className="bg-red-300"
        title="Dashboard"
        icon={MdDashboard}
      >
        <Acquisition />
      </Tabs.Item>
      <Tabs.Item title="Profile" icon={HiUserCircle}>
        <Profile />
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
        <Settings />
      </Tabs.Item>
      <Tabs.Item title="Users" icon={HiClipboardList}>
        Contacts content
      </Tabs.Item>
      <Tabs.Item disabled={true} title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs.Group>
  );
}
