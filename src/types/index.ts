/* eslint-disable import/prefer-default-export */
export enum UpdateStrategy {
    DATA = 'DATA',
    REPLACE = 'REPLACE',
    UPDATE = 'UPDATE'
}

export interface IntegrationOptions {
    updateStrategy?: UpdateStrategy;
}
