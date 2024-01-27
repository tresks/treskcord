import { Channel, Emoji, Guild, Member, Role, Sticker } from "../entities";

export interface IGuildDTO {
	application_command_counts?: { 1: number; 2: number; 3: number }; // ????????????
	channels: Channel[];
	data_mode: string; // wtf is this shit
	emojis: Emoji[];
	guild_scheduled_events: any[];
	id: string;
	large: boolean;
	lazy: boolean;
	member_count: number;
	members: Member[];
	premium_subscription_count: number;
	properties: {
		name: string;
		description?: string | null;
		icon?: string | null;
		splash?: string | null;
		banner?: string | null;
		features: string[];
		preferred_locale?: string | null;
		owner_id?: string | null;
		application_id?: string | null;
		afk_channel_id?: string | null;
		afk_timeout: number;
		system_channel_id?: string | null;
		verification_level: number;
		explicit_content_filter: number;
		default_message_notifications: number;
		mfa_level: number;
		vanity_url_code?: string | null;
		premium_tier: number;
		premium_progress_bar_enabled: boolean;
		system_channel_flags: number;
		discovery_splash?: string | null;
		rules_channel_id?: string | null;
		public_updates_channel_id?: string | null;
		max_stage_video_channel_users: number;
		max_video_channel_users: number;
		max_members: number;
		nsfw_level: number;
		hub_type?: any | null; // ????
	};
	roles: Role[];
	stage_instances: any[];
	stickers: Sticker[];
	threads: any[];
	version: string;
}

export class GuildDTO implements IGuildDTO {
	application_command_counts?: { 1: number; 2: number; 3: number }; // ????????????
	channels: Channel[];
	data_mode: string; // wtf is this shit
	emojis: Emoji[];
	guild_scheduled_events: any[];
	id: string;
	large: boolean;
	lazy: boolean;
	member_count: number;
	members: Member[];
	premium_subscription_count: number;
	properties: {
		name: string;
		description?: string | null;
		icon?: string | null;
		splash?: string | null;
		banner?: string | null;
		features: string[];
		preferred_locale?: string | null;
		owner_id?: string | null;
		application_id?: string | null;
		afk_channel_id?: string | null;
		afk_timeout: number;
		system_channel_id?: string | null;
		verification_level: number;
		explicit_content_filter: number;
		default_message_notifications: number;
		mfa_level: number;
		vanity_url_code?: string | null;
		premium_tier: number;
		premium_progress_bar_enabled: boolean;
		system_channel_flags: number;
		discovery_splash?: string | null;
		rules_channel_id?: string | null;
		public_updates_channel_id?: string | null;
		max_stage_video_channel_users: number;
		max_video_channel_users: number;
		max_members: number;
		nsfw_level: number;
		hub_type?: any | null; // ????
	};
	roles: Role[];
	stage_instances: any[];
	stickers: Sticker[];
	threads: any[];
	version: string;

	constructor(guild: Guild) {
		this.application_command_counts = {
			1: 5,
			2: 2,
			3: 2
		}; // ?????
		this.channels = guild.channels;
		this.data_mode = "full";
		this.emojis = guild.emojis;
		this.guild_scheduled_events = [];
		this.id = guild.id;
		this.large = guild.large;
		this.lazy = true; // ??????????
		this.member_count = guild.member_count;
		this.members = guild.members;
		this.premium_subscription_count = guild.premium_subscription_count;
		this.properties = {
			name: guild.name,
			description: guild.description,
			icon: guild.icon,
			splash: guild.splash,
			banner: guild.banner,
			features: guild.features,
			preferred_locale: guild.preferred_locale,
			owner_id: guild.owner_id,
			application_id: null, // ?????
			afk_channel_id: guild.afk_channel_id,
			afk_timeout: guild.afk_timeout,
			system_channel_id: guild.system_channel_id,
			verification_level: guild.verification_level,
			explicit_content_filter: guild.explicit_content_filter,
			default_message_notifications: guild.default_message_notifications,
			mfa_level: guild.mfa_level,
			vanity_url_code: null, // ?????
			premium_tier: guild.premium_tier,
			premium_progress_bar_enabled: guild.premium_progress_bar_enabled,
			system_channel_flags: guild.system_channel_flags,
			discovery_splash: guild.discovery_splash,
			rules_channel_id: guild.rules_channel_id,
			public_updates_channel_id: guild.public_updates_channel_id,
			max_stage_video_channel_users: guild.max_stage_video_channel_users,
			max_video_channel_users: guild.max_video_channel_users,
			max_members: guild.max_members,
			nsfw_level: guild.nsfw_level,
			hub_type: null
		};
		this.roles = guild.roles;
		this.stage_instances = [];
		this.stickers = guild.stickers;
		this.threads = [];
		this.version = "1"; // ??????
	}

	toJSON() {
		return this as IGuildDTO;
	}
}
