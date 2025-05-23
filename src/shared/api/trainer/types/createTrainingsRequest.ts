/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Trainer API
 * OpenAPI spec version: 1.0.0
 */
import type { TrainingDto } from "./trainingDto";

export interface CreateTrainingsRequest {
  /** ID of the trainer creating the trainings */
  trainerUserId?: string;
  /** Array of trainings to create */
  trainings: TrainingDto[];
}
