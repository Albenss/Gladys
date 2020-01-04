const { expect } = require('chai');

const models = require('../../../../services/sonoff/models');
const { DEVICE_FEATURE_CATEGORIES, DEVICE_FEATURE_TYPES } = require('../../../../utils/constants');

const modelId = 10;

describe('SonoffService - Model - Touch', () => {
  it('get model for Sonoff Touch', () => {
    const model = models[modelId].getModel();

    expect(model).to.eq('sonoff-touch');
  });

  it('get label for Sonoff Touch', () => {
    const label = models[modelId].getLabel();

    expect(label).to.eq('Sonoff Touch');
  });

  it('get features for Sonoff Touch', () => {
    const features = models[modelId].getFeatures('device_external_id');

    expect(features).to.deep.eq([
      {
        name: 'Switch',
        external_id: 'device_external_id:switch:binary',
        selector: 'device-external-id-switch-binary',
        category: DEVICE_FEATURE_CATEGORIES.SWITCH,
        type: DEVICE_FEATURE_TYPES.SWITCH.BINARY,
        read_only: false,
        has_feedback: true,
        min: 0,
        max: 1,
      },
    ]);
  });
});