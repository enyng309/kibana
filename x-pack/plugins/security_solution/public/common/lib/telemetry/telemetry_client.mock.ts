/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { TelemetryClientStart } from './types';

export const createTelemetryClientMock = (): jest.Mocked<TelemetryClientStart> => ({
  reportAlertsGroupingChanged: jest.fn(),
  reportAlertsGroupingToggled: jest.fn(),
  reportAlertsGroupingTakeAction: jest.fn(),
  reportEntityDetailsClicked: jest.fn(),
  reportEntityAlertsClicked: jest.fn(),
  reportEntityRiskFiltered: jest.fn(),
});
