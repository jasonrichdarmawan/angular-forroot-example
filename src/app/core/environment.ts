import { InjectionToken } from "@angular/core"

export interface Environment {
    production: boolean
}

/**
 * if uuid is different, then singleton is not guaranteed.
 */
export const ENVIRONMENT_UUID_TOKEN = new InjectionToken("environment_uuid");

export const ENVIRONMENT_TOKEN = new InjectionToken("environment");