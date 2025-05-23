/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Trainer API
 * OpenAPI spec version: 1.0.0
 */
import type { CreateSubscriptionsSubscriptionsItemType } from "./createSubscriptionsSubscriptionsItemType";

export type CreateSubscriptionsSubscriptionsItem = {
  name: string;
  maxTrainings?: number;
  maxDays?: number;
  price?: number;
  notes?: string;
  /** Type of the subscription */
  type: CreateSubscriptionsSubscriptionsItemType;
  isPublic?: boolean;
  groupIds?: string[];
};
