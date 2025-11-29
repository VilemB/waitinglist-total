// open-next.config.ts - configured without R2 incremental cache
import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

export default defineCloudflareConfig({
	// No incremental cache configured (R2 not needed)
});
