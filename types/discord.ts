export interface DiscordData {
  data: {
    kv: Record<string, unknown>;
    discord_user: {
      id: string;
      username: string;
      avatar: string;
      discriminator: string;
      clan: string | null;
      avatar_decoration_data: unknown | null;
      bot: boolean;
      global_name: string;
      primary_guild: string | null;
      display_name: string;
      public_flags: number;
    };
    activities: {
      id: string;
      name: string;
      type: number;
      state: string;
      created_at: number;
    }[];
    discord_status: "online" | "idle" | "dnd" | "offline";
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
    spotify: unknown | null;
  };
  success: boolean;
}
