import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setGeminiApiKey } from "@/lib/cookies";
import { X } from "lucide-react";
import { useState } from "react";

interface SettingsSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function SettingsSidebar({ open, onClose }: SettingsSidebarProps) {
  const [apiKey, setApiKey] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) return;

    setIsSaving(true);

    // Store the API key in a cookie (7 days expiry)
    setGeminiApiKey(apiKey);

    // Show success state
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);

      // Reset saved state after 2 seconds
      setTimeout(() => {
        setSaved(false);
      }, 2000);
    }, 500);
  };

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-medium">Settings</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="gemini-api-key">Set up your Gemini API key</Label>
          <Input
            id="gemini-api-key"
            type="password"
            placeholder="Enter your Gemini API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Your API key is stored locally in your browser cookies and is never
            sent to our servers.
          </p>
        </div>

        <Button
          onClick={handleSaveApiKey}
          disabled={!apiKey.trim() || isSaving}
          className="w-full"
        >
          {isSaving ? "Saving..." : saved ? "Saved!" : "Save API Key"}
        </Button>
      </div>
    </div>
  );
}
