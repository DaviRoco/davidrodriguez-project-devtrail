/**
 * RecordsController module.
 *
 * This module provides functions to interact with the records service and retrieve experience and educational records.
 *
 * @module RecordsController
 */

import { RecordsService } from '../services/RecordsService';
import RecordsRepository from '../repositories/RecordsRepository';
import ResponseData from '../constants/api/ResponseData';
import ExperienceRecords from '../entities/ExperienceRecords';
import EducationalRecords from '../entities/EducationalRecords';
import ApiResponseBuilder from '../utils/ApiResponseBuilder';

/**
 * Retrieves all experience records.
 *
 * @returns {Promise<ResponseData<ExperienceRecords[] | string>>}
 * - A promise that resolves to a ResponseData object containing either the experience records data or an error message.
 *
 * @throws {Error} If there is an issue retrieving the experience records.
 */
export const getAllExperienceRecords = async (): Promise<
  ResponseData<ExperienceRecords[] | string>
> => {
  try {
    const recordsRepository = new RecordsRepository('experience');
    const recordsService = new RecordsService(recordsRepository, 'experience');
    const records =
      (await recordsService.getAllExperienceRecords()) as ExperienceRecords[];
    if (!records) {
      return ApiResponseBuilder.createSuccessResponse(
        'No Experience records fetched',
      );
    }
    return ApiResponseBuilder.createSuccessResponse(records);
  } catch (error) {
    return ApiResponseBuilder.createErrorResponse(
      error as Error,
      'Failed to retrieve experience records',
    );
  }
};

/**
 * Retrieves all educational records.
 *
 * @returns {Promise<ResponseData<EducationalRecords[] | string>>}
 * - A promise that resolves to a ResponseData object containing either the educational records data or an error message.
 *
 * @throws {Error} If there is an issue retrieving the educational records.
 */
export const getAllEducationalRecords = async (): Promise<
  ResponseData<EducationalRecords[] | string>
> => {
  try {
    const recordsRepository = new RecordsRepository('education');
    const recordsService = new RecordsService(recordsRepository, 'education');
    const records =
      (await recordsService.getAllEducationalRecords()) as EducationalRecords[];
    if (!records) {
      return ApiResponseBuilder.createSuccessResponse(
        'No Educational records fetched',
      );
    }
    return ApiResponseBuilder.createSuccessResponse(records);
  } catch (error) {
    return ApiResponseBuilder.createErrorResponse(
      error as Error,
      'Failed to retrieve educational records',
    );
  }
};

/**
 * Retrieves an experience record by ID.
 *
 * @param {string} id - The ID of the experience record to retrieve.
 * @returns {Promise<ResponseData<ExperienceRecords | string>>}
 * - A promise that resolves to a ResponseData object containing either the experience record data or an error message.
 *
 * @throws {Error} If there is an issue retrieving the experience record.
 */
export const getExperienceRecordByID = async (
  id: string,
): Promise<ResponseData<ExperienceRecords | string>> => {
  const validationError = ApiResponseBuilder.validateString(id, 'ID');
  if (validationError) {
    return validationError;
  }

  try {
    const recordsRepository = new RecordsRepository('experience');
    const recordsService = new RecordsService(recordsRepository, 'experience');
    const record = (await recordsService.getExperienceRecordByID(
      id,
    )) as ExperienceRecords;
    if (record) {
      return ApiResponseBuilder.createSuccessResponse(record);
    } else {
      return ApiResponseBuilder.createSuccessResponse(
        `No Experience record fetched with ID: ${id}`,
      );
    }
  } catch (error) {
    return ApiResponseBuilder.createErrorResponse(
      error as Error,
      `Failed to retrieve experience record with ID: ${id}`,
    );
  }
};

/**
 * Retrieves an educational record by ID.
 *
 * @param {string} id - The ID of the educational record to retrieve.
 * @returns {Promise<ResponseData<EducationalRecords | string>>}
 * - A promise that resolves to a ResponseData object containing either the educational record data or an error message.
 *
 * @throws {Error} If there is an issue retrieving the educational record.
 */
export const getEducationalRecordByID = async (
  id: string,
): Promise<ResponseData<EducationalRecords | string>> => {
  const validationError = ApiResponseBuilder.validateString(id, 'ID');
  if (validationError) {
    return validationError;
  }

  try {
    const recordsRepository = new RecordsRepository('education');
    const recordsService = new RecordsService(recordsRepository, 'education');
    const record = (await recordsService.getEducationalRecordByID(
      id,
    )) as EducationalRecords;
    if (record) {
      return ApiResponseBuilder.createSuccessResponse(record);
    } else {
      return ApiResponseBuilder.createSuccessResponse(
        `No Educational record fetched with ID: ${id}`,
      );
    }
  } catch (error) {
    return ApiResponseBuilder.createErrorResponse(
      error as Error,
      `Failed to retrieve educational record with ID: ${id}`,
    );
  }
};

const RecordsController = {
  getAllExperienceRecords,
  getAllEducationalRecords,
  getExperienceRecordByID,
  getEducationalRecordByID,
};

export default RecordsController;
